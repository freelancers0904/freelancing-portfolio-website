import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[1000] h-[68px] flex items-center transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(8,8,8,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <span className="relative w-2 h-2 rounded-[3px] bg-primary">
              <span className="absolute inset-0 rounded-[3px] bg-primary animate-pulse-dot" />
            </span>
            <span className="font-display font-semibold text-lg text-agency-text">WebCraft Studio</span>
          </a>

          {/* Center nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="font-body font-medium text-sm transition-colors duration-200"
                style={{
                  color: activeSection === link.href.slice(1) ? '#6C63FF' : '#8A8784',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== link.href.slice(1))
                    (e.target as HTMLElement).style.color = '#F0EEF9';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== link.href.slice(1))
                    (e.target as HTMLElement).style.color = '#8A8784';
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleClick('#contact')}
              className="hidden md:block font-body font-medium text-sm px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(108,99,255,0.4)]"
              style={{
                border: '1.5px solid rgba(108,99,255,0.6)',
                color: '#6C63FF',
              }}
              onMouseEnter={(e) => {
                const t = e.currentTarget;
                t.style.background = '#6C63FF';
                t.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                const t = e.currentTarget;
                t.style.background = 'transparent';
                t.style.color = '#6C63FF';
              }}
            >
              Let's Talk →
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 w-6"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`block h-[1.5px] bg-agency-text transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
              <span className={`block h-[1.5px] bg-agency-text transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-[1.5px] bg-agency-text transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-8"
          style={{
            background: 'rgba(8,8,8,0.97)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="font-display font-semibold text-3xl text-agency-text animate-fade-slide-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
