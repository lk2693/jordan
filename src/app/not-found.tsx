import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-9xl mb-8">🔧</div>
            <h1 className="text-6xl font-bold text-gray-800 mb-6">404</h1>
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
              Seite nicht gefunden
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
              Aber keine Sorge - unser Team ist immer bereit zu helfen!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Zur Startseite
              </Link>
              <Link 
                href="/kontakt"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Kontakt aufnehmen
              </Link>
            </div>
            
            {/* Emergency Contact */}
            <div className="mt-12 p-6 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="text-lg font-bold text-red-800 mb-2">
                🚨 Notfall? Wir sind 24/7 für Sie da!
              </h3>
              <a 
                href="tel:+49531234490980" 
                className="text-red-600 hover:text-red-800 font-bold text-xl"
              >
                0531 23 44 909 80
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
