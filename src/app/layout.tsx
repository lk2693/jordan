import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Optimized font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jordan-gmbh.de'),
  title: {
    default: "Jordan GmbH - Klima, Heizung, Sanitär, Elektro in Braunschweig",
    template: "%s | Jordan GmbH"
  },
  description: "Kompetent beraten. Exakt planen. Zuverlässig umsetzen. Jordan GmbH - Ihr Experte für Klima, Heizung, Sanitär und Elektro in Braunschweig und Umgebung. 24h Notdienst verfügbar.",
  keywords: ["Heizung Braunschweig", "Sanitär Braunschweig", "Elektro Braunschweig", "Klima Braunschweig", "Notdienst", "Wärmepumpe", "Heizungsinstallation", "Sanitärinstallation", "Elektriker", "Klimaanlage", "Jordan GmbH"],
  authors: [{ name: "Jordan GmbH" }],
  creator: "Jordan GmbH",
  publisher: "Jordan GmbH",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://jordan-gmbh.de",
    title: "Jordan GmbH - Klima, Heizung, Sanitär, Elektro",
    description: "Kompetent beraten. Exakt planen. Zuverlässig umsetzen. Ihr Experte für Klima, Heizung, Sanitär und Elektro in Braunschweig.",
    siteName: "Jordan GmbH",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jordan GmbH - Klima, Heizung, Sanitär, Elektro"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Jordan GmbH - Klima, Heizung, Sanitär, Elektro",
    description: "Kompetent beraten. Exakt planen. Zuverlässig umsetzen.",
    images: ["/og-image.jpg"]
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://jordan-gmbh.de",
    languages: {
      'de-DE': 'https://jordan-gmbh.de',
    },
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="theme-color" content="#1e3a8a" />
        <link rel="icon" href="/joradan.png" type="image/png" />
        <link rel="apple-touch-icon" href="/joradan.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
