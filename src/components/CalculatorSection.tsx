'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

// Lazy load the actual Calculator component
const Calculator = dynamic(() => import('@/components/Calculator'), {
  loading: () => (
    <div className="animate-pulse space-y-4 p-6">
      <div className="h-10 bg-slate-200 rounded-xl w-full" />
      <div className="h-10 bg-slate-200 rounded-xl w-full" />
      <div className="h-10 bg-slate-200 rounded-xl w-3/4" />
      <div className="h-12 bg-slate-200 rounded-xl w-full" />
    </div>
  ),
  ssr: false,
});

type CalculatorType = 'heating' | 'bathroom' | 'maintenance';

export default function CalculatorSection() {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType>('heating');

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Kostenlos & unverbindlich
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
              Kosten sofort berechnen
            </h2>
            <p className="text-slate-500">
              In unter 2 Minuten eine erste Kostenschätzung erhalten
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-slate-100">
              {[
                { key: 'heating' as CalculatorType, label: 'Heizung', icon: '🔥' },
                { key: 'bathroom' as CalculatorType, label: 'Bad', icon: '🚿' },
                { key: 'maintenance' as CalculatorType, label: 'Wartung', icon: '🔧' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveCalculator(tab.key)}
                  className={`flex-1 py-4 text-sm font-semibold transition-all relative ${
                    activeCalculator === tab.key
                      ? 'text-[#152852]'
                      : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span className="block text-lg mb-0.5">{tab.icon}</span>
                  {tab.label}
                  {activeCalculator === tab.key && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </button>
              ))}
            </div>
            <div className="p-6">
              <Calculator type={activeCalculator} useApi={false} identName="" />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-5 text-sm text-slate-400">
            {['Keine Anmeldung nötig', 'Sofortiges Ergebnis', 'Unverbindlich'].map((text) => (
              <div key={text} className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
