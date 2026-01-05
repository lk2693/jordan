import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Kundenbewertungen() {
  const testimonials = [
    {
      name: "Martina Sandfuchs",
      rating: 5,
      text: "Sehr gute Qualität, termingerecht geliefert und fähige Handwerker, alles schön sauber, Problemchen kreativ gelöst - super.",
      service: "Badsanierung",
      location: "Braunschweig"
    },
    {
      name: "Thomas Müller",
      rating: 5,
      text: "Professionelle Beratung und Umsetzung unserer neuen Heizungsanlage. Pünktlich, sauber und kompetent. Jederzeit wieder!",
      service: "Heizungsinstallation",
      location: "Wolfsburg"
    },
    {
      name: "Familie Schmidt",
      rating: 5,
      text: "Von der Planung bis zur Umsetzung war alles perfekt organisiert. Besonders der Notdienst hat uns sehr geholfen.",
      service: "Elektroinstallation",
      location: "Salzgitter"
    },
    {
      name: "Dr. Andrea Weber",
      rating: 5,
      text: "Hervorragende Fachberatung zur Wärmepumpe. Das Team hat alle Fragen kompetent beantwortet und die Installation war einwandfrei.",
      service: "Wärmepumpe",
      location: "Peine"
    },
    {
      name: "Michael Klein",
      rating: 5,
      text: "Schnelle Hilfe im Notfall, faire Preise und top Handwerker. Die Firma Jordan kann ich nur weiterempfehlen!",
      service: "Notdienst",
      location: "Gifhorn"
    },
    {
      name: "Sabine Richter",
      rating: 5,
      text: "Unser neues Badezimmer ist traumhaft geworden. Trotz Corona-Bedingungen wurde termingerecht und sauber gearbeitet.",
      service: "Badsanierung",
      location: "Helmstedt"
    }
  ]

  const stats = [
    { 
      number: "500+", 
      label: "Zufriedene Kunden", 
      icon: (
        <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "bg-orange-100"
    },
    { 
      number: "4.9/5", 
      label: "Durchschnittsbewertung", 
      icon: (
        <svg className="w-10 h-10 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      color: "bg-yellow-100"
    },
    { 
      number: "98%", 
      label: "Weiterempfehlungsrate", 
      icon: (
        <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      color: "bg-green-100"
    },
    { 
      number: "24/7", 
      label: "Notdienst verfügbar", 
      icon: (
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      color: "bg-red-100"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600 text-white pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-yellow-500/20 text-yellow-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
            ⭐ 4.9/5 Durchschnittsbewertung
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kundenbewertungen
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-yellow-100">
            Was unsere Kunden über uns sagen
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Das sagen unsere Kunden
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kundenzufriedenheit steht bei uns an erster Stelle. Lesen Sie, was unsere Kunden über unsere Arbeit sagen.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              
              {/* Testimonial Text */}
              <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </blockquote>
              
              {/* Customer Info */}
              <div className="border-t pt-4">
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.service}</div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-3xl shadow-xl p-12 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Vertrauen Sie auf unsere Expertise
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-2.748 0" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Zertifizierte Qualität</h4>
              <p className="text-gray-600">
                Wir sind zertifizierter Fachbetrieb mit allen relevanten Qualifikationen und Zulassungen.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Garantie & Versicherung</h4>
              <p className="text-gray-600">
                Umfassende Garantieleistungen und Versicherungsschutz für Ihre Sicherheit.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">24/7 Notdienst</h4>
              <p className="text-gray-600">
                Rund um die Uhr für Sie da - auch an Wochenenden und Feiertagen.
              </p>
            </div>
          </div>
        </div>

        {/* External Review Links */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Weitere Bewertungen finden Sie auf
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://www.google.com/search?q=Jordan+GmbH+Braunschweig+Bewertungen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white px-8 py-4 rounded-full font-bold text-gray-900 hover:shadow-lg transition-shadow flex items-center gap-3"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              Google Bewertungen
            </a>
            <a 
              href="http://www.institut-fuer-kundenzufriedenheit.de/pages/feedback?company_id=2722" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white px-8 py-4 rounded-full font-bold text-gray-900 hover:shadow-lg transition-shadow flex items-center gap-3"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
              </svg>
              Institut für Kundenzufriedenheit
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-6">Werden Sie unser nächster zufriedener Kunde!</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Überzeugen Sie sich selbst von unserer Qualität und unserem Service. Kontaktieren Sie uns für ein unverbindliches Angebot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/kontakt" className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Jetzt Kontakt aufnehmen
            </a>
            <a href="tel:053123449090" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-colors">
              Direkt anrufen
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
