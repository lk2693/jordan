'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const navLinks = [
    { label: 'Leistungen', href: '/leistungen' },
    { label: 'Referenzen', href: '/referenzen' },
    { label: 'Preise', href: '/preise' },
    { label: 'Unternehmen', href: '/unternehmen' },
    { label: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[padding] duration-500 ${
          scrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <nav
            className={`flex items-center justify-between px-5 md:px-8 rounded-2xl transition-[padding,background-color,box-shadow] duration-500 ${
              scrolled
                ? 'py-3 bg-white shadow-[0_2px_20px_rgb(0_0_0/0.08)] border border-slate-100'
                : 'py-4 bg-white shadow-sm border border-slate-100'
            }`}
          >
            <Link href="/" className="relative z-10 flex items-center">
              <Image
                src="/joradan.png"
                alt="Jordan GmbH"
                width={140}
                height={40}
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-[0.9375rem] font-medium text-slate-700 hover:text-amber-600 rounded-lg hover:bg-amber-50/60 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:053123449080"
                className="flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                </span>
                Notdienst
              </a>
              <Link
                href="/kontakt"
                className="bg-[#F39900] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#d98600] transition-colors duration-200"
              >
                Termin buchen
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menü"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 bg-slate-800 rounded-full transition-transform duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block h-0.5 bg-slate-800 rounded-full transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-slate-800 rounded-full transition-transform duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-[visibility] duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}>
        <div
          className={`absolute inset-0 bg-slate-900/40 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        />
        <div className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full pt-24 pb-8 px-6">
            <nav className="flex flex-col gap-1 flex-1">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-medium text-slate-800 hover:text-amber-600 py-3 px-4 rounded-xl hover:bg-amber-50/60 transition-colors duration-200 ${isMenuOpen ? 'animate-fade-up' : ''}`}
                  style={{ animationDelay: `${(i + 1) * 75}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-slate-100">
                <Link href="/notdienst" className="flex items-center gap-3 text-base font-medium text-slate-600 hover:text-red-600 py-3 px-4 rounded-xl hover:bg-red-50 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  24/7 Notdienst
                </Link>
                <Link href="/waermepumpen-check" className="flex items-center gap-3 text-base font-medium text-slate-600 hover:text-emerald-600 py-3 px-4 rounded-xl hover:bg-emerald-50 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Wärmepumpen-Check
                </Link>
                <Link href="/foerdermittel" className="flex items-center gap-3 text-base font-medium text-slate-600 hover:text-amber-600 py-3 px-4 rounded-xl hover:bg-amber-50 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                  <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Fördermittel
                </Link>
              </div>
            </nav>
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <a href="tel:053123449080" className="flex items-center justify-center gap-2 w-full bg-red-50 text-red-700 font-semibold py-3.5 rounded-xl hover:bg-red-100 transition-colors" onClick={() => setIsMenuOpen(false)}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                0531 23 44 909 80
              </a>
              <Link href="/kontakt" className="flex items-center justify-center gap-2 w-full bg-[#152852] text-white font-semibold py-3.5 rounded-xl hover:bg-[#193c6e] transition-colors" onClick={() => setIsMenuOpen(false)}>
                Termin buchen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
