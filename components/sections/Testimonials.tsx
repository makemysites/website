import { TESTIMONIALS } from '@/lib/constants';
import { Star, CheckCircle } from 'lucide-react';

function StarRating({ size = 20 }: { size?: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} className="text-yellow-400" fill="currentColor" />
      ))}
    </div>
  );
}

function Avatar({ name, size = 'lg' }: { name: string; size?: 'lg' | 'sm' }) {
  const sizeClasses = size === 'lg' ? 'w-12 h-12 text-lg' : 'w-10 h-10 text-sm';
  return (
    <div
      className={`${sizeClasses} rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold`}
    >
      {name.charAt(0)}
    </div>
  );
}

export default function Testimonials() {
  const featured = TESTIMONIALS.find((t) => (t as { featured?: boolean }).featured);
  const secondary = TESTIMONIALS.filter((t) => !(t as { featured?: boolean }).featured);

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-container mx-auto px-6">
        {/* Section label */}
        <div className="fade-up">
          <span className="section-label">{'// CLIENT TESTIMONIALS'}</span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-h2 text-text-primary mt-4 fade-up fade-up-delay-1">
          What Doctors Say After We Launch
        </h2>

        {/* Subheadline */}
        <p className="text-body-lg text-text-secondary mt-4 fade-up fade-up-delay-2">
          Real feedback from real clinic owners in Hyderabad.
        </p>

        {/* Featured testimonial */}
        {featured && (
          <div className="mt-12 p-6 md:p-10 border-l-4 border-accent bg-card border border-border rounded-card mb-8 fade-up fade-up-delay-3">
            <StarRating size={20} />
            <blockquote className="text-xl lg:text-2xl text-text-primary/90 italic leading-relaxed mb-6">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <Avatar name={featured.name} size="lg" />
              <div>
                <p className="font-semibold text-text-primary">{featured.name}</p>
                <p className="text-sm text-text-secondary">
                  {featured.clinic} · {featured.location}
                </p>
                <span className="inline-flex items-center gap-1 mt-2 text-xs text-accent">
                  <CheckCircle size={12} />
                  Verified Client
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Secondary testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondary.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`card p-6 fade-up fade-up-delay-${index + 4}`}
            >
              <StarRating size={16} />
              <blockquote className="text-body text-text-primary/90 italic leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <Avatar name={testimonial.name} size="sm" />
                <div>
                  <p className="font-semibold text-text-primary">{testimonial.name}</p>
                  <p className="text-sm text-text-secondary">
                    {testimonial.clinic} · {testimonial.location}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-2 text-xs text-accent">
                    <CheckCircle size={12} />
                    Verified Client
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
