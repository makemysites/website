export default function Process() {
  const steps = [
    {
      number: '01',
      badge: 'Day 0 · 30 minutes',
      icon: '💬',
      title: 'We Talk on WhatsApp',
      body: 'Send me a message. We discuss your clinic name, services, goals, and any photos you have. That 30-minute chat is everything I need to start building.',
      delay: 1,
    },
    {
      number: '02',
      badge: 'Days 1–2',
      icon: '⚡',
      title: 'I Design and Build Everything',
      body: 'I handle design, development, copywriting, and SEO. You get WhatsApp updates as it takes shape. No jargon — just: "here\'s what it looks like so far."',
      delay: 2,
    },
    {
      number: '03',
      badge: 'Day 3',
      icon: '🚀',
      title: 'Your Clinic Goes Live',
      body: 'I deploy to your domain, set up Google Search Console, and walk you through everything on a call. From this point, patients can find you on Google.',
      delay: 3,
    },
  ];

  return (
    <section id="process" className="py-24 bg-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <span className="section-label">// HOW IT WORKS</span>
          <h2 className="text-h2 font-display font-bold text-text-primary mt-4">
            From First Message to Live Website in 72&nbsp;Hours
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`card fade-up fade-up-delay-${step.delay}`}
            >
              {/* Step number */}
              <span className="font-mono text-[64px] font-bold text-border leading-none">
                {step.number}
              </span>

              {/* Time badge */}
              <span className="inline-flex items-center px-3 py-1 bg-accent-subtle border border-accent/25 rounded-pill text-xs font-semibold text-accent mt-3">
                {step.badge}
              </span>

              {/* Icon */}
              <div className="text-3xl mt-4">{step.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-text-primary mt-4">
                {step.title}
              </h3>

              {/* Body */}
              <p className="text-body text-text-secondary mt-2">{step.body}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-text-muted text-body">
            Ready to start? Day 0 begins the moment you send a message.
          </p>
          <a
            href="https://wa.me/918074782997?text=Hi%20Abhinay%2C%20I%27m%20interested%20in%20a%20clinic%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold px-6 py-3 rounded-btn transition-colors inline-flex items-center gap-2"
          >
            WhatsApp Me →
          </a>
        </div>
      </div>
    </section>
  );
}
