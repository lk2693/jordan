
import Link from 'next/link';
import Image from 'next/image';
import MapWrapper from '@/components/MapWrapper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über uns | Jordan GmbH — Seit 1976 in Braunschweig',
  description: 'Erfahren Sie mehr über die Jordan GmbH: 45+ Jahre Erfahrung, 19+ Mitarbeiter und unsere Firmengeschichte in Braunschweig.',
};

export default function Unternehmen() {
  const timeline = [
    { year: '1976', title: 'Gründung', desc: 'Am 1. März wurde die Firma Zajonc durch Hubert Zajonc gegründet.', color: 'bg-amber-500' },
    { year: '1999', title: 'Firmenübernahme', desc: 'Am 1. Januar übernahm Siegmar Zajonc die Geschäftsführung.', color: 'bg-blue-600' },
    { year: '2004', title: 'Zusammenlegung', desc: 'Die Firmen Zajonc und JORDAN GmbH wurden am 1. April zusammengelegt.', color: 'bg-green-600' },
    { year: '2010', title: 'Neues Firmengebäude', desc: 'Von 2008-2010 entstand unser neues Gebäude. Einzug im April 2010.', color: 'bg-purple-600' },
    { year: '2015', title: 'Profi im Handwerk', desc: 'Im Februar zum "Profi im Handwerk" zertifiziert.', color: 'bg-amber-500' },
    { year: 'Heute', title: '19+ Mitarbeiter', desc: 'Die JORDAN GmbH beschäftigt momentan 19 engagierte Mitarbeiter.', color: 'bg-amber-500', highlight: true },
  ];

  const values = [
    { title: 'Qualität', description: 'Höchste Qualitätsstandards bei allen Arbeiten.', icon: '🏆' },
    { title: 'Zuverlässigkeit', description: 'Termintreue und verlässliche Abwicklung.', icon: '⏰' },
    { title: 'Kompetenz', description: 'Kontinuierliche Weiterbildung unserer Fachkräfte.', icon: '🎓' },
    { title: 'Kundenservice', description: '24-Stunden-Notdienst und persönliche Betreuung.', icon: '🤝' },
  ];

  const team = [
    { name: 'Ronald Müller', role: 'Leiter Leistungscenter Heizung Sanitär', phone: '0531-23 44 90 916', email: 'r.mueller@jordan24.de', image: '/images/_4M7A0536.jpg' },
    { name: 'Krystian Wroblewski', role: 'Projekttechniker, Leiter-Beauftragter', image: null },
    { name: 'Holger Spieler', role: 'Projekttechniker', image: null },
    { name: 'Waldemar Kokot', role: 'Projekttechniker', image: null },
    { name: 'Wilfried Winter', role: 'Projekttechniker', image: null },
    { name: 'Thomas Vieweger', role: 'Projekttechniker', image: null },
    { name: 'Waldemar Baumann', role: 'Kundendiensttechniker', image: null },
    { name: 'Jens Niedermeyer', role: 'Kundendiensttechniker', image: null },
  ];

  const colorPool = [
    'from-blue-500 to-blue-600',
    'from-amber-500 to-amber-600',
    'from-green-500 to-green-600',
    'from-purple-500 to-purple-600',
    'from-cyan-500 to-cyan-600',
    'from-rose-500 to-rose-600',
    'from-amber-500 to-amber-600',
    'from-indigo-500 to-indigo-600',
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#152852] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&h=800&fit=crop" alt="" fill sizes="100vw" className="object-cover opacity-25" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#152852]/60 via-[#152852]/70 to-[#152852]/95" />
        </div>
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-6">
              <span className="text-sm font-medium text-white/80">Seit 1976 in Braunschweig</span>
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-6" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.3)' }}>
              Über{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F39900] to-[#FFB617]">
                JORDAN GmbH
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}>
              Unser Team verbindet Expertise mit Leidenschaft, um Ihre Bedürfnisse in 
              moderne Lösungen für Klima, Heizung, Sanitär und Elektro zu verwandeln.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12 max-w-3xl">
            {[
              { number: '45+', label: 'Jahre Erfahrung' },
              { number: '19+', label: 'Mitarbeiter' },
              { number: '3000+', label: 'Projekte' },
              { number: '24/7', label: 'Notdienst' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl py-4 px-3 text-center border border-white/10">
                <p className="text-2xl md:text-3xl font-extrabold text-white">{stat.number}</p>
                <p className="text-xs text-white/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/jordan.png"
                alt="Jordan Team bei der Arbeit"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <span className="inline-block bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold">
                Unsere Geschichte
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Eine einfache Idee wurde zu über 45 Jahren Erfolgsgeschichte
              </h2>
              <div className="space-y-4 text-slate-500 leading-relaxed">
                <p>
                  Angetrieben von dem Wunsch, professionelle Handwerkskunst mit exzellentem Service 
                  zu verbinden, gründete das Jordan-Team ein Unternehmen mit einer einfachen Mission: 
                  hochwertige Installationen zu schaffen, die inspirieren und begeistern.
                </p>
                <p>
                  Durch innovative Planung und nachhaltige Praktiken streben wir danach, 
                  Lösungen zu schaffen, die nicht nur funktional, sondern auch ästhetisch 
                  ansprechend sind.
                </p>
              </div>
              {/* Values */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                {values.map((v, i) => (
                  <div key={i} className="flex items-start gap-3 bg-slate-50 rounded-xl p-3">
                    <span className="text-xl">{v.icon}</span>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{v.title}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                Unsere Historie
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Über 45 Jahre Erfolgsgeschichte
              </h2>
            </div>

            <div className="relative pl-8 md:pl-0">
              <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 md:-translate-x-px" />
              {timeline.map((item, index) => (
                <div key={index} className={`relative pb-10 last:pb-0 md:flex md:items-start ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className={`${item.highlight ? 'bg-amber-500 text-white' : 'bg-white border border-slate-100'} p-5 rounded-xl shadow-sm inline-block md:block`}>
                      <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 ${item.highlight ? 'bg-white text-amber-600' : `${item.color} text-white`}`}>
                        {item.year}
                      </span>
                      <h3 className={`text-lg font-bold ${item.highlight ? 'text-white' : 'text-slate-900'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm mt-1 ${item.highlight ? 'text-amber-100' : 'text-slate-500'}`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 w-6 h-6 ${item.color} rounded-full border-4 border-white shadow flex items-center justify-center`}>
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div className={`hidden md:block md:w-1/2`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Geschäftsführer */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                Geschäftsleitung
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Ihr Ansprechpartner</h2>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-amber-50/30 rounded-2xl overflow-hidden border border-slate-100">
              <div className="grid md:grid-cols-2">
                <div className="relative h-72 md:h-auto">
                  <Image
                    src="/images/Zajonc.jpg"
                    alt="Siegmar Zajonc - Geschäftsführer"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-1">Siegmar Zajonc</h3>
                  <p className="text-amber-600 font-semibold mb-5">Geschäftsführer</p>
                  <p className="text-slate-500 leading-relaxed mb-6 text-sm">
                    Seit 1999 führt Siegmar Zajonc die Unternehmensgruppe mit Leidenschaft und Fachkompetenz. 
                    Als Meister seines Fachs steht er persönlich für Qualität und Zuverlässigkeit.
                  </p>
                  <div className="space-y-3">
                    <a href="tel:053123449012" className="flex items-center gap-3 text-slate-600 hover:text-amber-600 transition-colors text-sm group">
                      <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                        <svg className="w-4 h-4 text-amber-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      </div>
                      <span className="font-semibold">0531-23 44 90 912</span>
                    </a>
                    <a href="mailto:s.zajonc@jordan24.de" className="flex items-center gap-3 text-slate-600 hover:text-amber-600 transition-colors text-sm group">
                      <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                        <svg className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <span className="font-semibold">s.zajonc@jordan24.de</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                Unser Team
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                Die Menschen hinter JORDAN
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                Kompetente Fachkräfte, die sich um Ihre Projekte kümmern
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {team.map((member, index) => {
                const initials = member.name.split(' ').map(n => n[0]).join('');
                return (
                  <div key={index} className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                    <div className="relative h-40">
                      {member.image ? (
                        <Image src={member.image} alt={member.name} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover object-top" loading="lazy" />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${colorPool[index % colorPool.length]} flex items-center justify-center`}>
                          <span className="text-3xl font-bold text-white">{initials}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-slate-900 text-sm">{member.name}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">{member.role}</p>
                      {(member.phone || member.email) && (
                        <div className="space-y-1.5 pt-3 mt-3 border-t border-slate-100">
                          {member.phone && (
                            <a href={`tel:${member.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-2 text-xs text-slate-500 hover:text-amber-600 transition-colors">
                              <svg className="w-3 h-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                              </svg>
                              {member.phone}
                            </a>
                          )}
                          {member.email && (
                            <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-xs text-slate-500 hover:text-amber-600 transition-colors truncate">
                              <svg className="w-3 h-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
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

      {/* Standort */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                Unser Standort
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">So finden Sie uns</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              <div className="h-[380px] lg:h-auto rounded-2xl overflow-hidden border border-slate-200">
                <MapWrapper lat={52.2350} lng={10.5650} zoom={15} markerText="JORDAN GmbH" />
              </div>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col justify-center">
                <h3 className="text-xl font-extrabold text-slate-900 mb-6">JORDAN GmbH</h3>
                <div className="space-y-5">
                  {[
                    { label: 'Adresse', value: 'Rischbleek 3\n38126 Braunschweig', icon: '📍' },
                    { label: 'Telefon', value: '0531-23 44 90 90', href: 'tel:053123449090', icon: '📞' },
                    { label: 'E-Mail', value: 'info@jordan24.de', href: 'mailto:info@jordan24.de', icon: '✉️' },
                    { label: 'Öffnungszeiten', value: 'Mo – Do: 7:00 – 15:45\nFr: 7:00 – 11:45\nNotdienst: 24/7', icon: '🕐' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-lg mt-0.5">{item.icon}</span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm text-amber-600 hover:text-amber-700 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-slate-500 whitespace-pre-line">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="https://www.google.com/maps/dir//Rischbleek+3,+38126+Braunschweig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#152852] px-6 py-3 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Route berechnen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#152852] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Lernen Sie uns kennen
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
            Überzeugen Sie sich von unserer Kompetenz und unserem Service.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#152852] px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-0.5"
            >
              Kontakt aufnehmen
            </Link>
            <Link
              href="/referenzen"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold transition-all"
            >
              Referenzen ansehen
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
