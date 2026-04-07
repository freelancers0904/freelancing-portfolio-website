import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';
import WhatsAppSelector from './WhatsAppSelector';

const plans = [
  {
    price: '₹8,000 – ₹12,000',
    name: 'Starter',
    subtitle: 'Basic Online Presence',
    nameColor: '#C9A84C',
    forText: 'For businesses that need to get online quickly',
    features: [
      'Up to 5-page mobile-responsive website',
      'WhatsApp & Call CTA integration',
      'Basic contact form',
      'Clean, fast-loading design',
      'Basic on-page SEO setup',
      '1 round of revisions',
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
    nameColor: '#C9A84C',
    forText: 'For businesses ready to increase enquiries and customers',
    features: [
      'High-conversion website (offers, testimonials, strong CTA)',
      'Trust-building sections (reviews, results, highlights)',
      'Smart lead capture form',
      'WhatsApp automation setup',
      'AI chatbot (basic enquiry handling)',
      'Complete Google Business Profile optimization',
      '20–30 real photos upload on Google',
      'Google Maps visibility improvement',
      'Advanced on-page SEO optimization',
      'Proper SEO setup for better Google ranking',
      'Weekly Google posts (2–3 for 1 month)',
      'Review generation system (scripts + guidance)',
      'Offer setup (discounts / trials / campaigns)',
      'Basic performance tracking (calls, views, messages)',
      '2 rounds of revisions',
      '1 month growth support',
      'Delivered in 3–5 days (setup phase)',
    ],
    outcome: 'Increase visibility on Google, generate more calls & enquiries, and build strong trust that converts into customers',
    cta: 'Start Growing →',
    ctaStyle: 'filled' as const,
    elevated: true,
    badge: 'MOST POPULAR',
  },
  {
    price: '₹35,000 – ₹50,000+',
    name: 'Scale',
    subtitle: '3 Month Growth & Automation System',
    nameColor: '#C9A84C',
    forText: 'For businesses that want consistent growth and local dominance',
    features: [
      'Advanced high-conversion website with full funnel setup',
      'Complete Google Business Profile optimization & management',
      '30+ photos + continuous updates',
      'Advanced SEO strategy (on-page + local SEO)',
      'Continuous SEO optimization for ranking improvement',
      'Weekly Google posts (for 3 months)',
      'Aggressive review growth strategy',
      'Monthly offer campaigns',
      'Competitor positioning strategy',
      'WhatsApp automation + smart follow-up system',
      'Lead tracking system (basic CRM flow)',
      'Missed enquiry recovery setup',
      'AI chatbot (advanced flow)',
      'Monthly performance reports',
      'Continuous optimization for better ranking & conversion',
      '3 months priority support',
      'Delivered in 5–7 days (setup phase)',
    ],
    outcome: 'Achieve higher Google ranking, consistent enquiry flow, better conversion rates, and strong competitive positioning',
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

      <div ref={sectionRef} className="relative max-w-6xl mx-auto px-6">
        <div className="text-center">
          <span className="scroll-hidden section-label">PRICING</span>
          <h2 className="scroll-hidden font-display font-bold text-[28px] sm:text-[36px] md:text-[52px] text-center mt-6 leading-[1.2] tracking-[-0.02em] text-agency-text" style={{ wordSpacing: '0.04em' }}>
            Transparent pricing.<br />No surprises.
          </h2>
          <p className="scroll-hidden font-body text-sm sm:text-base text-agency-text-secondary text-center max-w-[540px] mx-auto mt-5">
            Every plan includes strategy, design, development, and delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 items-start">
          {plans.map((plan, i) => (
            <div key={i} className={`scroll-hidden relative p-6 md:p-9 rounded-[20px] flex flex-col ${plan.elevated ? 'md:-translate-y-4' : ''}`} style={{
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

              <div className="font-display font-bold text-3xl sm:text-4xl text-agency-text">{plan.price}</div>
              <div className="mt-2">
                <span className="font-display font-semibold text-xl" style={{ color: plan.nameColor }}>{plan.name}</span>
                <span className="font-body text-sm text-agency-text-secondary ml-1.5">– {plan.subtitle}</span>
              </div>
              <p className="font-body text-sm text-agency-text-secondary mt-1.5">{plan.forText}</p>

              <div className="h-px my-6" style={{ background: 'rgba(149,124,61,0.15)' }} />

              <div className="space-y-3 flex-1">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0" style={{
                      background: 'rgba(201,168,76,0.1)',
                      color: '#C9A84C',
                    }}>✓</span>
                    <span className="font-body text-sm text-agency-text-secondary">{f}</span>
                  </div>
                ))}
              </div>

              {/* Outcome block */}
              <div className="mt-6 p-4 rounded-xl" style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.12)' }}>
                <div className="flex items-start gap-2.5">
                  <span className="text-base mt-0.5">🎯</span>
                  <div>
                    <span className="font-body font-semibold text-xs tracking-wide uppercase" style={{ color: '#C9A84C' }}>Outcome</span>
                    <p className="font-body text-sm text-agency-text-secondary mt-1 leading-relaxed">{plan.outcome}</p>
                  </div>
                </div>
              </div>

              <button onClick={() => setWhatsappOpen(true)}
                className="block w-full text-center mt-8 py-3 rounded-[10px] font-body font-medium text-sm transition-all duration-300 hover:-translate-y-0.5"
                style={
                  plan.ctaStyle === 'filled'
                    ? { background: 'linear-gradient(135deg, #957C3D, #C9A84C)', color: '#001020', boxShadow: '0 0 30px rgba(201,168,76,0.4)', height: 52, lineHeight: '52px', padding: 0, fontWeight: 600 }
                    : { border: '1.5px solid rgba(201,168,76,0.5)', color: '#C9A84C', height: 48, lineHeight: '48px', padding: 0 }
                }
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Mid-page CTA */}
        <div className="scroll-hidden mt-12 text-center rounded-[20px] py-9 px-8 md:px-12" style={{
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
              Setup is completed in a few days, but real growth (visibility, enquiries, ranking) improves gradually over 2–4 weeks through continuous optimization, activity, and engagement.
            </p>
          </div>
        </div>
      </div>

      <WhatsAppSelector isOpen={whatsappOpen} onClose={() => setWhatsappOpen(false)} />
    </section>
  );
};

export default Pricing;
