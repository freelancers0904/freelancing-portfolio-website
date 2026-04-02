import { useState } from 'react';
import WhatsAppSelector from './WhatsAppSelector';

const navLinks = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  const [whatsappOpen, setWhatsappOpen] = useState(false);

  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: 'hsl(var(--bg-primary))', borderTop: '1px solid rgba(149,124,61,0.15)' }}>
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {/* Logo */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-[3px]" style={{ background: '#C9A84C' }} />
              <span className="font-display font-semibold text-base md:text-lg text-agency-text">[AGENCY NAME]</span>
            </div>
            <p className="font-body text-xs md:text-[13px] text-agency-text-muted mt-2">We build systems. Not just websites.</p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-body font-medium text-[10px] md:text-[11px] tracking-[1.5px] text-agency-text-muted uppercase mb-4">Quick Links</p>
            <div className="flex flex-col gap-2 md:gap-3">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => handleClick(link.href)}
                  className="text-left font-body text-xs md:text-sm text-agency-text-secondary hover:text-agency-text transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Get in touch */}
          <div>
            <p className="font-body font-medium text-[10px] md:text-[11px] tracking-[1.5px] text-agency-text-muted uppercase mb-4">Get in touch</p>
            <button onClick={() => setWhatsappOpen(true)}
              className="inline-block px-3 md:px-4 py-2 rounded-lg font-body text-xs md:text-[13px] font-medium mb-3 transition-all duration-300"
              style={{ border: '1.5px solid rgba(37,211,102,0.4)', color: '#25D366' }}
            >
              WhatsApp →
            </button>
            <p className="font-body text-xs md:text-[13px] text-agency-text-secondary">hello@agencyname.com</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-8 md:mt-10 pt-5" style={{ borderTop: '1px solid rgba(149,124,61,0.1)' }}>
          <p className="font-body text-[11px] md:text-[13px] text-agency-text-muted">© 2026 [AGENCY NAME]. Built with purpose in India.</p>
          <p className="font-body text-[11px] md:text-[13px] text-agency-text-muted">Kolhapur, Maharashtra 🇮🇳</p>
        </div>
      </div>

      <WhatsAppSelector isOpen={whatsappOpen} onClose={() => setWhatsappOpen(false)} />
    </footer>
  );
};

export default Footer;
