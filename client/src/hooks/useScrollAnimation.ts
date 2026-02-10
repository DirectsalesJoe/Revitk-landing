import { useEffect, useRef } from 'react';

/**
 * Scroll-reveal animation hook.
 * Observes elements with the class `scroll-reveal` and adds `revealed` when they enter the viewport.
 * Elements are always visible (opacity: 1) — the animation is purely a subtle translateY enhancement.
 */
export function useScrollAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll('.scroll-reveal');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '50px 0px',
      }
    );

    elements.forEach((el) => {
      // If already in viewport, reveal immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 50) {
        el.classList.add('revealed');
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return containerRef;
}
