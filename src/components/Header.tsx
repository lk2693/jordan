'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute w-full top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Main navigation with white background */}
        <nav className="flex items-center justify-between py-6 px-8 bg-white rounded-2xl shadow-lg mt-6">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/joradan.png"
              alt="Jordan24 Logo"
              width={180}
              height={50}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Home
            </Link>
            <Link href="/unternehmen" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Unternehmen
            </Link>
            <Link href="/leistungen" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Leistungen
            </Link>
            <Link href="/referenzen" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Referenzen
            </Link>
            <Link href="/kontakt" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Kontakt
            </Link>
            <Link href="/kontakt" className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 font-semibold transition-colors shadow-md">
              Termin buchen
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-lg mt-2 p-6">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-900 font-medium py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/unternehmen" className="text-gray-700 hover:text-blue-900 font-medium py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Unternehmen</Link>
              <Link href="/leistungen" className="text-gray-700 hover:text-blue-900 font-medium py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Leistungen</Link>
              <div className="pl-4 space-y-3 py-2 border-b border-gray-100">
                <Link href="/waermepumpen-check" className="block text-gray-600 hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>🌱 Wärmepumpen-Check</Link>
                <Link href="/foerdermittel" className="block text-gray-600 hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>💰 Fördermittel</Link>
              </div>
              <div className="text-gray-700 font-medium py-2">Service</div>
              <div className="pl-4 space-y-3 py-2 border-b border-gray-100">
                <Link href="/notdienst" className="block text-gray-600 hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>🚨 24/7 Notdienst</Link>
                <Link href="/service-versprechen" className="block text-gray-600 hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>⭐ Service-Versprechen</Link>
                <Link href="/kundenbewertungen" className="block text-gray-600 hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>💬 Kundenbewertungen</Link>
              </div>
              <Link href="/referenzen" className="text-gray-700 hover:text-blue-900 font-medium py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Referenzen</Link>
              <Link href="/kontakt" className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 font-semibold text-center mt-2" onClick={() => setIsMenuOpen(false)}>Kontakt</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
