'use client';

export default function WhyMe() {
  const reasons = [
    {
      number: '72',
      unit: 'hours',
      title: 'Your website is live in 3 days',
      body: 'Not 3 months. Not 3 weeks. From the moment you share your clinic details to the moment your site goes live — 72 hours. I have done this 15+ times.',
      delay: 1,
    },
    {
      number: '1:1',
      unit: 'always',
      title: 'You talk directly to me',
      body: 'No account managers. No handoffs to a junior designer. When you WhatsApp me, I reply. Every single day, including weekends for anything urgent.',
      delay: 2,
    },
    {
      number: '∞',
      unit: 'revisions',
      title: 'We work until you love it',
      body: 'Free revisions until you are 100% satisfied. I do not close a project until you personally give your sign-off. No time limit. No revision cap. I work until it is right.',
      delay: 3,
    },
    {
      number: '₹15K',
      unit: 'starting',
      title: 'Premium quality. No agency markup.',
      body: 'Agencies charge ₹50,000–₹2,00,000 for what I deliver in 72 hours. You get the same quality — without the overhead, the middlemen, or the waiting.',
      delay: 4,
    },
  ];

  return (
    <section id="why" className="py-24 bg-base">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <span className="section-label">// WHY ABHINAY</span>
          <h2 className="text-h2 text-text-primary font-bold mt-4">
            Not Just a Developer. A Specialist.
          </h2>
          <p className="text-body-lg text-text-secondary mt-4 max-w-2xl mx-auto">
            Here&apos;s what you actually get when you work with me.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className={`card fade-up fade-up-delay-${reason.delay}`}
            >
              {/* Big Number */}
              <span className="font-mono text-[56px] font-bold text-accent leading-none">
                {reason.number}
              </span>

              {/* Unit */}
              <p className="text-label text-text-muted uppercase mt-2">
                {reason.unit}
              </p>

              {/* Title */}
              <h3 className="text-lg font-semibold text-text-primary mt-5">
                {reason.title}
              </h3>

              {/* Body */}
              <p className="text-body text-text-secondary mt-2">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
