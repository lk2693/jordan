'use client';

import { Metadata } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Calculator from '@/components/Calculator';

type CalculatorType = 'heating' | 'bathroom' | 'maintenance';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType>('heating');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Jordan GmbH',
    description: 'Ihre vertrauenswürdigen Lösungen für Heizung, Sanitär, Klima und Elektro in Braunschweig',
    url: 'https://jordan-gmbh.de',
    telephone: '+49 531 23 44 909 80',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Musterstraße 123',
      addressLocality: 'Braunschweig',
      postalCode: '38100',
      addressCountry: 'DE'
    }
  };

  const processSteps = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
      ),
      title: 'Rufen Sie uns an',
      description: 'Wir sind 24/7 für jeden Notfall erreichbar.',
      number: '0531 23 44 909 80'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      ),
      title: 'Experten-Bewertung',
      description: 'Unsere Experten bewerten die Situation und suchen nach Lösungen.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      ),
      title: 'Wir sind in 30 Minuten da',
      description: 'Unser Team kommt mit der gesamten notwendigen Ausrüstung.'
    }
  ];

  const services = [
    {
      title: 'Wärmepumpen',
      description: 'Moderne Wärmepumpentechnologie für effizientes Heizen und Kühlen',
      link: '/leistungen',
      image: 'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=800&h=600&fit=crop'
    },
    {
      title: 'Heizungsanlagen',
      description: 'Professionelle Installation, Wartung und Reparatur von Heizungsanlagen',
      link: '/leistungen',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop'
    },
    {
      title: 'Sanitär & Bad',
      description: 'Komplette Badinstallationen und Sanitärlösungen',
      link: '/leistungen',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop'
    },
    {
      title: 'Klimaanlagen',
      description: 'Klimatisierung für angenehme Raumtemperaturen das ganze Jahr',
      link: '/leistungen',
      image: 'https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?w=800&h=600&fit=crop'
    },
    {
      title: 'Elektroinstallation',
      description: 'Sichere und moderne Elektroinstallationen für Ihr Zuhause',
      link: '/leistungen',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop'
    },
    {
      title: 'Notdienst 24/7',
      description: 'Rund um die Uhr erreichbar für alle Notfälle',
      link: '/notdienst',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop'
    }
  ];

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      ),
      title: 'Erfahrene und zertifizierte Fachkräfte',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=200&h=200&fit=crop'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      ),
      title: 'Hochwertige Materialien und Ausrüstung',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=200&h=200&fit=crop'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      ),
      title: 'Kunden­zufrieden­heits­garantie',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=200&h=200&fit=crop'
    }
  ];

  const faqs = [
    {
      question: 'Sind Ihre Fachkräfte lizenziert und versichert?',
      answer: 'Ja, alle unsere Fachkräfte sind vollständig lizenziert, versichert und haben umfassende Schulungen durchlaufen, um höchste Servicequalität zu gewährleisten.'
    },
    {
      question: 'Bieten Sie kostenlose Kostenvoranschläge an?',
      answer: 'Ja, wir bieten kostenlose und unverbindliche Kostenvoranschläge für alle unsere Dienstleistungen an. Kontaktieren Sie uns für einen Termin.'
    },
    {
      question: 'Welche Zahlungsmethoden akzeptieren Sie?',
      answer: 'Wir akzeptieren Barzahlung, EC-Karte, Kreditkarte und Überweisung. Für größere Projekte bieten wir auch Ratenzahlung an.'
    },
    {
      question: 'Bieten Sie Finanzierungsmöglichkeiten an?',
      answer: 'Ja, wir arbeiten mit verschiedenen Finanzierungspartnern zusammen und helfen Ihnen gerne bei der Beantragung von Fördermitteln.'
    }
  ];

  const testimonials = [
    {
      name: 'Martina Sandfuchs',
      rating: 5,
      text: 'Sehr gute Qualität, termingerecht geliefert und fähige Handwerker, alles schön sauber, Problemchen kreativ gelöst - super.',
      date: 'März 2024'
    },
    {
      name: 'Thomas Müller',
      rating: 5,
      text: 'Professionelle Beratung und exzellente Ausführung. Die neue Wärmepumpe läuft perfekt und spart uns jeden Monat Geld.',
      date: 'Februar 2024'
    },
    {
      name: 'Sandra Weber',
      rating: 5,
      text: 'Der Notdienst kam wirklich schnell und hat das Problem kompetent gelöst. Sehr empfehlenswert!',
      date: 'Januar 2024'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      {/* Hero Section with Background Image and Form */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        {/* Background Image with blur effect */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&h=1080&fit=crop"
            alt="Sanitär und Heizung"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pt-44 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Klima. Heizung. Sanitär. Elektro.
              </h1>
              
              <p className="text-xl text-gray-200 max-w-xl">
                Kompetent beraten. Exakt planen. Zuverlässig umsetzen. Mit über 25 Jahren Erfahrung sind wir Ihr zuverlässiger Partner für alle Gewerke.
              </p>

              {/* Location Badge */}
              <div className="inline-flex items-center space-x-3 bg-white rounded-2xl px-6 py-4 shadow-xl">
                <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Braunschweig</h3>
                  <p className="text-sm text-gray-600">Rischbleek 3, 38126</p>
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Termin vereinbaren mit unseren Experten
              </h2>
              
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Ihr Name"
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white"
                />
                <input
                  type="email"
                  placeholder="Ihre E-Mail"
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white"
                />
                <textarea
                  placeholder="Wie können wir Ihnen helfen?"
                  rows={5}
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 resize-none bg-white"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-lg"
                >
                  Anfrage senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Kostenrechner Section - Überarbeitet mit Tabs */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-3">
                Kostenlos & unverbindlich
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Kosten sofort berechnen
              </h2>
              <p className="text-gray-600">
                Erhalten Sie in unter 2 Minuten eine erste Kostenschätzung
              </p>
            </div>

            {/* Calculator Card */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveCalculator('heating')}
                  className={`flex-1 px-4 py-4 text-sm font-semibold transition-all ${
                    activeCalculator === 'heating'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span className="block mb-1 flex justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                    </svg>
                  </span>
                  Heizung
                </button>
                <button
                  onClick={() => setActiveCalculator('bathroom')}
                  className={`flex-1 px-4 py-4 text-sm font-semibold transition-all border-x border-gray-200 ${
                    activeCalculator === 'bathroom'
                      ? 'bg-cyan-600 text-white'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span className="block mb-1 flex justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                  </span>
                  Bad
                </button>
                <button
                  onClick={() => setActiveCalculator('maintenance')}
                  className={`flex-1 px-4 py-4 text-sm font-semibold transition-all ${
                    activeCalculator === 'maintenance'
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span className="block mb-1 flex justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                    </svg>
                  </span>
                  Wartung
                </button>
              </div>

              {/* Calculator Content */}
              <div className="p-6">
                <Calculator type={activeCalculator} useApi={false} identName="" />
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Keine Anmeldung nötig</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Sofortiges Ergebnis</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Unverbindliche Schätzung</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Two Column */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Image with Quote */}
              <div className="relative">
                <div className="relative h-[600px] rounded-3xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=800&fit=crop"
                    alt="Jordan Handwerker bei der Arbeit"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Quote Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-900 text-4xl flex-shrink-0">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 text-lg mb-3">
                        Wir nehmen uns die Zeit, Ihre individuellen Bedürfnisse und Wünsche zu verstehen, 
                        um sicherzustellen, dass Ihre Installation Ihre Vision widerspiegelt.
                      </p>
                      <p className="text-sm text-gray-600 font-semibold">
                        Das Jordan24 Team
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Wir verwandeln Ihr Zuhause in Ihre persönliche Wohlfühloase
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Ob Sie ein Einfamilienhaus renovieren oder ein Mehrfamilienhaus bauen – 
                  unser Team aus erfahrenen Fachkräften ist darauf spezialisiert, 
                  Ihre Vorstellungen von modernem Wohnen zum Leben zu erwecken.
                </p>

                {/* Feature List */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Nachhaltige Technologien & Lösungen
                      </h3>
                      <p className="text-gray-600">
                        Moderne Wärmepumpen, energieeffiziente Heizungen und umweltfreundliche Materialien
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Persönlicher Service für Ihre Bedürfnisse
                      </h3>
                      <p className="text-gray-600">
                        Individuelle Beratung, exakte Planung und zuverlässige Umsetzung durch unser Expertenteam
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Section with Image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                  Experten-Installation
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Lösungen maßgeschneidert auf Ihre Bedürfnisse
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Unser Team aus lizenzierten und erfahrenen Fachkräften ist verpflichtet, 
                  schnellen, professionellen und zuvorkommenden Service zu bieten, um sicherzustellen, 
                  dass Ihre Anlagen immer in optimalem Zustand sind.
                </p>
                <a 
                  href="/unternehmen" 
                  className="inline-flex items-center space-x-2 text-orange-500 hover:text-orange-600 font-semibold text-lg"
                >
                  <span>Mehr über uns erfahren</span>
                  <span>→</span>
                </a>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop"
                  alt="Erfahrener Installateur bei der Arbeit"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kompetenz Section - Mit Mitarbeiter */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Linke Seite - Bild */}
              <div className="relative">
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop"
                    alt="Jordan Fachberater"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white px-8 py-4 rounded-2xl shadow-xl">
                  <p className="text-3xl font-bold">25+</p>
                  <p className="text-sm text-blue-200">Jahre Erfahrung</p>
                </div>
              </div>

              {/* Rechte Seite - Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight mb-4">
                    Kompetent beraten.<br />
                    Exakt planen.<br />
                    <span className="text-orange-500">Zuverlässig umsetzen.</span>
                  </h2>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Wenn Sie Ihr Bad renovieren lassen wollen – worauf kommt es Ihnen an? Auf gute Beratung? 
                  Gewissenhafte Umsetzung? Kosten-Transparenz? Und wenn Sie den Bau großer Wohneinrichtung 
                  verantworten – was ist Ihnen wichtig? Termintreue? Zuverlässige Abwicklung? 
                  Kalkulationssicherheit?
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  All das ist für uns selbstverständlich – bei großen Bauprojekten genauso wie bei kleinen 
                  privaten Aufträgen. Denn am Ende eines Arbeitstages zählt für uns nur eines: 
                  <strong className="text-gray-800"> Dass Sie zufrieden sind.</strong>
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-8 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="font-semibold text-gray-800">Qualitativ</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <span className="font-semibold text-gray-800">Zertifiziert</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <span className="font-semibold text-gray-800">Professionell</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Wärmepumpen-Check CTA */}
            <div className="mt-20">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      Ist dein Haus für eine Wärmepumpe geeignet?
                    </h3>
                    <p className="text-green-100 text-lg mb-6">
                      Finde es heraus mit unserem kostenlosen Wärmepumpen-Check
                    </p>
                    <div className="flex items-center gap-4 text-green-200">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Kostenlos & unverbindlich</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Deine E-Mail Adresse</label>
                        <input
                          type="email"
                          placeholder="deine@email.de"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div className="flex items-start gap-2">
                        <input type="checkbox" id="datenschutz" className="mt-1 h-4 w-4 text-green-600 rounded" />
                        <label htmlFor="datenschutz" className="text-sm text-gray-600">
                          Ich habe die <a href="/datenschutz" className="text-green-600 hover:underline">Datenschutzerklärung</a> gelesen.
                        </label>
                      </div>
                      <a 
                        href="/waermepumpen-check"
                        className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl text-center transition-colors"
                      >
                        Jetzt starten
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Unsere Leistungen</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Wir bieten ein umfassendes Spektrum an Dienstleistungen, die auf alle Ihre Bedürfnisse zugeschnitten sind.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <a 
                  key={index} 
                  href={service.link}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-64">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <span className="text-orange-500 font-semibold inline-flex items-center space-x-2">
                      <span>Mehr erfahren</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Works / References Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Unsere aktuellen Projekte</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Wir verfolgen bei jedem Projekt einen individuellen Ansatz und stellen sicher, dass jede Installation 
                die einzigartige Vision und den Lebensstil unserer Kunden widerspiegelt.
              </p>
            </div>

            {/* Masonry Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {/* Image 1 - Tall */}
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=800&fit=crop"
                  alt="Badezimmer Renovierung"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Image 2 - Wide */}
              <div className="relative h-80 md:col-span-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&h=600&fit=crop"
                  alt="Heizungsinstallation"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Image 3 - Wide */}
              <div className="relative h-80 md:col-span-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?w=1200&h=600&fit=crop"
                  alt="Moderne Klimaanlage"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Image 4 */}
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=800&fit=crop"
                  alt="Elektroinstallation"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Image 5 */}
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=800&fit=crop"
                  alt="Sanitärinstallation"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Image 6 - Wide */}
              <div className="relative h-80 md:col-span-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=600&fit=crop"
                  alt="Wärmepumpen Installation"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* View All Link */}
            <div className="text-center mt-12">
              <a 
                href="/referenzen" 
                className="inline-flex items-center space-x-2 text-orange-500 hover:text-orange-600 font-semibold text-lg"
              >
                <span>Alle Referenzen ansehen</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Haben Sie einen Notfall?
            </h2>
            <p className="text-xl text-white">
              Unser 24/7 Notdienst ist immer für Sie da
            </p>
            <a 
              href="/kontakt" 
              className="inline-block bg-blue-900 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-blue-800 transition-colors shadow-xl"
            >
              Kontaktieren Sie uns
            </a>
          </div>
        </div>
      </section>

      {/* Service-Versprechen Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Unsere Garantien
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Das Jordan Service-Versprechen
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                12 verbindliche Garantien für Ihre Zufriedenheit – transparent, zuverlässig und kundenorientiert.
              </p>
            </div>

            {/* Promises Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Direkt-Termin */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <svg className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Direkt-Termin</h3>
                <p className="text-gray-600 text-sm">Verbindlicher Termin bereits beim ersten Kontakt für Beratung oder Einsatz.</p>
              </div>

              {/* 24h Notdienst */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                  <svg className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">24h Notdienst</h3>
                <p className="text-gray-600 text-sm">Qualifizierte Techniker rund um die Uhr, 365 Tage im Jahr für Sie erreichbar.</p>
              </div>

              {/* Pünktlichkeit */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                  <svg className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Pünktlichkeit</h3>
                <p className="text-gray-600 text-sm">Wir halten uns an alle vereinbarten Termine – zuverlässig und verbindlich.</p>
              </div>

              {/* Sauberkeit */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-600 transition-colors">
                  <svg className="w-7 h-7 text-cyan-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sauberkeit</h3>
                <p className="text-gray-600 text-sm">Wir schützen Ihre Räume und entsorgen alle Materialien fachgerecht.</p>
              </div>

              {/* Nach-Feierabend */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                  <svg className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Nach-Feierabend</h3>
                <p className="text-gray-600 text-sm">Service Mo-Do 17-20 Uhr ohne Mehrkosten bei 5 Tagen Vorlauf.</p>
              </div>

              {/* Wunsch-Termin */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-500 transition-colors">
                  <svg className="w-7 h-7 text-yellow-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Wunsch-Termin</h3>
                <p className="text-gray-600 text-sm">Ihr Wunschtermin zu jeder Tages- und Nachtzeit, 7 Tage die Woche.</p>
              </div>

              {/* Kompetenz-Beratung */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
                  <svg className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Kompetenz-Beratung</h3>
                <p className="text-gray-600 text-sm">Fachberatung für die richtige Kaufentscheidung – preiswert und wertvoll.</p>
              </div>

              {/* Lebenslang-Garantie */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-rose-600 transition-colors">
                  <svg className="w-7 h-7 text-rose-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Lebenslang-Garantie</h3>
                <p className="text-gray-600 text-sm">Lebenslange Garantie auf Premium-Anlagen der haustechnischen Klasse.</p>
              </div>

              {/* Internet-Präsenz */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-sky-600 transition-colors">
                  <svg className="w-7 h-7 text-sky-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Internet-Präsenz</h3>
                <p className="text-gray-600 text-sm">Transparente Informationen über Leistungen und interaktive Services.</p>
              </div>

              {/* Zufriedenheit */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
                  <svg className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Zufriedenheit</h3>
                <p className="text-gray-600 text-sm">Reklamationen werden schnellstmöglich und mit allen Mitteln behoben.</p>
              </div>

              {/* Fachkompetenz */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-600 transition-colors">
                  <svg className="w-7 h-7 text-amber-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Fachkompetenz</h3>
                <p className="text-gray-600 text-sm">Permanente Weiterbildung für professionelles Auftragsmanagement.</p>
              </div>

              {/* Fördermittel */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-600 transition-colors">
                  <svg className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Fördermittel</h3>
                <p className="text-gray-600 text-sm">Beratung zu staatlichen Förderprogrammen und attraktiven Finanzierungen.</p>
              </div>

            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <a 
                href="/service-versprechen" 
                className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition-colors"
              >
                Alle Versprechen entdecken
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ihre Fragen, beantwortet
              </h2>
              <p className="text-xl text-gray-600">
                Antworten auf die häufigsten Fragen unserer Kunden. Wenn Sie die gesuchten Informationen nicht finden, 
                kontaktieren Sie uns gerne.
              </p>
              <a 
                href="/kontakt" 
                className="inline-block mt-6 text-orange-500 hover:text-orange-600 font-semibold"
              >
                Kontaktieren Sie uns
              </a>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-lg font-bold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      {openFaq === index ? (
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="bewertungen" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Was unsere Kunden sagen
              </h2>
              <p className="text-xl text-gray-600">
                Unsere Kunden stehen im Mittelpunkt all dessen, was wir tun. Wir hören auf Ihre Bedürfnisse 
                und passen unsere Dienstleistungen entsprechend an.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a 
                href="/kundenbewertungen" 
                className="inline-flex items-center space-x-2 text-orange-500 hover:text-orange-600 font-semibold text-lg"
              >
                <span>Alle Bewertungen ansehen</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Brauchen Sie schnell einen Experten?
            </h2>
            <p className="text-xl text-white">
              Kontaktieren Sie uns jetzt - wir sind für Sie da!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+4953123449098" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-xl text-xl font-bold transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Rufen Sie uns an</span>
                <span>0531 23 44 909 80</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
