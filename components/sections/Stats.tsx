'use client';

import { useEffect, useRef } from 'react';

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll('.fade-up');
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      number: '15+',
      label: 'Clinic Websites Delivered',
      sublabel: 'across Hyderabad',
      delay: '',
    },
    {
      number: '72hrs',
      label: 'Average Time to Launch',
      sublabel: 'from brief to live',
      delay: 'fade-up-delay-1',
    },
    {
      number: '100%',
      label: 'Client Satisfaction',
      sublabel: "free revisions until you're happy",
      delay: 'fade-up-delay-2',
    },
    {
      number: '₹15K',
      label: 'Starting Price',
      sublabel: 'one-time · no monthly fees ever',
      delay: 'fade-up-delay-3',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-surface">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.number}
              className={`card fade-up ${stat.delay} text-center py-8`}
            >
              <p className="font-mono text-[52px] font-bold text-accent leading-none">
                {stat.number}
              </p>
              <p className="text-sm font-semibold text-text-primary uppercase tracking-wide mt-3">
                {stat.label}
              </p>
              <p className="text-xs text-text-muted mt-1">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
