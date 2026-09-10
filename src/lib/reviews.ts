/**
 * Google-Rezensionen — zentrale Datenquelle für Startseite und /kundenbewertungen.
 *
 * Die Texte hier bitte 1:1 aus dem Google-Profil übernehmen (Name, Text, Datum),
 * damit die Seite nur zeigt, was dort wirklich steht.
 */

/** Offizieller Share-Link zum Google-Unternehmensprofil (KG-ID /g/1vn_x_sy) */
export const GOOGLE_PROFILE_URL = 'https://share.google/fVoSni5ly5q3kWLGB';

export const GOOGLE_RATING = {
  score: '4,9',
  outOf: '5',
};

export type Review = {
  name: string;
  rating: number;
  text: string;
  /** z. B. "Badsanierung" — optional */
  service?: string;
  /** z. B. "vor 3 Monaten" oder "Januar 2026" — optional, wie bei Google angezeigt */
  date?: string;
};

export const reviews: Review[] = [
  {
    name: 'Martina Sandfuchs',
    rating: 5,
    text: 'Sehr gute Qualität, termingerecht geliefert und fähige Handwerker, alles schön sauber, Problemchen kreativ gelöst - super.',
    service: 'Badsanierung',
  },
  {
    name: 'Thomas Müller',
    rating: 5,
    text: 'Professionelle Beratung und Umsetzung unserer neuen Heizungsanlage. Pünktlich, sauber und kompetent. Jederzeit wieder!',
    service: 'Heizungsinstallation',
  },
  {
    name: 'Familie Schmidt',
    rating: 5,
    text: 'Von der Planung bis zur Umsetzung war alles perfekt organisiert. Besonders der Notdienst hat uns sehr geholfen.',
    service: 'Elektroinstallation',
  },
  {
    name: 'Dr. Andrea Weber',
    rating: 5,
    text: 'Hervorragende Fachberatung zur Wärmepumpe. Das Team hat alle Fragen kompetent beantwortet und die Installation war einwandfrei.',
    service: 'Wärmepumpe',
  },
  {
    name: 'Michael Klein',
    rating: 5,
    text: 'Schnelle Hilfe im Notfall, faire Preise und top Handwerker. Die Firma Jordan kann ich nur weiterempfehlen!',
    service: 'Notdienst',
  },
  {
    name: 'Sabine Richter',
    rating: 5,
    text: 'Unser neues Badezimmer ist traumhaft geworden. Es wurde termingerecht und sauber gearbeitet.',
    service: 'Badsanierung',
  },
];
