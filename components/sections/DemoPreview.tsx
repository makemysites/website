'use client';

import { useEffect, useRef } from 'react';

export default function DemoPreview() {
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

  const callouts = [
    {
      num: '①',
      title: 'One-tap WhatsApp',
      desc: 'Patients contact you instantly, no forms',
    },
    {
      num: '②',
      title: 'Google Maps',
      desc: 'They know exactly where to find your clinic',
    },
    {
      num: '③',
      title: 'Services listed',
      desc: 'Patients know what you treat before they call',
    },
    {
      num: '④',
      title: 'Mobile-first',
      desc: 'Looks perfect on every phone, every screen size',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-base">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <span className="section-label fade-up">// SEE IT LIVE</span>
          <h2 className="text-h2 font-display font-bold text-text-primary mt-4 fade-up">
            This Is What Your Clinic Website Will Look Like
          </h2>
          <p className="text-body-lg text-text-secondary mt-4 max-w-2xl mx-auto fade-up">
            Built for Hyderabad doctors. Fast, mobile-first, and focused on
            getting patients to call.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-16 items-center">
          {/* Left — Browser Mockup */}
          <div className="lg:col-span-3 fade-up">
            <div className="bg-card rounded-card border border-border overflow-hidden shadow-2xl">
              {/* Browser Chrome */}
              <div className="bg-[#1C1C20] px-4 py-3 flex items-center gap-3">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="ml-4 flex-1 bg-[#111115] rounded px-3 py-1.5 text-xs text-text-muted font-mono">
                  mamradentalstudio.in
                </div>
              </div>

              {/* Content Area */}
              <div className="bg-gradient-to-br from-[#0d1117] to-[#161b22] min-h-[360px]">
                {/* Navbar */}
                <div className="flex items-center justify-between px-6 py-3 border-b border-white/5">
                  <span className="text-white font-bold text-sm">
                    Mamra Dental
                  </span>
                  <div className="hidden md:flex gap-4 text-white/40 text-xs">
                    <span>Home</span>
                    <span>Services</span>
                    <span>About</span>
                    <span>Contact</span>
                  </div>
                </div>

                {/* Hero */}
                <div className="px-6 py-8">
                  <h3 className="text-white font-bold text-xl md:text-2xl">
                    Expert Dental Care in Hyderabad
                  </h3>
                  <p className="text-white/50 text-xs mt-2">
                    Trusted by 500+ patients in Jubilee Hills
                  </p>
                  <span className="mt-4 bg-whatsapp text-white text-xs font-bold px-4 py-2 rounded-btn inline-block">
                    📱 Book on WhatsApp
                  </span>
                </div>

                {/* Services Row */}
                <div className="px-6 py-4 border-t border-white/5">
                  <p className="text-white/30 text-[10px] uppercase tracking-wider mb-2">
                    Our Services
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Implants', 'Braces', 'Whitening', 'Root Canal'].map(
                      (service) => (
                        <span
                          key={service}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[11px] text-white/60"
                        >
                          {service}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Maps Area */}
                <div className="px-6 py-3 border-t border-white/5">
                  <div className="flex items-center gap-2 text-white/40 text-xs">
                    📍 Jubilee Hills, Hyderabad
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-white/30 text-[10px]">
                    📱 +91 80747...
                  </span>
                  <span className="text-white/30 text-[10px]">
                    📍 Jubilee Hills
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Callouts */}
          <div className="lg:col-span-2 fade-up fade-up-delay-2">
            <div className="space-y-6">
              {callouts.map((c) => (
                <div key={c.num} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold flex-shrink-0">
                    {c.num}
                  </div>
                  <div>
                    <p className="text-text-primary font-semibold text-sm">
                      {c.title}
                    </p>
                    <p className="text-text-secondary text-sm mt-1">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 fade-up">
          <p className="text-text-muted text-body italic">
            Want exactly this, for your clinic, in 72 hours?
          </p>
          <a
            href="https://wa.me/918074782997?text=Hi%20Abhinay%2C%20I%27m%20interested%20in%20a%20clinic%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold px-8 py-4 rounded-btn text-lg transition-colors inline-flex items-center gap-2"
          >
            WhatsApp Me to Get Started →
          </a>
        </div>
      </div>
    </section>
  );
}
