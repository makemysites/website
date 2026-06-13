'use client';

import { useEffect, useRef } from 'react';

export default function Testimonials() {
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

  const stars = Array.from({ length: 5 });

  return (
    <section ref={sectionRef} className="py-24 bg-surface">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <span className="section-label fade-up">// CLIENT TESTIMONIALS</span>
          <h2 className="text-h2 font-display font-bold text-text-primary mt-4 fade-up">
            What Doctors Say After We Launch
          </h2>
          <p className="text-text-secondary text-body-lg mt-3 fade-up">
            Real feedback from clinic owners across Hyderabad.
          </p>
        </div>

        {/* ── Featured testimonial ── */}
        <div className="mt-16 fade-up">
          <div className="bg-card border border-border rounded-card p-8 border-l-[3px] border-l-accent">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {stars.map((_, i) => (
                <span key={i} className="text-[#F59E0B]">★</span>
              ))}
            </div>

            {/* Quote */}
            <p className="text-lg text-text-primary italic leading-relaxed">
              &ldquo;Abhinay built our clinic website in just 2 days. Our patients constantly tell us how easy it is to find us now. The WhatsApp integration alone was worth every rupee.&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 mt-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center text-white font-bold text-lg">
                P
              </div>
              <div>
                <p className="text-text-primary font-semibold">Dr. Priya Sharma</p>
                <p className="text-text-muted text-xs">Dermatologist · ClearSkin Clinic, Hyderabad</p>
              </div>
              <span className="ml-auto bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-pill border border-accent/20">
                Verified Client
              </span>
            </div>
          </div>
        </div>

        {/* ── Grid: Testimonials 2 & 3 ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Testimonial 2 */}
          <div className="fade-up fade-up-delay-1">
            <div className="bg-card border border-border rounded-card p-6 h-full">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {stars.map((_, i) => (
                  <span key={i} className="text-[#F59E0B]">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-body text-text-primary italic">
                &ldquo;I was skeptical about getting a quality website at ₹20,000. What Abhinay delivered is what agencies charge ₹1 lakh for. The whole process was over WhatsApp — no meetings, no forms.&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#22C55E] to-[#16A34A] flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div>
                  <p className="text-text-primary font-semibold">Dr. Rajesh Reddy</p>
                  <p className="text-text-muted text-xs">General Physician · Reddy Family Clinic, Secunderabad</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="fade-up fade-up-delay-2">
            <div className="bg-card border border-border rounded-card p-6 h-full">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {stars.map((_, i) => (
                  <span key={i} className="text-[#F59E0B]">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-body text-text-primary italic">
                &ldquo;Sent my clinic details on Monday. By Wednesday my website was live. Abhinay handled everything — photos, copy, SEO. I literally did nothing except approve the design.&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <p className="text-text-primary font-semibold">Dr. Meera Iyer</p>
                  <p className="text-text-muted text-xs">Dermatologist · Glow Skin Clinic, Hyderabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
