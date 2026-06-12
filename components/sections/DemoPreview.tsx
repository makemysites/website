import Image from 'next/image';
import { DEMO_FEATURES, WHATSAPP_URLS } from '@/lib/constants';

export default function DemoPreview() {
  return (
    <section id="demo" className="py-16 lg:py-24 bg-surface">
      <div className="max-w-container mx-auto px-6">
        {/* Section header */}
        <div className="fade-up">
          <span className="section-label">{'// SEE IT LIVE'}</span>
          <h2 className="font-display text-h2 text-text-primary mt-4">
            This Is What Your Clinic Website Will Look Like
          </h2>
          <p className="text-body-lg text-text-secondary mt-4 max-w-2xl">
            Built specifically for Hyderabad doctors. Fast, modern, conversion-focused.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center mt-16">
          {/* LEFT — Browser mockup */}
          <div className="rounded-xl border border-border overflow-hidden bg-card fade-up">
            {/* Top bar */}
            <div className="h-10 bg-card-hover flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <div className="flex-1 ml-4 bg-base/50 rounded-md px-3 py-1 text-xs text-text-muted">
                mamradentalstudio.in
              </div>
            </div>

            {/* Image area */}
            <div className="relative">
              <Image
                src="/demo.png"
                alt="Demo clinic website preview"
                width={800}
                height={500}
                className="w-full h-auto"
              />
              <span className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-md">
                Live Demo
              </span>
            </div>
          </div>

          {/* RIGHT — Feature callouts */}
          <div className="flex flex-col gap-6">
            {DEMO_FEATURES.map((feature, i) => {
              const dashIndex = feature.text.indexOf(' — ');
              const bold = dashIndex !== -1 ? feature.text.slice(0, dashIndex) : '';
              const rest = dashIndex !== -1 ? feature.text.slice(dashIndex) : feature.text;

              return (
                <div
                  key={i}
                  className={`flex gap-4 items-start fade-up fade-up-delay-${i + 1}`}
                >
                  <div className="w-8 h-8 rounded-full bg-accent-subtle text-accent flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-body text-text-secondary">
                    {bold && (
                      <span className="text-text-primary font-semibold">{bold}</span>
                    )}
                    {rest}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center p-8 rounded-card border border-border bg-card fade-up">
          <p className="text-h3 text-text-primary mb-4">
            Want exactly this, for your clinic, in 72 hours?
          </p>
          <a
            href={WHATSAPP_URLS.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp me to get started"
            className="bg-whatsapp hover:bg-whatsapp-hover text-white rounded-btn px-8 py-3.5 font-bold inline-flex items-center gap-2 transition-all"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Me to Get Started →
          </a>
        </div>
      </div>
    </section>
  );
}
