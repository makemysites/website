'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'How long does it actually take?',
    a: '72 hours from the moment I have all your content — clinic name, services, phone number, and any photos. If you can send those today, your site can be live this week.',
  },
  {
    q: 'What do I need to provide?',
    a: 'Almost nothing. Your clinic name, services list, phone number, and any photos you have (optional). I write all the copy, handle the design, set up the domain, and launch. You review and approve before anything goes live.',
  },
  {
    q: 'Can I see a demo before I pay?',
    a: 'Yes. I build a free live demo for your clinic — with your actual name and services — before you commit to anything. You only pay if you love what you see.',
  },
  {
    q: "What if I don't like the design?",
    a: "Free revisions until you're 100% satisfied. I don't close the project until you personally give your sign-off. No time limits. No revision cap.",
  },
  {
    q: 'Will patients actually find my website on Google?',
    a: "SEO is built into every site — title tags, meta descriptions, Google Search Console, sitemap, and page speed optimization. You won't rank overnight, but you'll have the correct technical foundation from day one.",
  },
  {
    q: 'What about future changes?',
    a: 'Minor text/photo updates are free for 30 days after launch. After that, small updates are ₹1,500 per session. Most clients rarely need changes in the first year.',
  },
  {
    q: 'Is this only for Hyderabad clinics?',
    a: 'I primarily serve Hyderabad because I understand the local market and can meet in person if needed. But I work with clients across India — everything over WhatsApp and video call.',
  },
  {
    q: 'Is there a money-back guarantee?',
    a: "Better than that — I build a free demo first. You only pay once you've seen the work and approved it. The risk is entirely on my side.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-surface">
      <div className="max-w-[800px] mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <span className="section-label">// FAQ</span>
          <h2 className="text-h2 font-display font-bold text-text-primary mt-4">
            Everything You&apos;re{' '}
            <span className="text-accent">Wondering About</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="mt-16">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const isLast = index === faqs.length - 1;

            return (
              <div
                key={index}
                className={isLast ? '' : 'border-b border-border'}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
                >
                  <span className="text-text-primary font-semibold text-base pr-4">
                    {faq.q}
                  </span>
                  <Plus
                    size={20}
                    className={`text-text-muted transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? 'max-h-[500px] opacity-100 pb-5'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-text-secondary text-body leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
