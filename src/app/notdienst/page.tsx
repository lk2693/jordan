import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Notdienst() {
  // SVG Icons as components
  const FireIcon = () => (
    <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
    </svg>
  )
  const WaterIcon = () => (
    <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
  )
  const BoltIcon = () => (
    <svg className="w-10 h-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
  )
  const DrainIcon = () => (
    <svg className="w-10 h-10 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
    </svg>
  )
  const ToiletIcon = () => (
    <svg className="w-10 h-10 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
    </svg>
  )
  const SnowflakeIcon = () => (
    <svg className="w-10 h-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18-3 3m3-3 3 3m-3 15-3-3m3 3 3-3M3 12h18M3 12l3-3m-3 3 3 3m15-3-3-3m3 3-3 3" />
    </svg>
  )

  const emergencyServices = [
    {
      title: "Heizungsausfall",
      description: "Ihre Heizung ist ausgefallen? Wir sind rund um die Uhr für Sie da!",
      icon: <FireIcon />,
      urgent: true
    },
    {
      title: "Wasserschaden",
      description: "Rohrbruch oder Wasserleck? Sofortige Hilfe durch unsere Experten.",
      icon: <WaterIcon />,
      urgent: true
    },
    {
      title: "Stromausfall",
      description: "Elektrische Störungen und Ausfälle - wir beheben das Problem schnell.",
      icon: <BoltIcon />,
      urgent: true
    },
    {
      title: "Verstopfte Abflüsse",
      description: "Verstopfung in Bad oder Küche? Wir lösen das Problem professionell.",
      icon: <DrainIcon />,
      urgent: false
    },
    {
      title: "Defekte Sanitäranlagen",
      description: "WC, Waschbecken oder Dusche defekt? Schnelle Reparatur garantiert.",
      icon: <ToiletIcon />,
      urgent: false
    },
    {
      title: "Klimaanlagen-Störung",
      description: "Ihre Klimaanlage funktioniert nicht? Wir sorgen für schnelle Abhilfe.",
      icon: <SnowflakeIcon />,
      urgent: false
    }
  ]

  const serviceAreas = [
    "Braunschweig", "Wolfsburg", "Salzgitter", "Peine", "Gifhorn", 
    "Helmstedt", "Wolfenbüttel", "Goslar", "Hildesheim", "Hannover"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Emergency Hero Section */}
      <div className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Animated Emergency Lights */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-red-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-red-300/20 rounded-full blur-xl animate-pulse delay-500"></div>
          <div className="absolute bottom-10 left-1/2 w-40 h-40 bg-red-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 animate-bounce flex justify-center">
            <svg className="w-24 h-24 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
            </svg>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
            24/7 NOTDIENST
          </h1>
          <p className="text-2xl md:text-3xl max-w-3xl mx-auto leading-relaxed mb-8">
            Rund um die Uhr für Sie da - 365 Tage im Jahr!
          </p>
          
          {/* Emergency Contact */}
          <div className="bg-white/90 rounded-3xl p-8 max-w-2xl mx-auto shadow-2xl">
            <p className="text-xl mb-4 text-gray-700 font-medium">Im Notfall sofort anrufen:</p>
            <a 
              href="tel:053123449080" 
              className="block text-4xl sm:text-5xl md:text-6xl font-bold text-red-600 hover:text-red-700 hover:scale-105 transition-all"
              style={{ color: '#dc2626' }}
            >
              0531 23 44 909 80
            </a>
            <p className="text-lg mt-4 text-gray-600">
              Sofortige Hilfe • Professionelle Techniker • Faire Preise
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Service Promise */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Unser 24-Stunden-Notdienst-Versprechen
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            Bestens qualifizierte Kundendiensttechniker sind stets bereit, unseren Kunden zu dienen: 
            nachts, am Wochenende und an Feiertagen. Rund um die Uhr an 365 Tagen im Jahr.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="mb-4 flex justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">24/7 Verfügbar</h3>
              <p className="text-gray-600">Rund um die Uhr erreichbar</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="mb-4 flex justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Schnell vor Ort</h3>
              <p className="text-gray-600">Innerhalb von 60 Minuten bei Ihnen</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="mb-4 flex justify-center">
                <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Qualifizierte Techniker</h3>
              <p className="text-gray-600">Erfahrene Fachkräfte</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="mb-4 flex justify-center">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Faire Preise</h3>
              <p className="text-gray-600">Transparente Kostenvoranschläge</p>
            </div>
          </div>
        </div>

        {/* Emergency Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Unsere Notdienst-Leistungen
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 ${
                  service.urgent ? 'border-red-500' : 'border-blue-500'
                }`}
              >
                <div className="mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  {service.title}
                  {service.urgent && (
                    <span className="text-red-500 text-sm flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                      </svg>
                      DRINGEND
                    </span>
                  )}
                </h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                
                {service.urgent && (
                  <div className="mt-4 bg-red-50 p-3 rounded-lg">
                    <p className="text-red-600 text-sm font-medium flex items-center gap-2">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                      </svg>
                      Bei diesem Notfall sofort anrufen!
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Service Areas */}
        <div className="bg-blue-50 rounded-3xl p-12 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Unser Einsatzgebiet
          </h3>
          <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Wir sind in folgenden Städten und Gemeinden für Sie im Notdienst-Einsatz:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white p-4 rounded-xl text-center shadow-md">
                <span className="font-medium text-gray-900">{area}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-600 mt-6">
            Und weitere Gemeinden im Umkreis von 50 km um Braunschweig
          </p>
        </div>

        {/* What to do in Emergency */}
        <div className="bg-white rounded-3xl shadow-xl p-12 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Was tun im Notfall?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-3">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
                Bei akuten Notfällen:
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <strong>Sicherheit zuerst:</strong> Bei Wasserschäden Hauptwasserventil schließen, bei Stromausfällen Sicherungen prüfen
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <strong>Sofort anrufen:</strong> <a href="tel:053123449080" className="text-red-600 font-bold">0531 23 44 909 80</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <strong>Beschreibung geben:</strong> Schildern Sie das Problem so genau wie möglich
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <strong>Vor Ort bleiben:</strong> Unser Techniker ist in max. 60 Minuten bei Ihnen
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-3">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
                Präventive Maßnahmen:
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">•</div>
                  <div>Regelmäßige Wartung Ihrer Heizungsanlage</div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">•</div>
                  <div>Kontrolle der Wasserleitungen vor dem Winter</div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">•</div>
                  <div>Elektrische Anlagen regelmäßig prüfen lassen</div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">•</div>
                  <div>Unsere Wartungsverträge für maximale Sicherheit</div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 font-medium flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                  Tipp: Mit unseren Wartungsverträgen können Sie vielen Notfällen vorbeugen!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Jetzt Notdienst kontaktieren!</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Zögern Sie nicht - bei Notfällen sind wir rund um die Uhr für Sie da. 
            Ein Anruf genügt und unsere Experten sind auf dem Weg zu Ihnen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="tel:053123449080" 
              className="bg-white px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors flex items-center gap-3"
              style={{ color: '#dc2626' }}
            >
              <svg className="w-6 h-6" style={{ color: '#dc2626' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              0531 23 44 909 80
            </a>
            <div className="text-lg">
              <div className="font-bold">Oder per E-Mail:</div>
              <a href="mailto:notdienst@jordan24.de" className="underline">notdienst@jordan24.de</a>
            </div>
          </div>
          
          <div className="mt-8 text-sm text-red-100">
            <p>Verfügbar: 24 Stunden am Tag • 7 Tage die Woche • 365 Tage im Jahr</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
