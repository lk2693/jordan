'use client';

import Calculator from '@/components/Calculator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WartungsrechnerPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Wartungsrechner</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Berechnen Sie die Wartungskosten für Ihre Heizungsanlage und sichern Sie sich ein unverbindliches Angebot.
            </p>
          </div>
        </div>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              {/* 
                Calculator mit LokalLeads API Integration
                
                Um die API zu aktivieren, setzen Sie:
                - useApi={true}
                - identName="IHR_LOKALLEADS_IDENT_NAME"
                
                Den identName erhalten Sie von LokalLeads.
              */}
              <Calculator 
                type="maintenance" 
                useApi={false} // Auf true setzen, wenn API-Zugang verfügbar
                identName="" // LokalLeads Identifier eintragen
              />
              
              <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Warum regelmäßige Wartung wichtig ist</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Sicherheit:</strong> Regelmäßige Prüfung verhindert gefährliche Defekte</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Effizienz:</strong> Bis zu 15% Energieeinsparung durch optimale Einstellung</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Langlebigkeit:</strong> Erhöht die Lebensdauer Ihrer Anlage deutlich</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span><strong>Garantie:</strong> Viele Hersteller fordern regelmäßige Wartung</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Schnelle Terminvergabe</h3>
                <p className="text-gray-600">Innerhalb von 24 Stunden melden wir uns bei Ihnen</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Festpreisgarantie</h3>
                <p className="text-gray-600">Keine versteckten Kosten - transparent und fair</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Zufriedenheitsgarantie</h3>
                <p className="text-gray-600">100% zufrieden oder wir kommen nochmal</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
