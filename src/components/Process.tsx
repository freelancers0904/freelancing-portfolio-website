import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  { day: 'Day 1', title: 'Requirement Discussion', body: 'One call. We learn your business and goals.' },
  { day: 'Day 1–2', title: 'Design Preview', body: "A real mockup in 24–48 hours. We refine until it's right." },
  { day: 'Day 2–4', title: 'Development', body: 'Fast, clean build. Mobile-first. AI features integrated.' },
  { day: 'Day 4–5', title: 'Revisions', body: 'You review, we adjust. No delays.' },
  { day: 'Day 5', title: 'Launch 🚀', body: 'Live website. Full access handed over.' },
];

const Process = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="process" className="py-28 md:py-32 bg-secondary">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <span className="scroll-hidden section-label">HOW WE WORK</span>
          <h2 className="scroll-hidden font-display font-bold text-4xl md:text-[56px] text-center mt-6 leading-tight tracking-[-0.03em] text-foreground">
            From idea to live website<br />in 3–5 days.
          </h2>
          <p className="scroll-hidden font-body text-base text-muted-foreground text-center max-w-[500px] mx-auto mt-5">
            A simple, transparent process that respects your time.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px" style={{
            background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3) 20%, hsl(var(--primary) / 0.5) 50%, hsl(var(--primary) / 0.3) 80%, transparent)',
          }} />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4">
            {steps.map((step, i) => (
              <div key={i} className="scroll-hidden flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center font-display font-bold text-xl text-primary shrink-0 bg-primary/10 border-[1.5px] border-primary/30 shadow-[0_0_20px_hsl(var(--primary)/0.15)]">
                  {i + 1}
                </div>
                <div className="font-body font-semibold text-[13px] text-primary mt-4 tracking-[0.5px]">{step.day}</div>
                <div className="font-display font-semibold text-[15px] text-foreground mt-2">{step.title}</div>
                <p className="font-body text-[13px] text-muted-foreground max-w-[160px] leading-[1.6] mt-2">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
