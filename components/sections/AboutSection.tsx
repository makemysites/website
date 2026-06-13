import { Linkedin, Github } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-base">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Label */}
        <div className="text-center">
          <span className="section-label">// ABOUT ME</span>
          <h2 className="text-h2 text-text-primary font-bold mt-4">
            Built by a Developer Who Understands What Clinics Need
          </h2>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-16 items-start">
          {/* Left — Avatar Card */}
          <div className="lg:col-span-2 fade-up">
            <div className="w-full max-w-[280px] mx-auto lg:mx-0 rounded-[16px] bg-gradient-to-br from-[#1a1a3e] to-[#0d1117] border border-border p-8 flex flex-col items-center gap-5">
              {/* Initials Badge */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center text-white text-[28px] font-bold">
                AK
              </div>

              {/* Info */}
              <div className="text-center">
                <p className="text-text-primary font-semibold text-base">Abhinay Kumar</p>
                <p className="text-text-muted text-[13px] mt-1">Full Stack Developer</p>
                <p className="text-text-muted text-xs mt-1">📍 Hyderabad, India</p>
              </div>

              {/* Credential Badges */}
              <div className="w-full space-y-2 mt-2">
                <div className="bg-accent/10 border border-accent/20 rounded-md px-3 py-2 text-[11px] text-text-secondary">
                  🏆 ACM Competition Winner
                </div>
                <div className="bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.2)] rounded-md px-3 py-2 text-[11px] text-text-secondary">
                  ⭐ Google Arcade Legend
                </div>
                <div className="bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.2)] rounded-md px-3 py-2 text-[11px] text-text-secondary">
                  🚀 GIG-A-THON Hackathon Winner
                </div>
              </div>
            </div>
          </div>

          {/* Right — Bio Copy */}
          <div className="lg:col-span-3 fade-up fade-up-delay-1">
            <div className="space-y-4">
              <p className="text-body text-text-secondary leading-relaxed">
                I started focusing on clinic websites after seeing how many good doctors in
                Hyderabad were losing patients online — not because they weren&apos;t good at
                their job, but because their website was invisible, outdated, or impossible to
                use on a phone.
              </p>
              <p className="text-body text-text-secondary leading-relaxed">
                I have since built 15+ clinic and healthcare websites across Hyderabad. I know
                exactly what makes a patient pick up the phone and call — and what makes them
                close the tab.
              </p>
              <p className="text-body text-text-secondary leading-relaxed">
                I am a solo developer. When you message me, you are talking to me directly —
                not an account manager, not an intern. And since I am based in Hyderabad, we
                can meet over chai if you would prefer that.
              </p>

              {/* Signature */}
              <p className="mt-6 text-text-primary italic text-sm">
                — Abhinay Kumar · MakeMySites.in · Hyderabad
              </p>

              {/* Social Links */}
              <div className="mt-4 flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/abhinay-kumar-tippani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-text-muted hover:text-text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/abhinay-kumar-tippani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-text-muted hover:text-text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
