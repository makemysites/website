'use client';

import { useState } from 'react';
import { FAQ_ITEMS } from '@/lib/constants';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section label */}
        <div className="fade-up">
          <span className="section-label">{'// FAQ'}</span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-h2 text-text-primary mt-4 fade-up fade-up-delay-1">
          Everything You&apos;re Wondering About
        </h2>

        {/* Accordion */}
        <div className="mt-12 space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border border-border rounded-card overflow-hidden transition-all fade-up fade-up-delay-${Math.min(index + 2, 8)}`}
              >
                {/* Question button */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 bg-card hover:bg-card-hover transition-colors cursor-pointer text-left"
                  aria-expanded={isOpen}
                  aria-label={`Toggle answer for: ${item.question}`}
                >
                  <span className="text-body font-semibold text-text-primary pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-text-muted transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Answer with CSS max-height transition */}
                <div
                  className="transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden"
                  style={{
                    maxHeight: isOpen ? '500px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="p-5 pt-0 text-body text-text-secondary leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
