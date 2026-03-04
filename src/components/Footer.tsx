import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#152852] text-white relative overflow-hidden">
      {/* CTA Banner */}
      <div className="relative z-10 border-b border-white/10">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Projekt im Kopf?
              </h3>
              <p className="text-slate-400 text-lg">
                Lassen Sie uns gemeinsam Ihre Vision verwirklichen.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:053123449080"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Anrufen
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#152852] px-6 py-3 rounded-xl font-bold transition-colors duration-200"
              >
                Anfrage senden
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/joradan.png"
              alt="Jordan GmbH"
              width={130}
              height={36}
              className="object-contain mb-5"
            />
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Ihr Experte für Klima, Heizung, Sanitär und Elektro in Braunschweig und Umgebung.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/jordan.handwerk/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/8 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors duration-200 group">
                <svg className="w-4 h-4 text-slate-400 group-hover:text-[#152852]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-white/8 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors duration-200 group">
                <svg className="w-4 h-4 text-slate-400 group-hover:text-[#152852]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Leistungen</h4>
            <ul className="space-y-2.5">
              {['Klima & Lüftung', 'Heizung', 'Sanitär & Bad', 'Elektro', 'Wärmepumpen'].map((item) => (
                <li key={item}>
                  <Link href="/leistungen" className="text-sm text-slate-400 hover:text-amber-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Unternehmen</h4>
            <ul className="space-y-2.5">
              <li><Link href="/unternehmen" className="text-sm text-slate-400 hover:text-amber-400 transition-colors">Über uns</Link></li>
              <li><Link href="/referenzen" className="text-sm text-slate-400 hover:text-amber-400 transition-colors">Referenzen</Link></li>
              <li><Link href="/preise" className="text-sm text-slate-400 hover:text-amber-400 transition-colors">Preise</Link></li>
              <li><Link href="/kundenbewertungen" className="text-sm text-slate-400 hover:text-amber-400 transition-colors">Bewertungen</Link></li>
              <li><Link href="/service-versprechen" className="text-sm text-slate-400 hover:text-amber-400 transition-colors">Service-Versprechen</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="text-sm text-slate-400">
                Rischbleek 3<br />38126 Braunschweig
              </li>
              <li>
                <a href="tel:053123449090" className="text-sm text-slate-400 hover:text-amber-400 transition-colors">
                  0531 2 34 49 09-0
                </a>
              </li>
              <li>
                <a href="mailto:info@jordan24.de" className="text-sm text-slate-400 hover:text-amber-400 transition-colors">
                  info@jordan24.de
                </a>
              </li>
              <li className="pt-2">
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Bürozeiten</div>
                <div className="text-sm text-slate-400">Mo+Di: 7:00–12:30 &amp; 13:30–15:45</div>
                <div className="text-sm text-slate-400">Mi+Do: 7:00–12:30</div>
                <div className="text-sm text-slate-400">Fr: Keine Bürozeiten</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <p>&copy; {currentYear} Jordan GmbH. Alle Rechte vorbehalten.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-slate-300 transition-colors">Datenschutz</Link>
              <Link href="#" className="hover:text-slate-300 transition-colors">Impressum</Link>
              <Link href="#" className="hover:text-slate-300 transition-colors">AGB</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
