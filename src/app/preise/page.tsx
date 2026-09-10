import Link from 'next/link';
import type { Metadata } from 'next';

import Kicker from '@/components/Kicker';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Preise & Verrechnung | Jordan GmbH — Transparente Kosten',
  description: 'Faire und transparente Verrechnungssätze der Jordan GmbH. Stundensätze, Notdienstpauschale und Zuschläge auf einen Blick.',
};

export default function Preise() {
  const rates = [
    { title: 'LC-Leiter', subtitle: 'Leistungscenterleiter', netto: '106,50', brutto: '126,74' },
    { title: 'KD-Techniker', subtitle: 'Kundendiensttechniker', netto: '78,86', brutto: '93,84' },
    { title: 'PJ-Techniker', subtitle: 'Projekttechniker (Sanitär, Heizung, Klima, Elektro)', netto: '78,86', brutto: '93,84' },
  ];

  const surcharges = [
    { label: 'Außerhalb der Geschäftszeiten', time: '—', zuschlag: '+ 25 %' },
    { label: 'Nachtarbeit', time: '22:00 – 06:00 Uhr', zuschlag: '+ 50 %' },
    { label: 'Samstagsarbeit', time: '06:00 – 22:00 Uhr', zuschlag: '+ 50 %' },
    { label: 'Sonntagsarbeit', time: '00:00 – 24:00 Uhr', zuschlag: '+ 75 %' },
    { label: '24. & 31. Dezember', time: 'ab 14:00 Uhr', zuschlag: '+ 100 %' },
    { label: 'Gesetzliche Feiertage', time: 'ganztägig', zuschlag: '+ 100 %' },
  ];

  const standbyTimes = [
    { day: 'Montag – Donnerstag', time: '15:45 – 22:00 Uhr' },
    { day: 'Freitag', time: '11:45 – 22:00 Uhr' },
    { day: 'Samstag & Sonntag', time: '06:45 – 22:00 Uhr' },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero — schlicht, ohne Stockfoto */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-[#152852]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-5">
            <Kicker light>Preise &amp; Verrechnung</Kicker>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.08] tracking-tight">
              Unsere Verrechnungssätze auf einen Blick
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Transparent kalkuliert und ohne Überraschungen: Was eine Arbeitsstunde
              bei uns kostet und welche Zuschläge wann gelten. Alle Preise zzgl. Material.
            </p>
          </div>
        </div>
      </section>

      {/* Verrechnungssätze — klassische Preistabelle */}
      <section id="preise" className="py-20 md:py-24 bg-white scroll-mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Reveal className="mb-10 space-y-4">
              <Kicker>Stundensätze</Kicker>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Verrechnungssätze</h2>
            </Reveal>

            <Reveal>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-t-2 border-[#152852]">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="py-4 pr-4 text-sm font-semibold text-slate-500 uppercase tracking-wider">Position</th>
                      <th className="py-4 px-4 text-sm font-semibold text-slate-500 uppercase tracking-wider text-right">Netto / Std.</th>
                      <th className="py-4 pl-4 text-sm font-semibold text-slate-500 uppercase tracking-wider text-right">Brutto / Std.*</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rates.map((rate) => (
                      <tr key={rate.title} className="border-b border-slate-200">
                        <td className="py-5 pr-4">
                          <span className="block font-bold text-slate-900">{rate.title}</span>
                          <span className="block text-sm text-slate-400 mt-0.5">{rate.subtitle}</span>
                        </td>
                        <td className="py-5 px-4 text-right font-bold text-slate-900 whitespace-nowrap">{rate.netto} €</td>
                        <td className="py-5 pl-4 text-right font-bold text-slate-900 whitespace-nowrap">{rate.brutto} €</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-slate-400 mt-4">
                * inkl. 19 % MwSt. — Abrechnung nach tatsächlichem Aufwand, zzgl. Material und Anfahrt.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Notdienstpauschale + Bereitschaftszeiten */}
      <section className="py-20 md:py-24 bg-[var(--warm-50)] border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Reveal className="mb-10 space-y-4">
              <Kicker>Notdienst</Kicker>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Notdienstpauschale</h2>
              <p className="text-slate-500 max-w-2xl leading-relaxed">
                Außerhalb der Geschäftszeiten fällt zusätzlich zum Stundensatz eine Pauschale an.
                Sie deckt die tarifvertragliche Bereitschaftsvergütung ab — also die Vergütung,
                die wir unseren Mitarbeitern für die Bereithaltung zahlen.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              <Reveal>
                <div className="border-l-4 border-red-500 pl-6">
                  <p className="text-sm text-slate-500 mb-1">Pauschale pro Einsatz</p>
                  <p className="text-4xl font-extrabold text-slate-900">80,00 €<span className="text-lg text-slate-400 font-semibold"> netto</span></p>
                  <p className="text-sm text-slate-400 mt-1">95,20 € inkl. 19 % MwSt.</p>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h3 className="font-bold text-slate-900 mb-3">Bereitschaftszeiten</h3>
                <dl className="divide-y divide-slate-200 border-y border-slate-200">
                  {standbyTimes.map((slot) => (
                    <div key={slot.day} className="flex items-center justify-between py-3 gap-4">
                      <dt className="text-sm font-semibold text-slate-900">{slot.day}</dt>
                      <dd className="text-sm text-slate-500 whitespace-nowrap">{slot.time}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Zuschläge — eine Tabelle statt bunter Kärtchen */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Reveal className="mb-10 space-y-4">
              <Kicker>Zuschläge</Kicker>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Zuschläge für Mehrarbeit</h2>
              <p className="text-slate-500 max-w-2xl">
                Zuschläge werden auf den jeweiligen Stundenverrechnungssatz berechnet.
              </p>
            </Reveal>

            <Reveal>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-t-2 border-[#152852]">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="py-4 pr-4 text-sm font-semibold text-slate-500 uppercase tracking-wider">Zeitraum</th>
                      <th className="py-4 px-4 text-sm font-semibold text-slate-500 uppercase tracking-wider">Uhrzeit</th>
                      <th className="py-4 pl-4 text-sm font-semibold text-slate-500 uppercase tracking-wider text-right">Zuschlag</th>
                    </tr>
                  </thead>
                  <tbody>
                    {surcharges.map((item) => (
                      <tr key={item.label} className="border-b border-slate-200">
                        <td className="py-4 pr-4 font-semibold text-slate-900">{item.label}</td>
                        <td className="py-4 px-4 text-sm text-slate-500 whitespace-nowrap">{item.time}</td>
                        <td className="py-4 pl-4 text-right font-bold text-amber-600 whitespace-nowrap">{item.zuschlag}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            {/* Rechenbeispiel */}
            <Reveal className="mt-14" delay={100}>
              <h3 className="text-xl font-extrabold text-slate-900 mb-6">Rechenbeispiel</h3>
              <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">KD-Techniker, Samstag</p>
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="text-slate-500">Stundenverrechnungssatz</dt>
                      <dd className="font-semibold text-slate-900 whitespace-nowrap">78,86 €</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-slate-500">Zuschlag Samstag (+ 50 %)</dt>
                      <dd className="font-semibold text-slate-900 whitespace-nowrap">39,43 €</dd>
                    </div>
                    <div className="flex justify-between gap-4 border-t border-slate-200 pt-2 mt-2 text-base">
                      <dt className="font-bold text-slate-900">Gesamt (netto)</dt>
                      <dd className="font-extrabold text-slate-900 whitespace-nowrap">118,29 €</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">KD-Techniker, Notdienst am Samstag</p>
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="text-slate-500">Stundenverrechnungssatz</dt>
                      <dd className="font-semibold text-slate-900 whitespace-nowrap">78,86 €</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-slate-500">Zuschlag Samstag (+ 50 %)</dt>
                      <dd className="font-semibold text-slate-900 whitespace-nowrap">39,43 €</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-slate-500">Notdienstpauschale</dt>
                      <dd className="font-semibold text-slate-900 whitespace-nowrap">80,00 €</dd>
                    </div>
                    <div className="flex justify-between gap-4 border-t border-slate-200 pt-2 mt-2 text-base">
                      <dt className="font-bold text-slate-900">Gesamt (netto)</dt>
                      <dd className="font-extrabold text-slate-900 whitespace-nowrap">198,29 €</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#152852]">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Fragen zu unseren Preisen?
              </h2>
              <p className="text-lg text-slate-400 max-w-xl mx-auto">
                Rufen Sie an oder schreiben Sie uns — wir erstellen Ihnen ein
                unverbindliches Angebot mit Festpreisgarantie.
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
                  href="tel:053123449080"
                  className="inline-flex items-center justify-center gap-2 text-white border border-white/40 hover:border-white hover:bg-white/5 px-7 py-3.5 rounded-lg font-semibold transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  0531 23 44 909 80
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
