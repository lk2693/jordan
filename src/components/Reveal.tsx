'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  /** Richtung der Einblend-Animation */
  direction?: 'up' | 'left' | 'right' | 'scale';
  /** Verzögerung in ms (für gestaffelte Elemente) */
  delay?: number;
  className?: string;
};

/**
 * Scroll-Reveal per IntersectionObserver.
 * Server-HTML bleibt sichtbar (SEO / no-JS); erst der Client versteckt
 * Elemente und blendet sie beim Scrollen ein. Respektiert prefers-reduced-motion.
 */
export default function Reveal({ children, direction = 'up', delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    el.classList.add('reveal-init');
    if (direction === 'left') el.classList.add('reveal-left');
    if (direction === 'right') el.classList.add('reveal-right');
    if (direction === 'scale') el.classList.add('reveal-scale');
    if (delay) el.style.transitionDelay = `${delay}ms`;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-visible');
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [direction, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
