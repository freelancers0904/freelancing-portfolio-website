import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    tag: 'CORE SERVICE',
    title: 'High-Converting Website Design',
    body: 'Built around how your customer thinks — not just your brand colours. Every page, button, and word is designed to move visitors toward contacting you.',
    isAccent: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    tag: 'KEY DIFFERENTIATOR',
    title: 'AI-Powered Lead Systems',
    body: "Chatbots, smart forms, and WhatsApp automation that capture and qualify leads automatically — even at 2am when you're sleeping.",
    isAccent: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    tag: 'OUR PROMISE',
    title: '3–5 Day Delivery',
    body: 'From requirement call to live website in 3 to 5 days. Not weeks. Not months. We move fast so your business never waits.',
    isAccent: false,
    hasBottomLine: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
];

const Services = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="services" className="py-28 md:py-32 bg-background">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-6">
        <div className="text-center scroll-hidden">
          <span className="section-label">WHAT WE DO</span>
        </div>
        <h2 className="scroll-hidden font-display font-bold text-4xl md:text-[56px] text-center mt-6 leading-tight tracking-[-0.03em]">
          <span className="text-foreground">We don't just build websites.</span><br />
          <span className="text-foreground">We build systems that bring you </span>
          <span className="text-primary">customers.</span>
        </h2>
        <p className="scroll-hidden font-body text-base text-muted-foreground text-center max-w-[540px] mx-auto mt-5 leading-[1.8]">
          Every website we deliver comes with a conversion strategy, lead capture, and automation — not just design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {services.map((s, i) => (
            <div key={i} className="scroll-hidden premium-card p-9 group">
              {/* Decorative glow */}
              <div className="absolute -top-10 -right-10 w-[120px] h-[120px] rounded-full blur-[40px] pointer-events-none transition-opacity duration-500 opacity-40 group-hover:opacity-80" 
                style={{ background: s.isAccent ? 'hsl(var(--accent) / 0.15)' : 'hsl(var(--primary) / 0.15)' }} 
              />

              {/* Shimmer line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] animate-shimmer" />

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${s.isAccent ? 'bg-accent/10 border border-accent/20 text-accent' : 'bg-primary/10 border border-primary/20 text-primary'}`}>
                {s.icon}
              </div>
              <div className={`mt-5 inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-[1.5px] font-body ${s.isAccent ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'}`}>
                {s.tag}
              </div>
              <h3 className="font-display font-semibold text-[22px] text-foreground mt-3">{s.title}</h3>
              <p className="font-body text-[15px] text-muted-foreground leading-[1.7] mt-3">{s.body}</p>

              {s.hasBottomLine && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
