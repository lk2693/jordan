import type { Metadata } from 'next';

import Kicker from '@/components/Kicker';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen | Jordan GmbH',
  description: 'Die Allgemeinen Geschäftsbedingungen der Jordan GmbH für private Auftraggeber, gewerbliche Auftraggeber und Kaufverträge — als PDF zum Ansehen und Herunterladen.',
};

const documents = [
  {
    title: 'AGB für private Auftraggeber',
    subtitle: 'Werkverträge mit Verbrauchern',
    stand: 'Stand: Oktober 2022',
    detail: '2 Seiten · PDF',
    href: '/Allgemeine_Geschaeftsbedingungen_fuer_private_Auftraggeber_Oktober_2022_AGB_.pdf',
  },
  {
    title: 'AGB für gewerbliche Auftraggeber',
    subtitle: 'Werkverträge mit Unternehmern',
    stand: 'Stand: 2018',
    detail: '2 Seiten · PDF',
    href: '/Allgemeine_Geschaeftsbedigungen_fuer_Werkvertraege_mit_Unternehmern_gewerbliche_Auftraggeber_2018-1.pdf',
  },
  {
    title: 'AGB für Kaufverträge',
    subtitle: 'Verkauf von Waren und Material',
    stand: 'Stand: 01.01.2022',
    detail: '3 Seiten · PDF',
    href: '/ZVSHK_AGB_fuer_Kaufvertraege_2022.pdf',
  },
];

export default function Agb() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-[#152852]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-5">
            <Kicker light>Rechtliches</Kicker>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.08] tracking-tight">
              Allgemeine Geschäftsbedingungen
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Je nach Auftragsart gilt eine der folgenden Fassungen.
              Maßgeblich ist jeweils der Wortlaut im PDF.
            </p>
          </div>
        </div>
      </section>

      {/* Dokumente */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {documents.map((doc, i) => (
                <Reveal key={doc.href} delay={i * 80}>
                  <div className="py-6 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1">
                      <h2 className="font-bold text-slate-900">{doc.title}</h2>
                      <p className="text-sm text-slate-500 mt-0.5">{doc.subtitle}</p>
                      <p className="text-xs text-slate-400 mt-1">{doc.stand} · {doc.detail}</p>
                    </div>
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#152852] hover:bg-[#193c6e] text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors duration-200 shrink-0"
                    >
                      PDF öffnen
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10" delay={150}>
              <p className="text-sm text-slate-400 leading-relaxed">
                Fragen zu unseren Geschäftsbedingungen? Rufen Sie uns an unter{' '}
                <a href="tel:053123449090" className="font-semibold text-[#152852] hover:text-amber-600 transition-colors">0531 2 34 49 09-0</a>{' '}
                oder schreiben Sie an{' '}
                <a href="mailto:info@jordan24.de" className="font-semibold text-[#152852] hover:text-amber-600 transition-colors">info@jordan24.de</a>.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
