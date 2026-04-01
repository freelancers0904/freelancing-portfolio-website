import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const plans = [
  {
    price: '₹5,000 – ₹10,000',
    name: 'Starter',
    isPrimary: true,
    forText: 'For businesses that need to get online fast.',
    features: ['Up to 5 pages', 'Mobile-first responsive design', 'WhatsApp CTA button', 'Basic contact form', '1 round of revisions', 'Delivered in 3–5 days'],
    cta: 'Get Started →',
    ctaStyle: 'outline-primary' as const,
    elevated: false,
  },
  {
    price: '₹15,000 – ₹25,000',
    name: 'Growth',
    isPrimary: true,
    forText: 'For gyms and local businesses ready to generate leads.',
    features: ['Everything in Starter', 'AI chatbot integration', 'Smart lead capture form', 'WhatsApp automation setup', 'On-page SEO setup', 'Google Analytics integration', '2 rounds of revisions', '1 month post-launch support', 'Delivered in 3–5 days'],
    cta: 'Start Growing →',
    ctaStyle: 'filled-primary' as const,
    elevated: true,
    badge: 'MOST POPULAR',
  },
  {
    price: '₹30,000 – ₹50,000+',
    name: 'Scale',
    isPrimary: false,
    forText: 'For businesses that want a complete automated system.',
    features: ['Everything in Growth', 'Booking / appointment system', 'CRM integration', 'Full workflow automation', 'Multi-page content strategy', 'Custom domain + email setup', '3 months priority support', 'Delivered in 5–7 days'],
    cta: "Let's Build This →",
    ctaStyle: 'outline-accent' as const,
    elevated: false,
  },
];

const Pricing = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="pricing" className="py-28 md:py-32 relative bg-background">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none" style={{
        background: 'radial-gradient(ellipse 500px 300px at 50% 100%, hsl(var(--accent) / 0.05), transparent)',
      }} />

      <div ref={sectionRef} className="relative max-w-6xl mx-auto px-6">
        <div className="text-center">
          <span className="scroll-hidden section-label">PRICING</span>
          <h2 className="scroll-hidden font-display font-bold text-4xl md:text-[56px] text-center mt-6 leading-tight tracking-[-0.03em] text-foreground">
            Transparent pricing.<br />No surprises.
          </h2>
          <p className="scroll-hidden font-body text-base text-muted-foreground text-center max-w-[540px] mx-auto mt-5">
            Every plan includes strategy, design, development, and delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 items-start">
          {plans.map((plan, i) => (
            <div key={i} className={`scroll-hidden relative p-9 rounded-[20px] backdrop-blur-xl ${plan.elevated ? 'md:-translate-y-4' : ''}`}
              style={{
                background: plan.elevated ? 'hsl(var(--primary) / 0.07)' : 'hsl(var(--card))',
                border: plan.elevated ? '1.5px solid hsl(var(--primary) / 0.4)' : '1px solid hsl(var(--border))',
                boxShadow: plan.elevated ? '0 0 0 1px hsl(var(--primary) / 0.1), 0 30px 60px hsl(var(--primary) / 0.12), 0 0 100px hsl(var(--primary) / 0.06)' : 'none',
              }}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-primary-foreground font-body font-semibold text-xs tracking-[0.5px] bg-primary shadow-[0_4px_20px_hsl(var(--primary)/0.4)]">
                  {plan.badge}
                </div>
              )}

              <div className="font-display font-bold text-4xl text-foreground">{plan.price}</div>
              <div className={`font-display font-semibold text-xl mt-2 ${plan.isPrimary ? 'text-primary' : 'text-accent'}`}>{plan.name}</div>
              <p className="font-body text-sm text-muted-foreground mt-1.5">{plan.forText}</p>

              <div className="h-px my-6 bg-border" />

              <div className="space-y-3">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0 bg-primary/10 text-primary">✓</span>
                    <span className="font-body text-sm text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>

              <a href="https://wa.me/919XXXXXXXXX" target="_blank" rel="noopener noreferrer"
                className={`block w-full text-center mt-8 rounded-[10px] font-body font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                  plan.ctaStyle === 'filled-primary'
                    ? 'text-primary-foreground bg-primary shadow-[0_0_30px_hsl(var(--primary)/0.4)] h-[52px] leading-[52px]'
                    : plan.ctaStyle === 'outline-accent'
                    ? 'border-[1.5px] border-accent/40 text-accent h-12 leading-[48px]'
                    : 'border-[1.5px] border-primary/40 text-primary h-12 leading-[48px]'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Mid-page CTA */}
        <div className="scroll-hidden mt-12 text-center rounded-[20px] py-9 px-8 md:px-12 bg-primary/6 border border-primary/15">
          <h3 className="font-display font-semibold text-[22px] text-foreground">Not sure which plan fits your business?</h3>
          <p className="font-body text-[15px] text-muted-foreground mt-2">Chat with us — we'll help you pick the right starting point. No sales pressure.</p>
          <a href="https://wa.me/919XXXXXXXXX" target="_blank" rel="noopener noreferrer"
            className="inline-block mt-5 px-7 h-12 leading-[48px] rounded-[10px] font-body font-semibold text-sm text-primary-foreground bg-primary transition-all duration-300 hover:-translate-y-0.5"
          >
            Chat on WhatsApp — It's Free →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
