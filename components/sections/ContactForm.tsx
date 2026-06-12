'use client';

import { useState } from 'react';
import {
  SPECIALTY_OPTIONS,
  NEED_OPTIONS,
  BUDGET_OPTIONS,
  CONTACT,
} from '@/lib/constants';
import { buildFormWhatsAppURL, validatePhone } from '@/lib/utils';

interface FormData {
  name: string;
  clinic: string;
  specialty: string;
  phone: string;
  needs: string[];
  budget: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    clinic: '',
    specialty: '',
    phone: '',
    needs: [],
    budget: '',
    message: '',
  });
  const [phoneError, setPhoneError] = useState('');

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleNeed = (need: string) => {
    setForm((prev) => ({
      ...prev,
      needs: prev.needs.includes(need)
        ? prev.needs.filter((n) => n !== need)
        : [...prev.needs, need],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePhone(form.phone)) {
      setPhoneError('Please enter a valid 10-digit Indian mobile number');
      return;
    }
    setPhoneError('');
    const url = buildFormWhatsAppURL({
      name: form.name,
      clinic: form.clinic,
      specialty: form.specialty,
      phone: form.phone,
      needs: form.needs,
      budget: form.budget,
      message: form.message,
    });
    window.open(url, '_blank');
  };

  const inputClasses =
    'w-full bg-base border border-border rounded-btn px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-accent focus:ring-2 focus:ring-accent-subtle outline-none transition-all';

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="max-w-container mx-auto px-6">
        {/* Headline */}
        <h2 className="font-display text-h2 text-text-primary text-center mb-2 fade-up">
          Tell Me About Your Clinic
        </h2>

        {/* Subheadline */}
        <p className="text-body-lg text-text-secondary text-center mb-12 fade-up fade-up-delay-1">
          I&apos;ll send you a free demo website based on what you share.
        </p>

        {/* Form card */}
        <div className="max-w-2xl mx-auto glass rounded-2xl p-6 lg:p-10 fade-up fade-up-delay-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Your Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-text-secondary mb-2"
              >
                Your Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                value={form.name}
                onChange={(e) => updateField('name', e.target.value)}
                placeholder="Dr. Priya Sharma"
                className={inputClasses}
              />
            </div>

            {/* Clinic / Practice Name */}
            <div>
              <label
                htmlFor="clinic"
                className="block text-sm font-medium text-text-secondary mb-2"
              >
                Clinic / Practice Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                id="clinic"
                required
                value={form.clinic}
                onChange={(e) => updateField('clinic', e.target.value)}
                placeholder="Sharma Dental Clinic"
                className={inputClasses}
              />
            </div>

            {/* Two columns: Specialty + WhatsApp Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Specialty */}
              <div>
                <label
                  htmlFor="specialty"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Specialty <span className="text-accent">*</span>
                </label>
                <select
                  id="specialty"
                  required
                  value={form.specialty}
                  onChange={(e) => updateField('specialty', e.target.value)}
                  className={`${inputClasses} appearance-none`}
                >
                  <option value="" disabled>
                    Select specialty
                  </option>
                  {SPECIALTY_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* WhatsApp Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  WhatsApp Number <span className="text-accent">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={form.phone}
                  onChange={(e) => {
                    updateField('phone', e.target.value);
                    if (phoneError) setPhoneError('');
                  }}
                  placeholder="80747XXXXX"
                  className={`${inputClasses} ${phoneError ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                />
                {phoneError && (
                  <p className="text-red-400 text-xs mt-1">{phoneError}</p>
                )}
              </div>
            </div>

            {/* What do you need? - Checkboxes */}
            <div>
              <p className="block text-sm font-medium text-text-secondary mb-2">
                What do you need?
              </p>
              <div className="space-y-3">
                {NEED_OPTIONS.map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.needs.includes(option)}
                      onChange={() => toggleNeed(option)}
                      className="w-5 h-5 rounded border-border accent-accent"
                    />
                    <span className="text-sm text-text-secondary">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Budget Range - Radio buttons (optional) */}
            <div>
              <p className="block text-sm font-medium text-text-secondary mb-2">
                Budget Range{' '}
                <span className="text-text-muted font-normal">(optional)</span>
              </p>
              <div className="space-y-3">
                {BUDGET_OPTIONS.map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="budget"
                      value={option}
                      checked={form.budget === option}
                      onChange={(e) => updateField('budget', e.target.value)}
                      className="w-5 h-5 accent-accent"
                    />
                    <span className="text-sm text-text-secondary">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Anything else? */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-text-secondary mb-2"
              >
                Anything else?{' '}
                <span className="text-text-muted font-normal">(optional)</span>
              </label>
              <textarea
                id="message"
                rows={3}
                value={form.message}
                onChange={(e) => updateField('message', e.target.value)}
                placeholder="e.g., I want patients to book appointments online, I have photos to share..."
                className={inputClasses}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              aria-label="Send details via WhatsApp"
              className="w-full bg-whatsapp hover:bg-whatsapp-hover text-white rounded-btn py-4 font-bold text-lg transition-all mt-2"
            >
              Send My Details via WhatsApp →
            </button>
          </form>

          {/* Fallback email */}
          <p className="mt-4 text-center text-sm text-text-muted">
            Or email me at:{' '}
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-accent hover:underline"
            >
              {CONTACT.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
