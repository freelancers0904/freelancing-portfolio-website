import { useCountUp } from '@/hooks/useCountUp';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Stats = () => {
  const sectionRef = useScrollAnimation();
  const stat1 = useCountUp(5, 1500, '', '');
  const stat2 = useCountUp(2, 1500, '', '+');
  const stat3 = useCountUp(100, 2000, '', '%');

  const stats = [
    { ref: stat1.ref, display: `3–${stat1.display}`, label: 'Day Delivery' },
    { ref: stat2.ref, display: stat2.display, label: 'Websites Built' },
    { ref: stat3.ref, display: stat3.display, label: 'Client Satisfaction Goal' },
  ];

  const marqueeText = 'High-Converting Websites ✦ AI Chatbots ✦ WhatsApp Automation ✦ Lead Capture Systems ✦ 3–5 Day Delivery ✦ Gym Websites ✦ Local Business Websites ✦ Mobile-First Design ✦ ';

  return (
    <section style={{ background: '#0D0D0D', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div ref={sectionRef} className="max-w-5xl mx-auto px-6 pt-16 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {stats.map((stat, i) => (
            <div
              key={i}
              ref={stat.ref}
              className={`scroll-hidden text-center py-6 ${i < 2 ? 'md:border-r md:border-[rgba(255,255,255,0.06)]' : ''}`}
            >
              <div className="font-display font-bold text-[56px] md:text-[64px] text-primary" style={{ textShadow: '0 0 30px rgba(108,99,255,0.4)' }}>
                {stat.display}
              </div>
              <div className="font-body font-medium text-xs text-agency-text-muted uppercase tracking-[2px] mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-12 overflow-hidden" style={{ background: 'rgba(0,0,0,0.4)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="py-4 animate-marquee whitespace-nowrap inline-flex">
          {[0, 1].map((k) => (
            <span key={k} className="font-body font-medium text-[13px] tracking-[0.5px] mr-0">
              {marqueeText.split('✦').map((part, j) => (
                <span key={j}>
                  <span className="text-agency-text-muted">{part}</span>
                  {j < marqueeText.split('✦').length - 1 && <span className="text-primary">✦</span>}
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
