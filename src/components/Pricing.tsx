import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const plans = [
  {
    price: '₹5,000 – ₹10,000',
    name: 'Starter',
    nameColor: '#6C63FF',
    forText: 'For businesses that need to get online fast.',
    features: ['Up to 5 pages', 'Mobile-first responsive design', 'WhatsApp CTA button', 'Basic contact form', '1 round of revisions', 'Delivered in 3–5 days'],
    cta: 'Get Started →',
    ctaStyle: 'outline-violet' as const,
    elevated: false,
  },
  {
    price: '₹15,000 – ₹25,000',
    name: 'Growth',
    nameColor: '#6C63FF',
    forText: 'For gyms and local businesses ready to generate leads.',
    features: ['Everything in Starter', 'AI chatbot integration', 'Smart lead capture form', 'WhatsApp automation setup', 'On-page SEO setup', 'Google Analytics integration', '2 rounds of revisions', '1 month post-launch support', 'Delivered in 3–5 days'],
    cta: 'Start Growing →',
    ctaStyle: 'filled-violet' as const,
    elevated: true,
    badge: 'MOST POPULAR',
  },
  {
    price: '₹30,000 – ₹50,000+',
    name: 'Scale',
    nameColor: '#00D4AA',
    forText: 'For businesses that want a complete automated system.',
    features: ['Everything in Growth', 'Booking / appointment system', 'CRM integration', 'Full workflow automation', 'Multi-page content strategy', 'Custom domain + email setup', '3 months priority support', 'Delivered in 5–7 days'],
    cta: "Let's Build This →",
    ctaStyle: 'outline-teal' as const,
    elevated: false,
  },
];

const Pricing = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="pricing" className="py-28 md:py-32 relative" style={{ background: '#080808' }}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none" style={{
        background: 'radial-gradient(ellipse 500px 300px at 50% 100%, rgba(0,212,170,0.05), transparent)',
      }} />

      <div ref={sectionRef} className="relative max-w-6xl mx-auto px-6">
        <div className="text-center">
          <span className="scroll-hidden section-label">PRICING</span>
          <h2 className="scroll-hidden font-display font-bold text-4xl md:text-[56px] text-center mt-6 leading-tight tracking-[-0.03em] text-agency-text">
            Transparent pricing.<br />No surprises.
          </h2>
          <p className="scroll-hidden font-body text-base text-agency-text-secondary text-center max-w-[540px] mx-auto mt-5">
            Every plan includes strategy, design, development, and delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 items-start">
          {plans.map((plan, i) => (
            <div key={i} className={`scroll-hidden relative p-9 rounded-[20px] ${plan.elevated ? 'md:-translate-y-4' : ''}`} style={{
              background: plan.elevated ? 'rgba(108,99,255,0.07)' : 'rgba(255,255,255,0.03)',
              border: plan.elevated ? '1.5px solid rgba(108,99,255,0.4)' : '1px solid rgba(255,255,255,0.07)',
              backdropFilter: 'blur(12px)',
              boxShadow: plan.elevated ? '0 0 0 1px rgba(108,99,255,0.1), 0 30px 60px rgba(108,99,255,0.12), 0 0 100px rgba(108,99,255,0.06)' : 'none',
            }}>
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white font-body font-semibold text-xs tracking-[0.5px]" style={{
                  background: 'linear-gradient(135deg, #6C63FF, #5952E8)',
                  boxShadow: '0 4px 20px rgba(108,99,255,0.4)',
                }}>
                  {plan.badge}
                </div>
              )}

              <div className="font-display font-bold text-4xl text-agency-text">{plan.price}</div>
              <div className="font-display font-semibold text-xl mt-2" style={{ color: plan.nameColor }}>{plan.name}</div>
              <p className="font-body text-sm text-agency-text-secondary mt-1.5">{plan.forText}</p>

              <div className="h-px my-6" style={{ background: 'rgba(255,255,255,0.06)' }} />

              <div className="space-y-3">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0" style={{
                      background: 'rgba(108,99,255,0.1)',
                      color: '#6C63FF',
                    }}>✓</span>
                    <span className="font-body text-sm text-agency-text-secondary">{f}</span>
                  </div>
                ))}
              </div>

              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer"
                className={`block w-full text-center mt-8 py-3 rounded-[10px] font-body font-medium text-sm transition-all duration-300 ${
                  plan.ctaStyle === 'filled-violet'
                    ? 'text-white hover:-translate-y-0.5'
                    : 'hover:-translate-y-0.5'
                }`}
                style={
                  plan.ctaStyle === 'filled-violet'
                    ? { background: 'linear-gradient(135deg, #6C63FF, #5952E8)', boxShadow: '0 0 30px rgba(108,99,255,0.4)', height: 52, lineHeight: '52px', padding: 0 }
                    : plan.ctaStyle === 'outline-teal'
                    ? { border: '1.5px solid rgba(0,212,170,0.4)', color: '#00D4AA', height: 48, lineHeight: '48px', padding: 0 }
                    : { border: '1.5px solid rgba(108,99,255,0.4)', color: '#6C63FF', height: 48, lineHeight: '48px', padding: 0 }
                }
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Mid-page CTA */}
        <div className="scroll-hidden mt-12 text-center rounded-[20px] py-9 px-8 md:px-12" style={{
          background: 'rgba(108,99,255,0.06)',
          border: '1px solid rgba(108,99,255,0.15)',
        }}>
          <h3 className="font-display font-semibold text-[22px] text-agency-text">Not sure which plan fits your business?</h3>
          <p className="font-body text-[15px] text-agency-text-secondary mt-2">Chat with us — we'll help you pick the right starting point. No sales pressure.</p>
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer"
            className="inline-block mt-5 px-7 h-12 leading-[48px] rounded-[10px] font-body font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: '#6C63FF' }}
          >
            Chat on WhatsApp — It's Free →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
