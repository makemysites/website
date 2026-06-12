import { CONTACT, WHATSAPP_URLS, NAV_LINKS, FOOTER_SERVICES } from '@/lib/constants';
import { Linkedin, Github, Instagram, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-base border-t border-border">
      <div className="max-w-container mx-auto px-6 py-16">
        {/* 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 — Brand */}
          <div>
            <p className="text-xl font-bold text-text-primary">
              MakeMySites<span className="text-accent">.</span>
            </p>
            <p className="text-sm text-text-secondary mt-2">
              Clinic websites that convert patients.
            </p>
            <p className="text-sm text-text-muted mt-1">Hyderabad · India</p>

            {/* Social icons */}
            <div className="flex gap-3 mt-4">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-all"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-all"
              >
                <Github size={16} />
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-all"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul>
              {FOOTER_SERVICES.map((service) => (
                <li key={service} className="mb-2">
                  <span className="text-sm text-text-secondary hover:text-text-primary transition-colors cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.label} className="mb-2">
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mb-2">
                <a
                  href="#contact"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href={WHATSAPP_URLS.default}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
                aria-label="WhatsApp contact"
              >
                <Phone size={14} />
                {CONTACT.whatsappDisplay}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Email contact"
              >
                <Mail size={14} />
                {CONTACT.email}
              </a>
              <p className="text-sm text-text-muted mt-3">
                Based in Hyderabad, India
              </p>
              <p className="text-sm text-text-muted">Response within 2 hours</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted">© {new Date().getFullYear()} MakeMySites.in</p>
          <p className="text-sm text-text-muted">
            Designed &amp; built with ☕ in Hyderabad by Abhinay Kumar
          </p>
        </div>
      </div>
    </footer>
  );
}
