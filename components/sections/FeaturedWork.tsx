'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/lib/constants';

type Category = 'clinic' | 'other';

export default function FeaturedWork() {
  const [activeTab, setActiveTab] = useState<Category>('clinic');

  const filtered = PROJECTS.filter((p) => p.category === activeTab);
  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => p !== featured);

  return (
    <section id="work" className="py-16 lg:py-24">
      <div className="max-w-container mx-auto px-6">
        {/* Section header */}
        <div className="fade-up">
          <span className="section-label">{'// MY WORK'}</span>
          <h2 className="font-display text-h2 text-text-primary mt-4">
            Clinic Websites That Actually Convert
          </h2>
          <p className="text-body-lg text-text-secondary mt-4 max-w-2xl">
            Every site is built with one goal: more patients contacting your clinic.
          </p>
        </div>

        {/* Tab pills */}
        <div className="flex gap-2 mb-12 mt-10">
          <button
            onClick={() => setActiveTab('clinic')}
            aria-label="Show clinic website projects"
            className={`rounded-pill px-5 py-2 text-sm font-semibold transition-all ${
              activeTab === 'clinic'
                ? 'bg-accent text-white'
                : 'bg-card border border-border text-text-secondary hover:text-text-primary'
            }`}
          >
            Clinic Websites
          </button>
          <button
            onClick={() => setActiveTab('other')}
            aria-label="Show other projects"
            className={`rounded-pill px-5 py-2 text-sm font-semibold transition-all ${
              activeTab === 'other'
                ? 'bg-accent text-white'
                : 'bg-card border border-border text-text-secondary hover:text-text-primary'
            }`}
          >
            Other Projects
          </button>
        </div>

        {/* Featured project */}
        {featured && (
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-0 overflow-hidden rounded-card border border-border bg-card mb-8 fade-up">
            {/* Image */}
            <div className="relative overflow-hidden group">
              {featured.image && (
                <Image
                  src={featured.image}
                  alt={featured.title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View →
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-8 flex flex-col justify-center">
              <span className="text-label uppercase tracking-[0.08em] text-accent">
                {featured.type}
              </span>
              <h3 className="text-h3 text-text-primary mt-3">{featured.title}</h3>
              {featured.outcome && (
                <p className="text-text-secondary mt-2">{featured.outcome}</p>
              )}
              {featured.liveUrl && (
                <a
                  href={featured.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-semibold mt-4 inline-flex items-center gap-1 hover:underline"
                  aria-label={`View project: ${featured.title}`}
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        )}

        {/* Remaining projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((project, i) => (
            <div
              key={project.title}
              className={`rounded-card border border-border bg-card overflow-hidden group fade-up fade-up-delay-${i + 1}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View →
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <span className="text-xs bg-accent-subtle text-accent px-2 py-0.5 rounded-pill">
                  {project.type}
                </span>
                <h3 className="text-lg font-semibold text-text-primary mt-2">
                  {project.title}
                </h3>
                {project.outcome && (
                  <p className="text-sm text-text-secondary mt-1">{project.outcome}</p>
                )}
                {(project.liveUrl || project.githubUrl) && (
                  <a
                    href={project.liveUrl || project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-sm mt-3 inline-flex items-center gap-1 hover:underline"
                    aria-label={`View project: ${project.title}`}
                  >
                    View Project
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
