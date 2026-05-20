const About = () => {
  const benefits = [
    { icon: '🏥', title: 'I specialize in clinic & doctor websites', desc: 'I understand what patients look for' },
    { icon: '⚡', title: '48–72 hour delivery', desc: 'You get your website fast, not in weeks' },
    { icon: '📞', title: 'Direct access to me', desc: 'No middlemen, WhatsApp support always' },
    { icon: '♾️', title: "Free revisions until you're happy", desc: 'You only pay when you love it' },
  ];

  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB',
    'MySQL', 'Python', 'Django', 'TailwindCSS', 'Git', 'GitHub', 'Netlify', 'AI Integration'
  ];

  return (
    <section id="about">
      <div className="container">
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', marginBottom: '64px' }} className="reveal-element">
          Why Work With Me?
        </h2>

        <div className="about-grid">
          {/* Left Column - Benefits */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {benefits.map((item, index) => (
              <div
                key={index}
                className="card reveal-element"
                style={{ padding: '24px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}
              >
                <div style={{ fontSize: '28px', lineHeight: 1 }}>{item.icon}</div>
                <div>
                  <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>{item.title}</h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Bio & Skills */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }} className="reveal-element">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', color: 'var(--color-text-secondary)', fontSize: '18px', lineHeight: 1.6 }}>
              <p>
                I'm <strong>Abhinay Kumar</strong>, a web developer based in Hyderabad specializing in websites for doctors, clinics, and healthcare businesses.
              </p>
              <p>
                I understand what patients look for when they visit a doctor's website — trust, credentials, easy appointment booking, and clear contact information. I build exactly that.

              My VJIT Study Portal has been used by 600+ students, proving I build things that real people actually use. I bring that same reliability to every client website.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-primary)', marginBottom: '16px' }}>
                Technologies I Use
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {skills.map((skill, index) => (
                  <span key={index} className="tag reveal-element">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .about-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 64px;
          }
          @media (min-width: 992px) {
            .about-grid {
              grid-template-columns: 1fr 1fr;
            }
          }
        `}
      </style>
    </section>
  );
};

export default About;
