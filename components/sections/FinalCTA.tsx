import { WHATSAPP_URLS } from '@/lib/constants';
import { MessageCircle } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-glow/20 via-transparent to-accent-glow/10" />

      {/* Background */}
      <div className="absolute inset-0 bg-surface" style={{ zIndex: -1 }} />

      <div className="max-w-container mx-auto px-6 text-center relative z-10">
        {/* Headline */}
        <h2 className="font-display text-h2 text-text-primary mb-4 fade-up">
          Your Patients Are Searching Google Right Now.
        </h2>

        {/* Subheadline */}
        <p className="text-body-lg text-text-secondary max-w-xl mx-auto mb-8 fade-up fade-up-delay-1">
          Don&apos;t let them find your competitor instead. Let&apos;s get your clinic
          live in 72 hours.
        </p>

        {/* Availability badge */}
        <div className="fade-up fade-up-delay-2 mb-8">
          <span className="inline-flex items-center gap-2 bg-success/10 border border-success/25 text-success rounded-pill px-4 py-2 text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            Currently accepting 2 more projects for July 2026
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center fade-up fade-up-delay-3">
          <a
            href={WHATSAPP_URLS.hero}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp me now"
            className="bg-whatsapp hover:bg-whatsapp-hover text-white rounded-btn px-10 py-4 font-bold text-lg inline-flex items-center gap-2 transition-all"
          >
            <MessageCircle size={20} />
            WhatsApp Me Now →
          </a>
          <a
            href="#contact"
            aria-label="Fill the contact form below"
            className="border border-border-hover text-text-secondary rounded-btn px-6 py-3 hover:text-text-primary transition-all inline-flex items-center"
          >
            Fill the Form Below ↓
          </a>
        </div>

        {/* Reassurance */}
        <p className="mt-6 text-text-muted text-sm fade-up fade-up-delay-4">
          No commitment. No upfront payment. Just a conversation.
        </p>
      </div>
    </section>
  );
}
