'use client';

import { useEffect, useState } from 'react';

export default function MobileOptimizer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Mobile-specific optimizations
    if (typeof window !== 'undefined') {
      // Disable hover effects on mobile to improve performance
      if (window.innerWidth < 768) {
        document.documentElement.classList.add('mobile');
      }

      // Optimize scroll performance on mobile
      let ticking = false;
      function updateScroll() {
        ticking = false;
      }

      function requestTick() {
        if (!ticking) {
          requestAnimationFrame(updateScroll);
          ticking = true;
        }
      }

      document.addEventListener('scroll', requestTick, { passive: true });

      return () => {
        window.removeEventListener('resize', checkMobile);
        document.removeEventListener('scroll', requestTick);
      };
    }
  }, []);

  return null;
}
