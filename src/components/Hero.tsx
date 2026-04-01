import { useEffect, useState } from 'react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Gold glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 700px 500px at 50% 40%, hsl(36 95% 55% / 0.1) 0%, transparent 70%)'
      }} />
      {/* Teal glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 400px 300px at 10% 90%, hsl(170 75% 41% / 0.06) 0%, transparent 70%)'
      }} />
      {/* Light beam */}
      <div className="absolute w-[60%] left-1/2 -translate-x-1/2 top-[45%] h-[1px] animate-light-beam" style={{
        background: 'linear-gradient(90deg, transparent, hsl(36 95% 55% / 0.3), transparent)'
      }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{
            background: 'hsl(var(--primary) / 0.1)',
            border: '1px solid hsl(var(--primary) / 0.3)',
            transitionDelay: '0.2s',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-dot" />
          <span className="font-body font-medium text-[13px] text-primary">⚡ Websites Delivered in 3–5 Days</span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-extrabold text-[48px] md:text-[88px] leading-[1.05] tracking-[-0.03em]">
          {['We Build Websites', 'That Get You'].map((line, i) => (
            <span key={i} className={`block text-foreground transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
            >
              {line}
            </span>
          ))}
          <span className={`block text-primary relative inline-block transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '0.6s' }}
          >
            Customers.
            <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
              <path
                d="M2 8 C40 2, 80 12, 120 6 S180 2, 198 8"
                stroke="hsl(36, 95%, 55%)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.7"
                strokeDasharray="200"
                className={loaded ? 'animate-draw-line' : ''}
                style={{ strokeDashoffset: loaded ? undefined : 200 }}
              />
            </svg>
          </span>
        </h1>

        {/* Subheadline */}
        <p className={`font-body text-lg text-muted-foreground max-w-[520px] mx-auto mt-8 leading-[1.7] transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '0.7s' }}
        >
          High-converting, AI-powered websites for gyms and local businesses — live in 3 to 5 days.
        </p>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '0.8s' }}
        >
          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-body font-semibold text-[15px] text-primary-foreground h-[52px] px-8 rounded-[10px] bg-primary transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_30px_hsl(var(--primary)/0.35)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.5)]"
          >
            See Our Work
          </button>
          <a
            href="https://wa.me/919XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-semibold text-[15px] h-[52px] px-8 rounded-[10px] flex items-center border-[1.5px] border-accent/50 text-accent transition-all duration-300 hover:bg-accent/8"
          >
            Chat on WhatsApp →
          </a>
        </div>

        {/* Microcopy */}
        <p className={`font-body text-[13px] text-muted-foreground mt-6 transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '0.9s' }}
        >
          No retainer. No agency overhead. Just results.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <svg width="20" height="32" viewBox="0 0 20 32" fill="none" className="opacity-40">
          <rect x="1" y="1" width="18" height="30" rx="9" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" />
          <circle cx="10" cy="10" r="2" fill="currentColor" className="animate-scroll-dot text-muted-foreground" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
