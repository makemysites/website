import Image from 'next/image';
import { X, Check } from 'lucide-react';

const BEFORE_ITEMS = [
  'Generic template design',
  'No SEO optimization',
  'No WhatsApp integration',
  'Patients leave confused',
];

const AFTER_ITEMS = [
  'Custom premium design',
  'SEO-ready from day 1',
  'One-tap WhatsApp booking',
  'Converts visitors to patients',
];

export default function BeforeAfter() {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-container mx-auto px-6">
        {/* Section header */}
        <div className="fade-up">
          <span className="section-label">{'// TRANSFORMATION'}</span>
          <h2 className="font-display text-h2 text-text-primary mt-4">
            The Before. The After. The Difference.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* BEFORE card */}
          <div className="card p-0 overflow-hidden fade-up">
            {/* Image area */}
            <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="absolute inset-0 bg-red-500/10" />
              <p className="italic text-text-muted relative z-10">
                Generic template website
              </p>
              <span className="absolute top-4 left-4 bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1.5 rounded-md uppercase tracking-wider z-10">
                BEFORE
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                The Old Way
              </h3>
              <ul className="space-y-3">
                {BEFORE_ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span className="text-text-secondary text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* AFTER card */}
          <div className="card p-0 overflow-hidden border-accent/30 fade-up fade-up-delay-1">
            {/* Image area */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/demo.png"
                alt="Modern clinic website"
                width={600}
                height={300}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-accent/20 text-accent text-xs font-bold px-3 py-1.5 rounded-md uppercase tracking-wider">
                AFTER
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                The MakeMySites Way
              </h3>
              <ul className="space-y-3">
                {AFTER_ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-text-secondary text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
