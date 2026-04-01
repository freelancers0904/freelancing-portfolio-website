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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-[3px] bg-primary" />
              <span className="font-display font-semibold text-lg text-foreground">WebCraft Studio</span>
            </div>
            <p className="font-body text-[13px] text-muted-foreground mt-2">We build systems. Not just websites.</p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-body font-medium text-[11px] tracking-[1.5px] text-muted-foreground uppercase mb-4">Quick Links</p>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => handleClick(link.href)}
                  className="text-left font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Get in touch */}
          <div>
            <p className="font-body font-medium text-[11px] tracking-[1.5px] text-muted-foreground uppercase mb-4">Get in touch</p>
            <a href="https://wa.me/919XXXXXXXXX" target="_blank" rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-lg font-body text-[13px] font-medium mb-3 transition-all duration-300 border-[1.5px]"
              style={{ borderColor: 'rgba(37,211,102,0.4)', color: '#25D366' }}
            >
              WhatsApp →
            </a>
            <p className="font-body text-[13px] text-muted-foreground">hello@webcraftstudio.com</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-10 pt-5 border-t border-border">
          <p className="font-body text-[13px] text-muted-foreground">© 2025 WebCraft Studio. Built with purpose in India.</p>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <p className="font-body text-[13px] text-muted-foreground">Nagpur, Maharashtra 🇮🇳</p>
            {/* Scroll to top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-border bg-muted hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:-translate-y-1 group"
              aria-label="Scroll to top"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground group-hover:text-primary-foreground transition-colors">
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
