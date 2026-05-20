import { useState, useEffect } from 'react';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Demo', href: '#demo' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-100px 0px -40% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        padding: '16px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '24px', color: 'var(--color-primary)' }}>
          Abhinay.
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'none', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          <div style={{ display: 'flex', gap: '24px' }}>
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: '15px',
                  fontWeight: 500,
                  color: activeSection === link.href.substring(1) ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                  transition: 'color 0.2s',
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: 'var(--color-success)',
                borderRadius: '50%',
                animation: 'pulse 2s infinite',
              }}
            />
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
              Available for projects
            </span>
          </div>

          <a href="#contact" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '15px' }}>
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          style={{ display: 'block' }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div style={{ width: '24px', height: '2px', backgroundColor: 'var(--color-primary)', margin: '5px 0', transition: '0.3s', transform: isMobileMenuOpen ? 'rotate(-45deg) translate(-5px, 5px)' : 'none' }}></div>
          <div style={{ width: '24px', height: '2px', backgroundColor: 'var(--color-primary)', margin: '5px 0', transition: '0.3s', opacity: isMobileMenuOpen ? 0 : 1 }}></div>
          <div style={{ width: '24px', height: '2px', backgroundColor: 'var(--color-primary)', margin: '5px 0', transition: '0.3s', transform: isMobileMenuOpen ? 'rotate(45deg) translate(-5px, -5px)' : 'none' }}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="mobile-menu"
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'var(--color-surface)',
          borderBottom: '1px solid var(--color-border)',
          padding: isMobileMenuOpen ? '20px' : '0 20px',
          maxHeight: isMobileMenuOpen ? '400px' : '0',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              fontSize: '16px',
              fontWeight: 500,
              color: activeSection === link.href.substring(1) ? 'var(--color-accent)' : 'var(--color-text)',
              padding: '8px 0',
            }}
          >
            {link.name}
          </a>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 0' }}>
          <div
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: 'var(--color-success)',
              borderRadius: '50%',
            }}
          />
          <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
            Available for projects
          </span>
        </div>
        <a
          href="#contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '8px' }}
        >
          Let's Talk
        </a>
      </div>

      <style>
        {`
          @media (min-width: 768px) {
            .desktop-nav { display: flex !important; }
            .mobile-toggle { display: none !important; }
            .mobile-menu { display: none !important; }
          }
          @keyframes pulse {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
          }
        `}
      </style>
    </nav>
  );
};

export default Nav;
