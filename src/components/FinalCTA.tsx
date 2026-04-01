import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const FinalCTA = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="py-36 relative overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 800px 500px at 50% 50%, hsl(var(--primary) / 0.08), transparent 70%)',
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 500px 300px at 50% 90%, hsl(var(--accent) / 0.05), transparent 70%)',
      }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-px rotate-[30deg] pointer-events-none bg-primary/8" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-px -rotate-[30deg] pointer-events-none bg-primary/8" />

      <div ref={sectionRef} className="relative max-w-4xl mx-auto px-6 text-center">
        <span className="scroll-hidden section-label">READY TO GROW?</span>
        <h2 className="scroll-hidden font-display font-bold text-[44px] md:text-[72px] leading-[1.05] tracking-[-0.03em] mt-8">
          <span className="text-foreground">Your website should be your</span><br />
          <span className="text-primary">best salesperson.</span>
        </h2>
        <p className="scroll-hidden font-body text-lg text-muted-foreground max-w-[480px] mx-auto mt-5 leading-[1.7]">
          Let's build something that actually works for your business — delivered in 3–5 days.
        </p>

        <div className="scroll-hidden flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a href="https://wa.me/919XXXXXXXXX" target="_blank" rel="noopener noreferrer"
            className="font-body font-semibold text-base text-primary-foreground h-14 px-9 rounded-xl flex items-center bg-primary transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] shadow-[0_0_40px_hsl(var(--primary)/0.4)]"
          >
            Start Your Project →
          </a>
          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-body font-semibold text-base text-foreground h-14 px-9 rounded-xl flex items-center border-[1.5px] border-border transition-all duration-300 hover:bg-muted"
          >
            View Our Work
          </button>
        </div>

        <p className="scroll-hidden font-body text-[13px] text-muted-foreground mt-6">
          ⚡ We take on a limited number of projects each month.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
