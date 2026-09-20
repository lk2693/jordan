import Image from 'next/image';
import Link from 'next/link';

import AmbientVideo from '@/components/AmbientVideo';
import AnimatedCounter from '@/components/AnimatedCounter';
import CalculatorSection from '@/components/CalculatorSection';
import FaqAccordion from '@/components/FaqAccordion';
import HeroContactForm from '@/components/HeroContactForm';
import Kicker from '@/components/Kicker';
import Reveal from '@/components/Reveal';
import { reviews } from '@/lib/reviews';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Jordan GmbH',
    description: 'Ihr Experte für Heizung, Sanitär, Klima und Elektro in Braunschweig',
    url: 'https://jordan-gmbh.de',
    telephone: '+49 531 23449090',
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
      description: 'Beratung, Auslegung und Einbau — inklusive Fördermittel-Antrag.',
      icon: 'globe',
      link: '/leistungen'
    },
    {
      title: 'Heizungsanlagen',
      description: 'Installation, Wartung und Reparatur moderner Heizungssysteme.',
      icon: 'fire',
      link: '/leistungen'
    },
    {
      title: 'Sanitär & Bad',
      description: 'Vom tropfenden Hahn bis zur kompletten Badsanierung.',
      icon: 'water',
      link: '/leistungen'
    },
    {
      title: 'Klimaanlagen',
      description: 'Planung und Montage von Klima- und Lüftungstechnik.',
      icon: 'snow',
      link: '/leistungen'
    },
    {
      title: 'Elektroinstallation',
      description: 'Elektroinstallationen, Zählerschränke und Smart Home.',
      icon: 'bolt',
      link: '/leistungen'
    },
    {
      title: 'Notdienst',
      description: 'Bei Heizungsausfall oder Wasserschaden rund um die Uhr erreichbar.',
      icon: 'bell',
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

  const trustItems = [
    'Meisterbetrieb',
    'Festpreisgarantie',
    '24/7 Notdienst',
    'Alles aus einer Hand',
    'Fördermittel-Service',
    'Über 25 Jahre in Braunschweig',
  ];

  const processSteps = [
    {
      title: 'Anfrage stellen',
      duration: 'Dauert 2 Minuten',
      description: 'Rückruf anfordern oder direkt anrufen — ohne Papierkram und Wartezeit.',
    },
    {
      title: 'Beratung vor Ort',
      duration: 'Kostenlos & unverbindlich',
      description: 'Ein Meister schaut sich Ihr Projekt an und berät Sie ehrlich — auch zu Fördermitteln.',
    },
    {
      title: 'Festpreis & Umsetzung',
      duration: 'Termingerecht',
      description: 'Sie erhalten ein transparentes Festpreis-Angebot. Wir setzen um — sauber und pünktlich.',
    },
  ];

  const references = [
    { src: '/images/Friedrich_Vogt_36_Badezimmer_web_6.jpg', alt: 'Badsanierung Friedrich-Vogt-Straße', label: 'Badsanierung', place: 'Friedrich-Vogt-Straße', span: false },
    { src: '/images/Heizung_web_11.jpg', alt: 'Moderne Heizungsanlage', label: 'Heizungsinstallation', place: 'Braunschweig', span: true },
    { src: '/images/Wilhelmstr_74_web_2.jpg', alt: 'Projekt Wilhelmstraße Braunschweig', label: 'Komplettsanierung', place: 'Wilhelmstraße 74', span: true },
    { src: '/images/Otto_Mueller_Str_14_web_8.jpg', alt: 'Projekt Otto-Müller-Straße', label: 'Haustechnik', place: 'Otto-Müller-Straße', span: false },
  ];

  const testimonials = reviews.slice(0, 3);

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

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-screen flex items-center bg-[#152852] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/20210916_162425_bj-min2.jpg"
            alt="Jordan Monteure bei der Arbeit"
            fill
            sizes="100vw"
            quality={75}
            className="object-cover opacity-30"
            priority
          />
          {/* Bewegungs-Layer nur auf Desktop — Mobile behält das statische Foto */}
          <AmbientVideo
            src="/images/videowaerme.mp4"
            preload="none"
            className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#152852]/80 via-[#152852]/70 to-[#152852]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-32 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-7 max-w-xl">
              <div className="animate-fade-up">
                <Kicker light>Meisterbetrieb in Braunschweig</Kicker>
              </div>

              <h1 className="text-[clamp(2.5rem,4.5vw+1rem,4.25rem)] font-black text-white leading-[1.06] tracking-tight animate-fade-up delay-100">
                Kompetent beraten. Exakt planen.{' '}
                <span className="text-[#FFB617]">Zuverlässig umsetzen.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg animate-fade-up delay-200">
                Klima, Heizung, Sanitär und Elektro — seit über 25 Jahren,
                von der Beratung bis zur Umsetzung aus einer Hand.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1 animate-fade-up delay-300">
                <Link
                  href="/kontakt"
                  className="group inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#152852] px-7 py-3.5 rounded-lg text-[0.9375rem] font-bold transition-colors duration-200"
                >
                  Kostenlos beraten lassen
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <a
                  href="tel:053123449090"
                  className="inline-flex items-center justify-center gap-2 text-white border border-white/40 hover:border-white hover:bg-white/5 px-7 py-3.5 rounded-lg text-[0.9375rem] font-semibold transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  0531 234 490 90
                </a>
              </div>

              <p className="text-sm text-slate-400 pt-2 animate-fade-up delay-400">
                Kostenlose Beratung · 24/7 Notdienst · Festpreisgarantie
              </p>
            </div>

            {/* Right - Contact Form Card (Client Component) */}
            <div className="animate-fade-up delay-300">
              <HeroContactForm />
            </div>
          </div>

          {/* Stats — schlichte Reihe mit Trennlinien statt Karten */}
          <div className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-white/15 animate-fade-up delay-500">
            <div className="py-6 pr-6 border-b md:border-b-0 border-white/15">
              <p className="text-3xl font-extrabold text-white"><AnimatedCounter value={25} suffix="+" /></p>
              <p className="text-sm text-slate-400 mt-1">Jahre Erfahrung</p>
            </div>
            <div className="py-6 px-6 border-b md:border-b-0 border-l border-white/15">
              <p className="text-3xl font-extrabold text-white"><AnimatedCounter value={3000} suffix="+" /></p>
              <p className="text-sm text-slate-400 mt-1">Projekte umgesetzt</p>
            </div>
            <div className="py-6 pr-6 md:px-6 md:border-l border-white/15">
              <p className="text-3xl font-extrabold text-white"><AnimatedCounter value={50} suffix="+" /></p>
              <p className="text-sm text-slate-400 mt-1">Mitarbeiter</p>
            </div>
            <div className="py-6 px-6 border-l border-white/15">
              <p className="text-3xl font-extrabold text-white"><AnimatedCounter value={4.9} decimals={1} /><span className="text-lg text-slate-400 font-semibold"> / 5</span></p>
              <p className="text-sm text-slate-400 mt-1">Google-Bewertung</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ TRUST-LAUFBAND — dezent, weiß mit Linien ═══════ */}
      <section className="py-4 bg-white border-b border-slate-200 overflow-hidden" aria-label="Unsere Versprechen">
        <div className="marquee-mask overflow-hidden">
          <div className="flex w-max animate-marquee">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
                {trustItems.map((item) => (
                  <span key={`${copy}-${item}`} className="flex items-center px-7 text-slate-500 font-medium text-sm whitespace-nowrap">
                    <span className="w-1 h-1 bg-amber-500 mr-7" aria-hidden />
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES ═══════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <Reveal className="max-w-2xl mb-14 space-y-4">
            <Kicker>Leistungen</Kicker>
            <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-slate-900 leading-tight">
              Vier Gewerke. Ein Betrieb.
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Heizung, Sanitär, Klima und Elektro müssen zusammenpassen.
              Bei uns kommt alles aus einem Haus — abgestimmt geplant und ausgeführt.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={(index % 3) * 100}>
                <Link
                  href={service.link}
                  className="group flex flex-col h-full bg-white rounded-lg p-6 border border-slate-200 hover:border-[#152852] transition-colors duration-200"
                >
                  <div className="text-[#152852] mb-5">
                    {serviceIcons[service.icon]}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600">
                    Mehr erfahren
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ ABOUT / USP ═══════ */}
      <section className="py-20 md:py-28 bg-[var(--warm-50)] border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image side — echte Projektfotos */}
              <Reveal direction="left">
                <div className="relative pb-10">
                  <div className="relative h-[340px] md:h-[420px] rounded-lg overflow-hidden">
                    <Image
                      src="/images/Heizung_web_11.jpg"
                      alt="Von Jordan installierte Heizungsanlage"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={75}
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-0 right-6 md:right-10 w-40 md:w-52 h-40 md:h-52 rounded-lg overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src="/images/Friedrich_Vogt_36_Badezimmer_web_6.jpg"
                      alt="Von Jordan sanierte Badezimmer"
                      fill
                      sizes="200px"
                      quality={75}
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Reveal>

              {/* Content side */}
              <Reveal direction="right">
                <div className="space-y-6">
                  <Kicker>Warum Jordan</Kicker>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                    Ein Ansprechpartner für Ihr ganzes Projekt
                  </h2>
                  <p className="text-lg text-slate-500 leading-relaxed">
                    Ob Einfamilienhaus oder Großprojekt: Bei uns koordinieren Sie keine fünf Gewerke.
                    Sie haben einen festen Ansprechpartner — vom ersten Termin bis zur Abnahme.
                  </p>

                  <dl className="space-y-5 pt-2 border-t border-slate-200">
                    {[
                      { title: 'Festpreisgarantie', desc: 'Der Preis im Angebot ist der Preis auf der Rechnung.' },
                      { title: 'Alle Gewerke aus einer Hand', desc: 'Heizung, Bad, Klima und Elektro aufeinander abgestimmt.' },
                      { title: 'Fördermittel-Service', desc: 'Wir finden passende Zuschüsse und helfen bei der Beantragung.' },
                      { title: 'Notdienst', desc: 'Bei Heizungsausfall oder Wasserschaden — 365 Tage im Jahr erreichbar.' },
                    ].map((item) => (
                      <div key={item.title} className="pt-5 first:pt-5 grid grid-cols-[auto_1fr] gap-x-4">
                        <span className="mt-2 w-2 h-2 bg-amber-500" aria-hidden />
                        <div>
                          <dt className="font-bold text-slate-900">{item.title}</dt>
                          <dd className="text-sm text-slate-500 mt-0.5">{item.desc}</dd>
                        </div>
                      </div>
                    ))}
                  </dl>

                  <div className="pt-2">
                    <Link
                      href="/unternehmen"
                      className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-[#152852] hover:text-amber-600 transition-colors"
                    >
                      Mehr über uns erfahren
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PROZESS ═══════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Reveal className="max-w-2xl mb-14 space-y-4">
              <Kicker>So läuft es ab</Kicker>
              <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-slate-900 leading-tight">
                In drei Schritten zum fertigen Projekt
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-10 md:gap-8">
              {processSteps.map((step, i) => (
                <Reveal key={step.title} delay={i * 150}>
                  <div className="border-t-2 border-slate-200 pt-6 relative">
                    <span className="absolute -top-0.5 left-0 w-12 border-t-2 border-amber-500" aria-hidden />
                    <span className="text-sm font-bold text-slate-400">0{i + 1}</span>
                    <h3 className="text-xl font-bold text-slate-900 mt-2 mb-1">{step.title}</h3>
                    <p className="text-sm font-semibold text-amber-600 mb-3">{step.duration}</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-12" delay={200}>
              <Link
                href="/kontakt"
                className="group inline-flex items-center justify-center gap-2 bg-[#152852] hover:bg-[#193c6e] text-white px-7 py-3.5 rounded-lg font-bold transition-colors duration-200"
              >
                Unverbindliche Anfrage stellen
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════ CALCULATOR (Client Component, Lazy-loaded) ═══════ */}
      <CalculatorSection />

      {/* ═══════ REFERENZEN ═══════ */}
      <section className="py-20 md:py-28 bg-[var(--warm-50)] border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div className="space-y-4">
                <Kicker>Referenzen</Kicker>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                  Aktuelle Projekte aus Braunschweig
                </h2>
              </div>
              <Link
                href="/referenzen"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#152852] hover:text-amber-600 transition-colors"
              >
                Alle Referenzen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
              {references.map((ref, i) => (
                <Reveal
                  key={ref.src}
                  delay={i * 100}
                  className={ref.span ? 'md:col-span-2' : ''}
                >
                  <figure className="group">
                    <div className="relative h-56 md:h-72 rounded-lg overflow-hidden">
                      <Image
                        src={ref.src}
                        alt={ref.alt}
                        fill
                        sizes={ref.span ? '(max-width: 768px) 50vw, 66vw' : '(max-width: 768px) 50vw, 33vw'}
                        quality={75}
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="pt-3">
                      <span className="text-sm font-semibold text-slate-900">{ref.label}</span>
                      <span className="text-sm text-slate-400"> — {ref.place}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ NOTDIENST ═══════ */}
      <section className="py-14 bg-[#152852]">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-l-4 border-red-500 pl-6 md:pl-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Heizungsausfall oder Wasserschaden?</h3>
                <p className="text-slate-400 mt-1">Unser Notdienst ist rund um die Uhr erreichbar — 365 Tage im Jahr.</p>
              </div>
              <a
                href="tel:053123449090"
                className="inline-flex items-center gap-2 bg-white text-[#152852] px-6 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors duration-200 shrink-0"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                0531 234 490 90
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Reveal className="max-w-2xl mb-14 space-y-4">
              <Kicker>Kundenstimmen</Kicker>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Was Kunden über uns sagen
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 120}>
                  <blockquote className="h-full border-l-2 border-amber-500 pl-6">
                    <p className="text-slate-700 leading-relaxed">
                      &bdquo;{t.text}&ldquo;
                    </p>
                    <footer className="mt-4">
                      <span className="text-sm font-semibold text-slate-900">{t.name}</span>
                      <span className="block text-xs text-slate-400 mt-0.5">Google-Bewertung</span>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-12" delay={150}>
              <Link
                href="/kundenbewertungen"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#152852] hover:text-amber-600 transition-colors"
              >
                Alle Bewertungen ansehen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════ FAQ (Client Component) ═══════ */}
      <section className="py-20 md:py-28 bg-[var(--warm-50)] border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Reveal className="mb-10 space-y-4">
              <Kicker>Häufige Fragen</Kicker>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Gut zu wissen
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <FaqAccordion faqs={faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="py-20 md:py-24 bg-[#152852]">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Bereit für Ihr nächstes Projekt?
              </h2>
              <p className="text-lg text-slate-400 max-w-xl mx-auto">
                Rufen Sie an oder stellen Sie eine unverbindliche Anfrage —
                wir melden uns werktags innerhalb von 2 Stunden.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <Link
                  href="/kontakt"
                  className="group inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#152852] px-7 py-3.5 rounded-lg font-bold transition-colors duration-200"
                >
                  Projekt anfragen
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <a
                  href="tel:053123449090"
                  className="inline-flex items-center justify-center gap-2 text-white border border-white/40 hover:border-white hover:bg-white/5 px-7 py-3.5 rounded-lg font-semibold transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  0531 234 490 90
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
