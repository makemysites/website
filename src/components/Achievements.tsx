const Achievements = () => {
  const achievements = [
    {
      icon: '🏆',
      title: '1st Place — ACM Competition',
      desc: 'Secured first position in a competitive programming event conducted by ACM.',
      color: '#D97706', // Gold
    },
    {
      icon: '🚀',
      title: 'GIG-A-THON Hackathon Winner',
      desc: 'Won the GIG-A-THON hackathon competing against teams across the region.',
      color: 'var(--color-accent)', // Blue
    },
    {
      icon: '⭐',
      title: 'Google Arcade Legend — Season 2',
      desc: 'Achieved Arcade Legend Tier with 95 Arcade points in Google Skills Arcade 2025.',
      color: 'var(--color-success)', // Green
    },
    {
      icon: '📜',
      title: 'Infosys Springboard — Java & DBMS',
      desc: 'Completed certified courses in Java and Database Management Systems.',
      color: 'var(--color-primary)', // Navy
    },
  ];

  return (
    <section id="achievements">
      <div className="container">
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', marginBottom: '48px', textAlign: 'center' }} className="reveal-element">
          Recognition & Certifications
        </h2>

        <div className="achievements-layout">
          {achievements.map((item, index) => (
            <div key={index} className="card reveal-element" style={{ display: 'flex', flexDirection: 'column', padding: '24px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: item.color }} />
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .achievements-layout {
            display: grid;
            grid-template-columns: 1fr;
            gap: 24px;
          }
          @media (min-width: 768px) {
            .achievements-layout {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (min-width: 1024px) {
            .achievements-layout {
              grid-template-columns: repeat(4, 1fr);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Achievements;
