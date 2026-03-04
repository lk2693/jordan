import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unsere Leistungen | Jordan GmbH — Klima, Heizung, Sanitär, Elektro',
  description: 'Von der Beratung bis zur Umsetzung — Jordan GmbH bietet alle Leistungen rund um Klima, Heizung, Sanitär und Elektro aus einer Hand in Braunschweig.',
};

export default function Leistungen() {
  const services = [
    {
      title: 'Klima & Lüftung',
      description: 'Professionelle Klimaanlagen, Lüftungssysteme und Wärmepumpen für optimales Raumklima.',
      features: ['Klimaanlagen Installation & Wartung', 'Lüftungsanlagen', 'Wärmepumpen', 'Energieberatung', 'Smart Climate Control'],
      icon: '❄️',
      image: 'https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?w=800&h=600&fit=crop',
      color: 'bg-blue-50 text-blue-600 border-blue-100',
      tagColor: 'bg-blue-50 text-blue-700',
    },
    {
      title: 'Heizung',
      description: 'Moderne Heizungssysteme, Wartung und energieeffiziente Modernisierungslösungen.',
      features: ['Gas- & Ölheizungen', 'Pelletheizungen', 'Solarthermie', 'Heizungsmodernisierung', 'Fußbodenheizung'],
      icon: '🔥',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop',
      color: 'bg-orange-50 text-orange-600 border-orange-100',
      tagColor: 'bg-orange-50 text-orange-700',
    },
    {
      title: 'Sanitär & Bad',
      description: 'Komplette Badinstallationen, Rohrleitungen und moderne Wassertechnik.',
      features: ['Badplanung & -sanierung', 'Rohrleitungsinstallation', 'Wassertechnik', 'Barrierefreie Bäder', 'Designbäder'],
      icon: '🚿',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop',
      color: 'bg-cyan-50 text-cyan-600 border-cyan-100',
      tagColor: 'bg-cyan-50 text-cyan-700',
    },
    {
      title: 'Elektro & Smart Home',
      description: 'Elektroinstallationen, intelligente Haussteuerung und moderne Gebäudetechnik.',
      features: ['Elektroinstallation', 'Smart Home Systeme', 'Photovoltaik', 'E-Mobility Ladelösungen', 'Gebäudeautomation'],
      icon: '⚡',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop',
      color: 'bg-amber-50 text-amber-600 border-amber-100',
      tagColor: 'bg-amber-50 text-amber-700',
    },
  ];

  const additionalServices = [
    { title: 'Wartung & Service', description: 'Regelmäßige Wartung für alle Anlagen', icon: '🔧' },
    { title: 'Notdienst 24/7', description: 'Rund um die Uhr erreichbar', icon: '🚨' },
    { title: 'Energieberatung', description: 'Energieeffiziente Lösungen', icon: '🌱' },
    { title: 'Fördermittelberatung', description: 'Hilfe bei Fördermitteln', icon: '💰' },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#152852] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=800&fit=crop" alt="" fill sizes="100vw" className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#152852]/60 via-[#152852]/70 to-[#152852]/95" />
        </div>
        <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-6">
              <span className="text-sm font-medium text-white/80">Rated 4.9/5 ⭐</span>
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-6" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.3)' }}>
              Unsere{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F39900] to-[#FFB617]">
                Leistungen
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mb-8" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}>
              Von der Beratung bis zur Umsetzung — wir bieten Ihnen alle Leistungen rund um 
              Klima, Heizung, Sanitär und Elektro aus einer Hand.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#152852] px-7 py-3.5 rounded-xl text-[0.9375rem] font-bold transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgb(243_153_0/0.35)]"
            >
              Kostenlos beraten lassen
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}
              >
                {/* Image */}
                <div className={`relative h-[320px] md:h-[400px] rounded-2xl overflow-hidden group ${index % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className={`space-y-5 ${index % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{service.icon}</span>
                    <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${service.tagColor}`}>
                      {service.title}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                    {service.title}
                  </h2>
                  <p className="text-slate-500 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2.5">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                        <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-amber-600 hover:text-amber-700 transition-colors pt-2"
                  >
                    Beratung anfragen
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                Weitere Services
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Zusätzliche Leistungen
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {additionalServices.map((s, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 text-center border border-slate-100 hover:shadow-lg hover:border-slate-200 hover:-translate-y-1 transition-all duration-300">
                  <span className="text-3xl block mb-3">{s.icon}</span>
                  <h3 className="font-bold text-slate-900 mb-1 text-sm">{s.title}</h3>
                  <p className="text-xs text-slate-500">{s.description}</p>
                </div>
              ))}
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
            Individuelle Beratung gewünscht?
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
            Kontaktieren Sie uns für ein kostenloses und unverbindliches Angebot.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#152852] px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-0.5"
            >
              Kontakt aufnehmen
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="tel:053123449090"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold transition-all"
            >
              0531 2 34 49 09-0
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
