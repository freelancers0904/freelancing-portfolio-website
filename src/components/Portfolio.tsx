import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';
import WhatsAppSelector from './WhatsAppSelector';

const BrowserFrame = ({ url, src, title }: { url: string; src: string; title: string }) => (
  <div className="animate-float rounded-xl overflow-hidden" style={{
    background: 'hsl(var(--bg-primary))',
    border: '1px solid rgba(149,124,61,0.2)',
    boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
  }}>
    <div className="h-10 flex items-center px-4 gap-2" style={{ background: 'hsl(var(--bg-secondary))' }}>
      <span className="w-3 h-3 rounded-full" style={{ background: '#FF5F56' }} />
      <span className="w-3 h-3 rounded-full" style={{ background: '#FFBD2E' }} />
      <span className="w-3 h-3 rounded-full" style={{ background: '#27C93F' }} />
      <div className="ml-3 px-3 py-1 rounded-md w-[60%] font-body text-xs text-agency-text-secondary" style={{ background: 'hsl(var(--bg-primary))' }}>
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
    bestFor: 'Gym owners, Fitness centers',
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
    bestFor: 'Fitness Brands, Personal Trainers, Gyms',
    liveUrl: 'https://gym-demo-web-9n2c.vercel.app/',
    browserUrl: 'gym-demo-web-9n2c.vercel.app',
    reversed: true,
  },
];

const Portfolio = () => {
  const sectionRef = useScrollAnimation();
  const [whatsappOpen, setWhatsappOpen] = useState(false);

  return (
    <section id="portfolio" className="py-28 md:py-32" style={{ background: 'hsl(var(--bg-secondary))' }}>
      <div ref={sectionRef} className="max-w-[1100px] mx-auto px-6">
        <div className="text-center">
          <span className="scroll-hidden section-label">OUR WORK</span>
          <h2 className="scroll-hidden font-display font-bold text-[28px] sm:text-[36px] md:text-[52px] text-center mt-6 leading-[1.2] tracking-[-0.02em] text-agency-text" style={{ wordSpacing: '0.04em' }}>
            Built by us.<br />Ready to inspire you.
          </h2>
          <p className="scroll-hidden font-body text-sm sm:text-base text-agency-text-secondary text-center max-w-[540px] mx-auto mt-5 leading-[1.8]">
            Both below are fully functional demo websites — built to show exactly what your business could look like online.
          </p>
        </div>

        {projects.map((p, i) => (
          <div key={i} className="scroll-hidden mt-10 rounded-3xl p-6 md:p-8 lg:p-12 overflow-hidden" style={{
            background: `hsla(var(--card-bg), var(--card-bg-alpha))`,
            border: '1px solid rgba(149,124,61,0.2)',
          }}>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center ${p.reversed ? 'md:grid-flow-dense' : ''}`}>
              <div className={p.reversed ? 'md:col-start-2' : ''}>

                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-[1px] font-body" style={{
                  background: 'rgba(201,168,76,0.1)',
                  border: '1px solid rgba(201,168,76,0.25)',
                  color: '#C9A84C',
                }}>
                  {p.tag}
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-[40px] text-agency-text mt-4">{p.name}</h3>
                <p className="font-body text-xs sm:text-sm text-agency-text-secondary mt-1">{p.location}</p>

                <div className="flex flex-wrap gap-2 mt-4 sm:mt-5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-2 sm:px-3 py-1 rounded-full font-body text-[10px] sm:text-xs" style={{
                      background: 'hsla(var(--card-bg),0.35)',
                      border: '1px solid rgba(149,124,61,0.2)',
                      color: 'hsl(var(--text-secondary))',
                      backdropFilter: 'blur(6px)',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="font-body text-[13px] sm:text-[15px] text-agency-text-secondary leading-[1.7] mt-4 sm:mt-5 text-justify">{p.desc}</p>

                <p className="font-body text-[13px] sm:text-[15px] text-agency-text-secondary leading-[1.7] mt-2">
                  <strong>Best for:</strong> {p.bestFor}
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 mt-5 sm:mt-7">
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="font-body font-medium text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 hover:bg-[rgba(201,168,76,0.08)] text-center"
                    style={{ border: '1.5px solid rgba(201,168,76,0.4)', color: '#C9A84C' }}
                  >
                    View Live Site →
                  </a>
                  <button
                    onClick={() => setWhatsappOpen(true)}
                    className="font-body font-medium text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 hover:-translate-y-0.5 text-center"
                    style={{ background: 'linear-gradient(135deg, #957C3D, #C9A84C)', color: '#001020', boxShadow: '0 0 20px rgba(201,168,76,0.25)' }}
                  >
                    Want something like this?
                  </button>
                </div>
              </div>

              <div className={p.reversed ? 'md:col-start-1 md:row-start-1' : ''}>
                <BrowserFrame url={p.browserUrl} src={p.liveUrl} title={`${p.name} Website Demo`} />
              </div>
            </div>
          </div>
        ))}

        <p className="scroll-hidden text-center font-body text-sm text-agency-text-muted italic mt-12">
          Simple websites. Real results. No confusion.
        </p>
      </div>

      <WhatsAppSelector isOpen={whatsappOpen} onClose={() => setWhatsappOpen(false)} />
    </section>
  );
};

export default Portfolio;
