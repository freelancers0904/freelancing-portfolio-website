import { useEffect, useState } from 'react';
import vichaarLogo from '@/assets/vichaar-logo-transparent.png';

const STORAGE_KEY = 'vichaar_splash_seen';

const SplashScreen = () => {
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return false;
    return sessionStorage.getItem(STORAGE_KEY) !== '1';
  });
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = 'hidden';
    const t1 = window.setTimeout(() => setFadeOut(true), 1800);
    const t2 = window.setTimeout(() => {
      setShow(false);
      sessionStorage.setItem(STORAGE_KEY, '1');
      document.body.style.overflow = '';
    }, 2600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = '';
    };
  }, [show]);

  if (!show) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fadeOut ? 0 : 1,
        transform: fadeOut ? 'scale(1.04)' : 'scale(1)',
        transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
        pointerEvents: fadeOut ? 'none' : 'auto',
      }}
    >
      <img
        src={vichaarLogo}
        alt="Vichaar Co"
        style={{
          height: 'clamp(64px, 9vw, 110px)',
          width: 'auto',
          opacity: 0,
          animation: 'splash-fade-in 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s forwards',
        }}
      />
      <div
        style={{
          marginTop: 22,
          fontFamily: 'Inter, sans-serif',
          fontSize: 11,
          letterSpacing: '4px',
          color: '#C9A84C',
          textTransform: 'uppercase',
          opacity: 0,
          animation: 'splash-fade-in 0.9s cubic-bezier(0.16,1,0.3,1) 0.55s forwards',
        }}
      >
        Where Ideas Meet Technology
      </div>
      <style>{`
        @keyframes splash-fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
