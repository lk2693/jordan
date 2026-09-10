import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jordan-gmbh.de'
  const lastModified = new Date()

  const routes: Array<{ path: string; changeFrequency: 'monthly' | 'yearly'; priority: number }> = [
    { path: '', changeFrequency: 'monthly', priority: 1 },
    { path: '/leistungen', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/referenzen', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/preise', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/unternehmen', changeFrequency: 'yearly', priority: 0.7 },
    { path: '/kontakt', changeFrequency: 'yearly', priority: 0.8 },
    { path: '/kundenbewertungen', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/notdienst', changeFrequency: 'yearly', priority: 0.7 },
    { path: '/foerdermittel', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/waermepumpen-check', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/wartungsrechner', changeFrequency: 'monthly', priority: 0.5 },
    { path: '/service-versprechen', changeFrequency: 'yearly', priority: 0.5 },
    { path: '/agb', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/impressum', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/datenschutz', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/barrierefreiheit', changeFrequency: 'yearly', priority: 0.3 },
  ]

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
