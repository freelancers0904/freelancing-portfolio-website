import { useCountUp } from '@/hooks/useCountUp';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Stats = () => {
  const sectionRef = useScrollAnimation();
  const stat1 = useCountUp(7, 1500, '', '');
  const stat2 = useCountUp(3, 1500, '', '+');
  const stat3 = useCountUp(100, 2000, '', '%');

  const stats = [
    { ref: stat1.ref, display: `5–${stat1.display}`, label: 'Day Full Setup' },
    { ref: stat2.ref, display: stat2.display, label: 'Businesses Launched' },
    { ref: stat3.ref, display: stat3.display, label: 'Done-For-You Goal' },
  ];

  const marqueeText = 'Google Business Setup ✦ Local SEO ✦ WhatsApp Automation ✦ Lead Capture ✦ Website Design ✦ Review Generation ✦ Google Maps Ranking ✦ AI Chatbot ✦ Mobile-First Design ✦ Consistent Growth ✦ ';

  return (
    <section style={{ background: 'hsl(var(--bg-secondary))', borderTop: '1px solid rgba(149,124,61,0.15)', borderBottom: '1px solid rgba(149,124,61,0.15)' }}>
      <div ref={sectionRef} className="max-w-5xl mx-auto px-6 pt-16 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {stats.map((stat, i) => (
            <div
              key={i}
              ref={stat.ref}
              className={`scroll-hidden text-center py-6 ${i < 2 ? 'md:border-r md:border-[rgba(149,124,61,0.2)]' : ''}`}
            >
              <div className="font-display font-bold text-[42px] sm:text-[56px] md:text-[64px]" style={{ color: '#C9A84C', textShadow: '0 0 30px rgba(201,168,76,0.3)' }}>
                {stat.display}
              </div>
              <div className="font-body font-medium text-[10px] sm:text-xs text-agency-text-muted uppercase tracking-[2px] mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-8 md:mt-12 overflow-hidden relative" style={{ 
        background: 'linear-gradient(180deg, rgba(201,168,76,0.05) 0%, rgba(0,0,0,0) 100%)',
        borderTop: '1px solid rgba(149,124,61,0.2)',
        borderBottom: '1px solid rgba(149,124,61,0.2)',
      }}>
        <div className="py-4 md:py-6 animate-marquee whitespace-nowrap inline-flex">
          {[0, 1].map((k) => (
            <span key={k} className="font-body font-medium text-[12px] sm:text-[14px] md:text-[15px] tracking-[0.5px] mr-0">
              {marqueeText.split('✦').map((part, j) => (
                <span key={j}>
                  <span className="text-agency-text-secondary">{part}</span>
                  {j < marqueeText.split('✦').length - 1 && <span style={{ color: '#C9A84C', fontSize: '18px', margin: '0 12px' }}>✦</span>}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
