'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { HERO, WHATSAPP_URLS } from '@/lib/constants';
import { useMouseTilt } from '@/lib/animations';

export default function Hero() {
  const mockupRef = useRef<HTMLDivElement>(null);
  useMouseTilt(mockupRef);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden dot-pattern"
      aria-label="Hero section"
    >
      {/* ── Background orbs ── */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-accent/15 blur-[80px] -top-[100px] -left-[100px] animate-orb-float pointer-events-none" />
      <div
        className="absolute w-[300px] h-[300px] rounded-full bg-accent/[0.08] blur-[80px] -bottom-[80px] right-[10%] animate-orb-float pointer-events-none"
        style={{ animationDelay: '-6s' }}
      />

      {/* ── Container ── */}
      <div className="max-w-container mx-auto px-6 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">
          {/* ── Left content ── */}
          <div className="flex flex-col gap-5">
            {/* Availability pill */}
            <div className="hero-anim-1">
              <span className="inline-flex items-center gap-2 bg-success/10 border border-success/25 text-success rounded-pill px-3 py-1.5 text-sm">
                <span className="w-2 h-2 rounded-full bg-success animate-dot-pulse" />
                {HERO.availabilityText}
              </span>
            </div>

            {/* Section label */}
            <div className="hero-anim-2">
              <span className="section-label">{HERO.label}</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-hero text-text-primary hero-anim-3">
              {HERO.headline.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <p className="text-body-lg text-text-secondary max-w-[480px] hero-anim-5">
              {HERO.subheadline}
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 hero-anim-6">
              <a
                href={WHATSAPP_URLS.hero}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-whatsapp hover:bg-whatsapp-hover text-white rounded-btn px-8 py-3.5 font-bold text-[15px] transition-all inline-flex items-center gap-2"
                aria-label="Contact on WhatsApp"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Me Now →
              </a>
              <a
                href="#work"
                className="border border-border-hover text-text-primary rounded-btn px-6 py-3 hover:border-accent hover:text-accent transition-all"
                aria-label="See my work"
              >
                See My Work
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-4 items-center text-text-muted text-sm mt-6 hero-anim-7">
              {HERO.trustStrip.map((item, i) => (
                <span key={i} className="flex items-center gap-4">
                  {i > 0 && (
                    <span className="hidden md:block w-px h-4 bg-border" />
                  )}
                  <span>✓ {item}</span>
                </span>
              ))}
            </div>
          </div>

          {/* ── Right content: browser mockup ── */}
          <div className="hero-anim-8 flex justify-center lg:justify-end">
            <div
              ref={mockupRef}
              className="relative border border-border rounded-card overflow-hidden bg-card animate-float max-w-[520px] w-full"
            >
              {/* Browser top bar */}
              <div className="h-8 bg-card-hover flex items-center px-3 gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>

              {/* Demo image */}
              <Image
                src="/demo.png"
                alt="Clinic website demo - Mamra Dental Studio"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />

              {/* Live Demo badge */}
              <span className="absolute top-4 right-4 bg-accent/90 text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                Live Demo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
