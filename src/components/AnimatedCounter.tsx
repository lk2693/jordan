'use client';

import { useEffect, useRef } from 'react';

type AnimatedCounterProps = {
  /** Zielwert, z. B. 3000 */
  value: number;
  /** Text vor der Zahl */
  prefix?: string;
  /** Text nach der Zahl, z. B. "+" */
  suffix?: string;
  /** Dezimalstellen (z. B. 1 für "4.9") */
  decimals?: number;
  durationMs?: number;
  className?: string;
};

const formatValue = (n: number, decimals: number) =>
  n.toLocaleString('de-DE', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

/**
 * Zählt beim ersten Sichtbarwerden von 0 zum Zielwert hoch.
 * Server-HTML enthält bereits den Endwert (SEO / no-JS).
 */
export default function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  durationMs = 1600,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / durationMs, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = `${prefix}${formatValue(value * eased, decimals)}${suffix}`;
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, prefix, suffix, decimals, durationMs]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatValue(value, decimals)}
      {suffix}
    </span>
  );
}
