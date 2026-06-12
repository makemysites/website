import { WHY_ME } from '@/lib/constants';

export default function WhyMe() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="max-w-container mx-auto px-6">
        <span className="section-label">{'// WHY ABHINAY'}</span>

        <h2 className="font-display text-h2 text-text-primary mb-4">
          Not Just a Developer. A Specialist.
        </h2>

        <p className="text-body-lg text-text-secondary max-w-2xl">
          Here&apos;s what you actually get when you work with me.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {WHY_ME.map((item, index) => (
            <article
              key={item.number}
              className={`card p-6 md:p-8 fade-up fade-up-delay-${index + 1}`}
            >
              {/* Large stat number */}
              <div className="font-mono text-[56px] lg:text-[64px] font-bold text-accent leading-none">
                {item.number}
              </div>

              {/* Unit label */}
              <p className="text-label uppercase text-text-muted tracking-[0.08em] mt-2 mb-4">
                {item.unit}
              </p>

              {/* Headline */}
              <h3 className="text-h3 text-text-primary mb-3">
                {item.headline}
              </h3>

              {/* Body */}
              <p className="text-body text-text-secondary">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
