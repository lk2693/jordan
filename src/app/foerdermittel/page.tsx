import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Foerdermittel() {
  // SVG Icons
  const HomeIcon = () => (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  )
  const BankIcon = () => (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
    </svg>
  )
  const LeafIcon = () => (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
  )
  const SunIcon = () => (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
  )
  const PlugIcon = () => (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
  )
  const AccessibleIcon = () => (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
  )
  const CreditCardIcon = () => (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
    </svg>
  )
  const BuildingIcon = () => (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
    </svg>
  )
  const HandshakeIcon = () => (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
    </svg>
  )

  const subsidyPrograms = [
    {
      title: "BEG - Bundesförderung für effiziente Gebäude",
      description: "Bis zu 70% Förderung für Wärmepumpen und energetische Sanierungen",
      amount: "Bis zu 70%",
      category: "Heizung & Sanierung",
      icon: <HomeIcon />,
      color: "bg-green-500"
    },
    {
      title: "KfW-Kredit 261/262",
      description: "Zinsgünstige Kredite für Sanierung zum Effizienzhaus",
      amount: "Bis 150.000€",
      category: "Sanierung",
      icon: <BankIcon />,
      color: "bg-blue-500"
    },
    {
      title: "BAFA-Förderung Wärmepumpe",
      description: "Direkte Zuschüsse für den Austausch alter Heizungen",
      amount: "Bis zu 40%",
      category: "Wärmepumpe",
      icon: <LeafIcon />,
      color: "bg-emerald-500"
    },
    {
      title: "Solarförderung",
      description: "Einspeisevergütung und Investitionszuschüsse für PV-Anlagen",
      amount: "20 Jahre garantiert",
      category: "Solar",
      icon: <SunIcon />,
      color: "bg-yellow-500"
    },
    {
      title: "Elektromobilität",
      description: "Förderung für Wallboxen und Ladeinfrastruktur",
      amount: "Bis 900€",
      category: "E-Mobilität",
      icon: <PlugIcon />,
      color: "bg-purple-500"
    },
    {
      title: "Barrierefreies Bad",
      description: "Zuschüsse für altersgerechte Badmodernisierung",
      amount: "Bis 6.250€",
      category: "Barrierefreiheit",
      icon: <AccessibleIcon />,
      color: "bg-orange-500"
    }
  ]

  const financingOptions = [
    {
      title: "Ratenzahlung",
      description: "Flexible Ratenzahlung ohne Zinsen bis 24 Monate",
      icon: <CreditCardIcon />,
      benefits: ["0% Zinsen", "Flexible Laufzeit", "Keine Vorabkosten"]
    },
    {
      title: "KfW-Kredit",
      description: "Günstige Kredite der KfW-Bank mit staatlicher Förderung",
      icon: <BuildingIcon />,
      benefits: ["Niedrige Zinsen", "Lange Laufzeit", "Tilgungszuschuss möglich"]
    },
    {
      title: "Leasing",
      description: "Heizungsanlagen leasen statt kaufen - ideal für Unternehmen",
      icon: <HandshakeIcon />,
      benefits: ["Keine Anschaffungskosten", "Steuerliche Vorteile", "Wartung inklusive"]
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: "Kostenlose Beratung",
      description: "Wir analysieren Ihr Projekt und prüfen alle Fördermöglichkeiten"
    },
    {
      step: 2,
      title: "Antragsstellung",
      description: "Wir unterstützen Sie bei der korrekten Antragsstellung"
    },
    {
      step: 3,
      title: "Umsetzung",
      description: "Nach der Bewilligung setzen wir Ihr Projekt professionell um"
    },
    {
      step: 4,
      title: "Abrechnung",
      description: "Wir kümmern uns um die korrekte Abrechnung mit den Fördergebern"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-900 via-emerald-800 to-teal-700 text-white pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Bis zu 70% Förderung sichern
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fördermittel & Finanzierung
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-green-100">
            Sparen Sie bei Ihrer Modernisierung - wir zeigen Ihnen wie!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Intro Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Maximale Förderung für Ihr Projekt
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Damit die Investition unserer Kunden in Gebäude- und Haustechnik wirtschaftlich sinnvoll gelingt, 
            beraten wir sie auf Wunsch zu staatlichen Förderprogrammen und attraktiven Finanzierungsmöglichkeiten.
          </p>
        </div>

        {/* Subsidy Programs */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Aktuelle Förderprogramme 2024/2025
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subsidyPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`${program.color} p-6 text-white`}>
                  <div className="mb-4">{program.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{program.title}</h4>
                  <div className="text-2xl font-bold">{program.amount}</div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">{program.category}</div>
                  <p className="text-gray-700">{program.description}</p>
                  <div className="mt-4 pt-4 border-t">
                    <span className="text-green-600 font-medium flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      Wir übernehmen die Antragsstellung
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Financing Options */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Flexible Finanzierungsmöglichkeiten
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {financingOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="mb-6 text-center flex justify-center text-blue-600">{option.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">{option.title}</h4>
                <p className="text-gray-600 mb-6 text-center">{option.description}</p>
                
                <div className="space-y-3">
                  {option.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-20 bg-white rounded-3xl shadow-xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            So läuft die Förderberatung ab
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <div className="border-t-2 border-dashed border-gray-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-20 bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Erfolgreiche Projekte mit Förderung
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-bold mb-4">Familie Müller, Braunschweig</h4>
              <p className="text-gray-600 mb-4">
                &quot;Wärmepumpe mit 70% Förderung - statt 25.000€ nur 7.500€ Eigenanteil. 
                Jordan GmbH hat alles organisiert!&quot;
              </p>
              <div className="text-green-600 font-bold">Ersparnis: 17.500€</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-bold mb-4">Ehepaar Schmidt, Wolfsburg</h4>
              <p className="text-gray-600 mb-4">
                &quot;Badsanierung barrierefrei mit KfW-Zuschuss. Professionelle Abwicklung 
                von A bis Z.&quot;
              </p>
              <div className="text-green-600 font-bold">Ersparnis: 6.250€</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-bold mb-4">Firma Weber GmbH, Salzgitter</h4>
              <p className="text-gray-600 mb-4">
                &quot;Energetische Sanierung der Bürogebäude mit KfW-Kredit zu 0,01% Zinsen. 
                Unschlagbare Konditionen!&quot;
              </p>
              <div className="text-green-600 font-bold">Ersparnis: 45.000€</div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mb-20">
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-yellow-800 mb-6 flex items-center gap-3">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
              Wichtige Hinweise zu Förderungen
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-yellow-800">
              <div>
                <h4 className="font-bold mb-2">Vor Beauftragung beantragen:</h4>
                <p className="text-sm">
                  Förderanträge müssen VOR Projektbeginn gestellt werden. 
                  Wir beraten Sie rechtzeitig!
                </p>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">Aktualisierung der Programme:</h4>
                <p className="text-sm">
                  Förderprogramme ändern sich regelmäßig. Wir informieren Sie 
                  über die neuesten Entwicklungen.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">Fachbetrieb erforderlich:</h4>
                <p className="text-sm">
                  Viele Förderungen setzen die Ausführung durch zertifizierte 
                  Fachbetriebe voraus - wir sind qualifiziert!
                </p>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">Kombinierbarkeit prüfen:</h4>
                <p className="text-sm">
                  Manche Förderungen lassen sich kombinieren, andere nicht. 
                  Wir finden die beste Lösung für Sie.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Kostenlose Förderberatung vereinbaren</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Lassen Sie sich kostenfrei beraten und finden Sie heraus, welche Förderungen für Ihr Projekt möglich sind. 
            Wir übernehmen gerne die komplette Antragsstellung für Sie.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/kontakt" className="bg-white text-green-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
              Jetzt Beratungstermin vereinbaren
            </a>
            <a href="tel:053123449090" className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-600 transition-colors">
              Sofort anrufen: 0531 234 490 90
            </a>
          </div>
          
          <div className="mt-8 text-green-100">
            <p className="text-lg flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
              Tipp: Je früher Sie sich beraten lassen, desto mehr können Sie sparen!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
