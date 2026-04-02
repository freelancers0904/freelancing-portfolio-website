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
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      setIsLight(true);
      document.documentElement.classList.add('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);
    if (next) {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  };

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
          background: scrolled
            ? (isLight ? 'rgba(245,242,238,0.92)' : 'rgba(0,16,32,0.9)')
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? `1px solid rgba(149,124,61,${isLight ? '0.2' : '0.15'})`
            : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <span className="relative w-2 h-2 rounded-[3px]" style={{ background: '#C9A84C' }}>
              <span className="absolute inset-0 rounded-[3px] animate-pulse-dot" style={{ background: '#C9A84C' }} />
            </span>
            <span className="font-display font-semibold text-lg text-agency-text">[AGENCY NAME]</span>
          </a>

          {/* Center nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="font-body font-medium text-sm transition-colors duration-200"
                style={{
                  color: activeSection === link.href.slice(1) ? '#C9A84C' : '#8A9BB5',
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== link.href.slice(1))
                    (e.target as HTMLElement).style.color = '#F0EEE9';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== link.href.slice(1))
                    (e.target as HTMLElement).style.color = '#8A9BB5';
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Theme toggle + CTA + hamburger */}
          <div className="flex items-center gap-4">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="hidden md:flex items-center w-[52px] h-[28px] rounded-full p-[3px] transition-all duration-300"
              style={{
                background: isLight ? '#E8E4DC' : '#001A3D',
                border: '1px solid rgba(149,124,61,0.3)',
              }}
            >
              <div
                className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-[12px] transition-transform duration-300"
                style={{
                  background: 'linear-gradient(135deg, #957C3D, #C9A84C)',
                  transform: isLight ? 'translateX(0)' : 'translateX(24px)',
                }}
              >
                {isLight ? '☀️' : '🌙'}
              </div>
            </button>

            <a
              href="https://wa.me/917499289391"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block font-body font-medium text-sm px-5 py-2.5 rounded-lg transition-all duration-300"
              style={{
                border: '1.5px solid rgba(201,168,76,0.5)',
                color: '#C9A84C',
              }}
              onMouseEnter={(e) => {
                const t = e.currentTarget;
                t.style.background = 'linear-gradient(135deg, #957C3D, #C9A84C)';
                t.style.color = '#001020';
                t.style.boxShadow = '0 0 20px rgba(201,168,76,0.4)';
              }}
              onMouseLeave={(e) => {
                const t = e.currentTarget;
                t.style.background = 'transparent';
                t.style.color = '#C9A84C';
                t.style.boxShadow = 'none';
              }}
            >
              Let's Talk →
            </a>

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
            background: 'rgba(0,16,32,0.97)',
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
          {/* Mobile theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center w-[52px] h-[28px] rounded-full p-[3px] transition-all duration-300 mt-4"
            style={{
              background: isLight ? '#E8E4DC' : '#001A3D',
              border: '1px solid rgba(149,124,61,0.3)',
            }}
          >
            <div
              className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-[12px] transition-transform duration-300"
              style={{
                background: 'linear-gradient(135deg, #957C3D, #C9A84C)',
                transform: isLight ? 'translateX(0)' : 'translateX(24px)',
              }}
            >
              {isLight ? '☀️' : '🌙'}
            </div>
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
