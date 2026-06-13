'use client';

import { useEffect, useRef } from 'react';

export default function BeforeAfter() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    const els = sectionRef.current?.querySelectorAll('.fade-up');
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const beforeProblems = [
    'Generic template. Looks like every other site.',
    'No SEO. Invisible on Google.',
    'No WhatsApp button anywhere.',
    'Patients leave confused.',
  ];

  const afterResults = [
    'Custom premium design. Stands out immediately.',
    'SEO-optimized. Ranks on Google from day 1.',
    'One-tap WhatsApp on every page.',
    'Patients know exactly what to do.',
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-base">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <span className="section-label fade-up">// TRANSFORMATION</span>
          <h2 className="text-h2 font-display font-bold text-text-primary mt-4 fade-up">
            The Before. The After. The Difference.
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {/* ── BEFORE Card ── */}
          <div className="fade-up fade-up-delay-1 bg-surface border border-border rounded-card overflow-hidden">
            {/* Badge */}
            <div className="p-5 pb-0">
              <span className="inline-flex items-center px-3 py-1 bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.2)] rounded-pill text-xs font-bold text-[#EF4444] uppercase tracking-wider">
                BEFORE
              </span>
            </div>

            {/* Visual mockup */}
            <div className="mx-5 mt-4 h-[180px] rounded-lg bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] relative overflow-hidden">
              {/* Fake nav bar */}
              <div className="absolute top-0 inset-x-0 h-6 bg-white/[0.03] border-b border-white/[0.03]" />

              {/* Fake hero block */}
              <div className="absolute top-10 left-4 right-8 h-8 bg-white/[0.04] rounded" />

              {/* Fake image placeholder */}
              <div className="absolute top-[52px] left-4 w-16 h-16 bg-white/[0.03] rounded border border-white/[0.04]" />

              {/* Fake text lines */}
              <div className="absolute top-[52px] left-24 right-4 space-y-2">
                <div className="h-2 bg-white/[0.03] rounded w-full" />
                <div className="h-2 bg-white/[0.03] rounded w-[80%]" />
                <div className="h-2 bg-white/[0.03] rounded w-[60%]" />
              </div>

              {/* Watermark */}
              <span className="absolute bottom-3 right-3 text-[10px] text-white/[0.08] font-bold">
                GENERIC TEMPLATE
              </span>
            </div>

            {/* Problems list */}
            <div className="p-5 space-y-3">
              {beforeProblems.map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#EF4444] font-bold text-sm flex-shrink-0">✕</span>
                  <span className="text-text-secondary text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── AFTER Card ── */}
          <div className="fade-up fade-up-delay-2 bg-gradient-to-br from-accent/[0.05] to-card border border-accent/30 rounded-card overflow-hidden">
            {/* Badge */}
            <div className="p-5 pb-0">
              <span className="inline-flex items-center px-3 py-1 bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.2)] rounded-pill text-xs font-bold text-[#22C55E] uppercase tracking-wider">
                AFTER
              </span>
            </div>

            {/* Visual mockup */}
            <div className="mx-5 mt-4 h-[180px] rounded-lg bg-gradient-to-br from-[#0d1117] to-[#161b22] relative overflow-hidden">
              {/* Branded nav */}
              <div className="absolute top-0 inset-x-0 h-7 bg-white/[0.04] border-b border-white/[0.05] flex items-center px-3">
                <div className="w-2 h-2 rounded-full bg-accent mr-2" />
                <span className="text-[9px] text-white/60 font-bold">Mamra Dental</span>
              </div>

              {/* Hero text */}
              <div className="absolute top-10 left-4">
                <p className="text-[11px] text-white/70 font-bold">Expert Dental Care</p>
                <p className="text-[8px] text-white/30 mt-1">Trusted by patients in Jubilee Hills</p>
              </div>

              {/* WhatsApp CTA */}
              <div className="absolute top-[60px] left-4 bg-whatsapp/60 text-white text-[8px] font-bold px-2 py-1 rounded">
                📱 Book Now
              </div>

              {/* Service pills */}
              <div className="absolute bottom-8 left-4 flex gap-1">
                {['Implants', 'Braces', 'Whitening'].map((s) => (
                  <span
                    key={s}
                    className="bg-white/5 text-white/40 text-[7px] px-1.5 py-0.5 rounded"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Glow */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-accent/10 rounded-full blur-xl" />
            </div>

            {/* Results list */}
            <div className="p-5 space-y-3">
              {afterResults.map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#22C55E] font-bold text-sm flex-shrink-0">✓</span>
                  <span className="text-text-secondary text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
