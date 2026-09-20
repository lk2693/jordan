import type { Metadata } from 'next';

import Kicker from '@/components/Kicker';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Jordan GmbH',
  description: 'Datenschutzerklärung der JORDAN GmbH: Welche Daten wir auf dieser Website verarbeiten, zu welchem Zweck und welche Rechte Sie haben.',
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-[#152852]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-5">
            <Kicker light>Rechtliches</Kicker>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.08] tracking-tight">
              Datenschutzerklärung
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Kurz gesagt: Diese Website setzt keine Tracking-Cookies ein und
              verarbeitet Ihre Daten nur, wenn Sie mit uns Kontakt aufnehmen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-10 text-sm text-slate-600 leading-relaxed">

            <div>
              <h2 className="text-xl font-extrabold text-slate-900 mb-3">1. Verantwortlicher</h2>
              <p>
                Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="mt-3">
                <span className="font-semibold text-slate-900">JORDAN GmbH</span><br />
                Geschäftsführer: Siegmar Zajonc<br />
                Rischbleek 3<br />
                38126 Braunschweig<br />
                Tel.: <a href="tel:053123449090" className="font-semibold text-[#152852] hover:text-amber-600 transition-colors">0531 234 490 90</a><br />
                E-Mail: <a href="mailto:info@jordan24.de" className="font-semibold text-[#152852] hover:text-amber-600 transition-colors">info@jordan24.de</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-slate-900 mb-3">2. Allgemeines zur Datenverarbeitung</h2>
              <p>
                Wir verarbeiten personenbezogene Daten unserer Besucher grundsätzlich nur, soweit dies zur
                Bereitstellung einer funktionsfähigen Website sowie zur Bearbeitung Ihrer Anfragen erforderlich
                ist. Rechtsgrundlagen sind Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung und -durchführung)
                und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren und zuverlässigen Betrieb
                der Website).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-slate-900 mb-3">3. Server-Logdateien</h2>
              <p>
                Beim Aufruf dieser Website übermittelt Ihr Browser technisch bedingt Daten an den Server
                unseres Hosting-Anbieters (u. a. IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene
                Seite, Browsertyp und Betriebssystem). Diese Daten werden zur Sicherstellung des Betriebs,
                zur Fehleranalyse und zur Abwehr von Angriffen verarbeitet (Art. 6 Abs. 1 lit. f DSGVO)
                und nach kurzer Zeit automatisch gelöscht. Eine Zusammenführung mit anderen Daten findet
                nicht statt.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-slate-900 mb-3">4. Kontaktaufnahme (Formulare, E-Mail, Telefon)</h2>
              <p>
                Wenn Sie unsere Kontakt- oder Rückruf-Formulare nutzen, uns eine E-Mail schreiben oder
                anrufen, verarbeiten wir die von Ihnen mitgeteilten Daten (z. B. Name, Telefonnummer,
                E-Mail-Adresse, Ihr Anliegen) ausschließlich zur Bearbeitung Ihrer Anfrage und für mögliche
                Anschlussfragen (Art. 6 Abs. 1 lit. b DSGVO). Die Angabe erfolgt freiwillig; ohne die als
                Pflichtfelder gekennzeichneten Angaben können wir Ihre Anfrage jedoch nicht bearbeiten.
              </p>
              <p className="mt-3">
                Für die technische Übermittlung von Formular-Anfragen und die Kostenrechner auf dieser
                Website nutzen wir den Dienst LokalLeads (api.lokalleads.de) als Auftragsverarbeiter.
                Dabei werden die im jeweiligen Formular eingegebenen Daten an LokalLeads übertragen und
                dort für uns gespeichert. Wir löschen Anfrage-Daten, sobald sie für die Bearbeitung nicht
                mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-slate-900 mb-3">5. Kartendarstellung (OpenStreetMap)</h2>
              <p>
                Auf den Seiten &bdquo;Kontakt&ldquo; und &bdquo;Unternehmen&ldquo; binden wir eine Anfahrtskarte ein. Die
                Kartenkacheln werden von den Servern der OpenStreetMap Foundation (tile.openstreetmap.org)
                geladen. Beim Anzeigen der Karte wird Ihre IP-Adresse technisch
                bedingt an diese Server übermittelt (Art. 6 Abs. 1 lit. f DSGVO — berechtigtes Interesse
                an einer verständlichen Anfahrtsbeschreibung). Wenn Sie das nicht möchten, nutzen Sie die
                Karte nicht — unsere Adresse finden Sie auf denselben Seiten auch als Text.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-slate-900 mb-3">6. Cookies, Tracking und Schriftarten</h2>
              <p>
                Diese Website setzt keine Tracking- oder Analyse-Dienste ein und verwendet keine Cookies,
                die einer Einwilligung bedürfen. Die verwendeten Schriftarten werden lokal von unserem
                Server ausgeliefert — es findet keine Verbindung zu Google Fonts oder anderen
                Schriften-Diensten statt.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-slate-900 mb-3">7. Links zu externen Websites</h2>
              <p>
                Unsere Website enthält Links zu externen Angeboten (z. B. unser Google-Unternehmensprofil,
                Facebook und Instagram). Beim Anklicken verlassen Sie unsere Website; es gilt dann die
                Datenschutzerklärung des jeweiligen Anbieters. Eine Datenübertragung an diese Anbieter
                findet erst mit dem Anklicken des Links statt.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-slate-900 mb-3">8. Ihre Rechte</h2>
              <p>Ihnen stehen bezüglich Ihrer personenbezogenen Daten folgende Rechte zu:</p>
              <ul className="mt-3 space-y-1.5 list-disc pl-5">
                <li>Auskunft über die verarbeiteten Daten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                <li>Löschung (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art. 21 DSGVO)</li>
              </ul>
              <p className="mt-3">
                Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an{' '}
                <a href="mailto:info@jordan24.de" className="font-semibold text-[#152852] hover:text-amber-600 transition-colors">info@jordan24.de</a>.
              </p>
              <p className="mt-3">
                Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
                Für uns zuständig ist die Landesbeauftragte für den Datenschutz Niedersachsen,
                Prinzenstraße 5, 30159 Hannover.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-slate-900 mb-3">9. Aktualität dieser Erklärung</h2>
              <p>
                Stand: August 2026. Wir passen diese Datenschutzerklärung an, wenn sich die Website oder
                die rechtlichen Anforderungen ändern.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
