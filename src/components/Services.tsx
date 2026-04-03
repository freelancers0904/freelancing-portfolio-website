import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    tag: 'CORE SERVICE',
    title: 'High-Converting Website Design',
    body: 'Built around how your customer thinks — not just your brand colours. Every page, button, and word is designed to move visitors toward contacting you.',
    glowColor: 'rgba(201,168,76,0.12)',
    hasBottomLine: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    tag: 'KEY DIFFERENTIATOR',
    title: 'AI-Powered Lead Systems',
    body: "Chatbots, smart forms, and WhatsApp automation that capture and qualify leads automatically — even at 2am when you're sleeping.",
    glowColor: 'rgba(201,168,76,0.15)',
    hasBottomLine: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    tag: 'OUR PROMISE',
    title: '3–5 Day Delivery',
    body: 'From requirement call to live website in 3 to 5 days. Not weeks. Not months. We move fast so your business never waits.',
    glowColor: 'rgba(201,168,76,0.1)',
    hasBottomLine: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
];

const Services = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="services" className="py-28 md:py-32" style={{ background: 'hsl(var(--bg-primary))' }}>
      <div ref={sectionRef} className="max-w-6xl mx-auto px-6">
        <div className="text-center scroll-hidden">
          <span className="section-label">WHAT WE DO</span>
        </div>
        <h2 className="scroll-hidden font-display font-bold text-[28px] sm:text-[36px] md:text-[52px] text-center mt-6 leading-[1.2] tracking-[-0.02em]" style={{ wordSpacing: '0.04em' }}>
          <span className="text-agency-text">We don't just build websites.</span><br className="hidden sm:block" />
          <span className="text-agency-text block sm:inline mt-1 sm:mt-0">We build systems that bring you </span>
          <span style={{ color: '#C9A84C' }}>customers.</span>
        </h2>
        <p className="scroll-hidden font-body text-sm sm:text-base text-agency-text-secondary text-center max-w-[540px] mx-auto mt-5 leading-[1.8]">
          Every website we deliver comes with a conversion strategy, lead capture, and automation — not just design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-16">
          {services.map((s, i) => (
            <div key={i} className="scroll-hidden relative overflow-hidden p-6 md:p-9 transition-all duration-[350ms]" style={{
              background: `hsla(var(--card-bg), var(--card-bg-alpha))`,
              border: '1px solid rgba(149, 124, 61, 0.2)',
              borderRadius: 20,
              backdropFilter: 'blur(16px)',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)';
                e.currentTarget.style.background = `hsla(var(--card-bg), var(--card-bg-hover-alpha))`;
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 0 50px rgba(201,168,76,0.08), 0 30px 60px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(149, 124, 61, 0.2)';
                e.currentTarget.style.background = `hsla(var(--card-bg), var(--card-bg-alpha))`;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Decorative glow */}
              <div className="absolute -top-10 -right-10 w-[140px] h-[140px] rounded-full pointer-events-none" style={{ background: s.glowColor, filter: 'blur(40px)' }} />

              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)' }}>
                {s.icon}
              </div>
              <div className="mt-5 inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-[1.5px] font-body" style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', color: '#C9A84C' }}>
                {s.tag}
              </div>
              <h3 className="font-display font-semibold text-[22px] text-agency-text mt-3">{s.title}</h3>
              <p className="font-body text-[15px] text-agency-text-secondary leading-[1.7] mt-3">{s.body}</p>

              {s.hasBottomLine && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, #957C3D, #C9A84C, #957C3D)' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
