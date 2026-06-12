'use client';

import { useState, useEffect, useCallback } from 'react';
import { NAV_LINKS, WHATSAPP_URLS } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  /* ── Scroll detection ── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Active section tracking ── */
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ── Smooth scroll handler ── */
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);

      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    []
  );

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`sticky top-0 z-[100] border-b border-border bg-base/85 backdrop-blur-[16px] transition-all duration-300 ${
        scrolled ? 'py-2 backdrop-blur-[24px]' : 'py-4'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-container mx-auto px-6 flex items-center justify-between">
        {/* ── Logo ── */}
        <a href="#" className="flex flex-col" aria-label="MakeMySites home">
          <span className="text-[20px] font-bold text-text-primary leading-tight tracking-tight">
            MakeMySites<span className="text-accent">.</span>
          </span>
          <span className="text-[11px] text-text-muted leading-none mt-0.5">
            by Abhinay Kumar
          </span>
        </a>

        {/* ── Desktop links ── */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm transition-colors duration-200 hover:text-accent ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-accent'
                    : 'text-text-secondary'
                }`}
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA ── */}
        <a
          href={WHATSAPP_URLS.hero}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-whatsapp text-white rounded-btn px-6 py-3 font-bold text-sm transition-colors hover:bg-whatsapp-hover"
          aria-label="Chat on WhatsApp"
        >
          WhatsApp Me →
        </a>

        {/* ── Mobile hamburger ── */}
        <button
          className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px] z-[110]"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-6 h-[2px] bg-text-primary rounded-full transition-all duration-300 origin-center ${
              mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-text-primary rounded-full transition-all duration-300 ${
              mobileOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-text-primary rounded-full transition-all duration-300 origin-center ${
              mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      {/* ── Mobile overlay menu ── */}
      <div
        className={`fixed inset-0 z-[105] bg-base/95 backdrop-blur-[20px] flex flex-col transition-all duration-300 lg:hidden ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex-1 flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-2xl font-display font-bold transition-colors duration-200 hover:text-accent ${
                activeSection === link.href.replace('#', '')
                  ? 'text-accent'
                  : 'text-text-primary'
              }`}
              aria-label={`Navigate to ${link.label}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* ── Mobile CTA at bottom ── */}
        <div className="p-6 pb-10">
          <a
            href={WHATSAPP_URLS.hero}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-whatsapp text-white rounded-btn px-6 py-4 font-bold text-base transition-colors hover:bg-whatsapp-hover"
            aria-label="Chat on WhatsApp"
          >
            WhatsApp Me →
          </a>
        </div>
      </div>
    </nav>
  );
}
