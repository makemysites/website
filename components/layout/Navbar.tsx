'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

const whatsappUrl =
  'https://wa.me/918074782997?text=Hi%20Abhinay%2C%20I%27m%20interested%20in%20a%20clinic%20website.';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-[16px] bg-base/85 border-b border-border">
      <nav className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <span className="font-display text-xl text-text-primary tracking-tight">
            MakeMySites
            <span className="text-accent">·</span>
          </span>
          <span className="block text-[11px] text-text-muted -mt-1">
            by Abhinay Kumar
          </span>
        </div>

        {/* Center Links — desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right — WhatsApp CTA */}
        <div className="hidden md:flex items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white text-sm font-medium px-4 py-2 rounded-btn transition-colors"
          >
            📱 WhatsApp Me →
          </a>
          {/* Tablet — icon only */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-btn bg-whatsapp hover:bg-whatsapp-hover text-white transition-colors"
            aria-label="WhatsApp"
          >
            📱
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[9998] bg-base/95 backdrop-blur-xl flex flex-col md:hidden">
          <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              <span className="font-display text-xl text-text-primary tracking-tight">
                MakeMySites
                <span className="text-accent">·</span>
              </span>
              <span className="block text-[11px] text-text-muted -mt-1">
                by Abhinay Kumar
              </span>
            </div>
            <button
              className="flex items-center justify-center w-10 h-10 text-text-secondary hover:text-text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-1 gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="text-2xl font-display text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white text-sm font-medium px-6 py-3 rounded-btn transition-colors"
            >
              📱 WhatsApp Me →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
