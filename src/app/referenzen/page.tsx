'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

export default function Referenzen() {
  const [selectedCategory, setSelectedCategory] = useState('alle');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'alle', name: 'Alle', count: 8 },
    { id: 'heizung', name: 'Heizung', count: 4 },
    { id: 'sanitaer', name: 'Sanitär', count: 2 },
    { id: 'klima', name: 'Klima', count: 1 },
    { id: 'elektro', name: 'Elektro', count: 1 },
  ];

  const projects: Project[] = [
    {
      id: 1, title: 'Heizungsmodernisierung', category: 'heizung', location: 'Braunschweig',
      description: 'Komplette Modernisierung einer veralteten Heizungsanlage mit hocheffizienter Gas-Brennwerttechnik.',
      image: '/images/Heizung_web_11.jpg',
      features: ['Gas-Brennwertkessel', 'Neue Rohrleitungen', 'Digitale Steuerung', 'Energieeffizienz A+'],
      completionDate: '2024', duration: '3 Wochen',
    },
    {
      id: 2, title: 'Industrie-Fußbodenheizung, Rischbleek 6', category: 'heizung', location: 'Braunschweig, Rischbleek 6',
      description: 'Installation einer modernen Fußbodenheizung in einer Industriehalle.',
      image: '/images/Rischbleek_6_1.jpg',
      features: ['Industrielle Fußbodenheizung', 'Großflächige Installation', 'Zoneneinteilung', 'Energieoptimierung'],
      completionDate: '2024', duration: '2 Wochen',
    },
    {
      id: 3, title: 'Wilhelmstraße 74 - Badmodernisierung', category: 'sanitaer', location: 'Braunschweig, Wilhelmstraße 74',
      description: 'Komplette Badsanierung mit modernen Sanitäranlagen und barrierefreier Ausstattung.',
      image: '/images/Wilhelmstr_74_web_2.jpg',
      features: ['Barrierefreie Dusche', 'Moderne Armaturen', 'Fliesen & Design', 'LED-Beleuchtung'],
      completionDate: '2024', duration: '2 Wochen',
    },
    {
      id: 4, title: 'Parkstraße 8c - Installation', category: 'elektro', location: 'Braunschweig, Parkstraße 8c',
      description: 'Installation eines intelligenten Haussteuerungssystems mit App-Steuerung.',
      image: '/images/Parkstr_8c_web_7.jpg',
      features: ['Smart Home System', 'App-Steuerung', 'Automatisierung', 'Energiemonitoring'],
      completionDate: '2024', duration: '1 Woche',
    },
    {
      id: 5, title: 'Otto-Müller Straße 16 - Klimaanlage', category: 'klima', location: 'Braunschweig, Otto-Müller Straße 16',
      description: 'Installation einer modernen Split-Klimaanlage mit Inverter-Technologie.',
      image: '/images/Otto_Mueller_Str_16_web_1.jpg',
      features: ['Split-Klimaanlage', 'Inverter-Technologie', 'Energieeffizient', 'Leise Operation'],
      completionDate: '2024', duration: '2 Tage',
    },
    {
      id: 6, title: 'Otto-Müller Straße 14 - Wärmepumpe', category: 'heizung', location: 'Braunschweig, Otto-Müller Straße 14',
      description: 'Installation einer Luft-Wasser-Wärmepumpe als nachhaltiger Heizungsersatz.',
      image: '/images/Otto_Mueller_Str_14_web_8.jpg',
      features: ['Luft-Wasser-Wärmepumpe', 'Nachhaltig', 'Förderung', 'Kosteneinsparung'],
      completionDate: '2024', duration: '1 Woche',
    },
    {
      id: 7, title: 'MAN Fernleitung - Industrieprojekt', category: 'heizung', location: 'Braunschweig',
      description: 'Fernleitungsinstallation und Auslieferung für ein industrielles Großprojekt.',
      image: '/images/MAN_Fernleitung_Auslieferung_web_6.jpg',
      features: ['Industrieprojekt', 'Fernleitung', 'Großprojekt', 'Professionelle Ausführung'],
      completionDate: '2024', duration: '4 Wochen',
    },
    {
      id: 8, title: 'Friedrich-Vogt-Straße 36 - Badezimmer', category: 'sanitaer', location: 'Braunschweig, Friedrich-Vogt-Straße 36',
      description: 'Komplette Badezimmer-Renovierung mit moderner Ausstattung.',
      image: '/images/Friedrich_Vogt_36_Badezimmer_web_6.jpg',
      features: ['Komplettrenovierung', 'Moderne Armaturen', 'Hochwertige Fliesen', 'Design-Bad'],
      completionDate: '2024', duration: '2 Wochen',
    },
  ];

  const filteredProjects = selectedCategory === 'alle'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const categoryColor = (cat: string) => {
    switch (cat) {
      case 'heizung': return 'bg-orange-50 text-orange-700';
      case 'sanitaer': return 'bg-cyan-50 text-cyan-700';
      case 'klima': return 'bg-blue-50 text-blue-700';
      case 'elektro': return 'bg-amber-50 text-amber-700';
      default: return 'bg-slate-50 text-slate-700';
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#152852] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1920&h=800&fit=crop" alt="" fill sizes="100vw" className="object-cover opacity-25" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#152852]/60 via-[#152852]/70 to-[#152852]/95" />
        </div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-6">
              <span className="text-sm font-medium text-white/80">500+ abgeschlossene Projekte</span>
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-6" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.3)' }}>
              Unsere{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F39900] to-[#FFB617]">
                Referenzen
              </span>
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-xl" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}>
              Von Badsanierung bis Solaranlage — überzeugen Sie sich von unserer Arbeit.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-[72px] z-20 backdrop-blur-md bg-white/90">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#152852] text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.name}
                <span className={`ml-1.5 text-xs ${selectedCategory === cat.id ? 'text-amber-400' : 'text-slate-400'}`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColor(project.category)}`}>
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 mb-1.5 line-clamp-2 text-sm">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-2 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {project.location}
                  </p>
                  <p className="text-xs text-slate-500 line-clamp-2 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.features.slice(0, 2).map((f, i) => (
                      <span key={i} className="px-2 py-0.5 bg-slate-50 text-slate-600 text-[10px] rounded-md font-medium">
                        {f}
                      </span>
                    ))}
                    {project.features.length > 2 && (
                      <span className="px-2 py-0.5 bg-slate-50 text-slate-400 text-[10px] rounded-md">
                        +{project.features.length - 2}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-slate-400 pt-3 border-t border-slate-50">
                    <span>{project.completionDate}</span>
                    <span>{project.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="relative h-64">
              <Image src={selectedProject.image} alt={selectedProject.title} fill sizes="(max-width: 768px) 100vw, 672px" className="object-cover rounded-t-2xl" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 md:p-8 space-y-5">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${categoryColor(selectedProject.category)}`}>
                  {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)}
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900">{selectedProject.title}</h2>
              </div>
              <p className="text-slate-500 leading-relaxed text-sm">{selectedProject.description}</p>
              <div className="flex items-center gap-1 text-sm text-slate-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {selectedProject.location}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">Leistungen</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.features.map((f, i) => (
                    <span key={i} className="px-3 py-1 bg-amber-50 text-amber-700 text-xs rounded-full font-medium">{f}</span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-slate-50 rounded-xl p-3">
                  <p className="text-slate-400 text-xs">Fertigstellung</p>
                  <p className="font-semibold text-slate-900">{selectedProject.completionDate}</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3">
                  <p className="text-slate-400 text-xs">Projektdauer</p>
                  <p className="font-semibold text-slate-900">{selectedProject.duration}</p>
                </div>
              </div>
              <Link
                href="/kontakt"
                className="block w-full bg-amber-500 hover:bg-amber-400 text-[#152852] py-3 rounded-xl font-bold text-center transition-all hover:-translate-y-0.5"
              >
                Ähnliches Projekt anfragen
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Stats */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: '500+', label: 'Abgeschlossene Projekte', color: 'text-amber-600' },
              { number: '25+', label: 'Jahre Erfahrung', color: 'text-blue-600' },
              { number: '98%', label: 'Kundenzufriedenheit', color: 'text-green-600' },
              { number: '24/7', label: 'Notdienst', color: 'text-red-600' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 text-center border border-slate-100">
                <p className={`text-2xl md:text-3xl font-extrabold ${stat.color}`}>{stat.number}</p>
                <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#152852] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ihr Projekt beginnt hier
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
            Lassen Sie sich inspirieren und starten Sie Ihr eigenes Projekt.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#152852] px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-0.5"
            >
              Kostenlose Beratung
            </Link>
            <Link
              href="/leistungen"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold transition-all"
            >
              Unsere Leistungen
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
