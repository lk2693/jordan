'use client';

import { useState, useEffect } from 'react';
import { useLokalLeads } from '@/lib/hooks/useLokalLeads';
import { LOKALLEADS_IDENT } from '@/lib/lokalleads-api';

interface CalculatorProps {
  type: 'heating' | 'bathroom' | 'maintenance';
  identName?: string; // Optional LokalLeads integration identifier
  useApi?: boolean; // Enable/disable API integration
  plain?: boolean; // Ohne eigene Karte/Titel rendern (wenn der Container das übernimmt)
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

export default function Calculator({
  type,
  identName = LOKALLEADS_IDENT || undefined,
  useApi = Boolean(LOKALLEADS_IDENT),
  plain = false,
}: CalculatorProps) {
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
    <div className={plain ? '' : 'bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm'}>
      {!plain && (
        <div className="mb-6">
          <h3 className="text-xl font-extrabold text-slate-900 mb-1.5">{getTitle()}</h3>
          <p className="text-sm text-slate-500">{getDescription()}</p>
        </div>
      )}

      <div className="space-y-5">
        {type === 'heating' && (
          <>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Wohnfläche (m²)
              </label>
              <input
                type="number"
                name="area"
                value={formData.area}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#152852] focus:ring-2 focus:ring-[#152852]/15 transition-colors"
                placeholder="z.B. 120"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Aktuelles Heizsystem
              </label>
              <select
                name="currentHeating"
                value={formData.currentHeating}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#152852] focus:ring-2 focus:ring-[#152852]/15 transition-colors"
              >
                <option value="">Bitte wählen</option>
                <option value="gas">Gasheizung</option>
                <option value="oil">Ölheizung</option>
                <option value="electric">Elektroheizung</option>
                <option value="none">Keine Heizung</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Baujahr der Dämmung
              </label>
              <input
                type="number"
                name="insulationYear"
                value={formData.insulationYear}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#152852] focus:ring-2 focus:ring-[#152852]/15 transition-colors"
                placeholder="z.B. 2010"
              />
            </div>
          </>
        )}

        {type === 'bathroom' && (
          <>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Badezimmergröße (m²)
              </label>
              <input
                type="number"
                name="roomSize"
                value={formData.roomSize}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#152852] focus:ring-2 focus:ring-[#152852]/15 transition-colors"
                placeholder="z.B. 8"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Badezimmer-Typ
              </label>
              <select
                name="bathroomType"
                value={formData.bathroomType}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#152852] focus:ring-2 focus:ring-[#152852]/15 transition-colors"
              >
                <option value="">Bitte wählen</option>
                <option value="standard">Standard</option>
                <option value="comfort">Komfort</option>
                <option value="luxury">Luxus</option>
                <option value="barrier-free">Barrierefrei</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Gewünschte Ausstattung
              </label>
              <div className="space-y-2">
                {['Neue Badewanne', 'Dusche', 'Waschtisch', 'WC', 'Fliesen', 'Fußbodenheizung'].map((item) => (
                  <label key={item} className="flex items-center text-sm text-slate-600">
                    <input
                      type="checkbox"
                      value={item}
                      onChange={handleCheckboxChange}
                      className="mr-2.5 h-4 w-4 accent-[#152852] border-slate-300 rounded"
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
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Alter der Anlage (Jahre)
              </label>
              <input
                type="number"
                name="systemAge"
                value={formData.systemAge}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#152852] focus:ring-2 focus:ring-[#152852]/15 transition-colors"
                placeholder="z.B. 5"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Anlagentyp
              </label>
              <select
                name="systemType"
                value={formData.systemType}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#152852] focus:ring-2 focus:ring-[#152852]/15 transition-colors"
              >
                <option value="">Bitte wählen</option>
                <option value="gas">Gasheizung</option>
                <option value="oil">Ölheizung</option>
                <option value="heat-pump">Wärmepumpe</option>
                <option value="solar">Solaranlage</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Letzte Wartung (Jahre)
              </label>
              <input
                type="number"
                name="lastMaintenance"
                value={formData.lastMaintenance}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#152852] focus:ring-2 focus:ring-[#152852]/15 transition-colors"
                placeholder="z.B. 1"
              />
            </div>
          </>
        )}

        <button
          onClick={handleCalculate}
          disabled={apiLoading}
          className="w-full bg-amber-500 hover:bg-amber-400 disabled:bg-amber-300 text-[#152852] py-3.5 rounded-lg font-bold transition-colors duration-200 flex items-center justify-center"
        >
          {apiLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#152852]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
          <div className="mt-4 border-l-4 border-red-500 pl-4 py-1 text-sm text-slate-600">
            {apiError}
          </div>
        )}

        {result && showDetails && (
          <div className="mt-8 border-t-2 border-[#152852] pt-5">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Geschätzte Kosten</p>
            <p className="text-3xl font-extrabold text-slate-900">
              {result.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
            </p>

            {/* Show API details if available */}
            {calculationResult?.details && (
              <dl className="mt-4 divide-y divide-slate-200 border-y border-slate-200 text-sm">
                {Object.entries(calculationResult.details).map(([key, value]) => (
                  <div key={key} className="flex justify-between gap-4 py-2.5">
                    <dt className="text-slate-500">{key}</dt>
                    <dd className="font-semibold text-slate-900">{String(value)}</dd>
                  </div>
                ))}
              </dl>
            )}

            <p className="text-sm text-slate-400 mt-3">
              * Unverbindliche Schätzung — den genauen Preis nennen wir Ihnen nach einem Vor-Ort-Termin.
            </p>

            {!showContactForm && !contactSubmitted && (
              <button
                onClick={() => setShowContactForm(true)}
                className="mt-5 w-full sm:w-auto bg-[#152852] hover:bg-[#193c6e] text-white px-6 py-3 rounded-lg text-sm font-bold transition-colors duration-200"
              >
                Kostenlose Beratung anfragen
              </button>
            )}

            {/* Contact Form */}
            {showContactForm && !contactSubmitted && (
              <div className="mt-6 pt-5 border-t border-slate-200">
                <h5 className="font-bold text-slate-900 mb-4">Rückruf anfordern</h5>
                <div className="space-y-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ihr Name *"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#152852] focus:ring-2 focus:ring-[#152852]/15 transition-colors text-sm"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Ihre E-Mail *"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#152852] focus:ring-2 focus:ring-[#152852]/15 transition-colors text-sm"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Ihre Telefonnummer"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#152852] focus:ring-2 focus:ring-[#152852]/15 transition-colors text-sm"
                  />
                  <div className="flex gap-2 pt-1">
                    <button
                      onClick={handleRequestCallback}
                      disabled={apiLoading || !formData.name || !formData.email}
                      className="flex-1 bg-[#152852] hover:bg-[#193c6e] disabled:bg-slate-300 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors duration-200"
                    >
                      {apiLoading ? 'Wird gesendet...' : 'Absenden'}
                    </button>
                    <button
                      onClick={() => setShowContactForm(false)}
                      className="px-5 py-2.5 text-sm font-semibold text-slate-500 hover:text-slate-700 transition-colors"
                    >
                      Abbrechen
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Success Message */}
            {contactSubmitted && (
              <div className="mt-5 border-l-4 border-emerald-500 pl-4 py-1">
                <p className="font-semibold text-slate-900">Vielen Dank für Ihre Anfrage!</p>
                <p className="text-sm text-slate-500 mt-0.5">Wir melden uns zeitnah bei Ihnen.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
