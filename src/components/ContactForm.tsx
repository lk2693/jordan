'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [email, setEmail] = useState('');

  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Kontaktieren Sie uns</h2>
        <p className="text-gray-300 mb-8">
          Haben Sie Fragen oder benötigen Sie ein Angebot? Wir sind für Sie da!
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="text-left">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Kontaktdaten</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <span className="mr-3">📞</span>
                <strong>Tel:</strong>&nbsp;+49 531 123456
              </p>
              <p className="flex items-center">
                <span className="mr-3">📧</span>
                <strong>E-Mail:</strong>&nbsp;info@jordan-gmbh.de
              </p>
              <p className="flex items-center">
                <span className="mr-3">📍</span>
                <strong>Adresse:</strong>&nbsp;Musterstraße 123, 38100 Braunschweig
              </p>
              <p className="flex items-center">
                <span className="mr-3">🕒</span>
                <strong>Öffnungszeiten:</strong>&nbsp;Mo-Fr 8:00-17:00 Uhr
              </p>
            </div>
          </div>

          <div className="text-left">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">24h Notdienst</h3>
            <p className="text-gray-300 mb-4">
              Bei Notfällen sind wir rund um die Uhr für Sie erreichbar:
            </p>
            <p className="text-2xl font-bold text-red-400 mb-4">
              📞 +49 531 NOTFALL
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Heizungsausfall im Winter</li>
              <li>• Wasserschäden</li>
              <li>• Stromausfälle</li>
              <li>• Defekte Klimaanlagen</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Newsletter abonnieren</h3>
          <p className="text-gray-300 mb-4">
            Bleiben Sie informiert über neue Services und Angebote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition-colors">
              Abonnieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
