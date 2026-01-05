'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
    { id: 'alle', name: 'Alle Projekte', count: 8 },
    { id: 'heizung', name: 'Heizung', count: 4 },
    { id: 'sanitaer', name: 'Sanitär', count: 2 },
    { id: 'klima', name: 'Klima', count: 1 },
    { id: 'elektro', name: 'Elektro', count: 1 }
  ];

  const projects = [
    {
      id: 1,
      title: 'Heizungsmodernisierung',
      category: 'heizung',
      location: 'Braunschweig',
      description: 'Komplette Modernisierung einer veralteten Heizungsanlage mit hocheffizienter Gas-Brennwerttechnik.',
      image: '/images/Heizung_web_11.jpg',
      features: ['Gas-Brennwertkessel', 'Neue Rohrleitungen', 'Digitale Steuerung', 'Energieeffizienz A+'],
      completionDate: '2024',
      duration: '3 Wochen'
    },
    {
      id: 2,
      title: 'Industrie-Fußbodenheizung, Rischbleek 6',
      category: 'heizung',
      location: 'Braunschweig, Rischbleek 6',
      description: 'Installation einer modernen Fußbodenheizung in einer Industriehalle.',
      image: '/images/Rischbleek_6_1.jpg',
      features: ['Industrielle Fußbodenheizung', 'Großflächige Installation', 'Zoneneinteilung', 'Energieoptimierung'],
      completionDate: '2024',
      duration: '2 Wochen'
    },
    {
      id: 3,
      title: 'Wilhelmstraße 74 - Badmodernisierung',
      category: 'sanitaer',
      location: 'Braunschweig, Wilhelmstraße 74',
      description: 'Komplette Badsanierung mit modernen Sanitäranlagen und barrierefreier Ausstattung.',
      image: '/images/Wilhelmstr_74_web_2.jpg',
      features: ['Barrierefreie Dusche', 'Moderne Armaturen', 'Fliesen & Design', 'LED-Beleuchtung'],
      completionDate: '2024',
      duration: '2 Wochen'
    },
    {
      id: 4,
      title: 'Parkstraße 8c - Installation',
      category: 'elektro',
      location: 'Braunschweig, Parkstraße 8c',
      description: 'Installation eines intelligenten Haussteuerungssystems mit App-Steuerung.',
      image: '/images/Parkstr_8c_web_7.jpg',
      features: ['Smart Home System', 'App-Steuerung', 'Automatisierung', 'Energiemonitoring'],
      completionDate: '2024',
      duration: '1 Woche'
    },
    {
      id: 5,
      title: 'Otto-Müller Straße 16 - Klimaanlage',
      category: 'klima',
      location: 'Braunschweig, Otto-Müller Straße 16',
      description: 'Installation einer modernen Split-Klimaanlage mit Inverter-Technologie.',
      image: '/images/Otto_Mueller_Str_16_web_1.jpg',
      features: ['Split-Klimaanlage', 'Inverter-Technologie', 'Energieeffizient', 'Leise Operation'],
      completionDate: '2024',
      duration: '2 Tage'
    },
    {
      id: 6,
      title: 'Otto-Müller Straße 14 - Wärmepumpe',
      category: 'heizung',
      location: 'Braunschweig, Otto-Müller Straße 14',
      description: 'Installation einer Luft-Wasser-Wärmepumpe als nachhaltiger Heizungsersatz.',
      image: '/images/Otto_Mueller_Str_14_web_8.jpg',
      features: ['Luft-Wasser-Wärmepumpe', 'Nachhaltig', 'Förderung', 'Kosteneinsparung'],
      completionDate: '2024',
      duration: '1 Woche'
    },
    {
      id: 7,
      title: 'MAN Fernleitung - Industrieprojekt',
      category: 'heizung',
      location: 'Braunschweig',
      description: 'Fernleitungsinstallation und Auslieferung für ein industrielles Großprojekt.',
      image: '/images/MAN_Fernleitung_Auslieferung_web_6.jpg',
      features: ['Industrieprojekt', 'Fernleitung', 'Großprojekt', 'Professionelle Ausführung'],
      completionDate: '2024',
      duration: '4 Wochen'
    },
    {
      id: 8,
      title: 'Friedrich-Vogt-Straße 36 - Badezimmer',
      category: 'sanitaer',
      location: 'Braunschweig, Friedrich-Vogt-Straße 36',
      description: 'Komplette Badezimmer-Renovierung mit moderner Ausstattung.',
      image: '/images/Friedrich_Vogt_36_Badezimmer_web_6.jpg',
      features: ['Komplettrenovierung', 'Moderne Armaturen', 'Hochwertige Fliesen', 'Design-Bad'],
      completionDate: '2024',
      duration: '2 Wochen'
    }
  ];

  const filteredProjects = selectedCategory === 'alle' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white pt-32 pb-20">
        <div className="absolute inset-0">
          <Image
            src="/images/jordan.png"
            alt="Jordan Referenzen"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">Unsere Referenzen</h1>
            <p className="text-xl text-white">
              Von Badsanierung bis Solaranlage - überzeugen Sie sich von unserer Arbeit
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.category === 'heizung' ? 'bg-orange-100 text-orange-800' :
                      project.category === 'sanitaer' ? 'bg-blue-100 text-blue-800' :
                      project.category === 'klima' ? 'bg-cyan-100 text-cyan-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-3">📍 {project.location}</p>
                  <p className="text-gray-700 mb-4 text-sm line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, 2).map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          +{project.features.length - 2} weitere
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>🗓️ {project.completionDate}</span>
                    <span>⏱️ {project.duration}</span>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors"
                  >
                    Details ansehen
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="relative h-64 mb-6">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Projektdetails</h3>
                  <p className="text-gray-600">{selectedProject.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Standort</h3>
                  <p className="text-gray-600">📍 {selectedProject.location}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Leistungen</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Fertigstellung</h3>
                    <p className="text-gray-600">{selectedProject.completionDate}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Projektdauer</h3>
                    <p className="text-gray-600">{selectedProject.duration}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <Link
                  href="/kontakt"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors block text-center"
                >
                  Ähnliches Projekt anfragen
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Unsere Erfolge in Zahlen</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Abgeschlossene Projekte</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-orange-500 mb-2">25+</div>
              <div className="text-gray-600">Jahre Erfahrung</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Kundenzufriedenheit</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Notdienst verfügbar</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ihr Projekt beginnt hier</h2>
          <p className="text-xl mb-8 text-blue-200">
            Lassen Sie sich von unseren Referenzen inspirieren und starten Sie Ihr eigenes Projekt
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Kostenlose Beratung
            </Link>
            <Link
              href="/leistungen"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Unsere Leistungen
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
