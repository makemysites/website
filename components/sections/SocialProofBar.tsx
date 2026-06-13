'use client';

const clinics = [
  'Mamra Dental Studio',
  'Smile Care Dental',
  'Orthocare Clinic',
  'ClearSkin Dermatology',
  'Ramesh Medical Centre',
  'City Health Poly',
];

function ClinicList() {
  return (
    <>
      {clinics.map((name, i) => (
        <span key={i} className="flex items-center gap-8">
          <span className="text-text-muted text-sm whitespace-nowrap hover:text-text-secondary transition-colors cursor-default">
            {name}
          </span>
          <span className="text-border" aria-hidden="true">
            ·
          </span>
        </span>
      ))}
    </>
  );
}

export default function SocialProofBar() {
  return (
    <section className="bg-surface border-y border-border py-5 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-center mb-4 text-label text-text-muted uppercase tracking-widest">
          TRUSTED BY CLINICS ACROSS HYDERABAD
        </p>
      </div>

      {/* Marquee */}
      <div className="marquee-mask overflow-hidden relative">
        <div className="flex gap-8 animate-scroll-left">
          {/* Duplicate the list twice for seamless loop */}
          <ClinicList />
          <ClinicList />
        </div>
      </div>
    </section>
  );
}
