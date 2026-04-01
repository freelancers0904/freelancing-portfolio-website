const navLinks = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#050505', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-[3px] bg-primary" />
              <span className="font-display font-semibold text-lg text-agency-text">WebCraft Studio</span>
            </div>
            <p className="font-body text-[13px] text-agency-text-muted mt-2">We build systems. Not just websites.</p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-body font-medium text-[11px] tracking-[1.5px] text-agency-text-muted uppercase mb-4">Quick Links</p>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => handleClick(link.href)}
                  className="text-left font-body text-sm text-agency-text-secondary hover:text-agency-text transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Get in touch */}
          <div>
            <p className="font-body font-medium text-[11px] tracking-[1.5px] text-agency-text-muted uppercase mb-4">Get in touch</p>
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-lg font-body text-[13px] font-medium mb-3 transition-all duration-300"
              style={{ border: '1.5px solid rgba(37,211,102,0.4)', color: '#25D366' }}
            >
              WhatsApp →
            </a>
            <p className="font-body text-[13px] text-agency-text-secondary">hello@webcraftstudio.com</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-10 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <p className="font-body text-[13px] text-agency-text-muted">© 2025 WebCraft Studio. Built with purpose in India.</p>
          <p className="font-body text-[13px] text-agency-text-muted mt-2 sm:mt-0">Nagpur, Maharashtra 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
