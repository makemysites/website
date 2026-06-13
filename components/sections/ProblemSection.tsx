'use client';

export default function ProblemSection() {
  const problems = [
    {
      icon: '🔍',
      iconBg: 'bg-[rgba(239,68,68,0.1)]',
      title: 'Patients Cannot Find You',
      body: 'Over 70% of patients search Google before choosing a doctor. If your clinic has no website — or a broken one — those patients call your competitor, not you.',
      solution: '→ SEO is built into every site I build',
      delay: 1,
    },
    {
      icon: '⚠️',
      iconBg: 'bg-[rgba(245,158,11,0.1)]',
      title: 'Outdated Design Destroys Trust',
      body: 'Patients judge your clinic in under 50 milliseconds. An old, cluttered website silently tells them: this doctor is not keeping up. They leave before reading anything.',
      solution: '→ Modern, trust-first design that works on every phone',
      delay: 2,
    },
    {
      icon: '📵',
      iconBg: 'bg-[rgba(99,102,241,0.1)]',
      title: 'No Clear Path to Book',
      body: "No WhatsApp button. No phone number visible. No appointment link. Interested patients give up in 10 seconds because they don't know what to do next.",
      solution: '→ One-tap WhatsApp + call CTA on every page',
      delay: 3,
    },
  ];

  return (
    <section id="problems" className="py-24 bg-base">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <span className="section-label">// THE PROBLEM</span>
          <h2 className="text-h2 text-text-primary font-bold mt-4">
            Most Clinic Websites Are Quietly Losing You Patients
          </h2>
          <p className="text-body-lg text-text-secondary mt-4 max-w-2xl mx-auto">
            A website that just &ldquo;exists&rdquo; is worse than none. Here&apos;s what it costs you.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className={`card fade-up fade-up-delay-${problem.delay}`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-full ${problem.iconBg} flex items-center justify-center text-2xl mb-5`}
              >
                {problem.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                {problem.title}
              </h3>

              {/* Body */}
              <p className="text-body text-text-secondary leading-relaxed">
                {problem.body}
              </p>

              {/* Solution */}
              <p className="mt-4 text-sm text-accent font-medium">
                {problem.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
