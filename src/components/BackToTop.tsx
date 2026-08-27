import { ArrowUp } from 'lucide-react';
import { useScrollState } from '../hooks/useScrollState';

export default function BackToTop() {
  const { showBackToTop } = useScrollState();

  return (
    <button
      className={`to-top${showBackToTop ? ' show' : ''}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp />
    </button>
  );
}
