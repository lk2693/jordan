'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Preise() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-linear-to-br from-gray-900 via-blue-900 to-teal-900 overflow-hidden rounded-2xl sm:rounded-[3rem] mx-2 sm:mx-4 mt-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&h=1080&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-linear-to-r from-gray-900/80 via-blue-900/60 to-teal-900/70"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10 py-16 sm:py-28">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white/90 px-5 py-2.5 rounded-full text-sm font-medium border border-white/10">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Transparente Preise · Keine versteckten Kosten
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
              Faire Preise für<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-300 to-cyan-300">erstklassige Arbeit</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Unsere Verrechnungssätze auf einen Blick – transparent, fair kalkuliert
              und ohne Überraschungen. Alle Preise zzgl. Material.
            </p>

            <a
              href="#preise"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold transition-all border border-white/20 mt-4"
            >
              <span className="text-white">Preise ansehen</span>
              <svg className="w-5 h-5 animate-bounce text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="max-w-3xl mx-auto mt-10 sm:mt-16 grid grid-cols-3 gap-2 sm:gap-4">
            {[
              { value: '15+', label: 'Jahre Erfahrung' },
              { value: '4.9', label: 'Kundenbewertung' },
              { value: '100%', label: 'Festpreisgarantie' },
            ].map((stat, i) => (
              <div key={i} className="text-center bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl py-3 sm:py-5 px-2 sm:px-3 border border-white/10">
                <p className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white">{stat.value}</p>
                <p className="text-[10px] sm:text-xs md:text-sm text-white/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verrechnungssätze Personal */}
      <section id="preise" className="py-20 bg-white scroll-mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
                Personal
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Verrechnungssätze</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Unsere Stundensätze für die verschiedenen Fachbereiche – fair kalkuliert und transparent.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* LC-Leiter */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-linear-to-br from-teal-500 to-teal-700 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                <div className="relative bg-white border-2 border-gray-100 rounded-3xl p-5 sm:p-8 hover:border-teal-200 transition-all duration-300 h-full flex flex-col">
                  <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">LC-Leiter</h3>
                  <p className="text-sm text-gray-400 mb-6">Leistungscenterleiter</p>
                  <div className="mt-auto space-y-3">
                    <div className="flex items-end justify-between bg-gray-50 rounded-2xl p-3 sm:p-4">
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Netto</p>
                        <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">106,50 <span className="text-base sm:text-lg font-semibold text-gray-400">€</span></p>
                      </div>
                      <span className="text-xs text-gray-400 mb-1">/ Stunde</span>
                    </div>
                    <div className="flex items-end justify-between bg-teal-50 rounded-2xl p-3 sm:p-4">
                      <div>
                        <p className="text-xs text-teal-600 uppercase tracking-wider font-medium">Brutto</p>
                        <p className="text-xl sm:text-2xl font-bold text-teal-800">126,74 <span className="text-sm sm:text-base font-semibold text-teal-500">€</span></p>
                      </div>
                      <span className="text-xs text-teal-500 mb-0.5">inkl. 19% MwSt.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* KD-Techniker */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-linear-to-br from-blue-500 to-blue-700 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                <div className="relative bg-white border-2 border-gray-100 rounded-3xl p-5 sm:p-8 hover:border-blue-200 transition-all duration-300 h-full flex flex-col">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">KD-Techniker</h3>
                  <p className="text-sm text-gray-400 mb-6">Kundendiensttechniker</p>
                  <div className="mt-auto space-y-3">
                    <div className="flex items-end justify-between bg-gray-50 rounded-2xl p-3 sm:p-4">
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Netto</p>
                        <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">78,86 <span className="text-base sm:text-lg font-semibold text-gray-400">€</span></p>
                      </div>
                      <span className="text-xs text-gray-400 mb-1">/ Stunde</span>
                    </div>
                    <div className="flex items-end justify-between bg-blue-50 rounded-2xl p-3 sm:p-4">
                      <div>
                        <p className="text-xs text-blue-600 uppercase tracking-wider font-medium">Brutto</p>
                        <p className="text-xl sm:text-2xl font-bold text-blue-800">93,84 <span className="text-sm sm:text-base font-semibold text-blue-500">€</span></p>
                      </div>
                      <span className="text-xs text-blue-500 mb-0.5">inkl. 19% MwSt.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* PJ-Techniker */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-linear-to-br from-orange-500 to-orange-700 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                <div className="relative bg-white border-2 border-gray-100 rounded-3xl p-5 sm:p-8 hover:border-orange-200 transition-all duration-300 h-full flex flex-col">
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">PJ-Techniker</h3>
                  <p className="text-sm text-gray-400 mb-6">Projekttechniker (Sanitär, Heizung, Klima, Elektro)</p>
                  <div className="mt-auto space-y-3">
                    <div className="flex items-end justify-between bg-gray-50 rounded-2xl p-3 sm:p-4">
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Netto</p>
                        <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">78,86 <span className="text-base sm:text-lg font-semibold text-gray-400">€</span></p>
                      </div>
                      <span className="text-xs text-gray-400 mb-1">/ Stunde</span>
                    </div>
                    <div className="flex items-end justify-between bg-orange-50 rounded-2xl p-3 sm:p-4">
                      <div>
                        <p className="text-xs text-orange-600 uppercase tracking-wider font-medium">Brutto</p>
                        <p className="text-xl sm:text-2xl font-bold text-orange-800">93,84 <span className="text-sm sm:text-base font-semibold text-orange-500">€</span></p>
                      </div>
                      <span className="text-xs text-orange-500 mb-0.5">inkl. 19% MwSt.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notdienstpauschale + Bereitschaftszeiten */}
      <section className="py-12 sm:py-16 bg-gray-50 rounded-2xl sm:rounded-[3rem] mx-2 sm:mx-4">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
              {/* Left - Notdienstpauschale Card */}
              <div className="bg-linear-to-br from-red-600 to-red-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                    Notdienst
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Notdienstpauschale</h2>
                  <p className="text-white/70 text-sm mb-8 leading-relaxed max-w-md">
                    Die Pauschale fällt zusätzlich zum regulären Stundensatz an und deckt die tarifvertragliche Bereitschaftsvergütung unserer Mitarbeiter ab.
                  </p>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-5">
                      <p className="text-xs text-white/60 uppercase tracking-wider font-medium mb-1">Netto</p>
                      <p className="text-2xl sm:text-3xl font-extrabold">80,00 <span className="text-sm sm:text-lg font-semibold text-white/60">€</span></p>
                    </div>
                    <div className="bg-white/15 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-5">
                      <p className="text-xs text-white/60 uppercase tracking-wider font-medium mb-1">Brutto</p>
                      <p className="text-2xl sm:text-3xl font-extrabold">95,20 <span className="text-sm sm:text-lg font-semibold text-white/60">€</span></p>
                      <p className="text-xs text-white/50 mt-1">inkl. 19% MwSt.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Bereitschaftszeiten */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-sm border border-gray-100">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Bereitschaftszeiten
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Wann gilt der Notdienst?</h3>

                <div className="space-y-3">
                  {[
                    { day: 'Montag – Donnerstag', time: '15:45 – 22:00 Uhr' },
                    { day: 'Freitag', time: '11:45 – 22:00 Uhr' },
                    { day: 'Samstag & Sonntag', time: '06:45 – 22:00 Uhr' },
                  ].map((slot, i) => (
                    <div key={i} className="flex items-center justify-between bg-gray-50 rounded-2xl px-4 sm:px-5 py-4 gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                          </svg>
                        </div>
                        <span className="font-semibold text-gray-900 text-sm sm:text-base truncate">{slot.day}</span>
                      </div>
                      <span className="font-mono text-xs sm:text-sm font-bold text-teal-700 bg-teal-50 px-2.5 sm:px-3 py-1.5 rounded-xl whitespace-nowrap shrink-0">
                        {slot.time}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-gray-400 mt-5 leading-relaxed">
                  Die Notdienstpauschale entsteht aufgrund unserer tarifvertraglichen Verpflichtung, 
                  unseren Mitarbeitern für die Bereithaltung im Rahmen des Bereitschaftsdienstes eine 
                  Vergütung zu zahlen. Diese Bereitschaft verursacht erhebliche Kosten, unabhängig davon, 
                  ob ein Einsatz erfolgt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zuschläge Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
                Übersicht
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Zuschläge für Mehrarbeit</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Zuschläge werden auf den jeweiligen Stundenverrechnungssatz berechnet.
              </p>
            </div>

            {/* Zuschläge Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  label: 'Außerhalb der Geschäftszeiten',
                  zuschlag: '+25%',
                  color: 'bg-yellow-50 border-yellow-200 text-yellow-800',
                  badgeColor: 'bg-yellow-100 text-yellow-700',
                  iconColor: 'text-yellow-600',
                  iconPath: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
                },
                {
                  label: 'Nachtarbeit',
                  sublabel: '22:00 – 06:00 Uhr',
                  zuschlag: '+50%',
                  color: 'bg-indigo-50 border-indigo-200 text-indigo-800',
                  badgeColor: 'bg-indigo-100 text-indigo-700',
                  iconColor: 'text-indigo-600',
                  iconPath: 'M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z',
                },
                {
                  label: 'Samstagsarbeit',
                  sublabel: '06:00 – 22:00 Uhr',
                  zuschlag: '+50%',
                  color: 'bg-blue-50 border-blue-200 text-blue-800',
                  badgeColor: 'bg-blue-100 text-blue-700',
                  iconColor: 'text-blue-600',
                  iconPath: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5',
                },
                {
                  label: 'Sonntagsarbeit',
                  sublabel: '00:00 – 24:00 Uhr',
                  zuschlag: '+75%',
                  color: 'bg-orange-50 border-orange-200 text-orange-800',
                  badgeColor: 'bg-orange-100 text-orange-700',
                  iconColor: 'text-orange-600',
                  iconPath: 'M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z',
                },
                {
                  label: '24. & 31. Dezember',
                  sublabel: 'ab 14:00 Uhr',
                  zuschlag: '+100%',
                  color: 'bg-red-50 border-red-200 text-red-800',
                  badgeColor: 'bg-red-100 text-red-700',
                  iconColor: 'text-red-600',
                  iconPath: 'M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z',
                },
                {
                  label: 'Gesetzliche Feiertage',
                  sublabel: 'ganztägig',
                  zuschlag: '+100%',
                  color: 'bg-rose-50 border-rose-200 text-rose-800',
                  badgeColor: 'bg-rose-100 text-rose-700',
                  iconColor: 'text-rose-600',
                  iconPath: 'M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`${item.color} border rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all hover:shadow-md hover:-translate-y-0.5 duration-200`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <svg className={`w-6 h-6 ${item.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                    </svg>
                    <span className={`${item.badgeColor} text-lg font-extrabold px-3 py-1 rounded-xl`}>
                      {item.zuschlag}
                    </span>
                  </div>
                  <h3 className="font-bold text-base mb-1">{item.label}</h3>
                  {item.sublabel && (
                    <p className="text-sm opacity-70">{item.sublabel}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Rechenbeispiel */}
            <div className="mt-8 sm:mt-12 bg-gray-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
                </svg>
                Rechenbeispiel
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <p className="text-sm text-gray-400 uppercase tracking-wider font-medium mb-3">KD-Techniker · Samstag</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Stundenverrechnungssatz netto</span>
                      <span className="font-semibold text-gray-900">78,86 €</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Zuschlag Samstag (+50%)</span>
                      <span className="font-semibold text-gray-900">39,43 €</span>
                    </div>
                    <div className="h-px bg-gray-100 my-2"></div>
                    <div className="flex justify-between text-base">
                      <span className="font-bold text-gray-900">Gesamt (netto)</span>
                      <span className="font-extrabold text-teal-700">118,29 €</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <p className="text-sm text-gray-400 uppercase tracking-wider font-medium mb-3">KD-Techniker · Notdienst Sa.</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Stundenverrechnungssatz netto</span>
                      <span className="font-semibold text-gray-900">78,86 €</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Zuschlag Samstag (+50%)</span>
                      <span className="font-semibold text-gray-900">39,43 €</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Notdienstpauschale</span>
                      <span className="font-semibold text-gray-900">80,00 €</span>
                    </div>
                    <div className="h-px bg-gray-100 my-2"></div>
                    <div className="flex justify-between text-base">
                      <span className="font-bold text-gray-900">Gesamt (netto)</span>
                      <span className="font-extrabold text-teal-700">198,29 €</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Inklusivleistungen */}
      <section className="py-12 sm:py-16 bg-gray-50 rounded-2xl sm:rounded-[3rem] mx-2 sm:mx-4">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
              Darauf können Sie sich verlassen
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                  ),
                  title: 'Festpreisgarantie',
                  description: 'Der vereinbarte Preis gilt – keine Überraschungen'
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                    </svg>
                  ),
                  title: 'Transparenz',
                  description: 'Alle Kosten werden im Vorfeld offen kommuniziert'
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743" />
                    </svg>
                  ),
                  title: 'Meisterbetrieb',
                  description: 'Qualitätsarbeit von zertifizierten Fachkräften'
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  ),
                  title: '24/7 erreichbar',
                  description: 'Notdienst rund um die Uhr für dringende Fälle'
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-5">
                  <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-700 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-linear-to-br from-teal-700 to-teal-900 text-white rounded-2xl sm:rounded-[3rem] mx-2 sm:mx-4 my-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Fragen zu unseren Preisen?
          </h2>
          <p className="text-base sm:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Kontaktieren Sie uns – wir beraten Sie gerne und erstellen Ihnen ein individuelles Angebot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="group bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all flex items-center justify-center space-x-2 shadow-lg shadow-orange-500/25"
            >
              <span>Kontakt aufnehmen</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+49531234490980"
              className="bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white border border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <span>0531 23 44 909 80</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
