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
    
    // Phase timeline: intro (0-0.8s) -> hold (0.8-3.5s) -> exit (3.5-4.8s)
    const t1 = window.setTimeout(() => setPhase('hold'), 800);
    const t2 = window.setTimeout(() => setPhase('exit'), 3500);
    const t3 = window.setTimeout(() => {
      setShow(false);
      sessionStorage.setItem(STORAGE_KEY, '1');
      document.body.style.overflow = '';
      document.documentElement.style.scrollBehavior = '';
    }, 4800);
    
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
        transform: isExiting ? 'scale(1.1)' : 'scale(1)',
        transition: 'opacity 1.3s cubic-bezier(0.16,1,0.3,1), transform 1.3s cubic-bezier(0.16,1,0.3,1)',
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
          animation: phase === 'intro' ? 'glow-pulse 2.5s ease-in-out forwards' : phase === 'exit' ? 'glow-burst 1.3s ease-out forwards' : 'glow-breathe 3s ease-in-out infinite',
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
            animation: phase === 'intro' ? 'splash-fade-in 1s cubic-bezier(0.16,1,0.3,1) 0.2s forwards' : phase === 'exit' ? 'splash-exit-fantastic 1.3s cubic-bezier(0.16,1,0.3,1) forwards' : 'none',
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
        
        @keyframes splash-exit-fantastic {
          0% {
            opacity: 1;
            transform: scale(1) rotateZ(0deg);
            filter: blur(0px) drop-shadow(0 0 30px rgba(201,168,76,0.3));
          }
          25% {
            transform: scale(1.15) rotateZ(5deg);
            filter: blur(0px) drop-shadow(0 0 60px rgba(201,168,76,0.6));
          }
          50% {
            transform: scale(1.2) rotateZ(-3deg) translateY(-20px);
            filter: blur(2px) drop-shadow(0 0 80px rgba(201,168,76,0.8));
          }
          75% {
            transform: scale(0.8) rotateZ(8deg) translateY(-40px);
            filter: blur(8px) drop-shadow(0 0 40px rgba(201,168,76,0.4));
            opacity: 0.8;
          }
          100% {
            opacity: 0;
            transform: scale(0.5) rotateZ(15deg) translateY(-100px);
            filter: blur(15px) drop-shadow(0 0 0px rgba(201,168,76,0));
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

        @keyframes glow-breathe {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.5;
          }
        }

        @keyframes glow-burst {
          0% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.2;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
