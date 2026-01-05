import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ServiceVersprechen() {
  // SVG Icons
  const CalendarIcon = () => (
    <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
    </svg>
  )
  const BellIcon = () => (
    <svg className="w-10 h-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
    </svg>
  )
  const ClockIcon = () => (
    <svg className="w-10 h-10 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
  const SparklesIcon = () => (
    <svg className="w-10 h-10 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>
  )
  const MoonIcon = () => (
    <svg className="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    </svg>
  )
  const CalendarDaysIcon = () => (
    <svg className="w-10 h-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg>
  )
  const LightBulbIcon = () => (
    <svg className="w-10 h-10 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  )
  const ShieldIcon = () => (
    <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  )
  const GlobeIcon = () => (
    <svg className="w-10 h-10 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  )
  const FaceSmileIcon = () => (
    <svg className="w-10 h-10 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
    </svg>
  )
  const AcademicCapIcon = () => (
    <svg className="w-10 h-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
  )

  const promises = [
    {
      title: "Direkt-Termin-Versprechen",
      description: "Bereits beim ersten Kontakt mit unseren Kundenberaterinnen erhält jeder Kunde einen verbindlichen Termin für eine qualifizierte Fachberatung oder einen Kundendiensteinsatz.",
      icon: <CalendarIcon />
    },
    {
      title: "24-Stunden-Notdienst-Versprechen", 
      description: "Bestens qualifizierte Kundendiensttechniker sind stets bereit, unseren Kunden zu dienen: nachts, am Wochenende und an Feiertagen. Rund um die Uhr an 365 Tagen im Jahr.",
      icon: <BellIcon />
    },
    {
      title: "Pünktlichkeits-Versprechen",
      description: "Unsere Kunden dürfen sich auf unsere Pünktlichkeit verlassen: für alle Terminarten, im Kundendiensteinsatz und bei Beratungen, gemäß unserer Definitionen bei Zeitfenster- und Fix-Terminen.",
      icon: <ClockIcon />
    },
    {
      title: "Sauberkeits-Versprechen",
      description: "Wir schützen die Räume unserer Kunden mit Überziehschuhen und Folien gegen Staub und Schmutz. Zuverlässig und umweltschonend entsorgen wir ausgetauschte Teile und den Bauschutt.",
      icon: <SparklesIcon />
    },
    {
      title: "Nach-Feierabend-Service-Versprechen",
      description: "Mit unserem Nach-Feierabend-Service sind wir Mo-Do von 17-20 Uhr für unsere (berufstätigen) Kunden im Einsatz – ohne Mehrkosten, wenn der Termin während unserer Bürozeiten mindestens fünf Tage zuvor vereinbart wurde.",
      icon: <MoonIcon />
    },
    {
      title: "Wunsch-Termin-Versprechen",
      description: "Gerne führen wir jeden Auftrag zu dem von unseren Kunden gewünschten Termin aus: zu jeder Tages- und Nachtzeit, an 7 Tagen in der Woche.",
      icon: <CalendarDaysIcon />
    },
    {
      title: "Kompetenz-Beratungs-Versprechen",
      description: "Unsere kompetente Fachberatung ist für jeden Kunden eine sehr wertvolle Leistung. Denn nur die richtige Kaufentscheidung sichert einen 'Preis-werten' Kauf.",
      icon: <LightBulbIcon />
    },
    {
      title: "Lebenslang-Garantie-Versprechen",
      description: "Auf Wunsch erhalten unsere Kunden eine Lebenslang-Garantie auf die von uns installierten haustechnischen Anlagen der Premium-Klasse.",
      icon: <ShieldIcon />
    },
    {
      title: "Internet-Präsenz-Versprechen",
      description: "Auch im Internet verwirklichen wir unsere gleichermaßen moderne wie transparente und kundenorientierte Unternehmenskultur. Detaillierte Informationen über unser Unternehmen und unsere Leistungen sowie interaktive Dienstleistungen bieten Öffentlichkeit und Kunden vielfachen Nutzen.",
      icon: <GlobeIcon />
    },
    {
      title: "Zufriedenheits-Versprechen",
      description: "Trotz größter Sorgfalt können Fehler passieren. Berechtigte Reklamationen werden von uns als Chance gesehen, zu beweisen, dass wir halten, was wir versprechen, und sie werden schnellstmöglich mit allen verfügbaren Mitteln behoben.",
      icon: <FaceSmileIcon />
    },
    {
      title: "Fachkompetenz-Versprechen",
      description: "Durch die permanente Weiterbildung unserer Mitarbeiter in allen Unternehmensbereichen sichern wir professionelles Auftragsmanagement, anspruchsvolle, klar definierte Serviceleistungen sowie hohe handwerkliche Qualität.",
      icon: <AcademicCapIcon />
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            11 Versprechen für Sie
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Unsere Service-Versprechen
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-blue-100">
            Für Ihren Komfort und Ihre Zufriedenheit
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Intro Text */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Das zeichnet uns aus
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Kompetent beraten. Exakt planen. Zuverlässig umsetzen. Diese 11 Service-Versprechen geben wir Ihnen als Garantie für erstklassigen Service.
          </p>
        </div>

        {/* Service Promises Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promises.map((promise, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="mb-4">{promise.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{promise.title}</h3>
              <p className="text-gray-600 leading-relaxed">{promise.description}</p>
            </div>
          ))}
        </div>

        {/* Quality Badges */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Unsere Qualitätsmerkmale</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Qualitativ</h4>
              <p className="text-gray-600">Höchste Qualitätsstandards in allen Bereichen</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-2.748 0" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Zertifiziert</h4>
              <p className="text-gray-600">Offizielle Zertifizierungen und Auszeichnungen</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Professionell</h4>
              <p className="text-gray-600">Erfahrene Fachkräfte mit modernster Ausstattung</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-6">Überzeugt von unseren Versprechen?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nehmen Sie uns beim Wort und vereinbaren Sie noch heute einen Termin mit unseren Experten.
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
