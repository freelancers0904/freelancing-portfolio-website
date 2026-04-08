import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [
  {
    title: 'AI Chatbot — 24/7 Lead Capture',
    body: 'Answers questions and collects contact details any time of day. Powered by AI, personalised to your business.',
    gold: true,
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M14 9l-2-2-2 2"/></svg>,
  },
  {
    title: 'Google Business Management',
    body: 'Optimised profile, weekly Google posts, photo updates, and a review generation strategy that builds your local ranking over time.',
    gold: false,
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
  },
  {
    title: 'Instant WhatsApp Responses',
    body: 'Every inquiry gets an immediate automated reply on WhatsApp — building trust before your competitor even wakes up.',
    gold: false,
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>,
  },
  {
    title: 'Zero Manual Follow-Up',
    body: 'Automated workflows route leads, send reminders, and keep your pipeline moving with zero manual effort from you.',
    gold: true,
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  },
];

const AIFeatures = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="py-28 md:py-32 relative overflow-hidden" style={{ background: 'hsl(var(--bg-primary))' }}>
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none" style={{
        background: 'radial-gradient(ellipse, rgba(201,168,76,0.07), transparent 70%)'
      }} />

      <div ref={sectionRef} className="relative max-w-6xl mx-auto px-6">
        <div className="text-center">
          <span className="scroll-hidden section-label">ALWAYS WORKING</span>
          <h2 className="scroll-hidden font-display font-bold text-[28px] sm:text-[36px] md:text-[52px] text-center mt-6 leading-[1.2] tracking-[-0.02em]" style={{ wordSpacing: '0.04em' }}>
            <span className="text-agency-text">While you focus on your business,</span><br />
            <span style={{ color: '#C9A84C' }}>your online presence works.</span>
          </h2>
          <p className="scroll-hidden font-body text-sm sm:text-base text-agency-text-secondary text-center max-w-[540px] mx-auto mt-5 leading-[1.8]">
            Every setup we deliver runs on autopilot — capturing leads, responding instantly, and keeping your Google ranking growing month after month.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-16">
          {features.map((f, i) => (
            <div key={i} className="scroll-hidden p-6 md:p-8 transition-all" style={{
              transitionDuration: '350ms',
              background: `hsla(var(--card-bg), var(--card-bg-alpha))`,
              border: '1px solid rgba(149, 124, 61, 0.18)',
              borderRadius: 20,
              backdropFilter: 'blur(16px)',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 0 40px rgba(201,168,76,0.07), 0 20px 50px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(149, 124, 61, 0.18)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{
                background: f.gold ? 'rgba(201,168,76,0.1)' : 'rgba(0,35,73,0.6)',
                border: `1px solid ${f.gold ? 'rgba(201,168,76,0.25)' : 'rgba(201,168,76,0.2)'}`,
              }}>
                {f.icon}
              </div>
              <h3 className="font-display font-semibold text-lg text-agency-text mt-4">{f.title}</h3>
              <p className="font-body text-[14px] text-agency-text-secondary leading-[1.7] mt-2">{f.body}</p>
            </div>
          ))}
        </div>

        {/* Statement bar */}
        <div className="scroll-hidden mt-10 text-center py-7 px-10 rounded-2xl" style={{
          background: 'linear-gradient(135deg, rgba(149,124,61,0.12), rgba(0,35,73,0.6))',
          border: '1px solid rgba(149,124,61,0.25)',
        }}>
          <p className="font-display font-semibold text-xl text-agency-text">
            Most of our clients start receiving enquiries within 48–72 hours of going live.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
