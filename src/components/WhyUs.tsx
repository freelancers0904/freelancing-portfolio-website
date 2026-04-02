import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEffect, useState } from 'react';

const messages = [
  {
    type: 'incoming',
    text: 'New lead from your website 🎉',
    details: ['Name: Rahul S.', 'Phone: +91 98XXX XXXXX', 'Plan: Growth'],
    time: '2:34 AM ✓✓',
  },
  {
    type: 'outgoing',
    text: 'Auto-reply sent ✅',
    sub: 'Hi Rahul! Thanks for your interest...',
    time: '2:34 AM ✓✓',
  },
  {
    type: 'incoming',
    text: 'Another lead from your website 🔥',
    details: ['Name: Priya M.', 'Time: 3:17 AM'],
    time: '3:17 AM ✓✓',
  },
];

const PhoneMockup = () => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= messages.length) {
          setTimeout(() => setVisibleCount(0), 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animate-float-phone mx-auto" style={{
      width: 280, height: 560,
      background: '#0A0A0A',
      border: '2px solid rgba(255,255,255,0.12)',
      borderRadius: 44,
      boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05), inset 0 0 0 1px rgba(255,255,255,0.03)',
      overflow: 'hidden',
    }}>
      {/* Status bar */}
      <div className="flex justify-between items-center px-5 h-11">
        <span className="font-body font-semibold text-xs text-agency-text">9:41</span>
        <div className="flex gap-1.5">
          <svg width="14" height="10" viewBox="0 0 14 10" fill="#F0EEF9"><rect x="0" y="6" width="3" height="4" rx="0.5"/><rect x="4" y="4" width="3" height="6" rx="0.5"/><rect x="8" y="1" width="3" height="9" rx="0.5"/></svg>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none"><rect x="0.5" y="0.5" width="14" height="9" rx="1.5" stroke="#F0EEF9" strokeWidth="1"/><rect x="2" y="2" width="8" height="6" rx="0.5" fill="#F0EEF9"/><rect x="15" y="3" width="1" height="4" rx="0.5" fill="#F0EEF9"/></svg>
        </div>
      </div>

      {/* WhatsApp header */}
      <div className="flex items-center gap-2.5 px-4 py-3" style={{ background: '#1F2C34' }}>
        <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white text-xs font-bold font-body">YW</div>
        <div>
          <div className="font-body font-semibold text-[13px] text-white">Your Website</div>
          <div className="font-body text-[11px] text-[#25D366]">online</div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-2 px-3 py-3 overflow-hidden" style={{ height: 380 }}>
        {messages.map((msg, i) => (
          i < visibleCount && (
            <div key={i} className="animate-message-in" style={{ animationDelay: `${i * 0.15}s`, alignSelf: msg.type === 'outgoing' ? 'flex-end' : 'flex-start' }}>
              <div className="px-3.5 py-2.5 max-w-[85%]" style={{
                background: msg.type === 'outgoing' ? 'linear-gradient(135deg, #6C63FF, #5952E8)' : '#1F2C34',
                borderRadius: msg.type === 'outgoing' ? '16px 16px 0 16px' : '0 16px 16px 16px',
              }}>
                <p className="font-body text-[13px] text-white">{msg.text}</p>
                {msg.sub && <p className="font-body text-[12px] text-white/80 mt-1">{msg.sub}</p>}
                {msg.details && (
                  <div className="mt-1.5 space-y-0.5">
                    {msg.details.map((d, j) => (
                      <p key={j} className="font-body text-[11px]" style={{ color: msg.type === 'outgoing' ? 'rgba(255,255,255,0.7)' : '#8A9BA8' }}>{d}</p>
                    ))}
                  </div>
                )}
                <p className="text-[10px] text-right mt-1" style={{ color: msg.type === 'outgoing' ? 'rgba(255,255,255,0.6)' : '#8A9BA8' }}>{msg.time}</p>
              </div>
            </div>
          )
        ))}
      </div>

      {/* Input bar */}
      <div className="mx-3 mb-3 px-4 py-2.5 rounded-full font-body text-[13px]" style={{ background: '#1F2C34', color: '#8A9BA8' }}>
        Type a message...
      </div>
    </div>
  );
};

const WhyUs = () => {
  const sectionRef = useScrollAnimation();

  const diffs = [
    { emoji: '⚡', text: 'Website live in 3–5 days — guaranteed' },
    { emoji: '🤖', text: 'AI chatbot + WhatsApp automation included' },
    { emoji: '💬', text: 'You talk directly to the people building your site' },
  ];

  return (
    <section className="py-28 md:py-32" style={{ background: '#0D0D0D' }}>
      <div ref={sectionRef} className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 items-center">
        <div>
          <span className="scroll-hidden font-body font-semibold text-xs tracking-[2px] text-primary uppercase">WHY US?</span>
          <h2 className="scroll-hidden font-display font-bold text-4xl md:text-[52px] leading-tight tracking-[-0.03em] mt-4">
            <span className="text-agency-text">Other agencies take weeks.</span><br />
            <span className="text-agency-text">We launch in </span>
            <span className="text-primary relative">
              days.
              <svg className="absolute -bottom-1 left-0 w-full" height="8" viewBox="0 0 100 8" fill="none">
                <path d="M2 6C30 2 60 8 98 4" stroke="#6C63FF" strokeWidth="2" strokeLinecap="round" strokeDasharray="100" className="animate-draw-line" />
              </svg>
            </span>
          </h2>
          <p className="scroll-hidden font-body text-base text-agency-text-secondary leading-[1.8] mt-6 max-w-[460px]">
            Most web agencies juggle 10 clients at once. We are a focused 2-person team — which means when you work with us, you get our full attention, fast execution, and direct communication. No project managers. No delays. No excuses.
          </p>
          <div className="scroll-hidden mt-9 space-y-4">
            {diffs.map((d, i) => (
              <div key={i} className="flex items-center gap-3.5 pl-4" style={{ borderLeft: '2px solid #6C63FF' }}>
                <span className="text-base">{d.emoji}</span>
                <span className="font-body font-medium text-[15px] text-agency-text">{d.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="scroll-hidden flex justify-center">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
