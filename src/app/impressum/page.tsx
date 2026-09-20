import type { Metadata } from 'next';

import Kicker from '@/components/Kicker';

export const metadata: Metadata = {
  title: 'Impressum | Jordan GmbH',
  description: 'Impressum der JORDAN GmbH, Rischbleek 3, 38126 Braunschweig — Angaben gemäß § 5 TMG.',
  robots: { index: true, follow: true },
};

export default function Impressum() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-[#152852]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-5">
            <Kicker light>Rechtliches</Kicker>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.08] tracking-tight">
              Impressum
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* Anbieter */}
            <dl className="divide-y divide-slate-200 border-y border-slate-200">
              <div className="py-4 grid grid-cols-1 sm:grid-cols-[12rem_1fr] gap-1 sm:gap-4">
                <dt className="text-sm text-slate-400">Anbieter</dt>
                <dd className="text-sm text-slate-900">
                  <span className="font-semibold">JORDAN GmbH</span><br />
                  Rischbleek 3<br />
                  38126 Braunschweig
                </dd>
              </div>
              <div className="py-4 grid grid-cols-1 sm:grid-cols-[12rem_1fr] gap-1 sm:gap-4">
                <dt className="text-sm text-slate-400">Kontakt</dt>
                <dd className="text-sm text-slate-900">
                  Tel. <a href="tel:053123449090" className="font-semibold hover:text-amber-600 transition-colors">0531 234 490 90</a><br />
                  Fax (0531) 2 34 49 09 89<br />
                  Notdienst <a href="tel:053123449090" className="font-semibold hover:text-amber-600 transition-colors">0531 234 490 90</a><br />
                  E-Mail <a href="mailto:info@jordan24.de" className="font-semibold hover:text-amber-600 transition-colors">info@jordan24.de</a><br />
                  Web <a href="https://www.jordan24.de" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-amber-600 transition-colors">www.jordan24.de</a>
                </dd>
              </div>
              <div className="py-4 grid grid-cols-1 sm:grid-cols-[12rem_1fr] gap-1 sm:gap-4">
                <dt className="text-sm text-slate-400">Geschäftsführer</dt>
                <dd className="text-sm font-semibold text-slate-900">Siegmar Zajonc</dd>
              </div>
              <div className="py-4 grid grid-cols-1 sm:grid-cols-[12rem_1fr] gap-1 sm:gap-4">
                <dt className="text-sm text-slate-400">Registergericht</dt>
                <dd className="text-sm text-slate-900">
                  HRB 2537<br />
                  Amtsgericht Braunschweig<br />
                  Steuer-Nr. 13 / 206 / 43105<br />
                  USt-IdNr.: DE335883899
                </dd>
              </div>
              <div className="py-4 grid grid-cols-1 sm:grid-cols-[12rem_1fr] gap-1 sm:gap-4">
                <dt className="text-sm text-slate-400">Berufshaftpflicht&shy;versicherung</dt>
                <dd className="text-sm text-slate-900">
                  Name und Sitz des Versicherers:<br />
                  SIGNAL IDUNA<br />
                  Allgemeine Versicherung Aktiengesellschaft<br />
                  44121 Dortmund<br />
                  Geltungsraum der Versicherung: DE
                </dd>
              </div>
            </dl>

            {/* Haftungsausschluss */}
            <div className="mt-14 space-y-10 text-sm text-slate-600 leading-relaxed">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Haftungsausschluss</h2>
                <p className="text-slate-400">(Inhalt gemäß § 6 MDStV)</p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-3">1. Inhalt des Onlineangebotes</h3>
                <p>
                  Der Verfasser und die Informationszubringer übernehmen keinerlei Gewähr für die Aktualität,
                  Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche,
                  die sich auf Schäden materieller oder ideeller Art beziehen, welche durch die Nutzung oder
                  Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger
                  Informationen verursacht wurden sind grundsätzlich ausgeschlossen, sofern seitens des Verfassers
                  kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Alle Angebote sind
                  freibleibend und unverbindlich. Der Verfasser behält es sich ausdrücklich vor, Teile der Seiten
                  oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder
                  die Veröffentlichung zeitweise oder endgültig einzustellen.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-3">2. Verweise und Links</h3>
                <p className="font-semibold text-slate-700 mb-3">§ 5 Teledienstgesetz — Verantwortlichkeit</p>
                <ol className="list-decimal pl-5 space-y-2 mb-4">
                  <li>
                    Diensteanbieter sind für eigene Inhalte, die sie zur Nutzung bereithalten, nach allgemeinen
                    Gesetzen verantwortlich.
                  </li>
                  <li>
                    Diensteanbieter sind für fremde Inhalte, die sie zur Nutzung bereithalten, nur dann
                    verantwortlich, wenn sie von diesen Inhalten Kenntnis haben und es ihnen technisch möglich und
                    zumutbar ist, deren Nutzung zu verhindern.
                  </li>
                  <li>
                    Diensteanbieter sind für fremde Inhalte, zu denen sie lediglich den Zugang zur Nutzung
                    vermitteln, nicht verantwortlich. Eine automatische und kurzzeitige Vorhaltung fremder Inhalte
                    auf Grund Nutzerabfrage gilt als Zugangsvermittlung.
                  </li>
                  <li>
                    Verpflichtungen zur Sperrung der Nutzung rechtswidriger Inhalte nach den allgemeinen Gesetzen
                    bleiben unberührt, wenn der Diensteanbieter unter Wahrung des Fernmeldegeheimnisses gemäß § 85
                    des Telekommunikationsgesetzes von diesen Inhalten Kenntnis erlangt und eine Sperrung technisch
                    möglich und zumutbar ist.
                  </li>
                </ol>
                <p>
                  Sofern auf Verweisziele (&bdquo;Links&ldquo;) direkt oder indirekt verwiesen wird, die außerhalb des
                  Verantwortungsbereiches des Verfassers liegen, haftet dieser nur dann, wenn er von den Inhalten
                  Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger
                  Inhalte zu verhindern. Für darüber hinausgehende Inhalte und insbesondere für Schäden, die aus
                  der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen, haftet allein der
                  Anbieter dieser Seiten, nicht derjenige, der über Links auf die jeweilige Veröffentlichung
                  lediglich verweist. Diese Einschränkung gilt gleichermaßen auch für Fremdeinträge in vom Verfasser
                  eingerichteten Gästebüchern, Diskussionsforen und Mailinglisten.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-3">3. Urheberrecht</h3>
                <p>
                  Der Verfasser ist bemüht, in allen Publikationen die Urheberrechte der verwendeten Grafiken,
                  Sounds und Texte zu beachten, von ihm selbst erstellte Grafiken, Sounds und Texte zu nutzen oder
                  auf lizenzfreie Grafiken, Sounds und Texte zurückzugreifen. Sollte sich auf den jeweiligen Seiten
                  dennoch eine ungekennzeichnete, aber durch fremdes Copyright geschützte Grafik, ein Sound oder
                  Text befinden, so konnte das Copyright vom Verfasser nicht festgestellt werden. Im Falle einer
                  solchen unbeabsichtigten Copyrightverletzung wird der Verfasser das entsprechende Objekt nach
                  Benachrichtigung aus seiner Publikation entfernen bzw. mit dem entsprechenden Copyright kenntlich
                  machen.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-3">4. Fotos</h3>
                <p>
                  Jordan GmbH, <a href="https://stock.adobe.com/de/photos" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#152852] hover:text-amber-600 transition-colors">stock.adobe.com</a>
                </p>
                <ul className="mt-3 space-y-1 text-slate-500">
                  <li>©MIND AND I – stock.adobe.com / Fotolia ID 215913337</li>
                  <li>©contrastwerkstatt – stock.adobe.com / Fotolia ID 83752764</li>
                  <li>©hkama – stock.adobe.com / Fotolia ID 334387384</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-3">Streitschlichtung</h3>
                <p>
                  Die Jordan GmbH ist weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
