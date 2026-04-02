import { useState, FormEvent } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import WhatsAppSelector from './WhatsAppSelector';

const inputStyle = {
  background: 'hsla(var(--card-bg), var(--card-bg-alpha))',
  border: '1px solid rgba(149,124,61,0.2)',
  borderRadius: 10,
  padding: '14px 18px',
  color: 'hsl(var(--text-primary))',
  width: '100%',
  outline: 'none',
  transition: 'all 0.2s',
  fontFamily: 'Inter, sans-serif',
  fontSize: 15,
};

const Contact = () => {
  const sectionRef = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [whatsappOpen, setWhatsappOpen] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 md:py-32" style={{ background: 'hsl(var(--bg-secondary))' }}>
      <div ref={sectionRef} className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <span className="scroll-hidden section-label">CONTACT</span>
          <h2 className="scroll-hidden font-display font-bold text-3xl sm:text-4xl md:text-[56px] text-center mt-6 leading-tight tracking-[-0.03em] text-agency-text">
            Let's build something great.
          </h2>
          <p className="scroll-hidden font-body text-sm sm:text-base text-agency-text-secondary text-center max-w-[500px] mx-auto mt-5">
            Tell us about your business. We reply within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-6 lg:gap-10 mt-16">
          {/* Form */}
          <div className="scroll-hidden glass-card p-6 md:p-8 lg:p-10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Full Name" required style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.1)'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(149,124,61,0.2)'; e.currentTarget.style.boxShadow = 'none'; }}
                />
                <select required style={{ ...inputStyle, appearance: 'none' as const }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.1)'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(149,124,61,0.2)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <option value="" style={{ background: 'hsl(var(--bg-secondary))', color: 'hsl(var(--text-primary))' }}>Business Type</option>
                  {['Gym', 'Fitness Center', 'Coaching Business', 'Local Service', 'Restaurant', 'Other'].map((o) => (
                    <option key={o} value={o} style={{ background: 'hsl(var(--bg-secondary))', color: 'hsl(var(--text-primary))' }}>{o}</option>
                  ))}
                </select>
                <input type="email" placeholder="Email Address" required style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.1)'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(149,124,61,0.2)'; e.currentTarget.style.boxShadow = 'none'; }}
                />
                <textarea placeholder="Tell us about your project" rows={5} required style={{ ...inputStyle, resize: 'vertical' as const }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.1)'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(149,124,61,0.2)'; e.currentTarget.style.boxShadow = 'none'; }}
                />
                <button type="submit" className="w-full h-[52px] rounded-[10px] font-body font-semibold text-[15px] transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #957C3D, #C9A84C)', color: '#001020', boxShadow: '0 0 30px rgba(201,168,76,0.25)' }}
                >
                  Send Message →
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-16">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="30" stroke="#C9A84C" strokeWidth="2" />
                  <path d="M20 32l8 8 16-16" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                    strokeDasharray="40" className="animate-draw-line" />
                </svg>
                <p className="font-body font-medium text-base mt-6" style={{ color: '#C9A84C' }}>Message sent! We'll reply within 24 hours.</p>
              </div>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-5">
            <div className="scroll-hidden glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: '#25D366' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div>
                  <h4 className="font-body font-semibold text-base text-agency-text">Chat on WhatsApp</h4>
                  <div className="mt-2 space-y-1">
                    <button onClick={() => setWhatsappOpen(true)} className="block font-body text-sm text-agency-text-secondary hover:text-agency-text transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                      Chat with Mahesh: +91 7499289391
                    </button>
                    <button onClick={() => setWhatsappOpen(true)} className="block font-body text-sm text-agency-text-secondary hover:text-agency-text transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                      Chat with Palak: +91 86601 21462
                    </button>
                  </div>
                  <p className="font-body text-xs text-agency-text-muted mt-1">We typically reply within 30 minutes</p>
                  <button onClick={() => setWhatsappOpen(true)}
                    className="inline-block mt-3 px-4 py-2 rounded-lg font-body text-[13px] font-medium transition-all duration-300"
                    style={{ border: '1.5px solid rgba(37,211,102,0.4)', color: '#25D366' }}
                  >
                    Open WhatsApp →
                  </button>
                </div>
              </div>
            </div>

            <div className="scroll-hidden glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: '#C9A84C' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#001020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-body font-semibold text-base text-agency-text">Send an Email</h4>
                  <p className="font-body text-sm text-agency-text-secondary">hello@agencyname.com</p>
                  <a href="mailto:hello@agencyname.com"
                    className="inline-block mt-3 px-4 py-2 rounded-lg font-body text-[13px] font-medium transition-all duration-300"
                    style={{ border: '1.5px solid rgba(201,168,76,0.4)', color: '#C9A84C' }}
                  >
                    Send Email →
                  </a>
                </div>
              </div>
            </div>

            <p className="scroll-hidden font-body text-sm text-agency-text-muted italic leading-[1.7] mt-2">
              We are Mahesh and Palak — a 2-person team that genuinely cares about your business outcomes. Every project gets our full focus.
            </p>
          </div>
        </div>
      </div>

      <WhatsAppSelector isOpen={whatsappOpen} onClose={() => setWhatsappOpen(false)} />
    </section>
  );
};

export default Contact;
