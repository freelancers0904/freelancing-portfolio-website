import { useEffect, useState } from 'react';
import WhatsAppSelector from './WhatsAppSelector';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <section className="hero-section relative flex min-h-[calc(100svh-68px)] items-start justify-center overflow-hidden md:min-h-screen md:items-center" style={{ background: 'hsl(var(--bg-primary))' }}>
      {/* Gold glow */}
      <div className="absolute inset-0 pointer-events-none hero-gold-glow" style={{
        background: 'radial-gradient(ellipse 800px 600px at 50% 30%, rgba(149,124,61,0.1) 0%, transparent 70%)'
      }} />
      {/* Navy glow bottom-right */}
      <div className="absolute inset-0 pointer-events-none hero-navy-glow" style={{
        background: 'radial-gradient(ellipse 400px 300px at 90% 90%, rgba(0,35,73,0.8) 0%, transparent 70%)'
      }} />
      {/* Light beam */}
      <div className="absolute w-[60%] left-1/2 -translate-x-1/2 top-[45%] h-[1px] animate-light-beam" style={{
        background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.25), transparent)'
      }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{
            background: 'rgba(201,168,76,0.1)',
            border: '1px solid rgba(201,168,76,0.3)',
            transitionDelay: '0.2s',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse-dot" style={{ background: '#C9A84C' }} />
          <span className="font-body font-medium text-[13px]" style={{ color: '#C9A84C' }}>⚡ Full Online Presence in 5–7 Days</span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold text-[38px] sm:text-[52px] md:text-[80px] leading-[1.15] tracking-[-0.02em]" style={{ wordSpacing: '0.05em' }}>
          {['We Put Your Business', 'Where Customers'].map((line, i) => (
            <span key={i} className={`block text-agency-text transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
            >
              {line}
            </span>
          ))}
          <span className={`block relative inline-block transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '0.6s', color: '#C9A84C' }}
          >
            Find You.
            <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
              <path
                d="M2 8 C40 2, 80 12, 120 6 S180 2, 198 8"
                stroke="#C9A84C"
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
        <p className={`font-body text-base sm:text-lg text-agency-text-secondary max-w-[520px] mx-auto mt-8 leading-[1.7] transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '0.7s' }}
        >
          Complete online presence for local businesses — website, Google ranking, WhatsApp automation, and lead systems — set up fast, grown consistently.
        </p>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '0.8s' }}
        >
          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-body font-semibold text-[15px] h-[52px] px-8 rounded-[10px] transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #957C3D, #C9A84C)',
              color: '#001020',
              boxShadow: '0 0 30px rgba(201,168,76,0.25)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 60px rgba(201,168,76,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(201,168,76,0.25)';
            }}
          >
            See Our Work
          </button>
          <button
            onClick={() => setWhatsappOpen(true)}
            className="font-body font-semibold text-[15px] h-[52px] px-8 rounded-[10px] flex items-center transition-all duration-300 hover:bg-[rgba(201,168,76,0.08)]"
            style={{
              border: '1.5px solid rgba(201,168,76,0.5)',
              color: '#C9A84C',
            }}
          >
            Chat on WhatsApp →
          </button>
        </div>

        {/* Microcopy */}
        <p className={`font-body text-[13px] text-agency-text-muted mt-6 transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '0.9s' }}
        >
          No retainer. No tech headaches. Just customers finding you.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <svg width="20" height="32" viewBox="0 0 20 32" fill="none" className="opacity-40">
          <rect x="1" y="1" width="18" height="30" rx="9" stroke="#4A5D7A" strokeWidth="1.5" />
          <circle cx="10" cy="10" r="2" fill="#4A5D7A" className="animate-scroll-dot" />
        </svg>
      </div>

      <WhatsAppSelector isOpen={whatsappOpen} onClose={() => setWhatsappOpen(false)} />
    </section>
  );
};

export default Hero;
