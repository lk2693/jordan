import type { Metadata } from 'next';

import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Notdienst 24/7 — Jordan GmbH Braunschweig',
  description: 'Heizungsausfall, Rohrbruch, Wasserschaden? Der 24/7 Notdienst der Jordan GmbH Braunschweig ist rund um die Uhr für Sie da — 365 Tage im Jahr.',
};

export default function Notdienst() {
  const emergencyServices = [
    {
      title: 'Heizungsausfall',
      description: 'Ihre Heizung ist ausgefallen oder heizt nicht richtig? Wir kommen sofort und sorgen dafür, dass es bei Ihnen wieder warm wird.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        </svg>
      ),
      urgent: true,
    },
    {
      title: 'Rohrbruch & Wasserschaden',
      description: 'Wasseraustritt, Rohrbruch oder Leck? Wir stoppen den Schaden schnell und reparieren die betroffene Leitung fachgerecht.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      ),
      urgent: true,
    },
    {
      title: 'Verstopfte Abflüsse',
      description: 'Abfluss verstopft? Egal ob Küche, Bad oder Keller — wir beseitigen die Verstopfung professionell und nachhaltig.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-1.42-2.17H5.25a2.25 2.25 0 01-2.25-2.25v0a2.25 2.25 0 012.25-2.25h4.09l1.08-1.65A2.25 2.25 0 0112.307 6h.186a2.25 2.25 0 011.885 1.018l1.08 1.65h4.09A2.25 2.25 0 0121.75 10.75v0a2.25 2.25 0 01-2.25 2.25h-4.75l-1.42 2.17" />
        </svg>
      ),
      urgent: false,
    },
    {
      title: 'Gasgeruch & Gasleck',
      description: 'Sie riechen Gas? Verlassen Sie sofort das Gebäude und rufen Sie uns an — wir kommen umgehend.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      ),
      urgent: true,
    },
    {
      title: 'Defekte Sanitäranlagen',
      description: 'WC, Waschbecken oder Dusche defekt? Wir reparieren schnell und zuverlässig, damit alles wieder funktioniert.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
        </svg>
      ),
      urgent: false,
    },
    {
      title: 'Elektrische Störungen',
      description: 'Kurzschluss, Stromausfall oder defekte Elektrik? Unsere Fachkräfte lösen das Problem sicher und schnell.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      urgent: false,
    },
  ];

  const serviceAreas = [
    'Braunschweig',
    'Wolfsburg',
    'Salzgitter',
    'Peine',
    'Gifhorn',
    'Helmstedt',
    'Wolfenbüttel',
    'Goslar',
    'Hildesheim',
    'Hannover',
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* ════════════════════════════════════════
          HERO — Full-impact emergency header
          ════════════════════════════════════════ */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        {/* Background: dark navy with subtle red gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#152852] via-[#1a1a2e] to-[#0d0d1a]" />

        {/* Animated emergency pulse rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full border border-red-500/10 animate-ping" style={{ animationDuration: '3s' }} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[400px] h-[400px] rounded-full border border-red-500/5 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
        </div>

        {/* Subtle red glow top-right */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#F39900]/8 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Status badge */}
            <div className="mb-8 inline-flex items-center gap-2.5 bg-red-500/15 backdrop-blur-sm px-5 py-2.5 rounded-full border border-red-500/25">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
              </span>
              <span className="text-sm font-semibold text-red-300 tracking-wide uppercase">24/7 Notdienst aktiv</span>
            </div>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-6"
              style={{ textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}
            >
              Notfall?{' '}
              <span className="bg-gradient-to-r from-[#F39900] to-[#FFB617] bg-clip-text text-transparent">
                Wir helfen.
              </span>
            </h1>

            <p
              className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed"
              style={{ textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}
            >
              Heizungsausfall, Rohrbruch oder Wasserschaden — unser Notdienst-Team
              ist rund um die Uhr für Sie da. 365 Tage im Jahr.
            </p>

            {/* CTA: Phone number card */}
            <div className="relative max-w-md mx-auto">
              {/* Glow behind card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 via-[#F39900]/30 to-red-500/30 rounded-3xl blur-xl" />

              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <p className="text-slate-500 text-sm font-medium mb-3 uppercase tracking-wider">Jetzt anrufen</p>
                <a
                  href="tel:053123449080"
                  className="group flex items-center justify-center gap-3 text-3xl sm:text-4xl font-extrabold text-[#152852] hover:text-[#F39900] transition-colors duration-300"
                >
                  <span className="w-12 h-12 bg-[#F39900] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#F39900]/30">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>
                  <span className="whitespace-nowrap">0531 234 4909 80</span>
                </a>
                <div className="flex items-center justify-center gap-4 mt-5 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Sofort erreichbar
                  </span>
                  <span className="w-px h-3 bg-slate-200" />
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Faire Notdienstpreise
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TRUST STRIP — Compact promise bar
          ════════════════════════════════════════ */}
      <section className="bg-[#152852] border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: '24/7 erreichbar',
                desc: 'Tag & Nacht, 365 Tage',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                ),
                title: 'Schnell vor Ort',
                desc: 'In ca. 30–60 Minuten',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: 'Meisterbetrieb',
                desc: 'Qualifizierte Techniker',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                ),
                title: 'Faire Preise',
                desc: 'Transparent & ehrlich',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-5 px-4 md:px-6 justify-center">
                <span className="text-[#F39900] flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="text-white font-bold text-sm leading-tight">{item.title}</p>
                  <p className="text-slate-400 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FIRST AID — What to do in an emergency
          ════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                Erste Schritte
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
                Was tun im Notfall?
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Bewahren Sie Ruhe und folgen Sie diesen vier Schritten — wir kümmern uns um den Rest.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Ruhe bewahren',
                  desc: 'Bewahren Sie Ruhe und bringen Sie sich in Sicherheit. Bei Gasgeruch sofort das Gebäude verlassen.',
                  color: 'red',
                },
                {
                  step: '02',
                  title: 'Schaden stoppen',
                  desc: 'Hauptwasserventil schließen, Strom abstellen oder die betroffene Zone absperren.',
                  color: 'orange',
                },
                {
                  step: '03',
                  title: 'Uns anrufen',
                  desc: 'Rufen Sie unseren Notdienst unter 0531 234 4909 80 an — wir sind 24/7 erreichbar.',
                  color: 'blue',
                },
                {
                  step: '04',
                  title: 'Wir kommen',
                  desc: 'Unser Techniker ist in 30–60 Min. bei Ihnen und behebt das Problem fachgerecht.',
                  color: 'green',
                },
              ].map((item, i) => (
                <div key={i} className="relative group">
                  {/* Connector line */}
                  {i < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-px bg-slate-200 z-0" />
                  )}
                  <div className="relative bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className={`text-xs font-bold uppercase tracking-widest mb-4 ${
                      item.color === 'red' ? 'text-red-500' :
                      item.color === 'orange' ? 'text-[#F39900]' :
                      item.color === 'blue' ? 'text-[#0d3f96]' :
                      'text-emerald-500'
                    }`}>
                      Schritt {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Inline call action */}
            <div className="mt-10 text-center">
              <a
                href="tel:053123449080"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all hover:-translate-y-0.5 shadow-lg shadow-red-600/25"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Jetzt Notdienst anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SERVICES — Emergency service cards
          ════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 bg-[#F39900]/10 text-[#F39900] px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                Leistungen
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
                Wir helfen bei jedem Notfall
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Ob Heizung, Wasser, Gas oder Elektrik — unsere Fachkräfte lösen jedes Problem schnell und zuverlässig.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {emergencyServices.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Urgent indicator */}
                  {service.urgent && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                        Eilig
                      </span>
                    </div>
                  )}

                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                    service.urgent
                      ? 'bg-red-50 text-red-600'
                      : 'bg-[#152852]/5 text-[#152852]'
                  }`}>
                    {service.icon}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#152852] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>

                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <a
                      href="tel:053123449080"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#F39900] hover:text-[#d98600] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      Jetzt anrufen
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PRICING — Transparent pricing section
          ════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                Transparenz
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
                Faire & transparente Preise
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Keine versteckten Kosten. Wir informieren Sie vorab über alle anfallenden Kosten — auch nachts und am Wochenende.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Anfahrt & Diagnose',
                  price: 'Ab 79 €',
                  desc: 'Anfahrt im Stadtgebiet Braunschweig inkl. erster Fehlerdiagnose',
                  features: ['Anfahrt im Stadtgebiet', 'Erste Fehlerdiagnose', 'Ehrliche Beratung', 'Keine versteckten Kosten'],
                },
                {
                  title: 'Reparatur',
                  price: 'Ab 149 €',
                  desc: 'Sofortige Reparatur vor Ort mit hochwertigen Ersatzteilen',
                  features: ['Sofortige Reparatur', 'Hochwertige Ersatzteile', 'Bis zu 2 Jahre Garantie', 'Festpreisangebot vor Ort'],
                  highlighted: true,
                },
                {
                  title: 'Wochenende & Feiertag',
                  price: 'Ab 129 €',
                  desc: 'Zuverlässiger Service auch außerhalb der regulären Geschäftszeiten',
                  features: ['Samstag & Sonntag', 'Feiertage & Nachts', 'Gleiche Qualität', 'Transparenter Aufschlag'],
                },
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-7 border relative ${
                    plan.highlighted
                      ? 'bg-[#152852] border-[#152852] text-white shadow-xl shadow-[#152852]/20 scale-[1.02]'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="bg-[#F39900] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                        Empfohlen
                      </span>
                    </div>
                  )}
                  <h3 className={`text-sm font-semibold uppercase tracking-wider mb-2 ${plan.highlighted ? 'text-[#F39900]' : 'text-slate-400'}`}>
                    {plan.title}
                  </h3>
                  <div className={`text-3xl font-extrabold mb-1 ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                    {plan.price}
                  </div>
                  <p className={`text-sm mb-6 ${plan.highlighted ? 'text-slate-300' : 'text-slate-500'}`}>
                    {plan.desc}
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-sm">
                        <svg className={`w-4 h-4 flex-shrink-0 ${plan.highlighted ? 'text-[#F39900]' : 'text-emerald-500'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className={plan.highlighted ? 'text-slate-200' : 'text-slate-600'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:053123449080"
                    className={`mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                      plan.highlighted
                        ? 'bg-[#F39900] text-white hover:bg-[#d98600] shadow-lg shadow-[#F39900]/30'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Jetzt anrufen
                  </a>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-slate-400 mt-8">
              * Alle Preise inkl. MwSt. Endpreis wird vor Beginn der Arbeiten transparent kommuniziert.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PREVENTION — Proactive tips
          ════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Left: Prevention tips */}
              <div>
                <span className="inline-flex items-center gap-2 bg-[#0d3f96]/10 text-[#0d3f96] px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                  Vorbeugen
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                  Notfälle vermeiden
                </h2>
                <p className="text-slate-500 mb-8">
                  Die beste Lösung ist, Notfälle gar nicht erst entstehen zu lassen. Mit regelmäßiger Wartung und unseren Tipps sind Sie auf der sicheren Seite.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: 'Heizungswartung',
                      desc: 'Lassen Sie Ihre Heizung einmal jährlich warten — so vermeiden Sie Ausfälle in der kalten Jahreszeit.',
                    },
                    {
                      title: 'Leitungen prüfen',
                      desc: 'Kontrollieren Sie Wasserleitungen vor dem Winter auf Frostschäden und undichte Stellen.',
                    },
                    {
                      title: 'Elektrik checken',
                      desc: 'Regelmäßige Prüfung der Elektroinstallation schützt vor Kurzschlüssen und Bränden.',
                    },
                    {
                      title: 'Wartungsvertrag',
                      desc: 'Mit unserem Wartungspaket sind Sie rundum abgesichert und sparen langfristig Kosten.',
                    },
                  ].map((tip, i) => (
                    <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-slate-100 hover:shadow-md transition-all">
                      <div className="w-8 h-8 rounded-lg bg-[#0d3f96]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-[#0d3f96]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm mb-0.5">{tip.title}</h3>
                        <p className="text-sm text-slate-500">{tip.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href="/preise"
                    className="inline-flex items-center gap-2 text-[#0d3f96] font-semibold hover:text-[#152852] transition-colors"
                  >
                    Wartungsverträge ansehen
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Right: FAQ mini-section */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
                <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#F39900]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
                  Häufige Fragen
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      q: 'Wann kommt der Techniker?',
                      a: 'In der Regel sind wir innerhalb von 30–60 Minuten bei Ihnen vor Ort — je nach Einsatzgebiet und Verkehrslage.',
                    },
                    {
                      q: 'Wie hoch sind die Kosten?',
                      a: 'Die Kosten variieren je nach Einsatz. Wir informieren Sie vorab transparent über alle anfallenden Kosten. Es gibt keine versteckten Gebühren.',
                    },
                    {
                      q: 'Auch nachts & am Wochenende?',
                      a: 'Ja! Unser Notdienst ist 24 Stunden am Tag, 7 Tage die Woche, 365 Tage im Jahr für Sie erreichbar.',
                    },
                    {
                      q: 'Was sollte ich vor dem Anruf tun?',
                      a: 'Versuchen Sie, den Schaden zu begrenzen (z.B. Hauptwasserhahn zudrehen) und halten Sie Ihre Adresse bereit. Mehr erfahren Sie oben unter „Was tun im Notfall?".',
                    },
                  ].map((item, i) => (
                    <div key={i} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                      <h4 className="font-bold text-slate-900 text-sm mb-1.5">{item.q}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SERVICE AREA — Coverage map
          ════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-[#F39900]/10 text-[#F39900] px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                Einsatzgebiet
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
                Wir sind in Ihrer Nähe
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Unser Notdienst ist in Braunschweig und der gesamten Region schnell für Sie vor Ort.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {serviceAreas.map((area, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-4 text-center transition-all hover:shadow-md hover:-translate-y-0.5 ${
                    i === 0
                      ? 'bg-[#152852] text-white font-bold shadow-lg'
                      : 'bg-slate-50 border border-slate-100 text-slate-700 font-medium hover:border-[#F39900]/30'
                  }`}
                >
                  <span className="text-sm">{area}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-slate-400 mt-6">
              + weitere Gemeinden im Umkreis von 50 km um Braunschweig
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FINAL CTA — Sticky-worthy emergency call
          ════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#152852] via-[#1a2744] to-[#0d1b33]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />

        {/* Decorative orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F39900]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/15">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-sm text-white/80 font-medium">Bereit für Ihren Anruf</span>
            </div>

            <h2
              className="text-3xl md:text-5xl font-extrabold text-white mb-5"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}
            >
              Notfall? Nicht zögern —{' '}
              <span className="bg-gradient-to-r from-[#F39900] to-[#FFB617] bg-clip-text text-transparent">
                jetzt anrufen.
              </span>
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">
              Unser erfahrenes Team steht Ihnen rund um die Uhr zur Verfügung. Wir sind in wenigen Minuten für Sie da.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:053123449080"
                className="group inline-flex items-center gap-3 bg-[#F39900] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d98600] transition-all hover:-translate-y-0.5 shadow-xl shadow-[#F39900]/30"
              >
                <svg className="w-5 h-5 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                0531 234 4909 80
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-white/15 text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/25 transition-all hover:-translate-y-0.5"
              >
                Kontaktformular
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#F39900]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                24 Stunden
              </span>
              <span className="w-1 h-1 bg-slate-600 rounded-full" />
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#F39900]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                7 Tage die Woche
              </span>
              <span className="w-1 h-1 bg-slate-600 rounded-full" />
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#F39900]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                365 Tage im Jahr
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
