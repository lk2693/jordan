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

  // Organigramm (Stand 20.09.2026) — Leistungscenter und Verwaltung
  type OrgUnit = {
    key: string;
    title: string;
    lead: string;
    leadNote?: string;
    /** Icon-Kachel: Hintergrund + Textfarbe */
    tone: string;
    icon: string;
    membersLabel: string;
    members: { name: string; role?: string }[];
  };

  const icons = {
    fire: 'M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z',
    wrench: 'M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z',
    bolt: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    cap: 'M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5',
    office: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21',
    card: 'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z',
    cube: 'm21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9',
  };

  const leistungscenter: OrgUnit[] = [
    {
      key: 'shk1',
      title: 'SHK 1 & Raumkühlung',
      lead: 'M. Nehlsen',
      leadNote: 'in Einarbeitung',
      tone: 'bg-sky-400/15 text-sky-300',
      icon: icons.fire,
      membersLabel: 'Projekttechnik',
      members: [],
    },
    {
      key: 'shk2',
      title: 'SHK 2 & Raumkühlung',
      lead: 'N. N.',
      leadNote: 'wird neu besetzt',
      tone: 'bg-sky-400/15 text-sky-300',
      icon: icons.fire,
      membersLabel: 'Projekttechnik',
      members: [
        { name: 'Wilfried Winter' },
        { name: 'Krystian Wroblewski' },
        { name: 'J. Seckelmann' },
        { name: 'Holger Spieler' },
      ],
    },
    {
      key: 'kundendienst',
      title: 'Kundendienst',
      lead: 'Siegmar Zajonc',
      tone: 'bg-red-500/15 text-red-300',
      icon: icons.wrench,
      membersLabel: 'Kundendiensttechnik',
      members: [
        { name: 'Waldemar Baumann' },
        { name: 'Jens Niedermeyer' },
        { name: 'D. Gürcin' },
        { name: 'H. Bittner' },
      ],
    },
    {
      key: 'elektro',
      title: 'Elektro',
      lead: 'Siegmar Zajonc',
      tone: 'bg-amber-400/15 text-amber-300',
      icon: icons.bolt,
      membersLabel: 'Projekttechnik',
      members: [{ name: 'Thomas Vieweger' }],
    },
    {
      key: 'ausbildung',
      title: 'Ausbildung',
      lead: 'Siegmar Zajonc',
      tone: 'bg-emerald-400/15 text-emerald-300',
      icon: icons.cap,
      membersLabel: 'Auszubildende',
      members: [
        { name: 'M. Milosch', role: 'SHK' },
        { name: 'F. Andreas', role: 'SHK' },
        { name: 'M. Gürcin', role: 'SHK' },
        { name: 'S. Rahmani', role: 'Büro' },
      ],
    },
  ];

  const verwaltung: OrgUnit[] = [
    {
      key: 'buero',
      title: 'Büro & Verwaltung',
      lead: 'C. Tiemann',
      tone: 'bg-white/10 text-slate-200',
      icon: icons.office,
      membersLabel: 'Team',
      members: [
        { name: 'T. Lindmüller' },
        { name: 'K. Kleszczewska' },
        { name: 'A. Bittner' },
        { name: 'L. Wolke' },
      ],
    },
    {
      key: 'buchhaltung',
      title: 'Buchhaltung',
      lead: 'A. Weller',
      tone: 'bg-white/10 text-slate-200',
      icon: icons.card,
      membersLabel: 'Extern',
      members: [{ name: 'Auditax GmbH', role: 'Steuerberatung' }],
    },
    {
      key: 'einkauf',
      title: 'Einkauf & Lager',
      lead: 'Siegmar Zajonc',
      tone: 'bg-white/10 text-slate-200',
      icon: icons.cube,
      membersLabel: 'Bereiche',
      members: [{ name: 'Lager' }, { name: 'Werkzeug' }, { name: 'Fuhrpark' }],
    },
  ];

  const initials = (name: string) =>
    name.split(' ').map((part) => part[0]).join('').replace(/[^A-ZÄÖÜa-z]/g, '').slice(0, 2).toUpperCase();

  const OrgCard = ({ unit, delay, connector = false }: { unit: OrgUnit; delay: number; connector?: boolean }) => (
    <Reveal delay={delay} className="h-full">
      <div
        className={`group relative h-full rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-sm p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-black/30 ${
          connector
            ? 'xl:before:absolute xl:before:-top-10 xl:before:left-1/2 xl:before:h-10 xl:before:w-px xl:before:bg-white/15 xl:after:absolute xl:after:-top-1 xl:after:left-1/2 xl:after:-translate-x-1/2 xl:after:w-2 xl:after:h-2 xl:after:rounded-full xl:after:bg-amber-400 xl:after:shadow-[0_0_0_4px_rgba(251,191,36,0.2)]'
            : ''
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <span className={`inline-flex w-10 h-10 items-center justify-center rounded-xl ${unit.tone}`} aria-hidden>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d={unit.icon} />
            </svg>
          </span>
          {unit.members.length > 0 && (
            <span className="text-[11px] font-semibold text-slate-400 bg-white/5 border border-white/10 rounded-full px-2 py-0.5">
              {unit.members.length + 1} Personen
            </span>
          )}
        </div>

        <h3 className="mt-4 text-base font-extrabold text-white leading-snug">{unit.title}</h3>

        <div className="mt-4 flex items-center gap-3">
          <span className="relative w-10 h-10 shrink-0 rounded-full p-[2px] bg-gradient-to-br from-amber-400 to-orange-500">
            <span className="flex w-full h-full items-center justify-center rounded-full bg-[#0b1a3a] text-[11px] font-bold text-white">
              {initials(unit.lead)}
            </span>
          </span>
          <div className="min-w-0">
            <p className="text-sm font-bold text-white truncate">{unit.lead}</p>
            <p className="text-[11px] uppercase tracking-wider text-amber-400/90 font-semibold">
              Leitung{unit.leadNote ? <span className="normal-case tracking-normal text-slate-400 font-medium"> · {unit.leadNote}</span> : null}
            </p>
          </div>
        </div>

        {unit.members.length > 0 && (
          <div className="mt-5 pt-4 border-t border-white/10">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-3">{unit.membersLabel}</p>
            <ul className="space-y-2">
              {unit.members.map((m) => (
                <li key={m.name} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <span className="w-6 h-6 shrink-0 rounded-full bg-white/10 text-[10px] font-bold text-slate-200 flex items-center justify-center">
                    {initials(m.name)}
                  </span>
                  <span className="truncate">{m.name}</span>
                  {m.role && <span className="ml-auto text-[11px] text-slate-500 shrink-0">{m.role}</span>}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Reveal>
  );

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

            <div className="max-w-2xl">
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
            </div>

          </div>
        </div>
      </section>

      {/* Organigramm — dunkle Bühne, Glas-Karten, echte Verbindungslinien */}
      <section id="team" className="relative py-20 md:py-28 bg-[#0b1a3a] overflow-hidden scroll-mt-8">
        {/* Hintergrund: Punktraster + Glow */}
        <div
          className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:26px_26px]"
          aria-hidden
        />
        <div className="absolute -top-40 right-0 w-[640px] h-[640px] rounded-full bg-amber-400/10 blur-3xl" aria-hidden />
        <div className="absolute -bottom-40 -left-20 w-[520px] h-[520px] rounded-full bg-sky-500/10 blur-3xl" aria-hidden />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <Reveal className="mb-14 md:mb-16 space-y-4 max-w-2xl">
              <Kicker light>Unser Team</Kicker>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                So sind wir organisiert
              </h2>
              <p className="text-slate-300/80 leading-relaxed">
                Klare Zuständigkeiten statt Warteschleife: Jedes Gewerk hat ein eigenes
                Leistungscenter mit fester Leitung — dahinter ein eingespieltes Team aus
                Projekttechnik, Kundendienst, Ausbildung und Verwaltung.
              </p>
            </Reveal>

            {/* Ebene 1: Geschäftsleitung + QM */}
            <Reveal>
              <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 md:gap-0">
                <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-amber-400 via-amber-400/40 to-sky-500/40 md:w-[26rem] shadow-2xl shadow-black/40">
                  <div className="rounded-2xl bg-[#10224a] p-5 md:p-6 flex items-center gap-5">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full overflow-hidden ring-2 ring-amber-400/70 ring-offset-2 ring-offset-[#10224a]">
                      <Image
                        src="/images/siegmar-zajonc.jpg"
                        alt="Siegmar Zajonc, Geschäftsführer"
                        fill
                        sizes="96px"
                        className="object-cover object-[50%_30%]"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400">Geschäftsleitung</p>
                      <p className="text-xl md:text-2xl font-extrabold text-white mt-1 leading-tight">Siegmar Zajonc</p>
                      <p className="text-sm text-slate-400 mt-1">Geschäftsführer · seit 1999</p>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block w-12 border-t border-dashed border-white/25" aria-hidden />

                <div className="rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-sm p-5 md:w-64">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Qualitätsmanagement</p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="w-9 h-9 shrink-0 rounded-full bg-white/10 text-xs font-bold text-white flex items-center justify-center">CT</span>
                    <div>
                      <p className="text-sm font-bold text-white">C. Tiemann</p>
                      <p className="text-xs text-slate-400">QM-Beauftragte</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Verbindung: Stamm + Querbalken (nur auf großen Screens) */}
            <div className="hidden xl:block relative h-12 max-w-6xl mx-auto" aria-hidden>
              <span className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-amber-400/70 to-white/15" />
            </div>
            <div className="hidden xl:block relative h-px max-w-6xl mx-auto" aria-hidden>
              <span className="absolute top-0 left-[calc(10%-0.6rem)] right-[calc(10%-0.6rem)] h-px bg-white/15" />
            </div>

            {/* Ebene 2: Leistungscenter */}
            <div className="mt-10 xl:mt-10">
              <div className="flex items-center gap-4 mb-5 xl:hidden">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 shrink-0">Leistungscenter</p>
                <span className="flex-1 border-t border-white/10" aria-hidden />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 xl:gap-6">
                {leistungscenter.map((unit, i) => (
                  <OrgCard key={unit.key} unit={unit} delay={i * 70} connector />
                ))}
              </div>
            </div>

            {/* Ebene 3: Verwaltung */}
            <div className="mt-12 md:mt-16">
              <div className="flex items-center gap-4 mb-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 shrink-0">Verwaltung &amp; Einkauf</p>
                <span className="flex-1 border-t border-white/10" aria-hidden />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6">
                {verwaltung.map((unit, i) => (
                  <OrgCard key={unit.key} unit={unit} delay={i * 70} />
                ))}
              </div>
            </div>

            <Reveal className="mt-10">
              <p className="text-xs text-slate-500 leading-relaxed max-w-2xl">
                Externe Partner — Arbeitssicherheit &amp; Betriebsarzt: SVG Niedersachsen/Sachsen-Anhalt eG ·
                Marketing: Impetus Marketing · Steuerberatung: Auditax GmbH
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Standort */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Reveal className="mb-12 space-y-4">
              <Kicker>Standort</Kicker>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">So finden Sie uns</h2>
            </Reveal>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <Reveal>
                <div className="h-[380px] rounded-lg overflow-hidden border border-slate-200">
                  <MapWrapper lat={52.24643} lng={10.58216} zoom={16} markerText="JORDAN GmbH" />
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
                    <dd><a href="tel:053123449090" className="text-sm font-semibold text-[#152852] hover:text-amber-600 transition-colors">0531 234 490 90</a></dd>
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
