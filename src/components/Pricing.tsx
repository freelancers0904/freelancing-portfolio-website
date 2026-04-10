import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';
import WhatsAppSelector from './WhatsAppSelector';

const plans = [
  {
    price: '₹8,000 – ₹12,000',
    name: 'Starter',
    subtitle: 'Basic Online Presence',
    forText: 'For businesses that need to get online quickly',
    features: [
      'Up to 5-page mobile-responsive website',
      'WhatsApp & Call CTA integration',
      'Basic contact form',
      'Clean, fast-loading design',
      'Basic on-page SEO setup',
      'Google Business Profile setup',
      'Delivered in 3–5 days',
    ],
    outcome: 'Get your business online so customers can easily find and contact you',
    cta: 'Get Started →',
    ctaStyle: 'outline' as const,
    elevated: false,
  },
  {
    price: '₹18,000 – ₹25,000',
    name: 'Growth',
    subtitle: 'Lead Generation System',
    forText: 'For businesses ready to increase enquiries and customers',
    features: [
      'High-conversion website (offers, testimonials, strong CTA)',
      'Smart lead capture form',
      'WhatsApp automation + AI chatbot',
      'Complete Google Business Profile optimization',
      '20–30 real photos + Google Maps visibility improvement',
      'Advanced on-page SEO + Local SEO setup',
      'Weekly Google posts (for 1 month)',
      'Review generation system (scripts + guidance)',
      'Offer setup (discounts / trial campaigns)',
      'Basic performance tracking (calls, views, messages)',
      '1 month growth support',
      'Delivered in 5-7 days (setup phase)',
      'Free domain registration (1 year)',
    ],
    outcome: 'Get more calls, enquiries, and walk-ins from Google',
    cta: 'Start Growing →',
    ctaStyle: 'filled' as const,
    elevated: true,
    badge: 'MOST POPULAR',
  },
  {
    price: '₹35,000 – ₹50,000+',
    name: 'Scale',
    subtitle: '3 Month Growth & Automation System',
    forText: 'For businesses that want consistent growth and local dominance',
    features: [
      'Advanced high-conversion website with full funnel setup',
      'Complete Google Business Profile optimization & management',
      'Advanced SEO strategy (on-page + local SEO)',
      'Weekly Google posts (for 3 months)',
      'Aggressive review growth strategy',
      'Monthly offer campaigns',
      'WhatsApp automation + smart follow-up system',
      'Lead tracking system (basic CRM flow)',
      'AI chatbot (advanced flow)',
      'Monthly performance reports',
      'Continuous optimization for better ranking & conversion',
      '3 months priority support',
      'Delivered in 5–7 days (setup phase)',
      'Free domain registration (3 years)',
    ],
    outcome: 'Build a system that consistently brings new customers every month',
    cta: "Let's Build This →",
    ctaStyle: 'outline' as const,
    elevated: false,
  },
];

const Pricing = () => {
  const sectionRef = useScrollAnimation();
  const [whatsappOpen, setWhatsappOpen] = useState(false);

  return (
    <section id="pricing" className="py-28 md:py-32 relative" style={{ background: 'hsl(var(--bg-primary))' }}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none" style={{
        background: 'radial-gradient(ellipse 500px 300px at 50% 100%, rgba(201,168,76,0.05), transparent)',
      }} />

      <div ref={sectionRef} className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="scroll-hidden section-label">PRICING</span>
          <h2 className="scroll-hidden font-display font-bold text-[28px] sm:text-[36px] md:text-[52px] text-center mt-6 leading-[1.2] tracking-[-0.02em] text-agency-text" style={{ wordSpacing: '0.04em' }}>
            One system.<br /><span style={{ color: '#C9A84C' }}>Three ways to grow.</span>
          </h2>
          <p className="scroll-hidden font-body text-sm sm:text-base text-agency-text-secondary text-center max-w-[540px] mx-auto mt-5">
            Every plan includes strategy, design, local SEO, Google setup, and delivery. Pick the level of growth you want.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mt-16 items-start">
          {plans.map((plan, i) => (
            <div key={i} className={`scroll-hidden relative p-6 lg:p-8 rounded-[20px] flex flex-col ${plan.elevated ? 'md:-translate-y-4' : ''}`} style={{
              background: plan.elevated ? 'rgba(201,168,76,0.07)' : `hsla(var(--card-bg), var(--card-bg-alpha))`,
              border: plan.elevated ? '1.5px solid rgba(201,168,76,0.5)' : '1px solid rgba(149,124,61,0.2)',
              backdropFilter: 'blur(16px)',
              boxShadow: plan.elevated ? '0 0 0 1px rgba(201,168,76,0.2), 0 30px 60px rgba(201,168,76,0.1), 0 0 100px rgba(201,168,76,0.05)' : 'none',
            }}>
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full font-body font-semibold text-xs tracking-[0.5px]" style={{
                  background: 'linear-gradient(135deg, #957C3D, #C9A84C)',
                  color: '#001020',
                  boxShadow: '0 4px 20px rgba(201,168,76,0.4)',
                }}>
                  {plan.badge}
                </div>
              )}

              <div className="font-display font-bold text-2xl sm:text-3xl text-agency-text">{plan.price}</div>
              <div className="mt-2">
                <span className="font-display font-semibold text-lg lg:text-xl" style={{ color: '#C9A84C' }}>{plan.name}</span>
                <span className="font-body text-sm text-agency-text-secondary ml-1.5">– {plan.subtitle}</span>
              </div>
              <p className="font-body text-sm text-agency-text-secondary mt-1.5">{plan.forText}</p>

              <div className="h-px my-5" style={{ background: 'rgba(149,124,61,0.15)' }} />

              <div className="space-y-2.5 flex-1">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0" style={{
                      background: 'rgba(201,168,76,0.1)',
                      color: '#C9A84C',
                    }}>✓</span>
                    <span className="font-body text-[13px] lg:text-sm text-agency-text-secondary leading-snug">{f}</span>
                  </div>
                ))}
              </div>

              {/* Outcome block */}
              <div className="mt-5 p-4 rounded-xl" style={{ background: 'rgba(201,168,76,0.10)', border: '1px solid rgba(201,168,76,0.22)' }}>
                <div className="flex items-start gap-3">
                  <span className="text-lg mt-0.5 shrink-0">🎯</span>
                  <div>
                    <span className="font-body font-bold text-xs tracking-widest uppercase" style={{ color: '#C9A84C' }}>Outcome</span>
                    <p className="font-display font-semibold text-[15px] mt-1.5 leading-relaxed" style={{ color: 'hsl(var(--text-primary))' }}>{plan.outcome}</p>
                  </div>
                </div>
              </div>

              <button onClick={() => setWhatsappOpen(true)}
                className="block w-full text-center mt-6 rounded-[10px] font-body font-medium text-sm transition-all duration-300 hover:-translate-y-0.5"
                style={
                  plan.ctaStyle === 'filled'
                    ? { background: 'linear-gradient(135deg, #957C3D, #C9A84C)', color: '#001020', boxShadow: '0 0 30px rgba(201,168,76,0.4)', height: 48, lineHeight: '48px', padding: 0, fontWeight: 600 }
                    : { border: '1.5px solid rgba(201,168,76,0.5)', color: '#C9A84C', height: 44, lineHeight: '44px', padding: 0 }
                }
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Urgency line */}
        <p className="scroll-hidden text-center mt-8 font-body text-sm text-agency-text-secondary italic">
          ⚡ Limited slots available each month — we only take on a few projects to ensure quality.
        </p>

        {/* Mid-page CTA */}
        <div className="scroll-hidden mt-10 text-center rounded-[20px] py-9 px-8 md:px-12" style={{
          background: 'rgba(201,168,76,0.06)',
          border: '1px solid rgba(201,168,76,0.15)',
        }}>
          <h3 className="font-display font-semibold text-[22px] text-agency-text">Not sure which plan fits your business?</h3>
          <p className="font-body text-[15px] text-agency-text-secondary mt-2">Chat with us — we'll help you pick the right starting point. No sales pressure.</p>
          <button onClick={() => setWhatsappOpen(true)}
            className="inline-block mt-5 px-7 h-12 leading-[48px] rounded-[10px] font-body font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #957C3D, #C9A84C)', color: '#001020' }}
          >
            Chat on WhatsApp — It's Free →
          </button>
        </div>

        {/* How Growth Works */}
        <div className="scroll-hidden mt-8 rounded-[16px] py-6 px-8 md:px-10 flex items-start gap-4" style={{
          background: 'rgba(201,168,76,0.04)',
          border: '1px solid rgba(201,168,76,0.1)',
        }}>
          <span className="text-2xl shrink-0 mt-0.5">🚀</span>
          <div>
            <h4 className="font-display font-semibold text-base text-agency-text">How Growth Works</h4>
            <p className="font-body text-sm text-agency-text-secondary mt-1.5 leading-relaxed">
              Setup is completed in days. Real growth — visibility, enquiries, ranking — builds gradually over 2–4 weeks and compounds every month through consistent work.
            </p>
          </div>
        </div>
      </div>

      <WhatsAppSelector isOpen={whatsappOpen} onClose={() => setWhatsappOpen(false)} />
    </section>
  );
};

export default Pricing;
