'use client';

import { useState } from 'react';

const clinicProjects = [
  {
    type: 'Dental Clinic',
    name: 'Mamra Dental Studio',
    location: 'Jubilee Hills · Hyderabad',
    result: 'Appointment inquiries started within the first week of launch',
    gradient: 'bg-gradient-to-br from-[#0f172a] to-[#1e3a5f]',
    delay: 1,
  },
  {
    type: 'Dermatologist',
    name: 'Dr. Priya Sharma',
    location: 'Dermatologist · Hyderabad',
    result: 'Patients now discover the clinic directly through Google Search',
    gradient: 'bg-gradient-to-br from-[#1a0533] to-[#2d1b5e]',
    delay: 2,
  },
  {
    type: 'Dental Clinic',
    name: 'Smile Care Dental',
    location: 'Madhapur · Hyderabad',
    result: 'First online presence built; Google-indexed within 2 weeks',
    gradient: 'bg-gradient-to-br from-[#0a2a1a] to-[#1a4a2e]',
    delay: 3,
  },
];

type Tab = 'clinic' | 'other';

export default function FeaturedWork() {
  const [activeTab, setActiveTab] = useState<Tab>('clinic');

  return (
    <section id="work" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <span className="section-label">// MY WORK</span>
          <h2 className="text-h2 font-display font-bold text-text-primary mt-4">
            Clinic Websites That Actually Convert
          </h2>
          <p className="text-body-lg text-text-secondary mt-3 max-w-xl mx-auto">
            Every site is built with one goal: more patients contacting your
            clinic.
          </p>
        </div>

        {/* Tab pills */}
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => setActiveTab('clinic')}
            className={
              activeTab === 'clinic'
                ? 'bg-accent text-white px-5 py-2 rounded-pill text-sm font-semibold transition-colors'
                : 'bg-card border border-border text-text-secondary px-5 py-2 rounded-pill text-sm font-semibold hover:border-border-hover transition-colors'
            }
          >
            Clinic Websites
          </button>
          <button
            onClick={() => setActiveTab('other')}
            className={
              activeTab === 'other'
                ? 'bg-accent text-white px-5 py-2 rounded-pill text-sm font-semibold transition-colors'
                : 'bg-card border border-border text-text-secondary px-5 py-2 rounded-pill text-sm font-semibold hover:border-border-hover transition-colors'
            }
          >
            Other Projects
          </button>
        </div>

        {/* Tab content */}
        {activeTab === 'clinic' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {clinicProjects.map((project) => (
              <div
                key={project.name}
                className={`card fade-up fade-up-delay-${project.delay} overflow-hidden p-0`}
              >
                {/* Preview area */}
                <div
                  className={`h-[200px] ${project.gradient} p-6 flex flex-col justify-between relative`}
                >
                  {/* Type tag */}
                  <span className="inline-flex bg-white/10 text-white/80 text-xs font-semibold px-3 py-1 rounded-pill self-start">
                    {project.type}
                  </span>

                  {/* Center content */}
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      {project.name}
                    </h3>
                    <p className="text-white/50 text-xs mt-1">
                      {project.location}
                    </p>
                  </div>

                  {/* Mock WhatsApp button */}
                  <span className="bg-whatsapp/80 text-white text-xs font-bold px-4 py-2 rounded-btn inline-flex items-center gap-1.5 self-start">
                    📱 Book Appointment
                  </span>
                </div>

                {/* Content area */}
                <div className="p-5">
                  <p className="text-text-primary font-semibold text-base">
                    {project.name}
                  </p>
                  <p className="text-accent text-sm mt-2 font-medium">
                    {project.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-10 text-center py-16">
            <p className="text-text-muted italic">
              Coming soon — personal and business projects.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
