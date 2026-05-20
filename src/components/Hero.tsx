const Hero = () => {
  return (
    <section id="home" style={{ paddingTop: '160px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
      {/* Background Pulse Effect */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '0%',
          transform: 'translate(20%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(255,255,255,0) 70%)',
          borderRadius: '50%',
          animation: 'pulse-bg 8s ease-in-out infinite alternate',
          zIndex: -1,
        }}
      />

      <div className="container">
        <div className="hero-grid">
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <span
              style={{
                color: 'var(--color-primary)',
                fontFamily: 'monospace',
                fontSize: '14px',
                letterSpacing: '0.1em',
                fontWeight: 600,
              }}
            >
              FREELANCE WEB DEVELOPER · HYDERABAD
            </span>

            <h1
              style={{
                fontSize: 'clamp(40px, 5vw, 64px)',
                letterSpacing: '-0.02em',
              }}
            >
              I Build Professional Websites<br />for Doctors & Clinics in Hyderabad
            </h1>

            <p
              style={{
                color: 'var(--color-text-secondary)',
                fontSize: '18px',
                lineHeight: 1.6,
                maxWidth: '480px',
              }}
            >
              Clean, fast, and patient-friendly websites that help your clinic get found online and book more appointments. Ready in 72 hours.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
              <a href="#projects" className="btn btn-primary">
                See My Work
              </a>
              <a
                href="https://wa.me/918074782997?text=Hi%20Abhinay%2C%20I%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20a%20website%20for%20my%20clinic."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ gap: '8px' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                WhatsApp Me
              </a>
            </div>
          </div>

          {/* Right Column - Trust Card */}
          <div className="trust-card-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="card" style={{ padding: '32px', width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { icon: '🏥', text: 'Clinic & Doctor Website Specialist' },
                { icon: '⚡', text: 'Website Ready in 72 Hours' },
                { icon: '📱', text: 'Mobile-First, Patient-Friendly Design' },
                { icon: '💬', text: 'Direct WhatsApp Support Always' },
              ].map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--color-tag-bg)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                    }}
                  >
                    {item.icon}
                  </div>
                  <span style={{ fontWeight: 500, color: 'var(--color-text)' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Tags */}
        <div style={{ marginTop: '80px', display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center', color: 'var(--color-text-secondary)', fontSize: '15px', fontWeight: 500 }}>
          <span>React</span>
          <span>·</span>
          <span>Node.js</span>
          <span>·</span>
          <span>MongoDB</span>
          <span>·</span>
          <span>Python</span>
          <span>·</span>
          <span>AI Integration</span>
          <span>·</span>
          <span>SEO</span>
        </div>
      </div>

      <style>
        {`
          .hero-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 48px;
          }
          @media (min-width: 992px) {
            .hero-grid {
              grid-template-columns: 1.2fr 0.8fr;
              align-items: center;
            }
          }
          @keyframes pulse-bg {
            0% { transform: translate(20%, -50%) scale(1); opacity: 0.5; }
            100% { transform: translate(20%, -50%) scale(1.1); opacity: 1; }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
