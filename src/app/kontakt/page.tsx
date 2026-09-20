'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import Kicker from '@/components/Kicker';
import { submitContactLead } from '@/lib/lokalleads-api';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

const SUBJECTS = [
  { value: 'heizung', label: 'Heizung' },
  { value: 'klima', label: 'Klima & Lüftung' },
  { value: 'sanitaer', label: 'Sanitär & Bad' },
  { value: 'elektro', label: 'Elektro' },
  { value: 'wartung', label: 'Wartung' },
  { value: 'notdienst', label: 'Notdienst' },
  { value: 'sonstiges', label: 'Sonstiges' },
];

type Status = 'idle' | 'sending' | 'success' | 'mail' | 'error';

const inputClasses =
  'w-full rounded-md border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition-colors';

export default function Kontakt() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    const subjectLabel = SUBJECTS.find((s) => s.value === formState.subject)?.label ?? 'Allgemeine Anfrage';
    try {
      const result = await submitContactLead({
        name: formState.name.trim(),
        email: formState.email.trim(),
        phone: formState.phone.trim() || undefined,
        topic: subjectLabel,
        message: formState.message.trim(),
      });
      if (result === 'sent') {
        setStatus('success');
      } else if (result === 'not-configured') {
        // Kein LokalLeads-Zugang konfiguriert — vorbefüllte E-Mail öffnen
        const body = `Name: ${formState.name.trim()}\nE-Mail: ${formState.email.trim()}\nTelefon: ${formState.phone.trim() || '—'}\nBetreff: ${subjectLabel}\n\n${formState.message.trim()}`;
        window.location.href = `mailto:info@jordan24.de?subject=${encodeURIComponent(`Anfrage über Website: ${subjectLabel}`)}&body=${encodeURIComponent(body)}`;
        setStatus('mail');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero — schlicht, ohne Stockfoto */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-[#152852]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-5">
            <Kicker light>Kontakt</Kicker>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.08] tracking-tight">
              Sagen Sie uns, worum es geht
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Schreiben Sie uns oder rufen Sie direkt an — wir melden uns
              werktags innerhalb von 24 Stunden.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-20">

            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-8">Nachricht senden</h2>

              {status === 'success' || status === 'mail' ? (
                <div className="border-l-4 border-emerald-500 pl-6 py-2 animate-fade-up">
                  {status === 'mail' ? (
                    <>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Fast geschafft</h3>
                      <p className="text-slate-500">
                        Ihr E-Mail-Programm hat sich mit der vorbereiteten Nachricht geöffnet —
                        einfach absenden, wir melden uns werktags innerhalb von 24 Stunden.
                        Kein E-Mail-Programm? Schreiben Sie direkt an{' '}
                        <a href="mailto:info@jordan24.de" className="font-semibold text-[#152852]">info@jordan24.de</a>.
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Nachricht erhalten</h3>
                      <p className="text-slate-500">
                        Danke für Ihre Anfrage{formState.name.trim() ? `, ${formState.name.trim()}` : ''}.
                        Wir melden uns werktags innerhalb von 24 Stunden bei Ihnen.
                      </p>
                    </>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Ihr Name"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        E-Mail *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="ihre@email.de"
                        className={inputClasses}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Telefon
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="0531 …"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Betreff
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        className={inputClasses}
                      >
                        <option value="">Bitte wählen</option>
                        {SUBJECTS.map((s) => (
                          <option key={s.value} value={s.value}>{s.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Beschreiben Sie Ihr Anliegen"
                      className={`${inputClasses} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 disabled:opacity-70 text-[#152852] px-8 py-3.5 rounded-lg text-[0.9375rem] font-bold transition-colors duration-200"
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
                      <>
                        Nachricht senden
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </>
                    )}
                  </button>
                  {status === 'error' && (
                    <p className="text-sm text-red-600 bg-red-50 rounded-md py-2.5 px-3">
                      Das hat leider nicht geklappt. Rufen Sie uns an (
                      <a href="tel:053123449090" className="font-bold underline">0531 234 490 90</a>
                      ) oder schreiben Sie an{' '}
                      <a href="mailto:info@jordan24.de" className="font-bold underline">info@jordan24.de</a>.
                    </p>
                  )}
                </form>
              )}
            </div>

            {/* Contact Info — ruhige Liste statt Karten */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-8">Direkter Draht</h2>

              <dl className="divide-y divide-slate-200 border-y border-slate-200">
                <div className="py-4 grid grid-cols-[7rem_1fr] gap-4">
                  <dt className="text-sm text-slate-400">Adresse</dt>
                  <dd className="text-sm font-semibold text-slate-900">Rischbleek 3<br />38126 Braunschweig</dd>
                </div>
                <div className="py-4 grid grid-cols-[7rem_1fr] gap-4">
                  <dt className="text-sm text-slate-400">Telefon</dt>
                  <dd>
                    <a href="tel:053123449090" className="text-sm font-semibold text-[#152852] hover:text-amber-600 transition-colors">0531 234 490 90</a>
                    <span className="block text-xs text-slate-400 mt-0.5">Fax: 0531 2 34 49 09-9</span>
                  </dd>
                </div>
                <div className="py-4 grid grid-cols-[7rem_1fr] gap-4">
                  <dt className="text-sm text-slate-400">E-Mail</dt>
                  <dd><a href="mailto:info@jordan24.de" className="text-sm font-semibold text-[#152852] hover:text-amber-600 transition-colors">info@jordan24.de</a></dd>
                </div>
                <div className="py-4 grid grid-cols-[7rem_1fr] gap-4">
                  <dt className="text-sm text-slate-400">Bürozeiten</dt>
                  <dd className="text-sm text-slate-600">
                    Mo + Di: 7:00 – 12:30 &amp; 13:30 – 15:45 Uhr<br />
                    Mi + Do: 7:00 – 12:30 Uhr<br />
                    Fr: keine Bürozeiten
                  </dd>
                </div>
              </dl>

              {/* Notdienst — roter Akzent wie auf der Startseite */}
              <div className="mt-8 border-l-4 border-red-500 pl-5">
                <p className="font-bold text-slate-900">Notdienst — rund um die Uhr</p>
                <a href="tel:053123449090" className="text-lg font-extrabold text-[#152852] hover:text-red-600 transition-colors">
                  0531 234 490 90
                </a>
                <p className="text-sm text-slate-400 mt-1">Bei Heizungsausfall oder Wasserschaden, 365 Tage im Jahr.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[var(--warm-50)] border-t border-slate-200 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-lg overflow-hidden border border-slate-200" style={{ height: '400px' }}>
              <Map lat={52.2350} lng={10.5650} zoom={15} markerText="JORDAN GmbH" />
            </div>
            <div className="mt-4">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=52.2350,10.5650"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#152852] hover:text-amber-600 transition-colors"
              >
                Route in Google Maps planen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
