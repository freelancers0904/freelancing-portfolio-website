import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const BrowserFrame = ({ url, src, title }: { url: string; src: string; title: string }) => (
  <div className="animate-float rounded-xl overflow-hidden border border-border shadow-[0_30px_60px_rgba(0,0,0,0.3)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.5)]" style={{ background: 'hsl(var(--card))' }}>
    <div className="h-10 flex items-center px-4 gap-2 bg-muted">
      <span className="w-3 h-3 rounded-full" style={{ background: '#FF5F56' }} />
      <span className="w-3 h-3 rounded-full" style={{ background: '#FFBD2E' }} />
      <span className="w-3 h-3 rounded-full" style={{ background: '#27C93F' }} />
      <div className="ml-3 px-3 py-1 rounded-md w-[60%] font-body text-xs text-muted-foreground bg-background">
        {url}
      </div>
    </div>
    <div style={{ width: '100%', height: 380, overflow: 'hidden' }}>
      <iframe
        src={src}
        width="133%"
        height="507"
        style={{ border: 'none', transform: 'scale(0.75)', transformOrigin: 'top left' }}
        loading="lazy"
        title={title}
      />
    </div>
  </div>
);

const projects = [
  {
    tag: 'DEMO PROJECT · GYM & FITNESS',
    name: 'IronForge Gym',
    location: '📍 Kolhapur, Maharashtra',
    tags: ['Responsive Design', 'Membership Pricing', 'Contact Form', 'Mobile-First', 'Premium Dark Theme'],
    desc: 'A premium fitness center website for a gym in Kolhapur. Bold dark design, clear membership plans, and a layout engineered to convert visitors into walk-in trials.',
    liveUrl: 'https://ironforge-gym-five.vercel.app',
    browserUrl: 'ironforge-gym-five.vercel.app',
    reversed: false,
  },
  {
    tag: 'DEMO PROJECT · GYM & FITNESS',
    name: 'FitZone Pro',
    location: '📍 Delhi',
    tags: ['AI Chatbot', 'Lead Capture Form', 'Before/After Slider', 'Trainer Profiles', 'Membership Plans', 'FAQ Section', 'WhatsApp Integration', 'Animated UI'],
    desc: "Delhi's elite fitness club website — complete with an AI-powered chatbot (FitBot), animated before/after transformation slider, trainer profiles, tiered membership pricing, and a lead capture popup. A full-system demo of what we build.",
    liveUrl: 'https://gym-demo-web-9n2c.vercel.app/',
    browserUrl: 'gym-demo-web-9n2c.vercel.app',
    reversed: true,
  },
];

const Portfolio = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="portfolio" className="py-28 md:py-32 bg-secondary">
      <div ref={sectionRef} className="max-w-[1100px] mx-auto px-6">
        <div className="text-center">
          <span className="scroll-hidden section-label">OUR WORK</span>
          <h2 className="scroll-hidden font-display font-bold text-4xl md:text-[56px] text-center mt-6 leading-tight tracking-[-0.03em] text-foreground">
            Built by us.<br />Ready to inspire you.
          </h2>
          <p className="scroll-hidden font-body text-base text-muted-foreground text-center max-w-[540px] mx-auto mt-5 leading-[1.8]">
            Both below are fully functional demo websites — built to show exactly what your business could look like online.
          </p>
        </div>

        {projects.map((p, i) => (
          <div key={i} className="scroll-hidden mt-10 rounded-3xl p-8 md:p-12 overflow-hidden bg-card border border-border">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${p.reversed ? 'lg:grid-flow-dense' : ''}`}>
              <div className={p.reversed ? 'lg:col-start-2' : ''}>
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-[1px] font-body bg-accent/10 border border-accent/20 text-accent">
                  {p.tag}
                </span>
                <h3 className="font-display font-bold text-3xl md:text-[40px] text-foreground mt-4">{p.name}</h3>
                <p className="font-body text-sm text-muted-foreground mt-1">{p.location}</p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full font-body text-xs text-muted-foreground bg-muted border border-border">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="font-body text-[15px] text-muted-foreground leading-[1.7] mt-5">{p.desc}</p>

                <div className="flex flex-wrap gap-3 mt-7">
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="font-body font-medium text-sm px-6 py-3 rounded-lg border-[1.5px] border-primary/40 text-primary transition-all duration-300 hover:bg-primary/10"
                  >
                    View Live Site →
                  </a>
                  <a href="https://wa.me/919XXXXXXXXX" target="_blank" rel="noopener noreferrer"
                    className="font-body font-medium text-sm px-6 py-3 rounded-lg text-primary-foreground bg-primary transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)]"
                  >
                    Want something like this?
                  </a>
                </div>
              </div>

              <div className={p.reversed ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <BrowserFrame url={p.browserUrl} src={p.liveUrl} title={`${p.name} Website Demo`} />
              </div>
            </div>
          </div>
        ))}

        <p className="scroll-hidden text-center font-body text-sm text-muted-foreground italic mt-12">
          More projects coming soon. Currently building for our first clients.
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
