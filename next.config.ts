import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/**
 * Content-Security-Policy.
 * Erlaubte Fremdquellen ergeben sich aus dem Code:
 *  - unpkg.com               Leaflet-CSS (+ Bilder aus dem CSS)   -> Map.tsx
 *  - tile.openstreetmap.org  Karten-Kacheln                       -> Map.tsx
 *  - api.lokalleads.de       Rechner-/Lead-API (fetch)            -> lokalleads-api.ts
 * Fonts (next/font) und Videos liegen im eigenen Origin.
 * 'unsafe-inline' bei script-src ist nötig, weil Next.js Inline-Skripte ohne Nonce
 * rendert; bei style-src wegen Leaflet-/React-Inline-Styles.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline' https://unpkg.com",
  "img-src 'self' data: blob: https://tile.openstreetmap.org https://unpkg.com",
  "font-src 'self'",
  `connect-src 'self' https://api.lokalleads.de${isDev ? " ws: wss:" : ""}`,
  "media-src 'self'",
  "worker-src 'self'",
  "manifest-src 'self'",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=(), browsing-topics=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  // Performance optimizations
  poweredByHeader: false,
  compress: true,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
