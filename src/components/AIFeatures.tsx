import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [
  {
    title: 'AI Chatbot — 24/7 Lead Capture',
    body: 'Answers questions and collects contact details any time of day. Powered by AI, personalised to your business.',
    isPrimary: true,
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M14 9l-2-2-2 2"/></svg>,
  },
  {
    title: 'Smart Lead Forms',
    body: 'Forms that adapt to visitor input — qualifying leads and collecting exactly what you need to close faster.',
    isPrimary: false,
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
  },
  {
    title: 'Instant WhatsApp Responses',
    body: 'Every inquiry gets an immediate automated reply on WhatsApp — building trust before your competitor even wakes up.',
    isPrimary: false,
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>,
  },
  {
    title: 'Zero Manual Follow-Up',
    body: 'Automated workflows route leads, send reminders, and keep your pipeline moving with zero manual effort from you.',
    isPrimary: true,
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  },
];

const AIFeatures = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="py-28 md:py-32 relative overflow-hidden bg-background">
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none" style={{
        background: 'radial-gradient(ellipse, hsl(var(--primary) / 0.08), transparent 70%)'
      }} />

      <div ref={sectionRef} className="relative max-w-6xl mx-auto px-6">
        <div className="text-center">
          <span className="scroll-hidden section-label">AI POWERED</span>
          <h2 className="scroll-hidden font-display font-bold text-4xl md:text-[56px] text-center mt-6 leading-tight tracking-[-0.03em]">
            <span className="text-foreground">While you sleep, your website </span>
            <span className="text-accent">works.</span>
          </h2>
          <p className="scroll-hidden font-body text-base text-muted-foreground text-center max-w-[540px] mx-auto mt-5 leading-[1.8]">
            Every site we build comes with intelligent features that capture leads, respond instantly, and keep your pipeline full — automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
          {features.map((f, i) => (
            <div key={i} className="scroll-hidden premium-card p-8 group">
              {/* Corner glow */}
              <div className="absolute -top-8 -right-8 w-[100px] h-[100px] rounded-full blur-[35px] pointer-events-none transition-opacity duration-500 opacity-30 group-hover:opacity-70"
                style={{ background: f.isPrimary ? 'hsl(var(--primary) / 0.2)' : 'hsl(var(--accent) / 0.2)' }}
              />

              {/* Shimmer */}
              <div className="absolute top-0 left-0 right-0 h-[1px] animate-shimmer" />

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${f.isPrimary ? 'bg-primary/10 border border-primary/20 text-primary' : 'bg-accent/10 border border-accent/15 text-accent'}`}>
                {f.icon}
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mt-4">{f.title}</h3>
              <p className="font-body text-[15px] text-muted-foreground leading-[1.7] mt-2">{f.body}</p>
            </div>
          ))}
        </div>

        {/* Statement bar */}
        <div className="scroll-hidden mt-10 text-center py-7 px-10 rounded-2xl border border-primary/20" style={{
          background: 'linear-gradient(135deg, hsl(var(--primary) / 0.06), hsl(var(--accent) / 0.04))',
        }}>
          <p className="font-display font-semibold text-xl text-foreground">
            Most of our clients receive their first automated lead within 48 hours of launch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
