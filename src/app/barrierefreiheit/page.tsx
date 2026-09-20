import type { Metadata } from 'next';

import Kicker from '@/components/Kicker';

export const metadata: Metadata = {
  title: 'Erklärung zur Barrierefreiheit | Jordan GmbH',
  description: 'Erklärung zur Barrierefreiheit der Website der JORDAN GmbH: umgesetzte Maßnahmen, bekannte Einschränkungen und Feedback-Möglichkeit.',
};

export default function Barrierefreiheit() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-[#152852]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-5">
            <Kicker light>Rechtliches</Kicker>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.08] tracking-tight">
              Erklärung zur Barrierefreiheit
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Diese Website soll für alle Menschen nutzbar sein — unabhängig von
              technischen Hilfsmitteln oder Einschränkungen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-10 text-sm text-slate-600 leading-relaxed">

            <div>
              <h2 className="text-xl font-extrabold text-slate-900 mb-3">Geltungsbereich</h2>
              <p>
                Diese Erklärung gilt für die Website der JORDAN GmbH unter jordan-gmbh.de.
                Wir bemühen uns, die Website im Einklang mit dem Barrierefreiheitsstärkungsgesetz (BFSG)
                barrierefrei zugänglich zu machen und orientieren uns dabei an den Web Content
                Accessibility Guidelines (WCAG) 2.1, Konformitätsstufe AA, sowie der europäischen
                Norm EN 301 549.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-slate-900 mb-3">Umgesetzte Maßnahmen</h2>
              <ul className="space-y-2.5">
                {[
                  'Semantische HTML-Struktur mit durchgängiger Überschriften-Hierarchie und Landmarken',
                  'Vollständige Bedienbarkeit per Tastatur mit deutlich sichtbarem Fokus-Indikator',
                  'Alternativtexte für informative Bilder; rein dekorative Elemente sind für Screenreader ausgeblendet',
                  'Ausreichende Farbkontraste zwischen Text und Hintergrund',
                  'Beschriftete Formularfelder mit klaren Pflichtfeld-Kennzeichnungen und verständlichen Fehlermeldungen',
                  'Animationen und Video-Loops werden abgeschaltet, wenn Ihr System „Bewegung reduzieren“ (prefers-reduced-motion) meldet',
                  'Responsives Layout — Inhalte bleiben auch bei 200 % Zoom und auf kleinen Bildschirmen nutzbar',
                  'Verzicht auf zeitkritische Interaktionen, automatisch abspielende Töne und blinkende Inhalte',
                ].map((item) => (
                  <li key={item} className="grid grid-cols-[auto_1fr] gap-x-3 items-baseline">
                    <span className="w-1.5 h-1.5 bg-amber-500 -translate-y-0.5" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-slate-900 mb-3">Bekannte Einschränkungen</h2>
              <p>Trotz unserer Bemühungen sind einzelne Bereiche noch nicht vollständig barrierefrei:</p>
              <ul className="mt-3 space-y-2.5">
                {[
                  'Die als PDF bereitgestellten Allgemeinen Geschäftsbedingungen sind möglicherweise nicht vollständig für Screenreader aufbereitet. Auf Wunsch stellen wir die Inhalte gern in einem zugänglichen Format zur Verfügung.',
                  'Die interaktive Anfahrtskarte ist mit Hilfstechnologien nur eingeschränkt bedienbar. Unsere Adresse und Anfahrtsinformationen stehen auf denselben Seiten als Text zur Verfügung.',
                  'Kurze Video-Schleifen dienen ausschließlich der Dekoration und enthalten keine Informationen; sie haben daher keine Untertitel.',
                ].map((item) => (
                  <li key={item} className="grid grid-cols-[auto_1fr] gap-x-3 items-baseline">
                    <span className="w-1.5 h-1.5 bg-amber-500 -translate-y-0.5" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-slate-900 mb-3">Barriere melden</h2>
              <p>
                Sie sind auf ein Problem gestoßen oder benötigen Inhalte dieser Website in einem
                anderen Format? Melden Sie sich gern — wir kümmern uns darum:
              </p>
              <p className="mt-3">
                E-Mail: <a href="mailto:info@jordan24.de" className="font-semibold text-[#152852] hover:text-amber-600 transition-colors">info@jordan24.de</a><br />
                Telefon: <a href="tel:053123449090" className="font-semibold text-[#152852] hover:text-amber-600 transition-colors">0531 234 490 90</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-slate-900 mb-3">Durchsetzungsverfahren</h2>
              <p>
                Sollten Sie der Ansicht sein, dass wir auf Ihre Meldung nicht angemessen reagiert haben,
                können Sie sich an die für die Marktüberwachung nach dem Barrierefreiheitsstärkungsgesetz
                zuständige Behörde wenden.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-slate-900 mb-3">Stand dieser Erklärung</h2>
              <p>
                Diese Erklärung wurde im August 2026 erstellt und basiert auf einer Selbstbewertung.
                Wir überprüfen sie regelmäßig und entwickeln die Barrierefreiheit der Website laufend weiter.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
