import { useEffect, useRef } from 'react';

export function useScrollAnimation(staggerDelay = 0.1) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.querySelectorAll('.scroll-hidden');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.scroll-hidden');
            items.forEach((item, i) => {
              setTimeout(() => {
                item.classList.add('scroll-visible');
              }, i * staggerDelay * 1000);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [staggerDelay]);

  return ref;
}
