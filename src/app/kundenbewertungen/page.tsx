import Link from 'next/link';
import type { Metadata } from 'next';

import Kicker from '@/components/Kicker';
import Reveal from '@/components/Reveal';
import { GOOGLE_PROFILE_URL, GOOGLE_RATING, reviews } from '@/lib/reviews';

export const metadata: Metadata = {
  title: 'Kundenbewertungen | Jordan GmbH — 4,9 von 5 Sternen auf Google',
  description: 'Das sagen Kunden aus Braunschweig und Umgebung über die Jordan GmbH: 4,9 von 5 Sternen auf Google.',
};

function Stars({ rating, className = 'w-4 h-4' }: { rating: number; className?: string }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${rating} von 5 Sternen`}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`${className} ${i < rating ? 'text-amber-400' : 'text-slate-300'} fill-current`} viewBox="0 0 20 20" aria-hidden>
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </span>
  );
}

/* Offizielles Google-„G" als Inline-SVG */
function GoogleMark({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0012 23z" />
      <path fill="#FBBC05" d="M5.84 14.09A6.6 6.6 0 015.49 12c0-.73.13-1.43.35-2.09V7.07H2.18A11 11 0 001 12c0 1.77.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15A11 11 0 0012 1 11 11 0 002.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export default function Kundenbewertungen() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero — mit echtem Google-Rating statt Deko */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-[#152852]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-5">
            <Kicker light>Kundenstimmen</Kicker>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.08] tracking-tight">
              Was Kunden über uns sagen
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Echte Rezensionen aus Braunschweig und Umgebung — nachlesbar
              auf unserem Google-Profil.
            </p>
          </div>

          {/* Rating-Zeile */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/15 pt-8 max-w-3xl">
            <p className="text-5xl font-extrabold text-white">
              {GOOGLE_RATING.score}<span className="text-2xl text-slate-400 font-semibold"> / {GOOGLE_RATING.outOf}</span>
            </p>
            <div>
              <Stars rating={5} className="w-5 h-5" />
              <a
                href={GOOGLE_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <GoogleMark />
                Bewertungen auf Google ansehen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
              {reviews.map((review, i) => (
                <Reveal key={review.name} delay={(i % 3) * 100}>
                  <blockquote className="h-full border-l-2 border-amber-500 pl-6 flex flex-col">
                    <Stars rating={review.rating} />
                    <p className="text-slate-700 leading-relaxed mt-3 flex-1">
                      &bdquo;{review.text}&ldquo;
                    </p>
                    <footer className="mt-4">
                      <span className="text-sm font-semibold text-slate-900">{review.name}</span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
                        <GoogleMark className="w-3 h-3" />
                        Google{review.service ? ` · ${review.service}` : ''}{review.date ? ` · ${review.date}` : ''}
                      </span>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>

            {/* Externe Profile */}
            <Reveal className="mt-16 border-t border-slate-200 pt-8">
              <p className="text-sm text-slate-500">
                Alle Rezensionen im Original:{' '}
                <a href={GOOGLE_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#152852] hover:text-amber-600 transition-colors">
                  Google-Profil der Jordan GmbH
                </a>
                {' '}·{' '}
                <a href="http://www.institut-fuer-kundenzufriedenheit.de/pages/feedback?company_id=2722" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#152852] hover:text-amber-600 transition-colors">
                  Institut für Kundenzufriedenheit
                </a>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bewertung schreiben + CTA */}
      <section className="py-20 bg-[#152852]">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Waren Sie zufrieden mit uns?
              </h2>
              <p className="text-lg text-slate-400 max-w-xl mx-auto">
                Eine ehrliche Google-Bewertung hilft uns mehr als jede Werbung.
                Und wenn etwas nicht gepasst hat: Sagen Sie es uns direkt.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href={GOOGLE_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#152852] px-7 py-3.5 rounded-lg font-bold transition-colors duration-200"
                >
                  <GoogleMark />
                  Bewertung auf Google schreiben
                </a>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 text-white border border-white/40 hover:border-white hover:bg-white/5 px-7 py-3.5 rounded-lg font-semibold transition-colors duration-200"
                >
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
