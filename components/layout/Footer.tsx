import { Linkedin, Github } from 'lucide-react';

const services = [
  'Clinic & Doctor Websites',
  'Landing Pages',
  'SEO Optimization',
  'AI Integration',
  'E-Commerce',
];

const navigateLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-base py-16 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Brand */}
          <div>
            <span className="font-display text-xl text-text-primary tracking-tight">
              MakeMySites
              <span className="text-accent">·</span>
            </span>
            <p className="text-text-secondary text-sm mt-2">
              Clinic websites that convert patients.
            </p>
            <p className="text-text-muted text-xs mt-3">
              📍 Hyderabad · India
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/abhinay-kumar-tippani/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/abhinay-kumar-tippani/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-text-muted text-sm hover:text-text-secondary transition-colors cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Navigate */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-4">
              Navigate
            </h4>
            <ul className="space-y-3">
              {navigateLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-muted text-sm hover:text-text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/918074782997"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted text-sm hover:text-text-secondary transition-colors"
                >
                  📱 +91 8074782997
                </a>
              </li>
              <li>
                <a
                  href="mailto:tippaniabhinay@gmail.com"
                  className="text-text-muted text-sm hover:text-text-secondary transition-colors"
                >
                  ✉️ tippaniabhinay@gmail.com
                </a>
              </li>
              <li>
                <span className="text-text-muted text-sm">
                  📍 Hyderabad, Telangana
                </span>
              </li>
              <li>
                <span className="text-accent text-sm">
                  ⚡ Reply within 2 hours
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-12 pt-8">
          <p className="text-text-muted text-xs text-center">
            © 2026 MakeMySites.in &nbsp;·&nbsp; Built with ☕ in Hyderabad by
            Abhinay Kumar
          </p>
        </div>
      </div>
    </footer>
  );
}
