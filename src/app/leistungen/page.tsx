'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Leistungen() {
  const services = [
    {
      title: 'Klima & Lüftung',
      description: 'Professionelle Klimaanlagen, Lüftungssysteme und Wärmepumpen für optimales Raumklima.',
      features: [
        'Klimaanlagen Installation & Wartung',
        'Lüftungsanlagen',
        'Wärmepumpen',
        'Energieberatung',
        'Smart Climate Control'
      ],
      icon: '❄️',
      color: 'blue',
      link: '/leistungen/klima'
    },
    {
      title: 'Heizung',
      description: 'Moderne Heizungssysteme, Wartung und energieeffiziente Modernisierungslösungen.',
      features: [
        'Gas- & Ölheizungen',
        'Pelletheizungen',
        'Solarthermie',
        'Heizungsmodernisierung',
        'Fußbodenheizung'
      ],
      icon: '🔥',
      color: 'orange',
      link: '/leistungen/heizung'
    },
    {
      title: 'Sanitär & Bad',
      description: 'Komplette Badinstallationen, Rohrleitungen und moderne Wassertechnik.',
      features: [
        'Badplanung & -sanierung',
        'Rohrleitungsinstallation',
        'Wassertechnik',
        'Barrierefreie Bäder',
        'Designbäder'
      ],
      icon: '🚿',
      color: 'cyan',
      link: '/leistungen/sanitaer'
    },
    {
      title: 'Elektro & Smart Home',
      description: 'Elektroinstallationen, intelligente Haussteuerung und moderne Gebäudetechnik.',
      features: [
        'Elektroinstallation',
        'Smart Home Systeme',
        'Photovoltaik',
        'E-Mobility Ladelösungen',
        'Gebäudeautomation'
      ],
      icon: '⚡',
      color: 'yellow',
      link: '/leistungen/elektro'
    }
  ];

  const additionalServices = [
    {
      title: 'Wartung & Service',
      description: 'Regelmäßige Wartung und schneller Service für alle Ihre Anlagen',
      icon: '🔧'
    },
    {
      title: 'Notdienst 24/7',
      description: 'Rund um die Uhr erreichbar für Notfälle',
      icon: '🚨'
    },
    {
      title: 'Energieberatung',
      description: 'Professionelle Beratung für energieeffiziente Lösungen',
      icon: '🌱'
    },
    {
      title: 'Fördermittelberatung',
      description: 'Unterstützung bei der Beantragung von Fördermitteln',
      icon: '💰'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 overflow-hidden rounded-[3rem] mx-4 mt-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-white/90">
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span className="ml-2 font-medium">Rated 4.9/5</span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  Experten-Beratung die echte Ergebnisse liefert
                </h1>

                <p className="text-xl text-white/90 leading-relaxed">
                  Steigern Sie Ihr Zuhause mit Expertenberatung, maßgeschneiderten Lösungen und 
                  unerschütterlicher Unterstützung, die auf Ihre Bedürfnisse zugeschnitten ist
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/kontakt"
                    className="group bg-white hover:bg-gray-100 text-teal-900 px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Kontakt aufnehmen</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link 
                    href="#services"
                    className="text-white px-8 py-4 rounded-full text-lg font-bold hover:underline transition-all flex items-center justify-center"
                  >
                    Was wir tun
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop"
                  alt="Jordan Beratung"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      {/* 3D Carousel Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Unsere Leistungen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von der Beratung bis zur Umsetzung - wir bieten Ihnen alle Leistungen rund um Klima, Heizung, Sanitär und Elektro aus einer Hand.
            </p>
          </div>

          <div className="relative flex items-center justify-center mb-20 px-4">
            <div className="carousel-container">
                {/* Service Card 1 - Klima */}
                <div className="carousel-slide">
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-2xl overflow-hidden h-[400px] flex flex-col transform transition-all duration-500">
                    <div className="relative h-56">
                      <img
                        src="https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?w=800&h=600&fit=crop"
                        alt="Klima & Lüftung"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">Klima & Lüftung</h3>
                      <p className="text-gray-600 text-lg mb-6 flex-1">
                        Professionelle Klimaanlagen und moderne Lüftungssysteme für optimales Raumklima das ganze Jahr über
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Card 2 - Heizung */}
                <div className="carousel-slide">
                  <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl shadow-2xl overflow-hidden h-[400px] flex flex-col transform transition-all duration-500">
                    <div className="relative h-56">
                      <img
                        src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop"
                        alt="Heizung"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">Heizungssysteme</h3>
                      <p className="text-gray-600 text-lg mb-6 flex-1">
                        Moderne Heizsysteme und energieeffiziente Lösungen für nachhaltiges und kosteneffizientes Heizen
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Card 3 - Sanitär */}
                <div className="carousel-slide">
                  <div className="bg-gradient-to-br from-cyan-50 to-white rounded-3xl shadow-2xl overflow-hidden h-[400px] flex flex-col transform transition-all duration-500">
                    <div className="relative h-56">
                      <img
                        src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop"
                        alt="Sanitär & Bad"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">Sanitär & Bad</h3>
                      <p className="text-gray-600 text-lg mb-6 flex-1">
                        Komplette Badinstallationen und professionelle Sanitärlösungen vom Fachmann für Ihr Traumzuhause
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Card 4 - Elektro */}
                <div className="carousel-slide">
                  <div className="bg-gradient-to-br from-yellow-50 to-white rounded-3xl shadow-2xl overflow-hidden h-[400px] flex flex-col transform transition-all duration-500">
                    <div className="relative h-56">
                      <img
                        src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop"
                        alt="Elektro"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">Elektroinstallation</h3>
                      <p className="text-gray-600 text-lg mb-6 flex-1">
                        Sichere Elektroinstallationen und moderne Smart-Home-Lösungen für intelligentes Wohnen
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Card 5 - Wärmepumpen */}
                <div className="carousel-slide">
                  <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl shadow-2xl overflow-hidden h-[400px] flex flex-col transform transition-all duration-500">
                    <div className="relative h-56">
                      <img
                        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop"
                        alt="Wärmepumpen"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">Wärmepumpen</h3>
                      <p className="text-gray-600 text-lg mb-6 flex-1">
                        Umweltfreundliche Wärmepumpen für nachhaltige und effiziente Energienutzung der Zukunft
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Card 6 - Notdienst */}
                <div className="carousel-slide">
                  <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl shadow-2xl overflow-hidden h-[400px] flex flex-col transform transition-all duration-500">
                    <div className="relative h-56">
                      <img
                        src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop"
                        alt="Notdienst"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">24/7 Notdienst</h3>
                      <p className="text-gray-600 text-lg mb-6 flex-1">
                        Rund um die Uhr erreichbar für alle Notfälle - schnell, zuverlässig und kompetent vor Ort
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            {/* Navigation Buttons */}
            <button 
              className="carousel-nav prev-btn"
              onClick={() => {
                const container = document.querySelector('.carousel-container');
                if (container) {
                  container.scrollBy({ left: -400, behavior: 'smooth' });
                }
              }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="carousel-nav next-btn"
              onClick={() => {
                const container = document.querySelector('.carousel-container');
                if (container) {
                  container.scrollBy({ left: 400, behavior: 'smooth' });
                }
              }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .carousel-container {
            display: flex;
            gap: 2rem;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
            -ms-overflow-style: none;
            padding: 2rem 4rem;
            max-width: 1400px;
            margin: 0 auto;
          }

          .carousel-container::-webkit-scrollbar {
            display: none;
          }

          .carousel-slide {
            flex: 0 0 400px;
            scroll-snap-align: center;
            transition: all 0.5s ease;
          }

          .carousel-slide:hover {
            transform: scale(1.05);
          }

          .carousel-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: white;
            border: none;
            width: 64px;
            height: 64px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-center;
            cursor: pointer;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            z-index: 10;
            transition: all 0.3s ease;
            color: #1e3a8a;
          }

          .carousel-nav:hover {
            background: #1e3a8a;
            color: white;
            transform: translateY(-50%) scale(1.1);
          }

          .prev-btn {
            left: 0;
          }

          .next-btn {
            right: 0;
          }

          @media (max-width: 768px) {
            .carousel-slide {
              flex: 0 0 300px;
            }
            
            .carousel-nav {
              width: 48px;
              height: 48px;
            }
          }
        `}} />
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Benötigen Sie eine individuelle Beratung?
          </h2>
          <p className="text-xl mb-8 text-blue-200">
            Kontaktieren Sie uns für ein kostenloses und unverbindliches Angebot
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/kontakt"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Jetzt Kontakt aufnehmen
            </Link>
            <a 
              href="tel:+4953123449090"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Anrufen: 0531 2 34 49 09-0
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
