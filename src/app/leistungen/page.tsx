import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

import AmbientVideo from '@/components/AmbientVideo';
import Kicker from '@/components/Kicker';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Unsere Leistungen | Jordan GmbH — Klima, Heizung, Sanitär, Elektro',
  description: 'Von der Beratung bis zur Umsetzung — Jordan GmbH bietet alle Leistungen rund um Klima, Heizung, Sanitär und Elektro aus einer Hand in Braunschweig.',
};

type Service = {
  title: string;
  description: string;
  features: string[];
  image?: string;
  imageAlt?: string;
  video?: string;
};

export default function Leistungen() {
  const services: Service[] = [
    {
      title: 'Heizung',
      description: 'Moderne Heizungssysteme, Wartung und energieeffiziente Modernisierung — vom Kesseltausch bis zur kompletten Neuanlage.',
      features: ['Gas- & Ölheizungen', 'Wärmepumpen', 'Pelletheizungen', 'Solarthermie', 'Fußbodenheizung'],
      image: '/images/Heizung_web_11.jpg',
      imageAlt: 'Von Jordan installierte Heizungsanlage in Braunschweig',
    },
    {
      title: 'Sanitär & Bad',
      description: 'Komplette Badinstallationen, Rohrleitungen und moderne Wassertechnik — auch barrierefrei.',
      features: ['Badplanung & -sanierung', 'Rohrleitungsinstallation', 'Wassertechnik', 'Barrierefreie Bäder'],
      image: '/images/Friedrich_Vogt_36_Badezimmer_web_6.jpg',
      imageAlt: 'Von Jordan saniertes Badezimmer, Friedrich-Vogt-Straße',
    },
    {
      title: 'Klima & Lüftung',
      description: 'Klimaanlagen und Lüftungssysteme für ein angenehmes Raumklima — geplant, montiert und gewartet.',
      features: ['Klimaanlagen-Installation & Wartung', 'Lüftungsanlagen', 'Split- & Multisplit-Geräte', 'Energieberatung'],
      video: '/images/klima.mp4',
    },
    {
      title: 'Elektro & Smart Home',
      description: 'Elektroinstallationen, Photovoltaik, intelligente Haussteuerung und moderne Gebäudetechnik.',
      features: ['Elektroinstallation', 'Smart-Home-Systeme', 'Photovoltaik', 'E-Mobility-Ladelösungen'],
      video: '/images/solar.mp4',
    },
  ];

  const additionalServices = [
    { title: 'Wartung & Service', description: 'Regelmäßige Wartung für Heizung, Klima und Haustechnik — planbar per Wartungsvertrag.' },
    { title: 'Notdienst', description: 'Bei Heizungsausfall oder Wasserschaden rund um die Uhr erreichbar.' },
    { title: 'Energieberatung', description: 'Ehrliche Einschätzung, welche Technik sich für Ihr Gebäude rechnet.' },
    { title: 'Fördermittel-Service', description: 'Wir finden passende Zuschüsse und helfen bei der Beantragung.' },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero — schlicht, ohne Stockfoto */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-[#152852]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-5">
            <Kicker light>Leistungen</Kicker>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.08] tracking-tight">
              Alles rund um Ihre Haustechnik — aus einer Hand
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Klima, Heizung, Sanitär und Elektro: Wir beraten, planen und
              setzen um — mit einem festen Ansprechpartner für Ihr Projekt.
            </p>
            <div className="pt-2">
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#152852] px-7 py-3.5 rounded-lg text-[0.9375rem] font-bold transition-colors duration-200"
              >
                Kostenlos beraten lassen
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gewerke — alternierend Bild/Text, nummeriert */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-20 md:space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                {/* Image */}
                <Reveal
                  direction={index % 2 === 1 ? 'right' : 'left'}
                  className={index % 2 === 1 ? 'lg:order-2' : ''}
                >
                  <div className="relative h-[300px] md:h-[380px] rounded-lg overflow-hidden">
                    {service.video ? (
                      <AmbientVideo
                        src={service.video}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <Image
                        src={service.image ?? ''}
                        alt={service.imageAlt ?? service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        quality={75}
                        className="object-cover"
                        loading="lazy"
                      />
                    )}
                  </div>
                </Reveal>

                {/* Content */}
                <Reveal
                  direction={index % 2 === 1 ? 'left' : 'right'}
                  className={index % 2 === 1 ? 'lg:order-1' : ''}
                >
                  <div className="space-y-5">
                    <span className="text-sm font-bold text-slate-400">0{index + 1}</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                      {service.title}
                    </h2>
                    <p className="text-slate-500 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2.5 border-t border-slate-200 pt-5">
                      {service.features.map((feature) => (
                        <li key={feature} className="grid grid-cols-[auto_1fr] gap-x-3 items-baseline text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 bg-amber-500 translate-y-[-2px]" aria-hidden />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-[#152852] hover:text-amber-600 transition-colors pt-1"
                    >
                      Beratung anfragen
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weitere Services — ruhige Spalten mit Linien-Akzent */}
      <section className="py-20 md:py-24 bg-[var(--warm-50)] border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Reveal className="mb-12 space-y-4">
              <Kicker>Darüber hinaus</Kicker>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Service, der nach der Montage weitergeht
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
              {additionalServices.map((s, i) => (
                <Reveal key={s.title} delay={i * 100}>
                  <div className="border-t-2 border-slate-200 pt-5 relative">
                    <span className="absolute -top-0.5 left-0 w-10 border-t-2 border-amber-500" aria-hidden />
                    <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{s.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#152852]">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Nicht sicher, was Ihr Projekt braucht?
              </h2>
              <p className="text-lg text-slate-400 max-w-xl mx-auto">
                Wir schauen es uns kostenlos an und sagen Ihnen ehrlich,
                was sinnvoll ist — und was nicht.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <Link
                  href="/kontakt"
                  className="group inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#152852] px-7 py-3.5 rounded-lg font-bold transition-colors duration-200"
                >
                  Kontakt aufnehmen
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
