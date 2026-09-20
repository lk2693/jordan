import Link from 'next/link';
import type { Metadata } from 'next';

import Calculator from '@/components/Calculator';
import Kicker from '@/components/Kicker';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Heizungsrechner | Jordan GmbH — Kosten in 2 Minuten schätzen',
  description: 'Was kostet eine neue Heizung? Mit dem Heizungsrechner der Jordan GmbH erhalten Sie in zwei Minuten eine erste Kostenschätzung — kostenlos und unverbindlich.',
};

export default function HeizungsrechnerPage() {
  const reasons = [
    'Bis zu 30 % geringere Energiekosten',
    'Staatliche Förderung von bis zu 40 %',
    'Mehr Komfort durch moderne Regelungstechnik',
    'Wertsteigerung Ihrer Immobilie',
  ];

  const funding = [
    { title: 'BAFA-Zuschuss', description: 'Bis zu 40 % Förderung, insbesondere für Wärmepumpen' },
    { title: 'KfW-Kredit', description: 'Zinsgünstige Finanzierung der Modernisierung' },
    { title: 'Steuerbonus', description: '20 % der Kosten über drei Jahre absetzbar' },
  ];

  const systems = [
    { title: 'Wärmepumpe', description: 'Effizient und förderfähig — die erste Wahl bei gut gedämmten Gebäuden.' },
    { title: 'Gas-Brennwert', description: 'Bewährte Technik mit vergleichsweise geringen Anschaffungskosten.' },
    { title: 'Pelletheizung', description: 'Heizen mit nachwachsendem Rohstoff — unabhängig von Öl und Gas.' },
    { title: 'Solarthermie', description: 'Kostenlose Sonnenwärme zur Unterstützung von Heizung und Warmwasser.' },
  ];

  const steps = [
    { title: 'Kosten berechnen', description: 'Erste Schätzung direkt online — ohne Anmeldung.' },
    { title: 'Beratung vor Ort', description: 'Wir sehen uns Gebäude und Anlage persönlich an.' },
    { title: 'Festes Angebot', description: 'Detailliert und transparent kalkuliert.' },
    { title: 'Einbau', description: 'Montage durch unser eigenes Team aus Braunschweig.' },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-[#152852]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-5">
            <Kicker light>Heizungsrechner</Kicker>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.08] tracking-tight">
              Was kostet Ihre neue Heizung?
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Ermitteln Sie in zwei Minuten eine erste Kostenschätzung für Ihre
              Heizungsmodernisierung — kostenlos, unverbindlich und ohne Anmeldung.
            </p>
          </div>
        </div>
      </section>

      {/* Rechner + Infos */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-16 items-start">
            <Reveal>
              <Calculator type="heating" />
            </Reveal>

            <div className="space-y-12">
              <Reveal delay={100}>
                <h2 className="text-2xl font-extrabold text-slate-900 mb-5">
                  Warum jetzt modernisieren?
                </h2>
                <ul className="space-y-3">
                  {reasons.map((reason) => (
                    <li key={reason} className="flex items-start gap-3 text-slate-600">
                      <span className="w-1.5 h-1.5 bg-amber-500 mt-2.5 shrink-0" aria-hidden />
                      {reason}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={200}>
                <h2 className="text-2xl font-extrabold text-slate-900 mb-5">
                  Fördermöglichkeiten
                </h2>
                <dl className="divide-y divide-slate-200 border-y border-slate-200">
                  {funding.map((item) => (
                    <div key={item.title} className="py-4">
                      <dt className="font-bold text-slate-900">{item.title}</dt>
                      <dd className="text-sm text-slate-500 mt-0.5">{item.description}</dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-[#152852] hover:text-amber-600 transition-colors mt-5"
                >
                  Förderberatung anfragen
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Heizungssysteme */}
      <section className="py-20 md:py-24 bg-[var(--warm-50)] border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Reveal className="mb-12 space-y-4">
              <Kicker>Systeme</Kicker>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Diese Heizungssysteme bauen wir ein
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-x-16 gap-y-10">
              {systems.map((system, i) => (
                <Reveal key={system.title} delay={i * 100}>
                  <div className="relative pt-5">
                    <span className="absolute -top-0.5 left-0 w-10 border-t-2 border-amber-500" aria-hidden />
                    <h3 className="font-bold text-slate-900 mb-1.5">{system.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{system.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Reveal className="mb-12 space-y-4">
              <Kicker>Ablauf</Kicker>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Vom Rechner zur neuen Heizung
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
              {steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 100}>
                  <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-amber-600 mb-3">
                    Schritt {i + 1}
                  </p>
                  <h3 className="font-bold text-slate-900 mb-1.5">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
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
                Lieber direkt mit uns sprechen?
              </h2>
              <p className="text-lg text-slate-400 max-w-xl mx-auto">
                Jede Heizung ist anders. Rufen Sie an oder schreiben Sie uns —
                wir beraten Sie ehrlich, welche Lösung sich für Ihr Gebäude rechnet.
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
