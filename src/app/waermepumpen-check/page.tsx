'use client';

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Calculator from '@/components/Calculator'
import { useState } from 'react'

export default function WaermepumpenCheck() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: '',
    houseType: '',
    buildYear: '',
    livingSpace: '',
    heatingSystem: '',
    insulation: '',
    basement: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const nextStep = () => setStep(s => Math.min(s + 1, 3))
  const prevStep = () => setStep(s => Math.max(s - 1, 1))

  const isStep1Valid = formData.email && formData.houseType && formData.buildYear
  const isStep2Valid = formData.livingSpace && formData.heatingSystem
  const isStep3Valid = formData.insulation && formData.basement

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section - Kompakter */}
      <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-700 text-white pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            Kostenlos & unverbindlich
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Wärmepumpen-Check
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-green-100">
            In nur 2 Minuten erfahren Sie, ob Ihr Haus für eine Wärmepumpe geeignet ist
          </p>
        </div>
      </div>

      {/* Main Content - Zwei-Spalten Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Linke Spalte - Formular mit Stepper */}
          <div>
            {!submitted ? (
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden sticky top-24">
                {/* Progress Bar */}
                <div className="bg-gray-100 px-6 py-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Schritt {step} von 3</span>
                    <span className="text-sm text-green-600 font-medium">{Math.round((step / 3) * 100)}% abgeschlossen</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(step / 3) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="p-6">
                  {/* Step 1: Grunddaten */}
                  {step === 1 && (
                    <div className="space-y-5 animate-fade-in">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        Grunddaten
                      </h3>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          E-Mail-Adresse
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                          placeholder="ihre.email@beispiel.de"
                        />
                      </div>

                      <div>
                        <label htmlFor="houseType" className="block text-sm font-medium text-gray-700 mb-1">
                          Gebäudetyp
                        </label>
                        <select
                          id="houseType"
                          name="houseType"
                          value={formData.houseType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        >
                          <option value="">Bitte wählen...</option>
                          <option value="einfamilienhaus">🏠 Einfamilienhaus</option>
                          <option value="doppelhaus">🏘️ Doppelhaus</option>
                          <option value="reihenhaus">🏘️ Reihenhaus</option>
                          <option value="mehrfamilienhaus">🏢 Mehrfamilienhaus</option>
                          <option value="bungalow">🏡 Bungalow</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="buildYear" className="block text-sm font-medium text-gray-700 mb-1">
                          Baujahr
                        </label>
                        <select
                          id="buildYear"
                          name="buildYear"
                          value={formData.buildYear}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        >
                          <option value="">Bitte wählen...</option>
                          <option value="vor1960">vor 1960</option>
                          <option value="1960-1980">1960-1980</option>
                          <option value="1980-2000">1980-2000</option>
                          <option value="2000-2010">2000-2010</option>
                          <option value="nach2010">nach 2010</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Heizung */}
                  {step === 2 && (
                    <div className="space-y-5 animate-fade-in">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                        </svg>
                        Heizungsdaten
                      </h3>
                      
                      <div>
                        <label htmlFor="livingSpace" className="block text-sm font-medium text-gray-700 mb-1">
                          Wohnfläche in m²
                        </label>
                        <input
                          type="number"
                          id="livingSpace"
                          name="livingSpace"
                          min="50"
                          max="1000"
                          value={formData.livingSpace}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                          placeholder="z.B. 150"
                        />
                      </div>

                      <div>
                        <label htmlFor="heatingSystem" className="block text-sm font-medium text-gray-700 mb-1">
                          Aktuelles Heizsystem
                        </label>
                        <select
                          id="heatingSystem"
                          name="heatingSystem"
                          value={formData.heatingSystem}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        >
                          <option value="">Bitte wählen...</option>
                          <option value="gas">Gasheizung</option>
                          <option value="oil">Ölheizung</option>
                          <option value="electric">Elektroheizung</option>
                          <option value="district">Fernwärme</option>
                          <option value="wood">Holz/Pellets</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Gebäudezustand */}
                  {step === 3 && (
                    <div className="space-y-5 animate-fade-in">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        Gebäudezustand
                      </h3>
                      
                      <div>
                        <label htmlFor="insulation" className="block text-sm font-medium text-gray-700 mb-1">
                          Dämmung
                        </label>
                        <select
                          id="insulation"
                          name="insulation"
                          value={formData.insulation}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        >
                          <option value="">Bitte wählen...</option>
                          <option value="none">Keine/wenig Dämmung</option>
                          <option value="partial">Teilweise gedämmt</option>
                          <option value="good">Gut gedämmt</option>
                          <option value="excellent">Sehr gut gedämmt (KfW)</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="basement" className="block text-sm font-medium text-gray-700 mb-1">
                          Keller vorhanden?
                        </label>
                        <select
                          id="basement"
                          name="basement"
                          value={formData.basement}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        >
                          <option value="">Bitte wählen...</option>
                          <option value="yes">Ja, voll unterkellert</option>
                          <option value="partial">Teilweise unterkellert</option>
                          <option value="no">Nicht unterkellert</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex gap-3 mt-8">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all"
                      >
                        ← Zurück
                      </button>
                    )}
                    
                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={step === 1 ? !isStep1Valid : !isStep2Valid}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-medium hover:from-green-700 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Weiter →
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={!isStep3Valid}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-bold hover:from-green-700 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        Check starten
                      </button>
                    )}
                  </div>
                </form>
              </div>
            ) : (
              /* Erfolgs-Anzeige */
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Vielen Dank!</h3>
                <p className="text-gray-600 mb-6">
                  Wir analysieren Ihre Daten und melden uns innerhalb von 24 Stunden bei Ihnen unter <strong>{formData.email}</strong>
                </p>
                <div className="bg-green-50 rounded-xl p-4 text-left">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                    </svg>
                    Ihre Angaben:
                  </h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Gebäudetyp: {formData.houseType}</li>
                    <li>• Baujahr: {formData.buildYear}</li>
                    <li>• Wohnfläche: {formData.livingSpace} m²</li>
                    <li>• Heizsystem: {formData.heatingSystem}</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Rechte Spalte - Kostenrechner & Benefits */}
          <div className="space-y-8">
            {/* Kostenrechner */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-4">
                <h2 className="text-xl font-bold text-white text-center flex items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Kosten direkt berechnen
                </h2>
              </div>
              <div className="p-6">
                <Calculator 
                  type="heating" 
                  useApi={false}
                  identName=""
                />
              </div>
            </div>

            {/* Quick Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-lg text-center">
                <div className="mb-2 flex justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3 className="font-bold text-sm mb-1">Bis zu 70%</h3>
                <p className="text-xs text-gray-600">Staatliche Förderung</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-lg text-center">
                <div className="mb-2 flex justify-center">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <h3 className="font-bold text-sm mb-1">-50% CO₂</h3>
                <p className="text-xs text-gray-600">Weniger Emissionen</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-lg text-center">
                <div className="mb-2 flex justify-center">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                  </svg>
                </div>
                <h3 className="font-bold text-sm mb-1">24h</h3>
                <p className="text-xs text-gray-600">Schnelle Antwort</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-lg text-center">
                <div className="mb-2 flex justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-bold text-sm mb-1">Kostenlos</h3>
                <p className="text-xs text-gray-600">Unverbindlicher Check</p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-4 text-center">Warum Jordan GmbH?</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Über 25 Jahre Erfahrung in Braunschweig</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Zertifizierter Wärmepumpen-Fachbetrieb</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Förderungsberatung inklusive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
