'use client';

import { useState, useEffect } from 'react';
import { useLokalLeads } from '@/lib/hooks/useLokalLeads';

interface CalculatorProps {
  type: 'heating' | 'bathroom' | 'maintenance';
  identName?: string; // Optional LokalLeads integration identifier
  useApi?: boolean; // Enable/disable API integration
}

interface FormData {
  area: string;
  currentHeating: string;
  insulationYear: string;
  roomSize: string;
  bathroomType: string;
  equipment: string[];
  systemAge: string;
  systemType: string;
  lastMaintenance: string;
  // Contact fields for callback
  name: string;
  email: string;
  phone: string;
}

export default function Calculator({ type, identName, useApi = false }: CalculatorProps) {
  const [formData, setFormData] = useState<FormData>({
    // Heating calculator
    area: '',
    currentHeating: '',
    insulationYear: '',
    
    // Bathroom calculator
    roomSize: '',
    bathroomType: '',
    equipment: [],
    
    // Maintenance calculator
    systemAge: '',
    systemType: '',
    lastMaintenance: '',
    
    // Contact
    name: '',
    email: '',
    phone: ''
  });

  const [result, setResult] = useState<number | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  
  // LokalLeads API Integration
  const {
    isLoading: apiLoading,
    error: apiError,
    calculationResult,
    initializeCalculator,
    calculate,
    requestCallback,
  } = useLokalLeads({
    onError: (err) => console.error('LokalLeads API Error:', err),
  });

  // Initialize API if enabled
  useEffect(() => {
    if (useApi && identName) {
      initializeCalculator(identName);
    }
  }, [useApi, identName, initializeCalculator]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    setFormData(prev => ({
      ...prev,
      equipment: isChecked 
        ? [...prev.equipment, value]
        : prev.equipment.filter(item => item !== value)
    }));
  };

  const calculateHeating = () => {
    const area = parseFloat(formData.area);
    const basePrice = 15000;
    const pricePerSqm = area * 150;
    const total = basePrice + pricePerSqm;
    
    setResult(total);
    setShowDetails(true);
  };

  const calculateBathroom = () => {
    const size = parseFloat(formData.roomSize);
    const basePrice = 8000;
    const pricePerSqm = size * 1200;
    const equipmentPrice = formData.equipment.length * 500;
    const total = basePrice + pricePerSqm + equipmentPrice;
    
    setResult(total);
    setShowDetails(true);
  };

  const calculateMaintenance = () => {
    const age = parseFloat(formData.systemAge);
    const basePrice = 150;
    const ageMultiplier = age > 10 ? 1.5 : 1.2;
    const total = basePrice * ageMultiplier;
    
    setResult(total);
    setShowDetails(true);
  };

  const handleCalculate = async () => {
    // If API is enabled, use LokalLeads API
    if (useApi && identName) {
      const inputs = getApiInputs();
      const apiResult = await calculate(inputs);
      
      if (apiResult?.price) {
        setResult(apiResult.price);
        setShowDetails(true);
        return;
      }
    }
    
    // Fallback to local calculation
    switch (type) {
      case 'heating':
        calculateHeating();
        break;
      case 'bathroom':
        calculateBathroom();
        break;
      case 'maintenance':
        calculateMaintenance();
        break;
    }
  };

  // Convert form data to API inputs
  const getApiInputs = () => {
    const inputs: { key: string; value: string | number }[] = [];
    
    if (type === 'heating') {
      if (formData.area) inputs.push({ key: 'area', value: parseFloat(formData.area) });
      if (formData.currentHeating) inputs.push({ key: 'currentHeating', value: formData.currentHeating });
      if (formData.insulationYear) inputs.push({ key: 'insulationYear', value: parseInt(formData.insulationYear) });
    } else if (type === 'bathroom') {
      if (formData.roomSize) inputs.push({ key: 'roomSize', value: parseFloat(formData.roomSize) });
      if (formData.bathroomType) inputs.push({ key: 'bathroomType', value: formData.bathroomType });
      if (formData.equipment.length > 0) inputs.push({ key: 'equipment', value: formData.equipment.join(',') });
    } else if (type === 'maintenance') {
      if (formData.systemAge) inputs.push({ key: 'systemAge', value: parseFloat(formData.systemAge) });
      if (formData.systemType) inputs.push({ key: 'systemType', value: formData.systemType });
      if (formData.lastMaintenance) inputs.push({ key: 'lastMaintenance', value: parseFloat(formData.lastMaintenance) });
    }
    
    return inputs;
  };

  const handleRequestCallback = async () => {
    if (!formData.name || !formData.email) {
      return;
    }

    if (useApi) {
      const success = await requestCallback({
        customerName: formData.name,
        customerEmail: formData.email,
        customerPhone: formData.phone,
        reason: `${getTitle()} Anfrage`,
      });
      
      if (success) {
        setContactSubmitted(true);
        setShowContactForm(false);
      }
    } else {
      // Fallback: just show success message
      setContactSubmitted(true);
      setShowContactForm(false);
    }
  };

  const getTitle = () => {
    switch (type) {
      case 'heating': return 'Heizungsrechner';
      case 'bathroom': return 'Badrechner';
      case 'maintenance': return 'Wartungsrechner';
    }
  };

  const getDescription = () => {
    switch (type) {
      case 'heating': return 'Berechnen Sie die Kosten für Ihre neue Heizungsanlage';
      case 'bathroom': return 'Ermitteln Sie die Kosten für Ihre Badsanierung';
      case 'maintenance': return 'Kalkulieren Sie Ihre jährlichen Wartungskosten';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{getTitle()}</h3>
      <p className="text-gray-600 mb-6">{getDescription()}</p>

      <div className="space-y-4">
        {type === 'heating' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Wohnfläche (m²)
              </label>
              <input
                type="number"
                name="area"
                value={formData.area}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="z.B. 120"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Aktuelles Heizsystem
              </label>
              <select
                name="currentHeating"
                value={formData.currentHeating}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Bitte wählen</option>
                <option value="gas">Gasheizung</option>
                <option value="oil">Ölheizung</option>
                <option value="electric">Elektroheizung</option>
                <option value="none">Keine Heizung</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Baujahr der Dämmung
              </label>
              <input
                type="number"
                name="insulationYear"
                value={formData.insulationYear}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="z.B. 2010"
              />
            </div>
          </>
        )}

        {type === 'bathroom' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Badezimmergröße (m²)
              </label>
              <input
                type="number"
                name="roomSize"
                value={formData.roomSize}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="z.B. 8"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Badezimmer-Typ
              </label>
              <select
                name="bathroomType"
                value={formData.bathroomType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Bitte wählen</option>
                <option value="standard">Standard</option>
                <option value="comfort">Komfort</option>
                <option value="luxury">Luxus</option>
                <option value="barrier-free">Barrierefrei</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gewünschte Ausstattung
              </label>
              <div className="space-y-2">
                {['Neue Badewanne', 'Dusche', 'Waschtisch', 'WC', 'Fliesen', 'Fußbodenheizung'].map((item) => (
                  <label key={item} className="flex items-center">
                    <input
                      type="checkbox"
                      value={item}
                      onChange={handleCheckboxChange}
                      className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>
          </>
        )}

        {type === 'maintenance' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Alter der Anlage (Jahre)
              </label>
              <input
                type="number"
                name="systemAge"
                value={formData.systemAge}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="z.B. 5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Anlagentyp
              </label>
              <select
                name="systemType"
                value={formData.systemType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Bitte wählen</option>
                <option value="gas">Gasheizung</option>
                <option value="oil">Ölheizung</option>
                <option value="heat-pump">Wärmepumpe</option>
                <option value="solar">Solaranlage</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Letzte Wartung (Jahre)
              </label>
              <input
                type="number"
                name="lastMaintenance"
                value={formData.lastMaintenance}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="z.B. 1"
              />
            </div>
          </>
        )}

        <button
          onClick={handleCalculate}
          disabled={apiLoading}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
        >
          {apiLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Wird berechnet...
            </>
          ) : (
            'Berechnen'
          )}
        </button>

        {apiError && (
          <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg border border-red-200 text-sm">
            {apiError}
          </div>
        )}

        {result && showDetails && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2">Geschätzte Kosten:</h4>
            <div className="text-2xl font-bold text-blue-600 mb-2">
              {result.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
            </div>
            
            {/* Show API details if available */}
            {calculationResult?.details && (
              <div className="mt-3 pt-3 border-t border-blue-200">
                <p className="text-sm text-blue-700 font-medium mb-2">Details:</p>
                <ul className="text-sm text-blue-600 space-y-1">
                  {Object.entries(calculationResult.details).map(([key, value]) => (
                    <li key={key} className="flex justify-between">
                      <span>{key}:</span>
                      <span className="font-medium">{String(value)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <p className="text-sm text-blue-700 mt-3">
              * Dies ist eine unverbindliche Schätzung. Für ein genaues Angebot kontaktieren Sie uns bitte.
            </p>
            
            {!showContactForm && !contactSubmitted && (
              <button 
                onClick={() => setShowContactForm(true)}
                className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
              >
                Kostenlose Beratung anfragen
              </button>
            )}

            {/* Contact Form */}
            {showContactForm && !contactSubmitted && (
              <div className="mt-4 pt-4 border-t border-blue-200">
                <h5 className="font-semibold text-blue-800 mb-3">Rückruf anfordern</h5>
                <div className="space-y-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ihr Name *"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Ihre E-Mail *"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Ihre Telefonnummer"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleRequestCallback}
                      disabled={apiLoading || !formData.name || !formData.email}
                      className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-green-300 text-white px-4 py-2 rounded text-sm font-medium"
                    >
                      {apiLoading ? 'Wird gesendet...' : 'Absenden'}
                    </button>
                    <button
                      onClick={() => setShowContactForm(false)}
                      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded text-sm"
                    >
                      Abbrechen
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Success Message */}
            {contactSubmitted && (
              <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg border border-green-200">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Vielen Dank! Wir melden uns bei Ihnen.</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
