'use client';

import { useState } from 'react';

const SPECIALTIES = [
  '',
  'General Physician',
  'Dentist',
  'Dermatologist',
  'Orthopedic',
  'Gynecologist',
  'Cardiologist',
  'Pediatrician',
  'Other',
];

const NEED_OPTIONS = ['New Website', 'Redesign Existing Site', 'SEO Only', 'Not Sure Yet'];

const BUDGET_OPTIONS = ['Under ₹15K', '₹15K–₹25K', '₹25K+', 'Let Abhinay Suggest'];

export default function ContactForm() {
  const [name, setName] = useState('');
  const [clinic, setClinic] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [phone, setPhone] = useState('');
  const [needs, setNeeds] = useState<string[]>([]);
  const [budget, setBudget] = useState('');
  const [notes, setNotes] = useState('');

  const toggleNeed = (option: string) => {
    setNeeds((prev) =>
      prev.includes(option) ? prev.filter((n) => n !== option) : [...prev, option]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi Abhinay, I'm interested in a website for my clinic.\n\n` +
        `Name: ${name}\nClinic: ${clinic}\nSpecialty: ${specialty}\n` +
        `Phone: ${phone}\nNeeds: ${needs.join(', ')}\n` +
        `Budget: ${budget}\nNotes: ${notes || 'None'}`
    );
    window.open(`https://wa.me/918074782997?text=${msg}`, '_blank');
  };

  const inputClasses =
    'w-full bg-card border border-border rounded-btn px-4 py-3 text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-accent transition-colors';

  const labelClasses = 'text-text-primary text-sm font-medium mb-2 block';

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-[700px] mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <span className="section-label">// CONTACT</span>
          <h2 className="text-h2 text-text-primary font-bold mt-4">Tell Me About Your Clinic</h2>
          <p className="text-body-lg text-text-secondary mt-4">
            I&apos;ll send you a free demo website based on what you share.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-12 space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className={labelClasses}>
              Your Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Dr. Priya Sharma"
              className={inputClasses}
            />
          </div>

          {/* Clinic */}
          <div>
            <label htmlFor="clinic" className={labelClasses}>
              Clinic / Practice Name
            </label>
            <input
              id="clinic"
              type="text"
              required
              value={clinic}
              onChange={(e) => setClinic(e.target.value)}
              placeholder="Sharma Dental Care"
              className={inputClasses}
            />
          </div>

          {/* Specialty */}
          <div>
            <label htmlFor="specialty" className={labelClasses}>
              Specialty
            </label>
            <select
              id="specialty"
              required
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className={`${inputClasses} appearance-none cursor-pointer`}
            >
              <option value="" disabled>
                Select your specialty
              </option>
              {SPECIALTIES.filter(Boolean).map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className={labelClasses}>
              WhatsApp Number
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 80747 82997"
              className={inputClasses}
            />
          </div>

          {/* Needs — Checkboxes */}
          <div>
            <span className={labelClasses}>What do you need?</span>
            <div className="grid grid-cols-2 gap-3 mt-1">
              {NEED_OPTIONS.map((option) => {
                const checked = needs.includes(option);
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => toggleNeed(option)}
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-btn border text-sm text-left transition-colors ${
                      checked
                        ? 'bg-accent/10 border-accent/40 text-text-primary'
                        : 'bg-card border-border text-text-secondary hover:border-border-hover'
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded-[4px] border flex-shrink-0 flex items-center justify-center transition-colors ${
                        checked
                          ? 'bg-accent border-accent'
                          : 'border-border-hover bg-transparent'
                      }`}
                    >
                      {checked && (
                        <svg
                          className="w-2.5 h-2.5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Budget — Radio */}
          <div>
            <span className={labelClasses}>Budget Range</span>
            <div className="grid grid-cols-2 gap-3 mt-1">
              {BUDGET_OPTIONS.map((option) => {
                const selected = budget === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setBudget(option)}
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-btn border text-sm text-left transition-colors ${
                      selected
                        ? 'bg-accent/10 border-accent/40 text-text-primary'
                        : 'bg-card border-border text-text-secondary hover:border-border-hover'
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center transition-colors ${
                        selected
                          ? 'border-accent'
                          : 'border-border-hover'
                      }`}
                    >
                      {selected && (
                        <span className="w-2 h-2 rounded-full bg-accent" />
                      )}
                    </span>
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label htmlFor="notes" className={labelClasses}>
              Anything else?
            </label>
            <textarea
              id="notes"
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. I want patients to book online, I have photos ready..."
              className={`${inputClasses} resize-none`}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-whatsapp hover:bg-whatsapp-hover text-white font-bold py-4 rounded-btn text-base transition-colors mt-2"
          >
            Send My Details via WhatsApp →
          </button>
        </form>

        {/* Fallback */}
        <p className="mt-4 text-center text-text-muted text-sm">
          Or email me at:{' '}
          <a
            href="mailto:tippaniabhinay@gmail.com"
            className="text-accent hover:underline"
          >
            tippaniabhinay@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
