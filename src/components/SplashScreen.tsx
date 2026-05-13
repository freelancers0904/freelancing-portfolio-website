import { useEffect, useState } from 'react';
import vichaarLogo from '@/assets/vichaar-logo-transparent.png';

const STORAGE_KEY = 'vichaar_splash_seen';

const SplashScreen = () => {
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return false;
    return sessionStorage.getItem(STORAGE_KEY) !== '1';
  });
  const [phase, setPhase] = useState<'intro' | 'hold' | 'exit'>('intro');

  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Phase timeline: intro (0-0.8s) -> hold (0.8-2s) -> exit (2-2.7s)
    const t1 = window.setTimeout(() => setPhase('hold'), 800);
    const t2 = window.setTimeout(() => setPhase('exit'), 2000);
    const t3 = window.setTimeout(() => {
      setShow(false);
      sessionStorage.setItem(STORAGE_KEY, '1');
      document.body.style.overflow = '';
      document.documentElement.style.scrollBehavior = '';
    }, 2700);
    
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = '';
      document.documentElement.style.scrollBehavior = '';
    };
  }, [show]);

  if (!show) return null;

  const isExiting = phase === 'exit';

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'linear-gradient(135deg, #000a1a 0%, #001621 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isExiting ? 0 : 1,
        transform: isExiting ? 'scale(1.05)' : 'scale(1)',
        transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
        pointerEvents: 'none',
        willChange: 'opacity, transform',
      }}
    >
      {/* Animated background glow */}
      <div
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)',
          animation: phase === 'intro' ? 'glow-pulse 2s ease-in-out forwards' : 'none',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Logo */}
        <img
          src={vichaarLogo}
          alt="Vichaar Co"
          loading="eager"
          decoding="sync"
          style={{
            height: 'clamp(80px, 12vw, 140px)',
            width: 'auto',
            filter: 'drop-shadow(0 0 30px rgba(201,168,76,0.3))',
            opacity: 0,
            animation: phase === 'intro' ? 'splash-fade-in 1s cubic-bezier(0.16,1,0.3,1) 0.2s forwards' : 'none',
          }}
        />
      </div>

      <style>{`
        @keyframes splash-fade-in {
          from { 
            opacity: 0; 
            transform: translateY(12px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        @keyframes glow-pulse {
          0% {
            transform: scale(0.8);
            opacity: 0.6;
          }
          50% {
            transform: scale(1);
            opacity: 0.3;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
