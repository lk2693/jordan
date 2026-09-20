'use client';

import { useState, type FormEvent } from 'react';
import { submitContactLead } from '@/lib/lokalleads-api';

const TOPICS = [
  { value: 'heizung', label: 'Heizung' },
  { value: 'sanitaer', label: 'Sanitär & Bad' },
  { value: 'klima', label: 'Klima & Lüftung' },
  { value: 'elektro', label: 'Elektro' },
  { value: 'waermepumpe', label: 'Wärmepumpe' },
  { value: 'notdienst', label: 'Notdienst' },
  { value: 'sonstiges', label: 'Sonstiges' },
];

type Status = 'idle' | 'sending' | 'success' | 'mail' | 'error';

export default function HeroContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    const topicLabel = TOPICS.find((t) => t.value === topic)?.label ?? 'Allgemeine Anfrage';
    try {
      const result = await submitContactLead({
        name: name.trim(),
        phone: phone.trim(),
        topic: topicLabel,
        message: 'Rückruf-Anfrage über Website',
      });
      if (result === 'sent') {
        setStatus('success');
      } else if (result === 'not-configured') {
        // Kein LokalLeads-Zugang konfiguriert — vorbefüllte E-Mail öffnen
        const body = `Name: ${name.trim()}\nTelefon: ${phone.trim()}\nAnliegen: ${topicLabel}\n\nBitte um Rückruf.`;
        window.location.href = `mailto:info@jordan24.de?subject=${encodeURIComponent(`Rückruf-Anfrage: ${topicLabel}`)}&body=${encodeURIComponent(body)}`;
        setStatus('mail');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="relative">
      <div className="relative bg-white rounded-lg p-7 md:p-8 shadow-xl">
        {status === 'success' || status === 'mail' ? (
          <div className="text-center py-10 animate-fade-up">
            <div className="w-16 h-16 mx-auto mb-5 bg-emerald-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            {status === 'mail' ? (
              <>
                <h2 className="text-xl font-bold text-slate-900 mb-2">Fast geschafft</h2>
                <p className="text-sm text-slate-500">
                  Ihr E-Mail-Programm hat sich mit der vorbereiteten Anfrage geöffnet —
                  einfach absenden, wir melden uns danach.
                  <span className="block mt-2 text-slate-400">
                    Kein E-Mail-Programm? Rufen Sie an:{' '}
                    <a href="tel:053123449090" className="font-bold text-slate-600">0531 234 490 90</a>
                  </span>
                </p>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold text-slate-900 mb-2">Anfrage erhalten!</h2>
                <p className="text-sm text-slate-500">
                  Danke, {name.trim() || 'wir haben Ihre Anfrage'}. Wir rufen Sie innerhalb von 2 Stunden zurück
                  <span className="block mt-1 text-slate-400">(werktags zu Bürozeiten)</span>
                </p>
              </>
            )}
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900">Kostenloser Rückruf</h2>
              <p className="text-sm text-slate-500 mt-1">Wir melden uns werktags innerhalb von 2 Stunden.</p>
            </div>
            <form className="space-y-3.5" onSubmit={handleSubmit}>
              <input
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ihr Name"
                className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 transition-colors text-sm"
              />
              <input
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
                pattern="[0-9+ /()-]{6,}"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ihre Telefonnummer"
                className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 transition-colors text-sm"
              />
              <select
                required
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 bg-slate-50/50 text-slate-900 transition-colors text-sm"
              >
                <option value="" disabled>Wie können wir helfen?</option>
                {TOPICS.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-[#152852] hover:bg-[#193c6e] disabled:opacity-70 text-white font-bold py-3.5 px-6 rounded-md transition-colors duration-200 text-sm hover:shadow-lg flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Wird gesendet…
                  </>
                ) : (
                  'Rückruf anfordern'
                )}
              </button>
              {status === 'error' && (
                <p className="text-center text-xs text-red-600 bg-red-50 rounded-lg py-2.5 px-3">
                  Das hat leider nicht geklappt. Rufen Sie uns direkt an:{' '}
                  <a href="tel:053123449090" className="font-bold underline">0531 234 490 90</a>
                </p>
              )}
              <p className="text-center text-xs text-slate-400">
                100 % kostenlos &amp; unverbindlich
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
