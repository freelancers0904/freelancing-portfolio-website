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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {/* Logo */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2.5">
              {/* <span className="w-2 h-2 rounded-[3px]" style={{ background: '#C9A84C' }} /> */}
              {/* Agency name will be added here once finalized */}
                <div className="relative max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-shrink-0 items-center gap-3" aria-label="Go to top">
            <span className="relative w-2 h-2 rounded-[3px]" style={{ background: '#C9A84C' }}>
              <span className="absolute inset-0 rounded-[3px] animate-pulse-dot" style={{ background: '#C9A84C' }} />
            </span>
            <div className="flex flex-col leading-none">
              <span className="text-[11px] tracking-[0.3em] uppercase text-agency-text-secondary">Palak + Mahesh</span>
              <span className="font-semibold text-sm text-agency-text">Growth by design</span>
                  </div>
                  </a>
              </div>
              
            </div>
            <p className="font-body text-xs md:text-[13px] text-agency-text-muted mt-2">We build systems. Not just websites.</p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-body font-medium text-[10px] md:text-[11px] tracking-[1.5px] text-agency-text-muted uppercase mb-3 md:mb-4">Quick Links</p>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-2">
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
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=freelancers0904@gmail.com" target="_blank" rel="noopener noreferrer" className="block font-body text-xs md:text-[13px] text-agency-text-secondary hover:text-agency-text transition-colors">freelancers0904@gmail.com</a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-8 md:mt-10 pt-5" style={{ borderTop: '1px solid rgba(149,124,61,0.1)' }}>
          <p className="font-body text-[11px] md:text-[13px] text-agency-text-muted">© 2026. Built with purpose in India.</p>
          <p className="font-body text-[11px] md:text-[13px] text-agency-text-muted">Kolhapur, Maharashtra 🇮🇳</p>
        </div>
      </div>

      <WhatsAppSelector isOpen={whatsappOpen} onClose={() => setWhatsappOpen(false)} />
    </footer>
  );
};

export default Footer;
