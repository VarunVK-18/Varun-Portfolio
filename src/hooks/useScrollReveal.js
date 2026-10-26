import { useEffect } from 'react';

/**
 * Custom hook to ensure elements animate smoothly and are never left hidden
 */
export function useScrollReveal() {
  useEffect(() => {
    // Immediately mark visible to ensure no blank spaces ever occur
    const elements = document.querySelectorAll('.reveal-fade-up');
    elements.forEach((el) => el.classList.add('active'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.05,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}
