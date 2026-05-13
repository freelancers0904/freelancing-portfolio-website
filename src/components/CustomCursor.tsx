import { useEffect, useRef, useCallback } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);
  const lastUpdate = useRef(0);

  const updateCursor = useCallback(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const size = isHovering.current ? 34 : 10;
    const bg = isHovering.current ? 'rgba(201,168,76,0.18)' : 'transparent';
    const border = isHovering.current ? 'rgba(201,168,76,0.9)' : '#C9A84C';

    cursor.style.transform = `translate3d(${pos.current.x - size / 2}px, ${pos.current.y - size / 2}px, 0)`;
    cursor.style.width = `${size}px`;
    cursor.style.height = `${size}px`;
    cursor.style.backgroundColor = bg;
    cursor.style.borderColor = border;
  }, []);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, [role="button"], input, textarea, select, label')) {
        isHovering.current = true;
        updateCursor();
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, [role="button"], input, textarea, select, label')) {
        isHovering.current = false;
        updateCursor();
      }
    };

    let raf: number;
    const lerp = () => {
      const ease = 0.26;
      pos.current.x += (target.current.x - pos.current.x) * ease;
      pos.current.y += (target.current.y - pos.current.y) * ease;
      
      if (Math.abs(target.current.x - pos.current.x) < 0.5) pos.current.x = target.current.x;
      if (Math.abs(target.current.y - pos.current.y) < 0.5) pos.current.y = target.current.y;

      const now = performance.now();
      if (now - lastUpdate.current > 16) {
        updateCursor();
        lastUpdate.current = now;
      }

      raf = requestAnimationFrame(lerp);
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });
    raf = requestAnimationFrame(lerp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(raf);
    };
  }, [updateCursor]);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-[width,height,background-color,border-color] duration-150 ease-out hidden md:block will-change-transform"
      style={{ width: 10, height: 10, border: '1.5px solid #C9A84C' }}
    />
  );
};

export default CustomCursor;
