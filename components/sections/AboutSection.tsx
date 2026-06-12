import { ABOUT, ACHIEVEMENTS, CONTACT } from '@/lib/constants';
import { Linkedin, Github, Instagram } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about-me" className="py-16 lg:py-24">
      <div className="max-w-container mx-auto px-6">
        {/* Section label */}
        <div className="fade-up">
          <span className="section-label">{'// ABOUT ME'}</span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-h2 text-text-primary mt-4 fade-up fade-up-delay-1">
          Built by a Developer Who Understands What Clinics Need
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
          {/* LEFT — Photo area */}
          <div className="fade-up">
            <div className="w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden border border-border bg-card">
              <div className="w-full h-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
                <span className="font-display text-[120px] text-accent/40 select-none">
                  A
                </span>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-6 flex gap-4 justify-center">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* RIGHT — Story */}
          <div className="fade-up fade-up-delay-1">
            {ABOUT.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-body-lg text-text-secondary mb-6 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            {/* Signature */}
            <p className="text-text-primary font-semibold mt-4">{ABOUT.signature}</p>

            {/* Achievements */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ACHIEVEMENTS.map((achievement) => (
                <div key={achievement.title} className="flex items-start gap-3">
                  <span className="text-2xl">{achievement.icon}</span>
                  <p className="text-sm font-semibold text-text-primary">
                    {achievement.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
