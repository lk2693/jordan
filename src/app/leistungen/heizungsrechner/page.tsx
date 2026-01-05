import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Calculator from '@/components/Calculator';
import Link from 'next/link';

export default function HeizungsrechnerPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-800 mb-6">Heizungsrechner</h1>
              <p className="text-xl text-gray-600">
                Berechnen Sie schnell und einfach die Kosten für Ihre neue Heizungsanlage
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <Calculator type="heating" />
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">
                    💡 Warum eine neue Heizung?
                  </h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>✓ Bis zu 30% Energiekosteneinsparung</li>
                    <li>✓ Staatliche Förderungen bis zu 40%</li>
                    <li>✓ Umweltfreundlich und nachhaltig</li>
                    <li>✓ Wertsteigerung Ihrer Immobilie</li>
                    <li>✓ Moderne Steuerung und Komfort</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-800 mb-4">
                    🌱 Fördermöglichkeiten
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-green-700">BAFA Förderung</h4>
                      <p className="text-green-600 text-sm">Bis zu 40% für Wärmepumpen</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700">KfW Kredit</h4>
                      <p className="text-green-600 text-sm">Zinsgünstige Finanzierung</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700">Steuerbonus</h4>
                      <p className="text-green-600 text-sm">20% über 3 Jahre absetzbar</p>
                    </div>
                  </div>
                  <Link 
                    href="/kontakt"
                    className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm"
                  >
                    Förderberatung anfragen
                  </Link>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-orange-800 mb-4">
                    🔧 Unsere Heizungssysteme
                  </h3>
                  <div className="space-y-2 text-orange-700">
                    <div className="flex justify-between">
                      <span>Wärmepumpe</span>
                      <span className="font-semibold">⭐⭐⭐⭐⭐</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Gas-Brennwert</span>
                      <span className="font-semibold">⭐⭐⭐⭐</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pelletheizung</span>
                      <span className="font-semibold">⭐⭐⭐⭐</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Solarthermie</span>
                      <span className="font-semibold">⭐⭐⭐⭐⭐</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                So einfach funktioniert es
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Kostenrechner</h3>
                  <p className="text-gray-600 text-sm">Erste Kostenschätzung erhalten</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Beratungstermin</h3>
                  <p className="text-gray-600 text-sm">Vor-Ort Beratung vereinbaren</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Angebot</h3>
                  <p className="text-gray-600 text-sm">Detailliertes Angebot erhalten</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">4</span>
                  </div>
                  <h3 className="font-semibold mb-2">Installation</h3>
                  <p className="text-gray-600 text-sm">Professionelle Umsetzung</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
