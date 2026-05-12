import { forwardRef, useRef, MouseEvent, ButtonHTMLAttributes, ReactNode } from 'react';

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  strength?: number;
}

const isTouch = () =>
  typeof window !== 'undefined' &&
  (window.matchMedia('(hover: none)').matches || 'ontouchstart' in window);

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ children, strength = 8, style, onMouseMove, onMouseLeave, ...props }, ref) => {
    const innerRef = useRef<HTMLButtonElement | null>(null);

    const setRef = (node: HTMLButtonElement | null) => {
      innerRef.current = node;
      if (typeof ref === 'function') ref(node);
      else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
    };

    const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
      onMouseMove?.(e);
      const el = innerRef.current;
      if (!el || isTouch() || prefersReducedMotion()) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      const tx = Math.max(-strength, Math.min(strength, (x / rect.width) * strength * 2));
      const ty = Math.max(-strength, Math.min(strength, (y / rect.height) * strength * 2));
      el.style.transform = `translate(${tx}px, ${ty}px)`;
    };

    const handleLeave = (e: MouseEvent<HTMLButtonElement>) => {
      onMouseLeave?.(e);
      const el = innerRef.current;
      if (!el) return;
      el.style.transform = 'translate(0, 0)';
    };

    return (
      <button
        ref={setRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1)', ...style }}
        {...props}
      >
        {children}
      </button>
    );
  },
);

MagneticButton.displayName = 'MagneticButton';

export default MagneticButton;
