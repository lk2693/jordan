export default function ServiceHighlights() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Besondere Services für Sie</h2>
          <p className="text-xl text-gray-600">Zusätzliche Leistungen, die uns von anderen abheben</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Wärmepumpen-Check */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-200 text-center">
            <div className="text-5xl mb-6">🌱</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Wärmepumpen-Check</h3>
            <p className="text-gray-600 mb-6">Kostenlose Prüfung: Ist Ihr Haus für eine Wärmepumpe geeignet?</p>
            <a href="/waermepumpen-check" className="bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-colors duration-200">
              Jetzt prüfen
            </a>
          </div>

          {/* 24/7 Notdienst */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-200 text-center">
            <div className="text-5xl mb-6">🚨</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Notdienst</h3>
            <p className="text-gray-600 mb-6">Rund um die Uhr für Sie da - auch nachts, am Wochenende und an Feiertagen</p>
            <a href="/notdienst" className="bg-red-500 text-white px-6 py-3 rounded-full font-bold hover:bg-red-600 transition-colors duration-200">
              Mehr erfahren
            </a>
          </div>

          {/* Fördermittel */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-200 text-center">
            <div className="text-5xl mb-6">💰</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Fördermittel</h3>
            <p className="text-gray-600 mb-6">Bis zu 70% sparen mit staatlichen Förderungen - wir helfen bei der Antragsstellung</p>
            <a href="/foerdermittel" className="bg-yellow-500 text-white px-6 py-3 rounded-full font-bold hover:bg-yellow-600 transition-colors duration-200">
              Förderung prüfen
            </a>
          </div>

          {/* Kundenbewertungen */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-200 text-center">
            <div className="text-5xl mb-6">⭐</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Kundenbewertungen</h3>
            <p className="text-gray-600 mb-6">Lesen Sie, was unsere Kunden über uns sagen - 4.9/5 Sterne Bewertung</p>
            <a href="/kundenbewertungen" className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors duration-200">
              Bewertungen lesen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
