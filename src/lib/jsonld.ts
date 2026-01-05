export function generateJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Jordan GmbH',
    description: 'Kompetent beraten. Exakt planen. Zuverlässig umsetzen. Ihr Experte für Klima, Heizung, Sanitär und Elektro in Braunschweig.',
    url: 'https://jordan-gmbh.de',
    telephone: '+49 531 123456',
    email: 'info@jordan-gmbh.de',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Musterstraße 123',
      addressLocality: 'Braunschweig',
      postalCode: '38100',
      addressCountry: 'DE'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.2688,
      longitude: 10.5268
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00'
      }
    ],
    priceRange: '€€',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Heizungsinstallation',
            description: 'Professionelle Installation und Wartung von Heizungsanlagen'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sanitärinstallation',
            description: 'Komplette Badinstallation und Rohrleitungsarbeiten'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Elektroinstallation',
            description: 'Elektroinstallation und Smart Home Lösungen'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Klimaanlagen',
            description: 'Installation und Wartung von Klimaanlagen und Wärmepumpen'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '127'
    },
    sameAs: [
      'https://www.facebook.com/jordan-gmbh',
      'https://www.linkedin.com/company/jordan-gmbh'
    ]
  };
}
