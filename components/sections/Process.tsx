import { PROCESS_STEPS, WHATSAPP_URLS } from '@/lib/constants';
import { MessageCircle, Code2, Rocket, ArrowRight, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  'message-circle': MessageCircle,
  'code-2': Code2,
  'rocket': Rocket,
};

export default function Process() {
  return (
    <section id="process" className="py-16 lg:py-24 bg-surface">
      <div className="max-w-container mx-auto px-6">
        <span className="section-label">{'// HOW IT WORKS'}</span>

        <h2 className="font-display text-h2 text-text-primary mb-16">
          From First Message to Live Website in 72 Hours
        </h2>

        {/* ── Desktop Timeline ── */}
        <div className="hidden md:flex items-start gap-0 relative">
          {/* Dashed connector line */}
          <div
            className="absolute top-[60px] left-[16.67%] right-[16.67%] h-px border-t-2 border-dashed border-border z-0"
            aria-hidden="true"
          />

          {PROCESS_STEPS.map((step, index) => {
            const Icon = iconMap[step.icon];

            return (
              <div
                key={step.step}
                className={`relative z-10 flex-1 text-center fade-up fade-up-delay-${index + 1}`}
              >
                {/* Numbered circle */}
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm mx-auto">
                  {step.step}
                </div>

                {/* Time badge */}
                <span className="inline-block mt-4 mb-3 bg-accent-subtle text-accent text-xs font-semibold px-3 py-1 rounded-pill">
                  {step.timeBadge}
                </span>

                {/* Icon */}
                {Icon && (
                  <div className="flex justify-center mb-2">
                    <Icon size={24} className="text-text-muted" aria-hidden="true" />
                  </div>
                )}

                {/* Headline */}
                <h3 className="text-h3 text-text-primary mb-2">
                  {step.headline}
                </h3>

                {/* Body */}
                <p className="text-body text-text-secondary max-w-xs mx-auto">
                  {step.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── Mobile Timeline ── */}
        <div className="flex flex-col gap-8 relative md:hidden">
          {/* Vertical dashed line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px border-l-2 border-dashed border-border"
            aria-hidden="true"
          />

          {PROCESS_STEPS.map((step, index) => {
            const Icon = iconMap[step.icon];

            return (
              <div
                key={step.step}
                className={`relative z-10 pl-16 fade-up fade-up-delay-${index + 1}`}
              >
                {/* Numbered circle */}
                <div className="absolute left-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm">
                  {step.step}
                </div>

                {/* Time badge */}
                <span className="inline-block mb-3 bg-accent-subtle text-accent text-xs font-semibold px-3 py-1 rounded-pill">
                  {step.timeBadge}
                </span>

                {/* Icon */}
                {Icon && (
                  <div className="mb-2">
                    <Icon size={24} className="text-text-muted" aria-hidden="true" />
                  </div>
                )}

                {/* Headline */}
                <h3 className="text-h3 text-text-primary mb-2">
                  {step.headline}
                </h3>

                {/* Body */}
                <p className="text-body text-text-secondary max-w-xs">
                  {step.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <div className="mt-16 text-center">
          <p className="text-body text-text-secondary mb-6">
            Ready to start? Day 0 begins when you send a message.
          </p>

          <a
            href={WHATSAPP_URLS.default}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white font-semibold px-8 py-4 rounded-btn transition-colors duration-200"
            aria-label="Start your project on WhatsApp"
          >
            <MessageCircle size={20} aria-hidden="true" />
            WhatsApp Me →
          </a>
        </div>
      </div>
    </section>
  );
}
