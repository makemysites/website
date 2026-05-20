import { useState } from 'react';
import { ContactForm } from '../types';
import { submitContactForm } from '../api/contactApi';
import { validateContact } from '../utils/validation';

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    phone: '',
    businessType: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateContact(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await submitContactForm(formData);
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', businessType: '', service: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        <div style={{ marginBottom: '64px' }} className="reveal-element">
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>Let's Build Something</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', marginTop: '16px', maxWidth: '600px' }}>
            Fill in the form or reach out directly. I respond within 2 hours on WhatsApp.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column - Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }} className="reveal-element">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <a
                href="https://wa.me/+918074782997"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card card"
              >
                <div className="contact-icon">📞</div>
                <div>
                  <h3 style={{ fontSize: '16px', marginBottom: '4px' }}>Phone / WhatsApp</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>+91 8074782997</p>
                </div>
              </a>

              <a
                href="mailto:tippaniabhinay@gmail.com"
                className="contact-card card"
              >
                <div className="contact-icon">📧</div>
                <div>
                  <h3 style={{ fontSize: '16px', marginBottom: '4px' }}>Email</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>tippaniabhinay@gmail.com</p>
                </div>
              </a>

              <div className="contact-card card" style={{ cursor: 'default' }}>
                <div className="contact-icon">📍</div>
                <div>
                  <h3 style={{ fontSize: '16px', marginBottom: '4px' }}>Location</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>Hyderabad, Telangana</p>
                </div>
              </div>

              <div className="contact-card card" style={{ cursor: 'default' }}>
                <div className="contact-icon">🕐</div>
                <div>
                  <h3 style={{ fontSize: '16px', marginBottom: '4px' }}>Response Time</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>Within 2 hours</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
              <a href="https://www.linkedin.com/in/abhinay-kumar-tippani/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://github.com/abhinay-kumar-tippani/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="card reveal-element" style={{ padding: '32px' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number (WhatsApp) *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit number"
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="businessType">Business Type *</label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className={errors.businessType ? 'error' : ''}
                >
                  <option value="">Select...</option>
                  <option value="Doctor/Clinic">Doctor / Clinic</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Shop/Retail">Shop / Retail</option>
                  <option value="Salon">Salon</option>
                  <option value="Other">Other</option>
                </select>
                {errors.businessType && <span className="error-text">{errors.businessType}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interested In *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={errors.service ? 'error' : ''}
                >
                  <option value="">Select...</option>
                  <option value="Business Website">Business Website</option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="E-Commerce">E-Commerce</option>
                  <option value="Web App">Web App</option>
                  <option value="Other">Other</option>
                </select>
                {errors.service && <span className="error-text">{errors.service}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell me about your business and what you need..."
                />
              </div>

              {submitStatus === 'success' && (
                <div style={{ padding: '12px', backgroundColor: 'var(--color-tag-bg)', color: 'var(--color-success)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>✓</span> Thanks! I'll WhatsApp you within 2 hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div style={{ padding: '12px', backgroundColor: '#FEE2E2', color: '#DC2626', borderRadius: '8px' }}>
                  Something went wrong. Please WhatsApp me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px', marginTop: '8px' }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>
        {`
          .contact-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 48px;
          }
          @media (min-width: 992px) {
            .contact-grid {
              grid-template-columns: 1fr 1.5fr;
            }
          }
          .contact-card {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 16px 20px;
          }
          a.contact-card:hover {
            border-left: 4px solid var(--color-accent);
          }
          .contact-icon {
            font-size: 24px;
            width: 48px;
            height: 48px;
            background-color: var(--color-tag-bg);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .social-link {
            width: 40px;
            height: 40px;
            background-color: var(--color-surface);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: var(--color-primary);
            box-shadow: 0 1px 3px rgba(0,0,0,0.08);
            transition: all 0.2s;
            text-transform: uppercase;
          }
          .social-link:hover {
            background-color: var(--color-accent);
            color: white;
            transform: translateY(-2px);
          }
          .form-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
          .form-group label {
            font-size: 14px;
            font-weight: 500;
            color: var(--color-text);
          }
          .form-group input, .form-group select, .form-group textarea {
            padding: 12px 16px;
            border: 1px solid var(--color-border);
            border-radius: 8px;
            font-family: inherit;
            font-size: 15px;
            transition: border-color 0.2s;
            background-color: var(--color-bg);
          }
          .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
            outline: none;
            border-color: var(--color-accent);
          }
          .form-group input.error, .form-group select.error {
            border-color: #DC2626;
          }
          .error-text {
            color: #DC2626;
            font-size: 12px;
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
