import { PROBLEMS } from '@/lib/constants';
import { SearchX, AlertTriangle, LinkIcon as LinkOff, ArrowRight, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  'search-x': SearchX,
  'alert-triangle': AlertTriangle,
  'link-2-off': LinkOff,
};

export default function ProblemSection() {
  return (
    <section id="problems" className="py-16 lg:py-24">
      <div className="max-w-container mx-auto px-6">
        <span className="section-label">{'// THE PROBLEM'}</span>

        <h2 className="font-display text-h2 text-text-primary mb-4">
          Most Clinic Websites Are Quietly Losing You Patients
        </h2>

        <p className="text-body-lg text-text-secondary max-w-2xl mb-16">
          A website that just exists is worse than having none. Here&apos;s what it costs you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEMS.map((problem, index) => {
            const Icon = iconMap[problem.icon];

            return (
              <article
                key={problem.headline}
                className={`card fade-up fade-up-delay-${index + 1}`}
              >
                {/* Top accent bar */}
                <div className="bg-warning h-1 w-16 rounded-full mb-6" />

                {/* Icon */}
                {Icon && <Icon size={32} className="text-warning mb-4" />}

                {/* Headline */}
                <h3 className="text-h3 text-text-primary mb-3">
                  {problem.headline}
                </h3>

                {/* Body */}
                <p className="text-body text-text-secondary mb-6">
                  {problem.body}
                </p>

                {/* Solution line */}
                <div className="flex items-center gap-2 text-accent text-sm font-medium">
                  <ArrowRight size={16} aria-hidden="true" />
                  <span>{problem.solution}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
