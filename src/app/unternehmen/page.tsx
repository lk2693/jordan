'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export default function Unternehmen() {
  const stats = [
    { number: '25+', label: 'Jahre Erfahrung' },
    { number: '50+', label: 'Mitarbeiter' },
    { number: '1000+', label: 'Zufriedene Kunden' },
    { number: '24/7', label: 'Notdienst' }
  ];

  const values = [
    {
      title: 'Qualität',
      description: 'Wir setzen auf höchste Qualitätsstandards bei allen unseren Arbeiten.',
      icon: '🏆',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      title: 'Zuverlässigkeit',
      description: 'Termintreue und verlässliche Abwicklung sind für uns selbstverständlich.',
      icon: '⏰',
      color: 'from-red-400 to-red-600'
    },
    {
      title: 'Kompetenz',
      description: 'Unsere Fachkräfte bilden sich kontinuierlich weiter.',
      icon: '🎓',
      color: 'from-gray-700 to-gray-900'
    },
    {
      title: 'Kundenservice',
      description: '24-Stunden-Notdienst und persönliche Betreuung.',
      icon: '🤝',
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const team = [
    {
      name: 'Ronald Müller',
      role: 'Leiter Leistungscenter Heizung Sanitär',
      phone: '0531-23 44 90 916',
      email: 'r.mueller@jordan24.de',
      image: '/images/_4M7A0536.jpg'
    },
    {
      name: 'Krystian Wroblewski',
      role: 'Projekttechniker, Leiter-Beauftragter',
      image: null
    },
    {
      name: 'Holger Spieler',
      role: 'Projekttechniker',
      image: null
    },
    {
      name: 'Waldemar Kokot',
      role: 'Projekttechniker',
      image: null
    },
    {
      name: 'Wilfried Winter',
      role: 'Projekttechniker',
      image: null
    },
    {
      name: 'Thomas Vieweger',
      role: 'Projekttechniker',
      image: null
    },
    {
      name: 'Waldemar Baumann',
      role: 'Kundendiensttechniker',
      image: null
    },
    {
      name: 'Jens Niedermeyer',
      role: 'Kundendiensttechniker',
      image: null
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Background */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&h=1080&fit=crop"
            alt="Jordan Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Über uns</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Unser Team verbindet Expertise mit Kreativität, um Ihre Bedürfnisse in moderne Lösungen zu verwandeln, 
              die die Schönheit und den Komfort Ihres Zuhauses steigern.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story with Image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/jordan.png"
                  alt="Jordan Team bei der Arbeit"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Unsere Geschichte begann mit einer einfachen Idee
                </h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Angetrieben von dem Wunsch, professionelle Handwerkskunst mit exzellentem Service 
                    zu verbinden, gründete das Jordan-Team ein Unternehmen mit einer einfachen Mission: 
                    hochwertige Installationen zu schaffen, die inspirieren und begeistern.
                  </p>
                  <p>
                    Durch innovative Planung und nachhaltige Praktiken streben wir danach, 
                    Lösungen zu schaffen, die nicht nur funktional, sondern auch ästhetisch ansprechend sind 
                    und eine tiefere Wertschätzung für Qualität und Handwerkskunst fördern.
                  </p>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div>
                    <div className="text-5xl font-bold text-green-500 mb-2">15</div>
                    <div className="text-gray-600 text-lg">Jahre Erfahrung</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-green-500 mb-2">3k+</div>
                    <div className="text-gray-600 text-lg">Abgeschlossene Projekte</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Unsere Geschichte */}
      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Unsere Historie
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Über 45 Jahre Erfolgsgeschichte
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Von der Gründung bis heute – die wichtigsten Meilensteine
              </p>
            </div>

            {/* Simple Vertical Timeline */}
            <div className="relative pl-8 md:pl-0">
              {/* Vertical Line */}
              <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-px"></div>

              {/* 1976 */}
              <div className="relative pb-12 md:flex md:items-start">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 inline-block md:block">
                    <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">1976</span>
                    <h3 className="text-lg font-bold text-gray-900">Gründung</h3>
                    <p className="text-gray-600 text-sm mt-1">Am 1. März wurde die Firma Zajonc durch Hubert Zajonc gegründet.</p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>

              {/* 1999 */}
              <div className="relative pb-12 md:flex md:items-start">
                <div className="hidden md:block md:w-1/2"></div>
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">1999</span>
                    <h3 className="text-lg font-bold text-gray-900">Firmenübernahme</h3>
                    <p className="text-gray-600 text-sm mt-1">Am 1. Januar übernahm Siegmar Zajonc die Geschäftsführung.</p>
                  </div>
                </div>
              </div>

              {/* 2004 */}
              <div className="relative pb-12 md:flex md:items-start">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 inline-block md:block">
                    <span className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">2004</span>
                    <h3 className="text-lg font-bold text-gray-900">Zusammenlegung</h3>
                    <p className="text-gray-600 text-sm mt-1">Die Firmen Zajonc und JORDAN GmbH wurden am 1. April zusammengelegt.</p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>

              {/* 2010 */}
              <div className="relative pb-12 md:flex md:items-start">
                <div className="hidden md:block md:w-1/2"></div>
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <span className="inline-block bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">2010</span>
                    <h3 className="text-lg font-bold text-gray-900">Neues Firmengebäude</h3>
                    <p className="text-gray-600 text-sm mt-1">Von 2008-2010 entstand unser neues Gebäude. Einzug im April 2010.</p>
                  </div>
                </div>
              </div>

              {/* 2015 */}
              <div className="relative pb-12 md:flex md:items-start">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 inline-block md:block">
                    <span className="inline-block bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">2015</span>
                    <h3 className="text-lg font-bold text-gray-900">Profi im Handwerk</h3>
                    <p className="text-gray-600 text-sm mt-1">Im Februar zum &quot;Profi im Handwerk&quot; zertifiziert.</p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 w-6 h-6 bg-yellow-500 rounded-full border-4 border-white shadow flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>

              {/* Heute */}
              <div className="relative md:flex md:items-start">
                <div className="hidden md:block md:w-1/2"></div>
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-orange-500 p-5 rounded-xl shadow-md">
                    <span className="inline-block bg-white text-orange-600 text-xs font-bold px-3 py-1 rounded-full mb-2">Heute</span>
                    <h3 className="text-lg font-bold text-white">19+ Mitarbeiter</h3>
                    <p className="text-orange-100 text-sm mt-1">Die JORDAN GmbH beschäftigt momentan 19 engagierte Mitarbeiter.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Geschäftsführer Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                Geschäftsleitung
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Ihr Ansprechpartner</h2>
              <p className="text-xl text-gray-600">
                Persönlich. Kompetent. Für Sie da.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-80 md:h-auto">
                  <img
                    src="/images/Zajonc.jpg"
                    alt="Siegmar Zajonc - Geschäftsführer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Siegmar Zajonc</h3>
                  <p className="text-xl text-blue-600 font-semibold mb-6">Geschäftsführer</p>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Seit 1999 führt Siegmar Zajonc die Unternehmensgruppe mit Leidenschaft und Fachkompetenz. 
                    Als Meister seines Fachs steht er persönlich für Qualität und Zuverlässigkeit.
                  </p>

                  <div className="space-y-4">
                    <a href="tel:053123449090" className="flex items-center gap-4 text-gray-700 hover:text-orange-500 transition-colors group">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                        <svg className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Telefon</p>
                        <p className="font-semibold">0531-23 44 90 912</p>
                      </div>
                    </a>
                    
                    <a href="mailto:s.zajonc@jordan24.de" className="flex items-center gap-4 text-gray-700 hover:text-orange-500 transition-colors group">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                        <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">E-Mail</p>
                        <p className="font-semibold">s.zajonc@jordan24.de</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Unser Team
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Die Menschen hinter JORDAN</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Kompetente Fachkräfte, die sich um Ihre Projekte kümmern
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => {
                const initials = member.name.split(' ').map(n => n[0]).join('');
                const colors = [
                  'from-blue-500 to-blue-600',
                  'from-orange-500 to-orange-600',
                  'from-green-500 to-green-600',
                  'from-purple-500 to-purple-600',
                  'from-cyan-500 to-cyan-600',
                  'from-rose-500 to-rose-600',
                  'from-amber-500 to-amber-600',
                  'from-indigo-500 to-indigo-600'
                ];
                const colorClass = colors[index % colors.length];
                
                return (
                  <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group">
                    <div className="relative h-48">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${colorClass} flex items-center justify-center`}>
                          <span className="text-4xl font-bold text-white">{initials}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-gray-500 text-sm mb-3">{member.role}</p>
                      {(member.phone || member.email) && (
                        <div className="space-y-2 pt-3 border-t border-gray-100">
                          {member.phone && (
                            <a href={`tel:${member.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 transition-colors">
                              <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              <span>{member.phone}</span>
                            </a>
                          )}
                          {member.email && (
                            <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 transition-colors">
                              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              <span className="truncate">{member.email}</span>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Standort Section mit Karte */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Unser Standort
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">So finden Sie uns</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Besuchen Sie uns in Braunschweig - wir freuen uns auf Sie!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              {/* Karte */}
              <div className="h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Map 
                  lat={52.2350}
                  lng={10.5650}
                  zoom={15}
                  markerText="JORDAN GmbH"
                />
              </div>

              {/* Kontaktinfos */}
              <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">JORDAN GmbH</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Adresse</p>
                      <p className="text-gray-600">Rischbleek 6</p>
                      <p className="text-gray-600">38126 Braunschweig</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Telefon</p>
                      <a href="tel:053123449090" className="text-gray-600 hover:text-orange-500 transition-colors">0531-23 44 90 90</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">E-Mail</p>
                      <a href="mailto:info@jordan24.de" className="text-gray-600 hover:text-orange-500 transition-colors">info@jordan24.de</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Öffnungszeiten</p>
                      <p className="text-gray-600">Mo - Fr: 7:00 - 17:00 Uhr</p>
                      <p className="text-gray-600">Notdienst: 24/7</p>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://www.google.com/maps/dir//Rischbleek+6,+38126+Braunschweig" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Route berechnen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Lernen Sie uns kennen</h2>
          <p className="text-xl mb-8 text-white max-w-2xl mx-auto">
            Überzeugen Sie sich selbst von unserer Kompetenz und unserem Service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/kontakt"
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl text-lg font-bold transition-colors"
            >
              Kontakt aufnehmen
            </Link>
            <Link 
              href="/referenzen"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-10 py-4 rounded-xl text-lg font-bold transition-colors"
            >
              Referenzen ansehen
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
