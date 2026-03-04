'use client';

export default function HeroContactForm() {
  return (
    <div className="relative">
      {/* Glow behind card */}
      <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-blue-500/10 rounded-3xl blur-2xl opacity-60" />
      <div className="relative bg-white rounded-2xl p-7 md:p-8 shadow-2xl border border-white/20">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-slate-900">Kostenloser Rückruf</h2>
          <p className="text-sm text-slate-500 mt-1">Wir melden uns innerhalb von 2 Stunden</p>
        </div>
        <form className="space-y-3.5">
          <input
            type="text"
            placeholder="Ihr Name"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 transition-all text-sm"
          />
          <input
            type="tel"
            placeholder="Ihre Telefonnummer"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 transition-all text-sm"
          />
          <select
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 bg-slate-50/50 text-slate-900 transition-all text-sm"
            defaultValue=""
          >
            <option value="" disabled>Wie können wir helfen?</option>
            <option value="heizung">Heizung</option>
            <option value="sanitaer">Sanitär & Bad</option>
            <option value="klima">Klima & Lüftung</option>
            <option value="elektro">Elektro</option>
            <option value="waermepumpe">Wärmepumpe</option>
            <option value="notdienst">Notdienst</option>
            <option value="sonstiges">Sonstiges</option>
          </select>
          <button
            type="submit"
            className="w-full bg-[#152852] hover:bg-[#193c6e] text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-200 text-sm hover:shadow-lg"
          >
            Rückruf anfordern
          </button>
          <p className="text-center text-xs text-slate-400">
            100% kostenlos & unverbindlich
          </p>
        </form>
      </div>
    </div>
  );
}
