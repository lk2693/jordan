'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Kicker from '@/components/Kicker';
import Reveal from '@/components/Reveal';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  features: string[];
  completionDate: string;
  duration: string;
}

const CATEGORIES = [
  { id: 'alle', name: 'Alle Projekte' },
  { id: 'heizung', name: 'Heizung' },
  { id: 'sanitaer', name: 'Sanitär' },
  { id: 'klima', name: 'Klima' },
  { id: 'elektro', name: 'Elektro' },
];

const CATEGORY_LABEL: Record<string, string> = {
  heizung: 'Heizung',
  sanitaer: 'Sanitär',
  klima: 'Klima',
  elektro: 'Elektro',
};

export default function Referenzen() {
  const [selectedCategory, setSelectedCategory] = useState('alle');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1, title: 'Heizungsmodernisierung', category: 'heizung', location: 'Braunschweig',
      description: 'Komplette Modernisierung einer veralteten Heizungsanlage mit hocheffizienter Gas-Brennwerttechnik.',
      image: '/images/Heizung_web_11.jpg',
      features: ['Gas-Brennwertkessel', 'Neue Rohrleitungen', 'Digitale Steuerung'],
      completionDate: '2024', duration: '3 Wochen',
    },
    {
      id: 2, title: 'Industrie-Fußbodenheizung', category: 'heizung', location: 'Rischbleek 6, Braunschweig',
      description: 'Installation einer modernen Fußbodenheizung in einer Industriehalle.',
      image: '/images/Rischbleek_6_1.jpg',
      features: ['Industrielle Fußbodenheizung', 'Großflächige Installation', 'Zoneneinteilung'],
      completionDate: '2024', duration: '2 Wochen',
    },
    {
      id: 3, title: 'Badmodernisierung', category: 'sanitaer', location: 'Wilhelmstraße 74, Braunschweig',
      description: 'Komplette Badsanierung mit modernen Sanitäranlagen und barrierefreier Ausstattung.',
      image: '/images/Wilhelmstr_74_web_2.jpg',
      features: ['Barrierefreie Dusche', 'Moderne Armaturen', 'Neue Fliesen'],
      completionDate: '2024', duration: '2 Wochen',
    },
    {
      id: 4, title: 'Smart-Home-Installation', category: 'elektro', location: 'Parkstraße 8c, Braunschweig',
      description: 'Installation eines intelligenten Haussteuerungssystems mit App-Steuerung.',
      image: '/images/Parkstr_8c_web_7.jpg',
      features: ['Haussteuerung', 'App-Anbindung', 'Energiemonitoring'],
      completionDate: '2024', duration: '1 Woche',
    },
    {
      id: 5, title: 'Split-Klimaanlage', category: 'klima', location: 'Otto-Müller-Straße 16, Braunschweig',
      description: 'Installation einer modernen Split-Klimaanlage mit Inverter-Technologie.',
      image: '/images/Otto_Mueller_Str_16_web_1.jpg',
      features: ['Split-Klimaanlage', 'Inverter-Technologie', 'Flüsterleiser Betrieb'],
      completionDate: '2024', duration: '2 Tage',
    },
    {
      id: 6, title: 'Luft-Wasser-Wärmepumpe', category: 'heizung', location: 'Otto-Müller-Straße 14, Braunschweig',
      description: 'Installation einer Luft-Wasser-Wärmepumpe als nachhaltiger Heizungsersatz — inklusive Fördermittel-Beantragung.',
      image: '/images/Otto_Mueller_Str_14_web_8.jpg',
      features: ['Luft-Wasser-Wärmepumpe', 'Fördermittel beantragt', 'Heizungstausch'],
      completionDate: '2024', duration: '1 Woche',
    },
    {
      id: 7, title: 'MAN Fernleitung', category: 'heizung', location: 'Braunschweig',
      description: 'Fernleitungsinstallation und Auslieferung für ein industrielles Großprojekt.',
      image: '/images/MAN_Fernleitung_Auslieferung_web_6.jpg',
      features: ['Fernleitungsbau', 'Industrieprojekt'],
      completionDate: '2024', duration: '4 Wochen',
    },
    {
      id: 8, title: 'Badezimmer-Renovierung', category: 'sanitaer', location: 'Friedrich-Vogt-Straße 36, Braunschweig',
      description: 'Komplette Badezimmer-Renovierung mit moderner Ausstattung.',
      image: '/images/Friedrich_Vogt_36_Badezimmer_web_6.jpg',
      features: ['Komplettrenovierung', 'Moderne Armaturen', 'Hochwertige Fliesen'],
      completionDate: '2024', duration: '2 Wochen',
    },
  ];

  const filteredProjects = selectedCategory === 'alle'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero — schlicht, ohne Stockfoto */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-[#152852]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-5">
            <Kicker light>Referenzen</Kicker>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.08] tracking-tight">
              Projekte aus Braunschweig und der Region
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Eine Auswahl abgeschlossener Arbeiten — vom Einfamilienhaus
              bis zum Industrieprojekt.
            </p>
          </div>
        </div>
      </section>

      {/* Filter — dezente Text-Tabs statt Pills */}
      <section className="bg-white border-b border-slate-200 sticky top-[72px] z-20">
        <div className="container mx-auto px-4">
          <div className="flex gap-6 md:gap-8 overflow-x-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`py-4 text-sm font-semibold whitespace-nowrap border-b-2 -mb-px transition-colors ${
                  selectedCategory === cat.id
                    ? 'border-amber-500 text-slate-900'
                    : 'border-transparent text-slate-400 hover:text-slate-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid — bildgeführt, Text unter dem Bild */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {filteredProjects.map((project, i) => (
              <Reveal key={project.id} delay={(i % 3) * 80}>
                <button
                  type="button"
                  className="group text-left w-full"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-56 rounded-lg overflow-hidden bg-slate-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                      {CATEGORY_LABEL[project.category]}
                    </p>
                    <h3 className="font-bold text-slate-900 mt-1 group-hover:text-amber-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 mt-0.5">{project.location}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modal — nüchternes Projektdatenblatt */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="relative h-64 md:h-80">
              <Image src={selectedProject.image} alt={selectedProject.title} fill sizes="(max-width: 768px) 100vw, 672px" className="object-cover rounded-t-lg" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
                aria-label="Schließen"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                {CATEGORY_LABEL[selectedProject.category]}
              </p>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-1">{selectedProject.title}</h2>
              <p className="text-sm text-slate-400 mt-1">{selectedProject.location}</p>

              <p className="text-slate-600 leading-relaxed mt-5">{selectedProject.description}</p>

              <dl className="mt-6 divide-y divide-slate-200 border-y border-slate-200 text-sm">
                <div className="py-3 grid grid-cols-[8rem_1fr] gap-4">
                  <dt className="text-slate-400">Leistungen</dt>
                  <dd className="text-slate-900 font-medium">{selectedProject.features.join(' · ')}</dd>
                </div>
                <div className="py-3 grid grid-cols-[8rem_1fr] gap-4">
                  <dt className="text-slate-400">Fertigstellung</dt>
                  <dd className="text-slate-900 font-medium">{selectedProject.completionDate}</dd>
                </div>
                <div className="py-3 grid grid-cols-[8rem_1fr] gap-4">
                  <dt className="text-slate-400">Projektdauer</dt>
                  <dd className="text-slate-900 font-medium">{selectedProject.duration}</dd>
                </div>
              </dl>

              <Link
                href="/kontakt"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#152852] py-3.5 rounded-lg font-bold transition-colors duration-200"
              >
                Ähnliches Projekt anfragen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-[#152852]">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Ihr Projekt könnte das nächste sein
              </h2>
              <p className="text-lg text-slate-400 max-w-xl mx-auto">
                Rufen Sie an oder stellen Sie eine unverbindliche Anfrage —
                wir beraten Sie kostenlos vor Ort.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <Link
                  href="/kontakt"
                  className="group inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#152852] px-7 py-3.5 rounded-lg font-bold transition-colors duration-200"
                >
                  Kostenlose Beratung
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/leistungen"
                  className="inline-flex items-center justify-center gap-2 text-white border border-white/40 hover:border-white hover:bg-white/5 px-7 py-3.5 rounded-lg font-semibold transition-colors duration-200"
                >
                  Unsere Leistungen
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
