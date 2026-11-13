import { useEffect } from 'react';

/**
 * Custom hook to trigger fluid scroll-reveal animations (fade-up, slide-left, slide-right)
 */
export function useScrollReveal() {
  useEffect(() => {
    const selector = '.reveal-fade-up, .reveal-slide-left, .reveal-slide-right';
    const elements = document.querySelectorAll(selector);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach((el) => {
      // Only mark active immediately if it's already near the top on load (Hero section)
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
        el.classList.add('active');
      } else {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}
