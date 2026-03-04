'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl border transition-all duration-300 ${
              openFaq === index ? 'border-amber-200 shadow-md' : 'border-slate-100 hover:border-slate-200'
            }`}
          >
            <button
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
            >
              <span className="text-[0.9375rem] font-semibold text-slate-900">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-amber-500' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`grid transition-all duration-300 ${openFaq === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <p className="px-6 pb-4 text-sm text-slate-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-slate-500 mb-3">Noch Fragen? Wir helfen gerne!</p>
        <Link href="/kontakt" className="inline-flex items-center gap-2 bg-[#152852] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#193c6e] transition-all hover:-translate-y-0.5 hover:shadow-lg">
          Kontakt aufnehmen
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </>
  );
}
