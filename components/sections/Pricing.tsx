import { PRICING_TIERS, WHATSAPP_URLS } from '@/lib/constants';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 lg:py-24">
      <div className="max-w-container mx-auto px-6">
        {/* Section label */}
        <div className="fade-up">
          <span className="section-label">{'// TRANSPARENT PRICING'}</span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-h2 text-text-primary mt-4 fade-up fade-up-delay-1">
          Simple Pricing. No Hidden Costs. No Surprises.
        </h2>

        {/* Subheadline */}
        <p className="text-body-lg text-text-secondary mt-4 fade-up fade-up-delay-2">
          One-time payment. No monthly fees unless you want hosting support.
        </p>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {PRICING_TIERS.map((tier, index) => (
            <div
              key={tier.name}
              className={`rounded-card p-6 md:p-8 flex flex-col min-h-[500px] fade-up fade-up-delay-${index + 3} ${
                tier.highlighted
                  ? 'border-2 border-accent bg-card relative'
                  : 'border border-border bg-card'
              }`}
            >
              {/* Most Popular badge */}
              {tier.highlighted && tier.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-pill">
                  {tier.badge}
                </span>
              )}

              {/* Tier name */}
              <p className="text-label uppercase text-text-muted tracking-[0.08em]">
                {tier.name}
              </p>

              {/* Price */}
              <p className="font-mono text-[40px] font-bold text-text-primary mt-2 mb-1">
                {tier.price}
              </p>

              {/* Description */}
              <p className="text-sm text-text-secondary mb-6">{tier.description}</p>

              {/* Divider */}
              <div className="h-px bg-border mb-6" />

              {/* Features */}
              <ul className="flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              {tier.ctaStyle === 'whatsapp' ? (
                <a
                  href={WHATSAPP_URLS.default}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${tier.cta} for ${tier.name} plan`}
                  className="mt-8 w-full py-3 rounded-btn font-bold text-center transition-all inline-block bg-whatsapp hover:bg-whatsapp-hover text-white"
                >
                  {tier.cta}
                </a>
              ) : tier.ctaStyle === 'accent' ? (
                <a
                  href={WHATSAPP_URLS.default}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${tier.cta} for ${tier.name} plan`}
                  className="mt-8 w-full py-3 rounded-btn font-semibold text-center transition-all inline-block bg-transparent border border-accent text-accent hover:bg-accent hover:text-white"
                >
                  {tier.cta}
                </a>
              ) : (
                <a
                  href={WHATSAPP_URLS.default}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${tier.cta} for ${tier.name} plan`}
                  className="mt-8 w-full py-3 rounded-btn font-semibold text-center transition-all inline-block border border-border-hover text-text-primary hover:border-accent hover:text-accent"
                >
                  {tier.cta}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Trust copy */}
        <p className="mt-12 text-center text-text-secondary text-body max-w-2xl mx-auto">
          ₹20,000 is less than what most agencies charge for a discovery call alone. You
          get a live, production website. No templates. No page builders.
        </p>

        {/* FAQ teaser */}
        <p className="mt-4 text-center">
          <a
            href="#faq"
            className="text-accent text-sm hover:underline"
            aria-label="Go to FAQ section"
          >
            Have questions about pricing? See the FAQ below ↓
          </a>
        </p>
      </div>
    </section>
  );
}
