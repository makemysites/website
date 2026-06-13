const plans = [
  {
    name: 'Starter',
    price: '₹12,000',
    tagline: 'For new clinics getting online',
    features: [
      '3-page website (Home, About, Contact)',
      'Mobile responsive + fast loading',
      'WhatsApp + Call button',
      'Basic on-page SEO',
      '72-hour delivery',
      '1 revision round',
    ],
    cta: 'Get Started →',
    href: 'https://wa.me/918074782997?text=Hi%20Abhinay%2C%20I%27m%20interested%20in%20the%20Starter%20plan.',
    highlighted: false,
    delay: 'fade-up-delay-1',
  },
  {
    name: 'Professional',
    price: '₹20,000',
    tagline: 'For established clinics wanting full visibility',
    features: [
      '5–7 page website',
      'Mobile-first + Lighthouse 90+',
      'WhatsApp, Call + Google Maps',
      'Full SEO optimization',
      'Google Analytics setup',
      '72-hour delivery',
      '3 revision rounds',
      '30 days free support',
    ],
    cta: 'WhatsApp Me →',
    href: 'https://wa.me/918074782997?text=Hi%20Abhinay%2C%20I%27m%20interested%20in%20the%20Professional%20plan.',
    highlighted: true,
    delay: 'fade-up-delay-2',
  },
  {
    name: 'Premium',
    price: '₹35,000+',
    tagline: 'For multi-doctor practices',
    features: [
      'Unlimited pages',
      'Online appointment booking',
      'AI chatbot integration',
      'Advanced SEO + Google Ads ready',
      'E-commerce if needed',
      'Priority support',
      'Custom timeline',
    ],
    cta: "Let's Discuss →",
    href: 'https://wa.me/918074782997?text=Hi%20Abhinay%2C%20I%27m%20interested%20in%20the%20Premium%20plan.',
    highlighted: false,
    delay: 'fade-up-delay-3',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-base">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <span className="section-label">// TRANSPARENT PRICING</span>
          <h2 className="text-h2 font-display font-bold text-text-primary mt-4">
            Simple Pricing. No Hidden Costs.{' '}
            <span className="text-accent">No Surprises.</span>
          </h2>
          <p className="text-body-lg text-text-secondary mt-4 max-w-2xl mx-auto">
            One-time payment. No monthly fees unless you want hosting support.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 items-stretch">
          {plans.map((plan) =>
            plan.highlighted ? (
              <div
                key={plan.name}
                className={`relative fade-up ${plan.delay} flex flex-col rounded-card overflow-hidden bg-gradient-to-br from-accent/[0.06] to-card border-2 border-accent p-7`}
              >
                {/* Badge */}
                <div className="flex justify-center mb-4">
                  <span className="bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-pill inline-flex items-center gap-1">
                    ✨ Most Popular
                  </span>
                </div>

                {/* Plan info */}
                <p className="text-text-muted text-sm font-semibold uppercase tracking-wider">
                  {plan.name}
                </p>
                <p className="text-[40px] font-bold text-text-primary mt-2 font-mono">
                  {plan.price}
                </p>
                <p className="text-text-secondary text-sm mt-1">{plan.tagline}</p>

                <div className="border-t border-border my-6" />

                {/* Features */}
                <ul className="flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8">
                  <a
                    href={plan.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-whatsapp hover:bg-whatsapp-hover text-white py-3 rounded-btn font-bold transition-colors"
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ) : (
              <div
                key={plan.name}
                className={`card fade-up ${plan.delay} flex flex-col`}
              >
                <p className="text-text-muted text-sm font-semibold uppercase tracking-wider">
                  {plan.name}
                </p>
                <p className="text-[40px] font-bold text-text-primary mt-2 font-mono">
                  {plan.price}
                </p>
                <p className="text-text-secondary text-sm mt-1">{plan.tagline}</p>

                <div className="border-t border-border my-6" />

                {/* Features */}
                <ul className="flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8">
                  <a
                    href={plan.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center border border-border-hover text-text-primary hover:bg-card py-3 rounded-btn font-semibold transition-colors"
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            )
          )}
        </div>

        {/* Trust copy */}
        <p className="mt-12 text-center text-sm text-text-muted italic max-w-2xl mx-auto">
          &ldquo;₹20,000 is less than what most agencies charge for their first
          meeting. You get a live, production-ready website — no page builders, no
          templates, no surprises.&rdquo;
        </p>
      </div>
    </section>
  );
}
