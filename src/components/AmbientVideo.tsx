'use client';

import { useEffect, useRef } from 'react';

type AmbientVideoProps = {
  src: string;
  className?: string;
  /** 'none' für versteckte Videos (z. B. nur Desktop) — lädt erst beim Abspielen */
  preload?: 'none' | 'metadata';
};

/**
 * Stummer Ambient-Loop. Spielt nur, solange das Video im Viewport ist,
 * und gar nicht bei prefers-reduced-motion. Rein dekorativ (aria-hidden) —
 * umliegender Text trägt die Information.
 */
export default function AmbientVideo({ src, className = '', preload = 'metadata' }: AmbientVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      className={className}
      muted
      loop
      playsInline
      preload={preload}
      aria-hidden
      tabIndex={-1}
    />
  );
}
