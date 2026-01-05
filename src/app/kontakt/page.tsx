'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/jordan.png"
            alt="Kontakt Jordan GmbH"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Kontakt</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Nehmen Sie Kontakt mit uns auf - wir beraten Sie gerne!
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Jordan GmbH</h2>
                  <div className="space-y-5">
                    <div className="flex items-start space-x-3">
                      <div className="text-blue-600 mt-1">📍</div>
                      <div>
                        <p className="font-semibold">Adresse</p>
                        <p className="text-gray-600">
                          Rischbleek 6<br />
                          38126 Braunschweig
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="text-blue-600 mt-1">📞</div>
                      <div>
                        <p className="font-semibold">Telefon</p>
                        <p className="text-gray-600">0531 2 34 49 09-0</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="text-blue-600 mt-1">📠</div>
                      <div>
                        <p className="font-semibold">Fax</p>
                        <p className="text-gray-600">0531 2 34 49 09 89</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="text-orange-500 mt-1">🚨</div>
                      <div>
                        <p className="font-semibold text-orange-600">24h Notdienst</p>
                        <p className="text-orange-600 font-bold">0531 2344909 80</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="text-blue-600 mt-1">✉️</div>
                      <div>
                        <p className="font-semibold">E-Mail</p>
                        <a href="mailto:info@jordan24.de" className="text-blue-600 hover:text-blue-800">
                          info@jordan24.de
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Öffnungszeiten</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Montag - Donnerstag</span>
                      <span>7:00 - 15:45 Uhr</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Freitag</span>
                      <span>7:00 - 11:45 Uhr</span>
                    </div>
                    <div className="flex justify-between font-semibold text-orange-600">
                      <span>Notdienst</span>
                      <span>24/7</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Kontaktformular</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="ihre.email@beispiel.de"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Ihre Telefonnummer"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Betreff *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="klima">Klima & Lüftung</option>
                      <option value="heizung">Heizung & Wärmepumpe</option>
                      <option value="sanitaer">Sanitär & Bad</option>
                      <option value="elektro">Elektro & Smart Home</option>
                      <option value="wartung">Wartung & Service</option>
                      <option value="notfall">Notfall</option>
                      <option value="beratung">Allgemeine Beratung</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nachricht *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Beschreiben Sie Ihr Anliegen..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                  >
                    Nachricht senden
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Unser Standort
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">So finden Sie uns</h2>
              <p className="text-xl text-gray-600">
                Besuchen Sie uns in Braunschweig - wir freuen uns auf Sie!
              </p>
            </div>

            <div className="h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Map 
                lat={52.2350}
                lng={10.5650}
                zoom={15}
                markerText="JORDAN GmbH"
              />
            </div>

            <div className="mt-8 text-center">
              <a 
                href="https://www.google.com/maps/dir//Rischbleek+6,+38126+Braunschweig" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Route berechnen
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
