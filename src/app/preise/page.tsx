import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preise & Verrechnung | Jordan GmbH — Transparente Kosten',
  description: 'Faire und transparente Verrechnungssätze der Jordan GmbH. Stundensätze, Notdienstpauschale und Zuschläge auf einen Blick.',
};

export default function Preise() {
  const rates = [
    {
      title: 'LC-Leiter',
      subtitle: 'Leistungscenterleiter',
      netto: '106,50',
      brutto: '126,74',
      accent: 'amber',
    },
    {
      title: 'KD-Techniker',
      subtitle: 'Kundendiensttechniker',
      netto: '78,86',
      brutto: '93,84',
      accent: 'blue',
    },
    {
      title: 'PJ-Techniker',
      subtitle: 'Projekttechniker (Sanitär, Heizung, Klima, Elektro)',
      netto: '78,86',
      brutto: '93,84',
      accent: 'green',
    },
  ];

  const surcharges = [
    { label: 'Außerhalb der Geschäftszeiten', time: '', zuschlag: '+25%', color: 'bg-yellow-50 border-yellow-200 text-yellow-800', badge: 'bg-yellow-100 text-yellow-700' },
    { label: 'Nachtarbeit', time: '22:00 – 06:00 Uhr', zuschlag: '+50%', color: 'bg-indigo-50 border-indigo-200 text-indigo-800', badge: 'bg-indigo-100 text-indigo-700' },
    { label: 'Samstagsarbeit', time: '06:00 – 22:00 Uhr', zuschlag: '+50%', color: 'bg-blue-50 border-blue-200 text-blue-800', badge: 'bg-blue-100 text-blue-700' },
    { label: 'Sonntagsarbeit', time: '00:00 – 24:00 Uhr', zuschlag: '+75%', color: 'bg-orange-50 border-orange-200 text-orange-800', badge: 'bg-orange-100 text-orange-700' },
    { label: '24. & 31. Dezember', time: 'ab 14:00 Uhr', zuschlag: '+100%', color: 'bg-red-50 border-red-200 text-red-800', badge: 'bg-red-100 text-red-700' },
    { label: 'Gesetzliche Feiertage', time: 'ganztägig', zuschlag: '+100%', color: 'bg-rose-50 border-rose-200 text-rose-800', badge: 'bg-rose-100 text-rose-700' },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#152852] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=800&fit=crop" alt="" fill sizes="100vw" className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#152852]/60 via-[#152852]/70 to-[#152852]/95" />
        </div>
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-6">
              <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-white/80">Transparente Preise · Keine versteckten Kosten</span>
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-6" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.3)' }}>
              Faire Preise für{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F39900] to-[#FFB617]">
                erstklassige Arbeit
              </span>
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-xl mx-auto" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}>
              Unsere Verrechnungssätze auf einen Blick — transparent, fair kalkuliert 
              und ohne Überraschungen. Alle Preise zzgl. Material.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-10 max-w-lg mx-auto">
              {[
                { value: '15+', label: 'Jahre Erfahrung' },
                { value: '4.9', label: 'Kundenbewertung' },
                { value: '100%', label: 'Festpreisgarantie' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl py-4 px-3 text-center border border-white/10">
                  <p className="text-xl md:text-2xl font-extrabold text-white">{stat.value}</p>
                  <p className="text-[10px] text-white/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Verrechnungssätze */}
      <section id="preise" className="py-20 bg-white scroll-mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                Personal
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Verrechnungssätze</h2>
              <p className="text-slate-500 max-w-lg mx-auto">
                Unsere Stundensätze für die verschiedenen Fachbereiche — fair kalkuliert und transparent.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {rates.map((rate, i) => (
                <div key={i} className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-amber-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-5">
                    <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-0.5">{rate.title}</h3>
                  <p className="text-xs text-slate-400 mb-5">{rate.subtitle}</p>
                  <div className="space-y-2.5">
                    <div className="bg-slate-50 rounded-xl p-3.5 flex items-end justify-between">
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Netto</p>
                        <p className="text-2xl font-extrabold text-slate-900">{rate.netto} <span className="text-sm font-semibold text-slate-400">€</span></p>
                      </div>
                      <span className="text-[10px] text-slate-400 mb-1">/ Stunde</span>
                    </div>
                    <div className="bg-amber-50 rounded-xl p-3.5 flex items-end justify-between">
                      <div>
                        <p className="text-[10px] text-amber-600 uppercase tracking-wider font-medium">Brutto</p>
                        <p className="text-xl font-bold text-amber-800">{rate.brutto} <span className="text-sm font-semibold text-amber-500">€</span></p>
                      </div>
                      <span className="text-[10px] text-amber-500 mb-0.5">inkl. 19% MwSt.</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notdienstpauschale + Bereitschaftszeiten */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6">
            {/* Notdienstpauschale */}
            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold mb-5">
                  🚨 Notdienst
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Notdienstpauschale</h2>
                <p className="text-white/60 text-sm mb-6 max-w-md leading-relaxed">
                  Die Pauschale fällt zusätzlich zum regulären Stundensatz an und deckt die 
                  tarifvertragliche Bereitschaftsvergütung ab.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-[10px] text-white/50 uppercase tracking-wider font-medium mb-1">Netto</p>
                    <p className="text-2xl font-extrabold">80,00 <span className="text-sm font-semibold text-white/50">€</span></p>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-[10px] text-white/50 uppercase tracking-wider font-medium mb-1">Brutto</p>
                    <p className="text-2xl font-extrabold">95,20 <span className="text-sm font-semibold text-white/50">€</span></p>
                    <p className="text-[10px] text-white/40 mt-0.5">inkl. 19% MwSt.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bereitschaftszeiten */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100">
              <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-5">
                🕐 Bereitschaftszeiten
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mb-5">Wann gilt der Notdienst?</h3>
              <div className="space-y-2.5">
                {[
                  { day: 'Montag – Donnerstag', time: '15:45 – 22:00 Uhr' },
                  { day: 'Freitag', time: '11:45 – 22:00 Uhr' },
                  { day: 'Samstag & Sonntag', time: '06:45 – 22:00 Uhr' },
                ].map((slot, i) => (
                  <div key={i} className="flex items-center justify-between bg-slate-50 rounded-xl px-4 py-3.5">
                    <span className="font-semibold text-slate-900 text-sm">{slot.day}</span>
                    <span className="font-mono text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg">
                      {slot.time}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-slate-400 mt-4 leading-relaxed">
                Die Notdienstpauschale entsteht aufgrund unserer tarifvertraglichen Verpflichtung, 
                unseren Mitarbeitern für die Bereithaltung eine Vergütung zu zahlen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zuschläge */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                Übersicht
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Zuschläge für Mehrarbeit</h2>
              <p className="text-slate-500 max-w-lg mx-auto">
                Zuschläge werden auf den jeweiligen Stundenverrechnungssatz berechnet.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {surcharges.map((item, i) => (
                <div key={i} className={`${item.color} border rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all`}>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-sm">{item.label}</h3>
                    <span className={`${item.badge} text-sm font-extrabold px-2.5 py-0.5 rounded-lg`}>
                      {item.zuschlag}
                    </span>
                  </div>
                  {item.time && <p className="text-xs opacity-70">{item.time}</p>}
                </div>
              ))}
            </div>

            {/* Rechenbeispiel */}
            <div className="mt-10 bg-slate-50 rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-extrabold text-slate-900 mb-5 flex items-center gap-2">
                📊 Rechenbeispiel
              </h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-white rounded-xl p-5 border border-slate-100">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium mb-3">KD-Techniker · Samstag</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Stundenverrechnungssatz</span>
                      <span className="font-semibold text-slate-900">78,86 €</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Zuschlag Samstag (+50%)</span>
                      <span className="font-semibold text-slate-900">39,43 €</span>
                    </div>
                    <div className="h-px bg-slate-100 my-2" />
                    <div className="flex justify-between text-base">
                      <span className="font-bold text-slate-900">Gesamt (netto)</span>
                      <span className="font-extrabold text-amber-600">118,29 €</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-5 border border-slate-100">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium mb-3">KD-Techniker · Notdienst Sa.</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Stundenverrechnungssatz</span>
                      <span className="font-semibold text-slate-900">78,86 €</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Zuschlag Samstag (+50%)</span>
                      <span className="font-semibold text-slate-900">39,43 €</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Notdienstpauschale</span>
                      <span className="font-semibold text-slate-900">80,00 €</span>
                    </div>
                    <div className="h-px bg-slate-100 my-2" />
                    <div className="flex justify-between text-base">
                      <span className="font-bold text-slate-900">Gesamt (netto)</span>
                      <span className="font-extrabold text-amber-600">198,29 €</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-center text-slate-900 mb-10">
              Darauf können Sie sich verlassen
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: '🛡️', title: 'Festpreisgarantie', desc: 'Der vereinbarte Preis gilt — keine Überraschungen' },
                { icon: '📊', title: 'Transparenz', desc: 'Alle Kosten werden im Vorfeld offen kommuniziert' },
                { icon: '🔧', title: 'Meisterbetrieb', desc: 'Qualitätsarbeit von zertifizierten Fachkräften' },
                { icon: '🕐', title: '24/7 erreichbar', desc: 'Notdienst rund um die Uhr für dringende Fälle' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-md transition-shadow flex items-start gap-4">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
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
            Fragen zu unseren Preisen?
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
            Kontaktieren Sie uns — wir beraten Sie gerne und erstellen ein individuelles Angebot.
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
              href="tel:053123449080"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold transition-all"
            >
              0531 23 44 909 80
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
