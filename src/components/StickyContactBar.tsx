'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

/**
 * Mobile Schnellkontakt-Leiste: Anrufen + Anfrage sind auf jeder Seite
 * mit einem Daumen-Tap erreichbar. Erscheint erst nach leichtem Scrollen,
 * damit sie die Hero-CTAs nicht doppelt.
 */
export default function StickyContactBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 350);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-30 lg:hidden transition-transform duration-300 ease-out ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-hidden={!visible}
    >
      <div className="grid grid-cols-2 gap-px bg-slate-200 border-t border-slate-200 shadow-[0_-4px_20px_rgb(0_0_0/0.1)]">
        <a
          href="tel:053123449080"
          className="flex items-center justify-center gap-2 bg-white text-[#152852] font-bold py-4 text-sm active:bg-slate-50"
        >
          <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          Jetzt anrufen
        </a>
        <Link
          href="/kontakt"
          className="flex items-center justify-center gap-2 bg-[#F39900] text-[#152852] font-bold py-4 text-sm active:bg-[#d98600]"
        >
          Kostenlose Anfrage
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
