import { useEffect, useState } from 'react';

/**
 * Returns whether the page has been scrolled past given thresholds —
 * used for the sticky header shadow and the "back to top" button.
 */
export function useScrollState(headerThreshold = 8, topButtonThreshold = 600) {
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY || window.pageYOffset;
      setScrolled(y > headerThreshold);
      setShowBackToTop(y > topButtonThreshold);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [headerThreshold, topButtonThreshold]);

  return { scrolled, showBackToTop };
}
