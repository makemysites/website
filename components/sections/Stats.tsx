'use client';

import { useEffect, useRef } from 'react';
import { STATS } from '@/lib/constants';
import { animateCounter } from '@/lib/animations';

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            STATS.forEach((stat, i) => {
              const el = numberRefs.current[i];
              const prefix = (stat as { prefix?: string }).prefix || '';
              if (el) {
                animateCounter(
                  el,
                  stat.number,
                  1500,
                  prefix,
                  stat.suffix
                );
              }
            });

            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 lg:py-24" ref={sectionRef}>
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`card p-6 text-center fade-up fade-up-delay-${i + 1}`}
            >
              <span
                ref={(el) => {
                  numberRefs.current[i] = el;
                }}
                className="font-mono text-[36px] sm:text-[48px] lg:text-[56px] font-bold text-accent leading-none"
              >
                {(stat as { prefix?: string }).prefix || ''}0{stat.suffix}
              </span>
              <p className="text-label uppercase tracking-[0.08em] text-text-secondary mt-3">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
