import Image from 'next/image';
import Link from 'next/link';

import CalculatorSection from '@/components/CalculatorSection';
import FaqAccordion from '@/components/FaqAccordion';
import HeroContactForm from '@/components/HeroContactForm';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Jordan GmbH',
    description: 'Ihr Experte für Heizung, Sanitär, Klima und Elektro in Braunschweig',
    url: 'https://jordan-gmbh.de',
    telephone: '+49 531 23 44 909 80',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rischbleek 3',
      addressLocality: 'Braunschweig',
      postalCode: '38126',
      addressCountry: 'DE'
    }
  };

  const services = [
    {
      title: 'Wärmepumpen',
      description: 'Moderne Wärmepumpentechnologie für effizientes Heizen und Kühlen.',
      icon: 'globe',
      color: 'emerald',
      link: '/leistungen'
    },
    {
      title: 'Heizungsanlagen',
      description: 'Installation, Wartung und Reparatur moderner Heizungssysteme.',
      icon: 'fire',
      color: 'orange',
      link: '/leistungen'
    },
    {
      title: 'Sanitär & Bad',
      description: 'Komplette Badinstallationen und professionelle Sanitärlösungen.',
      icon: 'water',
      color: 'cyan',
      link: '/leistungen'
    },
    {
      title: 'Klimaanlagen',
      description: 'Klimatisierung für angenehme Temperaturen das ganze Jahr.',
      icon: 'snow',
      color: 'blue',
      link: '/leistungen'
    },
    {
      title: 'Elektroinstallation',
      description: 'Sichere und moderne Elektroinstallationen und Smart Home.',
      icon: 'bolt',
      color: 'yellow',
      link: '/leistungen'
    },
    {
      title: 'Notdienst 24/7',
      description: 'Rund um die Uhr erreichbar für alle Notfälle.',
      icon: 'bell',
      color: 'red',
      link: '/notdienst'
    },
  ];

  const serviceIcons: Record<string, React.ReactNode> = {
    globe: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 10-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.081.487-.195.964-.66 1.119l-.45.15" />
      </svg>
    ),
    fire: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      </svg>
    ),
    water: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    snow: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3" />
      </svg>
    ),
    bolt: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    bell: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
  };

  const stats = [
    { value: '25+', label: 'Jahre Erfahrung' },
    { value: '3.000+', label: 'Projekte' },
    { value: '50+', label: 'Mitarbeiter' },
    { value: '4.9', label: 'Google Bewertung', suffix: '⭐' },
  ];

  const testimonials = [
    {
      name: 'Martina Sandfuchs',
      text: 'Sehr gute Qualität, termingerecht geliefert und fähige Handwerker, alles schön sauber, Problemchen kreativ gelöst - super.',
      rating: 5,
    },
    {
      name: 'Thomas Müller',
      text: 'Professionelle Beratung und exzellente Ausführung. Die neue Wärmepumpe läuft perfekt und spart uns jeden Monat Geld.',
      rating: 5,
    },
    {
      name: 'Sandra Weber',
      text: 'Der Notdienst kam wirklich schnell und hat das Problem kompetent gelöst. Sehr empfehlenswert!',
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: 'Sind Ihre Fachkräfte lizenziert und versichert?',
      answer: 'Ja, alle unsere Fachkräfte sind vollständig lizenziert, versichert und haben umfassende Schulungen durchlaufen, um höchste Servicequalität zu gewährleisten.'
    },
    {
      question: 'Bieten Sie kostenlose Kostenvoranschläge an?',
      answer: 'Ja, wir bieten kostenlose und unverbindliche Kostenvoranschläge für alle unsere Dienstleistungen an. Kontaktieren Sie uns für einen Termin.'
    },
    {
      question: 'Welche Zahlungsmethoden akzeptieren Sie?',
      answer: 'Wir akzeptieren Barzahlung, EC-Karte, Kreditkarte und Überweisung. Für größere Projekte bieten wir auch Ratenzahlung an.'
    },
    {
      question: 'Bieten Sie Finanzierungsmöglichkeiten an?',
      answer: 'Ja, wir arbeiten mit verschiedenen Finanzierungspartnern zusammen und helfen Ihnen gerne bei der Beantragung von Fördermitteln.'
    }
  ];

  const colorMap: Record<string, string> = {
    emerald: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100',
    orange: 'bg-orange-50 text-orange-600 group-hover:bg-orange-100',
    cyan: 'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-100',
    blue: 'bg-blue-50 text-blue-600 group-hover:bg-blue-100',
    yellow: 'bg-amber-50 text-amber-600 group-hover:bg-amber-100',
    red: 'bg-red-50 text-red-600 group-hover:bg-red-100',
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-screen flex items-center bg-[#152852] overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=800&fit=crop&q=75"
            alt="Handwerker bei der Arbeit"
            fill
            sizes="100vw"
            quality={70}
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#152852]/70 via-[#152852]/60 to-[#152852]/90" />
        </div>
        {/* Accent glow — hidden on mobile via CSS */}
        <div className="hidden md:block absolute top-1/4 -right-32 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-8 max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/10">
                <span className="inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                <span className="text-sm font-medium text-white/80">Seit über 25 Jahren in Braunschweig</span>
              </div>

              {/* Headline */}
              <h1 className="text-[clamp(2.5rem,5vw+1rem,4.5rem)] font-black text-white leading-[1.05] tracking-tight" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
                Kompetent beraten.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F39900] to-[#FFB617]">
                  Exakt planen.
                </span>{' '}
                Zuverlässig umsetzen.
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}>
                Ihr Meisterbetrieb für Klima, Heizung, Sanitär und Elektro. 
                Von der Beratung bis zur Umsetzung — alles aus einer Hand.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#152852] px-7 py-3.5 rounded-xl text-[0.9375rem] font-bold transition-colors duration-200"
                >
                  Kostenlos beraten lassen
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <a
                  href="tel:053123449080"
                  className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 px-7 py-3.5 rounded-xl text-[0.9375rem] font-semibold transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  0531 23 44 909 80
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Kostenlose Beratung
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  24/7 Notdienst
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Festpreisgarantie
                </div>
              </div>
            </div>

            {/* Right - Contact Form Card (Client Component) */}
            <HeroContactForm />
          </div>

          {/* Stats bar */}
          <div className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center bg-white/5 rounded-2xl py-5 px-4 border border-white/8">
                <p className="text-2xl md:text-3xl font-extrabold text-white">
                  {stat.value} {stat.suffix && <span className="text-lg">{stat.suffix}</span>}
                </p>
                <p className="text-xs md:text-sm text-slate-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES ═══════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-block bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Unsere Leistungen
            </span>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-slate-900 leading-tight mb-4">
              Alles aus einer Hand — von Profis für Sie
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Von der ersten Beratung bis zur finalen Abnahme — wir begleiten Sie mit Expertise und Leidenschaft.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300 ${colorMap[service.color]}`}>
                  {serviceIcons[service.icon]}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-400 group-hover:text-amber-600 transition-colors duration-200">
                  Mehr erfahren
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ ABOUT / USP ═══════ */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image side */}
              <div className="relative">
                <div className="relative h-[480px] md:h-[560px] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=600&fit=crop&q=75"
                    alt="Jordan Handwerker bei der Arbeit"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={70}
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Floating stats card */}
                <div className="absolute -bottom-6 -right-4 md:right-8 bg-white rounded-2xl p-5 shadow-xl border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold text-slate-900">4.9/5</p>
                      <p className="text-xs text-slate-500">Google Bewertung</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className="space-y-6">
                <span className="inline-block bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold">
                  Warum Jordan?
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  Wir verwandeln Ihr Zuhause in Ihre 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500"> Wohlfühloase</span>
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed">
                  Ob Einfamilienhaus oder Großprojekt — unser erfahrenes Team setzt Ihre Vorstellungen 
                  von modernem Wohnen mit Präzision und Leidenschaft um.
                </p>

                <div className="space-y-4 pt-2">
                  {[
                    { title: 'Nachhaltige Technologien', desc: 'Moderne Wärmepumpen, energieeffiziente Heizungen und umweltfreundliche Materialien.' },
                    { title: 'Persönlicher Service', desc: 'Individuelle Beratung, exakte Planung und zuverlässige Umsetzung.' },
                    { title: 'Festpreisgarantie', desc: 'Transparente Kosten ohne versteckte Überraschungen.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href="/unternehmen"
                    className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    Mehr über uns erfahren
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CALCULATOR (Client Component, Lazy-loaded) ═══════ */}
      <CalculatorSection />

      {/* ═══════ REFERENZEN PREVIEW ═══════ */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div>
                <span className="inline-block bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                  Referenzen
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                  Unsere aktuellen Projekte
                </h2>
              </div>
              <Link
                href="/referenzen"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
              >
                Alle Referenzen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group">
                <Image src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&h=600&fit=crop&q=75" alt="Badezimmer Renovierung" fill sizes="(max-width: 768px) 50vw, 33vw" quality={70} className="object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-4 left-4 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Badsanierung</p>
              </div>
              <div className="relative h-64 md:h-80 md:col-span-2 rounded-2xl overflow-hidden group">
                <Image src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=400&fit=crop&q=75" alt="Heizungsinstallation" fill sizes="(max-width: 768px) 50vw, 66vw" quality={70} className="object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-4 left-4 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Heizungsinstallation</p>
              </div>
              <div className="relative h-64 md:h-80 md:col-span-2 rounded-2xl overflow-hidden group">
                <Image src="https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?w=800&h=400&fit=crop&q=75" alt="Klimaanlage" fill sizes="(max-width: 768px) 50vw, 66vw" quality={70} className="object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-4 left-4 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Klimatechnik</p>
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group">
                <Image src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=600&fit=crop&q=75" alt="Sanitär" fill sizes="(max-width: 768px) 50vw, 33vw" quality={70} className="object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-4 left-4 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Sanitärinstallation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ EMERGENCY CTA ═══════ */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Notfall? Wir sind sofort da!</h3>
                <p className="text-red-100">24/7 Notdienst — 365 Tage im Jahr</p>
              </div>
            </div>
            <a
              href="tel:053123449080"
              className="inline-flex items-center gap-2 bg-white text-red-700 px-7 py-3.5 rounded-xl font-bold hover:bg-red-50 transition-colors duration-200 flex-shrink-0"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Jetzt anrufen
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                Kundenstimmen
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                Was unsere Kunden sagen
              </h2>
              <p className="text-slate-500 max-w-lg mx-auto">
                Echte Bewertungen von zufriedenen Kunden aus Braunschweig und Umgebung.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl p-6 md:p-7 border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-shadow duration-300">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-amber-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-amber-700">{t.name.charAt(0)}</span>
                    </div>
                    <span className="text-sm font-semibold text-slate-900">{t.name}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/kundenbewertungen"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
              >
                Alle Bewertungen ansehen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FAQ (Client Component) ═══════ */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                Häufige Fragen
              </h2>
            </div>

            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="py-20 md:py-28 bg-[#152852] relative overflow-hidden">
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/8 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Bereit für Ihr nächstes Projekt?
            </h2>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              Lassen Sie uns gemeinsam Ihre Vision verwirklichen. Jetzt kostenlos und unverbindlich beraten lassen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#152852] px-8 py-4 rounded-xl font-bold transition-colors duration-200"
              >
                Projekt anfragen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="tel:053123449080"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
