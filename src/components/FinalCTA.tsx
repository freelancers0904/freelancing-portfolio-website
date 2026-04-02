import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const FinalCTA = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="py-36 relative overflow-hidden" style={{ background: '#080808' }}>
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 800px 500px at 50% 50%, rgba(108,99,255,0.1), transparent 70%)',
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 500px 300px at 50% 90%, rgba(0,212,170,0.06), transparent 70%)',
      }} />
      {/* Diagonal lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-px rotate-[30deg] pointer-events-none" style={{ background: 'rgba(108,99,255,0.08)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-px -rotate-[30deg] pointer-events-none" style={{ background: 'rgba(108,99,255,0.08)' }} />

      <div ref={sectionRef} className="relative max-w-4xl mx-auto px-6 text-center">
        <span className="scroll-hidden section-label">READY TO GROW?</span>
        <h2 className="scroll-hidden font-display font-bold text-[44px] md:text-[72px] leading-[1.05] tracking-[-0.03em] mt-8">
          <span className="text-agency-text">Your website should be your</span><br />
          <span className="text-primary">best salesperson.</span>
        </h2>
        <p className="scroll-hidden font-body text-lg text-agency-text-secondary max-w-[480px] mx-auto mt-5 leading-[1.7]">
          Let's build something that actually works for your business — delivered in 3–5 days.
        </p>

        <div className="scroll-hidden flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer"
            className="font-body font-semibold text-base text-white h-14 px-9 rounded-xl flex items-center transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, #6C63FF, #5952E8)',
              boxShadow: '0 0 40px rgba(108,99,255,0.4)',
            }}
          >
            Start Your Project →
          </a>
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
    </section>
  );
};

export default FinalCTA;
