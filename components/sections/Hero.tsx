'use client';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen flex items-center py-24 pt-32 bg-base"
    >
      {/* ── Background Orbs ── */}
      <div
        className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-accent/[0.12] blur-[80px] animate-orb-float pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-50px] right-[-50px] w-[280px] h-[280px] rounded-full bg-accent/[0.07] blur-[80px] animate-orb-float [animation-delay:6s] pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Container ── */}
      <div className="max-w-[1200px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left Column ── */}
          <div>
            {/* Availability Pill */}
            <div className="hero-anim-1">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.2)] text-xs text-success mb-6">
                <span className="w-2 h-2 rounded-full bg-success animate-dot-pulse" />
                Currently accepting projects for July 2026
              </span>
            </div>

            {/* Section Label */}
            <div className="hero-anim-2">
              <span className="section-label">
                {'//'} HYDERABAD&apos;S CLINIC WEBSITE SPECIALIST
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-hero text-text-primary mt-4 hero-anim-3">
              Your Clinic Deserves{' '}
              <span className="text-accent">Patients</span> — Not Just A
              Website.
            </h1>

            {/* Subheadline */}
            <p className="text-body-lg text-text-secondary max-w-[480px] mt-6 hero-anim-4">
              I build high-converting websites for doctors and clinics in
              Hyderabad. Designed to rank on Google, load in under 2 seconds,
              and turn visitors into booked appointments. Live in 72 hours.
            </p>

            {/* Button Row */}
            <div className="flex flex-wrap gap-4 mt-8 hero-anim-5">
              <a
                href="https://wa.me/918074782997?text=Hi%20Abhinay%2C%20I%27m%20interested%20in%20a%20clinic%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-whatsapp hover:bg-whatsapp-hover text-white font-bold px-6 py-3 rounded-btn transition-colors inline-flex items-center gap-2"
              >
                WhatsApp Me Now →
              </a>
              <a
                href="#work"
                className="border border-border-hover text-text-primary hover:bg-card px-6 py-3 rounded-btn transition-colors font-semibold"
              >
                See My Work
              </a>
            </div>

            {/* Trust Strip */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-8 text-sm text-text-muted hero-anim-6">
              <span>
                <span className="text-success">✓</span> 72-hour delivery
              </span>
              <span aria-hidden="true">·</span>
              <span>
                <span className="text-success">✓</span> 15+ clinics launched
              </span>
              <span aria-hidden="true">·</span>
              <span>
                <span className="text-success">✓</span> Free revisions until
                you&apos;re happy
              </span>
            </div>
          </div>

          {/* ── Right Column — Browser Mockup ── */}
          <div className="hidden lg:block hero-anim-7">
            <div className="relative animate-float">
              {/* Live Badge */}
              <span className="absolute top-4 right-4 z-10 bg-accent/20 border border-accent/30 text-accent text-xs font-semibold px-3 py-1 rounded-pill">
                Live Demo
              </span>

              {/* Browser Card */}
              <div className="bg-card rounded-card border border-border overflow-hidden shadow-2xl">
                {/* Chrome Bar */}
                <div className="bg-[#1C1C20] px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="ml-4 flex-1 bg-[#111115] rounded px-3 py-1 text-xs text-text-muted">
                    mamradentalstudio.in
                  </div>
                </div>

                {/* Content Area */}
                <div className="bg-gradient-to-br from-[#0d1117] to-[#161b22] p-6 space-y-4 min-h-[280px]">
                  {/* Clinic Header */}
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      Mamra Dental Studio
                    </h3>
                    <p className="text-text-muted text-xs mt-1">
                      Hyderabad · Mon–Sat 9AM–7PM
                    </p>
                  </div>

                  {/* Services */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-text-secondary">
                      Dental Implants
                    </span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-text-secondary">
                      Teeth Whitening
                    </span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-text-secondary">
                      Braces
                    </span>
                  </div>

                  {/* WhatsApp Button */}
                  <div className="mt-4 w-full bg-whatsapp text-white text-sm font-bold py-2.5 rounded-btn text-center">
                    📱 Book Appointment on WhatsApp
                  </div>

                  {/* Maps */}
                  <p className="mt-3 text-text-muted text-xs flex items-center gap-1">
                    📍 Jubilee Hills, Hyderabad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
