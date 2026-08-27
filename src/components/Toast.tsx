import { Check } from 'lucide-react';

interface ToastProps {
  message: string;
  show: boolean;
}

export default function Toast({ message, show }: ToastProps) {
  return (
    <div className={`toast${show ? ' show' : ''}`} role="status" aria-live="polite">
      <span className="toast-icon">
        <Check />
      </span>
      <span>{message}</span>
    </div>
  );
}
