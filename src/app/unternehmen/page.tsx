import Link from 'next/link';
import Image from 'next/image';
import MapWrapper from '@/components/MapWrapper';
import type { Metadata } from 'next';

import Kicker from '@/components/Kicker';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Über uns | Jordan GmbH — Seit 1976 in Braunschweig',
  description: 'Erfahren Sie mehr über die Jordan GmbH: gegründet 1976, geführt von Siegmar Zajonc, mit 19 Mitarbeitern in Braunschweig zuhause.',
};

export default function Unternehmen() {
  const timeline = [
    { year: '1976', title: 'Gründung', desc: 'Am 1. März gründet Hubert Zajonc die Firma Zajonc.' },
    { year: '1999', title: 'Übernahme', desc: 'Siegmar Zajonc übernimmt zum 1. Januar die Geschäftsführung.' },
    { year: '2004', title: 'Zusammenlegung', desc: 'Die Firmen Zajonc und JORDAN GmbH werden am 1. April zusammengelegt.' },
    { year: '2010', title: 'Neues Firmengebäude', desc: 'Nach zwei Jahren Bauzeit Einzug in den Neubau am Rischbleek.' },
    { year: '2015', title: 'Auszeichnung', desc: 'Zertifizierung als „Profi im Handwerk“.' },
    { year: 'Heute', title: '19 Mitarbeiter', desc: 'Die JORDAN GmbH beschäftigt 19 Mitarbeiter in Braunschweig.' },
  ];

  const projektTechniker = ['Krystian Wroblewski (Leiter-Beauftragter)', 'Holger Spieler', 'Waldemar Kokot', 'Wilfried Winter', 'Thomas Vieweger'];
  const kundendienstTechniker = ['Waldemar Baumann', 'Jens Niedermeyer'];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero — schlicht, ohne Stockfoto */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-[#152852]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-5">
            <Kicker light>Über uns</Kicker>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.08] tracking-tight">
              Ein Handwerksbetrieb aus Braunschweig — seit 1976
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Was als Firma Zajonc begann, ist heute die JORDAN GmbH:
              ein Meisterbetrieb für Klima, Heizung, Sanitär und Elektro
              mit festem Team und festen Ansprechpartnern.
            </p>
          </div>

          {/* Stats — schlichte Reihe mit Trennlinien */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 border-t border-white/15 max-w-3xl">
            <div className="py-5 pr-6 border-b md:border-b-0 border-white/15">
              <p className="text-2xl font-extrabold text-white">1976</p>
              <p className="text-sm text-slate-400 mt-0.5">gegründet</p>
            </div>
            <div className="py-5 px-6 border-b md:border-b-0 border-l border-white/15">
              <p className="text-2xl font-extrabold text-white">19</p>
              <p className="text-sm text-slate-400 mt-0.5">Mitarbeiter</p>
            </div>
            <div className="py-5 pr-6 md:px-6 md:border-l border-white/15">
              <p className="text-2xl font-extrabold text-white">3.000+</p>
              <p className="text-sm text-slate-400 mt-0.5">Projekte</p>
            </div>
            <div className="py-5 px-6 border-l border-white/15">
              <p className="text-2xl font-extrabold text-white">24/7</p>
              <p className="text-sm text-slate-400 mt-0.5">Notdienst</p>
            </div>
          </div>
        </div>
      </section>

      {/* Geschichte — echte Story statt Floskeln */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal direction="left">
              <div className="relative h-[380px] md:h-[460px] rounded-lg overflow-hidden">
                <Image
                  src="/images/jordan.png"
                  alt="Das Team der JORDAN GmbH"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="space-y-6">
                <Kicker>Unsere Geschichte</Kicker>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  Vom Ein-Mann-Betrieb zum Leistungscenter für Haustechnik
                </h2>
                <div className="space-y-4 text-slate-500 leading-relaxed">
                  <p>
                    1976 gründete Hubert Zajonc seinen Handwerksbetrieb in Braunschweig.
                    1999 übernahm sein Sohn Siegmar Zajonc die Geschäftsführung, 2004
                    wurden die Firmen Zajonc und JORDAN zusammengelegt — seitdem decken
                    wir alle Gewerke der Haustechnik unter einem Dach ab.
                  </p>
                  <p>
                    Heute arbeiten 19 Kolleginnen und Kollegen an unserem Standort am
                    Rischbleek: Projekttechniker, Kundendiensttechniker und Büro. Viele
                    sind seit Jahrzehnten dabei — das merkt man an der Arbeit.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline — eine Linie, ein Akzent */}
      <section className="py-20 md:py-24 bg-[var(--warm-50)] border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Reveal className="mb-12 space-y-4">
              <Kicker>Meilensteine</Kicker>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Fast 50 Jahre in Braunschweig
              </h2>
            </Reveal>

            <div className="border-l-2 border-slate-200 ml-1">
              {timeline.map((item, index) => (
                <Reveal key={item.year} delay={index * 80}>
                  <div className="relative pl-8 pb-10 last:pb-0">
                    <span className="absolute -left-[7px] top-1.5 w-3 h-3 bg-amber-500" aria-hidden />
                    <p className="text-sm font-bold text-amber-600">{item.year}</p>
                    <h3 className="text-lg font-bold text-slate-900 mt-1">{item.title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ansprechpartner */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Reveal className="mb-12 space-y-4">
              <Kicker>Ansprechpartner</Kicker>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Bei uns landen Sie nicht in der Warteschleife
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-16">
              {/* Siegmar Zajonc */}
              <Reveal>
                <div className="flex gap-6">
                  <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src="/images/siegmar-zajonc.jpg"
                      alt="Siegmar Zajonc, Geschäftsführer"
                      fill
                      sizes="144px"
                      className="object-cover object-[50%_30%]"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">Siegmar Zajonc</h3>
                    <p className="text-sm font-semibold text-amber-600 mb-3">Geschäftsführer</p>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">
                      Führt das Unternehmen seit 1999 — Meister seines Fachs, in zweiter Generation.
                    </p>
                    <div className="text-sm space-y-1">
                      <a href="tel:0531234490912" className="block font-semibold text-[#152852] hover:text-amber-600 transition-colors">0531-23 44 90 912</a>
                      <a href="mailto:s.zajonc@jordan24.de" className="block font-semibold text-[#152852] hover:text-amber-600 transition-colors">s.zajonc@jordan24.de</a>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Ronald Müller */}
              <Reveal delay={100}>
                <div className="flex gap-6">
                  <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src="/images/_4M7A0536.jpg"
                      alt="Ronald Müller, Leiter Leistungscenter Heizung Sanitär"
                      fill
                      sizes="144px"
                      className="object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">Ronald Müller</h3>
                    <p className="text-sm font-semibold text-amber-600 mb-3">Leiter Leistungscenter Heizung &amp; Sanitär</p>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">
                      Ihr Ansprechpartner für Projekte rund um Heizung und Sanitär.
                    </p>
                    <div className="text-sm space-y-1">
                      <a href="tel:0531234490916" className="block font-semibold text-[#152852] hover:text-amber-600 transition-colors">0531-23 44 90 916</a>
                      <a href="mailto:r.mueller@jordan24.de" className="block font-semibold text-[#152852] hover:text-amber-600 transition-colors">r.mueller@jordan24.de</a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Team — ehrliche Liste statt Platzhalter-Kacheln */}
            <Reveal>
              <div className="grid md:grid-cols-2 gap-10 md:gap-16 border-t border-slate-200 pt-10">
                <div>
                  <h3 className="font-bold text-slate-900 mb-4">Projekttechnik</h3>
                  <ul className="space-y-2.5">
                    {projektTechniker.map((name) => (
                      <li key={name} className="grid grid-cols-[auto_1fr] gap-x-3 items-baseline text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-amber-500 -translate-y-0.5" aria-hidden />
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-4">Kundendienst</h3>
                  <ul className="space-y-2.5">
                    {kundendienstTechniker.map((name) => (
                      <li key={name} className="grid grid-cols-[auto_1fr] gap-x-3 items-baseline text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-amber-500 -translate-y-0.5" aria-hidden />
                        {name}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-slate-400 mt-6 leading-relaxed">
                    Dazu kommen unsere Monteure und das Team im Büro —
                    zusammen 19 Kolleginnen und Kollegen.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Standort */}
      <section className="py-20 md:py-24 bg-[var(--warm-50)] border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Reveal className="mb-12 space-y-4">
              <Kicker>Standort</Kicker>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">So finden Sie uns</h2>
            </Reveal>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <Reveal>
                <div className="h-[380px] rounded-lg overflow-hidden border border-slate-200">
                  <MapWrapper lat={52.2350} lng={10.5650} zoom={15} markerText="JORDAN GmbH" />
                </div>
              </Reveal>
              <Reveal delay={100}>
                <dl className="divide-y divide-slate-200 border-y border-slate-200">
                  <div className="py-4 grid grid-cols-[9rem_1fr] gap-4">
                    <dt className="text-sm text-slate-400">Adresse</dt>
                    <dd className="text-sm font-semibold text-slate-900">Rischbleek 3<br />38126 Braunschweig</dd>
                  </div>
                  <div className="py-4 grid grid-cols-[9rem_1fr] gap-4">
                    <dt className="text-sm text-slate-400">Telefon</dt>
                    <dd><a href="tel:053123449090" className="text-sm font-semibold text-[#152852] hover:text-amber-600 transition-colors">0531-23 44 90 90</a></dd>
                  </div>
                  <div className="py-4 grid grid-cols-[9rem_1fr] gap-4">
                    <dt className="text-sm text-slate-400">E-Mail</dt>
                    <dd><a href="mailto:info@jordan24.de" className="text-sm font-semibold text-[#152852] hover:text-amber-600 transition-colors">info@jordan24.de</a></dd>
                  </div>
                  <div className="py-4 grid grid-cols-[9rem_1fr] gap-4">
                    <dt className="text-sm text-slate-400">Öffnungszeiten</dt>
                    <dd className="text-sm text-slate-600">
                      Mo – Do: 7:00 – 15:45 Uhr<br />
                      Fr: 7:00 – 11:45 Uhr<br />
                      Notdienst: rund um die Uhr
                    </dd>
                  </div>
                </dl>
                <a
                  href="https://www.google.com/maps/dir//Rischbleek+3,+38126+Braunschweig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 bg-[#152852] hover:bg-[#193c6e] text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors duration-200"
                >
                  Route berechnen
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </Reveal>
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
                Überzeugen Sie sich selbst
              </h2>
              <p className="text-lg text-slate-400 max-w-xl mx-auto">
                Schauen Sie sich unsere Projekte an — oder rufen Sie einfach an
                und lernen Sie uns kennen.
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
                <Link
                  href="/referenzen"
                  className="inline-flex items-center justify-center gap-2 text-white border border-white/40 hover:border-white hover:bg-white/5 px-7 py-3.5 rounded-lg font-semibold transition-colors duration-200"
                >
                  Referenzen ansehen
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
