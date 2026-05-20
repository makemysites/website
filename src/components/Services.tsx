const Services = () => {
  const services = [
    { icon: '🏥', title: 'Clinic & Doctor Websites', desc: 'Complete professional website for your clinic — appointments, doctor profile, services, patient trust. Ready in 72 hours.', special: true },
    { icon: '📄', title: 'Landing Page', desc: 'One focused page that converts visitors into customers or patients.' },
    { icon: '🛒', title: 'E-Commerce', desc: 'Online store with product listings, cart, and payment integration.' },
    { icon: '🔍', title: 'SEO Optimization', desc: 'Get found on Google by patients and customers searching near you.' },
    { icon: '⚙️', title: 'Web App', desc: 'Custom web applications for booking, management, or any workflow.' },
    { icon: '🧩', title: 'Chrome Extension', desc: "Browser tools that automate tasks or enhance your team's productivity." },
    { icon: '🤖', title: 'AI Integration', desc: 'Add smart features like chatbots, predictions, or automation to your site.' },
    { icon: '⚛️', title: 'React Development', desc: 'Fast, modern frontend with React for apps that feel instant.' },
  ];

  return (
    <section id="services" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{ marginBottom: '64px', textAlign: 'center' }} className="reveal-element">
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>What I Build For You</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
            Every service is tailored for your business. No templates, no shortcuts.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="card service-card reveal-element"
              style={{
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                borderLeft: service.special ? '3px solid #2563EB' : '4px solid transparent',
                background: service.special ? '#EFF6FF' : undefined,
              }}
            >
              {service.special && (
                <span style={{ background: '#2563EB', color: '#fff', fontSize: '10px', padding: '2px 8px', borderRadius: '10px', marginBottom: '12px', fontWeight: 600 }}>
                  Most Popular
                </span>
              )}
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>{service.icon}</div>
              <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>{service.title}</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: 1.5 }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '64px 0', marginTop: '100px' }} className="reveal-element">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '24px' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', color: 'white' }}>
            Ready to get your website? Let's talk about your project.
          </h2>
          <a href="#contact" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }}>
            Start a Conversation →
          </a>
        </div>
      </div>

      <style>
        {`
          .services-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .service-card:hover {
            border-left-color: var(--color-accent) !important;
            background-color: var(--color-tag-bg) !important;
          }
          @media (min-width: 768px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (min-width: 1024px) {
            .services-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Services;
