import { useEffect } from 'react';

/**
 * Observes every element with the `.reveal` class and adds `.in` when
 * it scrolls into view, matching the original vanilla-JS behavior.
 * Re-runs when `deps` changes (e.g. after content mounts).
 */
export function useScrollReveal(deps: React.DependencyList = []) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, deps);
}
