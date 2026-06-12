import { SOCIAL_PROOF_NAMES } from '@/lib/constants';

export default function SocialProofBar() {
  return (
    <section className="bg-surface border-y border-border" aria-label="Trusted clinics">
      <div className="max-w-container mx-auto px-6 py-6 overflow-hidden">
        <p className="text-label uppercase tracking-[0.08em] text-text-muted text-center mb-4">
          TRUSTED BY CLINICS ACROSS HYDERABAD
        </p>

        <div className="marquee-mask">
          <div className="flex gap-12 animate-scroll-left">
            {/* First set */}
            {SOCIAL_PROOF_NAMES.map((name) => (
              <span
                key={`a-${name}`}
                className="text-text-secondary font-medium text-sm whitespace-nowrap"
              >
                {name}
              </span>
            ))}

            {/* Duplicate set for seamless infinite loop */}
            {SOCIAL_PROOF_NAMES.map((name) => (
              <span
                key={`b-${name}`}
                className="text-text-secondary font-medium text-sm whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
