import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';
import WhatsAppSelector from './WhatsAppSelector';

const FinalCTA = () => {
  const sectionRef = useScrollAnimation();
  const [whatsappOpen, setWhatsappOpen] = useState(false);

  return (
    <section className="py-36 relative overflow-hidden" style={{ background: 'hsl(var(--bg-primary))' }}>
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 800px 500px at 50% 50%, rgba(201,168,76,0.08), transparent 70%)',
      }} />
      <div className="absolute inset-0 pointer-events-none finalcta-navy-glow" style={{
        background: 'radial-gradient(ellipse 500px 300px at 50% 90%, rgba(0,35,73,0.8), transparent 70%)',
      }} />
      {/* Diagonal lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-px rotate-[30deg] pointer-events-none" style={{ background: 'rgba(201,168,76,0.06)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-px -rotate-[30deg] pointer-events-none" style={{ background: 'rgba(201,168,76,0.06)' }} />

      <div ref={sectionRef} className="relative max-w-4xl mx-auto px-6 text-center">
        <span className="scroll-hidden section-label">READY TO GROW?</span>
        <h2 className="scroll-hidden font-display font-bold text-3xl sm:text-4xl md:text-[72px] leading-[1.05] tracking-[-0.03em] mt-8">
          <span className="text-agency-text">Your website should be your</span><br />
          <span style={{ color: '#C9A84C' }}>best salesperson.</span>
        </h2>
        <p className="scroll-hidden font-body text-sm sm:text-lg text-agency-text-secondary max-w-[480px] mx-auto mt-5 leading-[1.7]">
          Let's build something that actually works for your business — delivered in 3–5 days.
        </p>

        <div className="scroll-hidden flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setWhatsappOpen(true)}
            className="font-body font-semibold text-base h-14 px-9 rounded-xl flex items-center transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, #957C3D, #C9A84C)',
              color: '#001020',
              boxShadow: '0 0 40px rgba(201,168,76,0.3)',
            }}
          >
            Start Your Project →
          </button>
          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-body font-semibold text-base text-agency-text h-14 px-9 rounded-xl flex items-center transition-all duration-300 hover:bg-[rgba(255,255,255,0.03)]"
            style={{ border: '1.5px solid rgba(255,255,255,0.15)' }}
          >
            View Our Work
          </button>
        </div>

        <p className="scroll-hidden font-body text-[13px] text-agency-text-muted mt-6">
          ⚡ We take on a limited number of projects each month.
        </p>
      </div>

      <WhatsAppSelector isOpen={whatsappOpen} onClose={() => setWhatsappOpen(false)} />
    </section>
  );
};

export default FinalCTA;
