import { useEffect } from 'react';

/**
 * Custom hook to trigger fluid scroll-reveal animations (fade-up, slide-left, slide-right)
 */
export function useScrollReveal() {
  useEffect(() => {
    const selector = '.reveal-fade-up, .reveal-slide-left, .reveal-slide-right';
    const elements = document.querySelectorAll(selector);

    if (!elements.length) return;

    // Use IntersectionObserver with a responsive rootMargin to detect scrolling early
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach((el) => {
      // Check if already in viewport on initial load
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
        el.classList.add('active');
      }
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}
