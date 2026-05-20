export default function TrustSection() {
  const achievements = [
    {
      emoji: '🏆',
      title: '1st Place — ACM Competition',
      desc: 'Secured first position in competitive programming conducted by ACM',
      color: '#854F0B',
      bg: '#FAEEDA',
      border: '#FAC775',
    },
    {
      emoji: '🚀',
      title: 'GIG-A-THON Hackathon Winner',
      desc: 'Won the GIG-A-THON hackathon competing against teams across the region',
      color: '#185FA5',
      bg: '#E6F1FB',
      border: '#B5D4F4',
    },
    {
      emoji: '⭐',
      title: 'Google Arcade Legend — Season 2',
      desc: 'Achieved Legend Tier with 95 Arcade points in Google Skills Arcade 2025',
      color: '#3B6D11',
      bg: '#EAF3DE',
      border: '#C0DD97',
    },
    {
      emoji: '📜',
      title: 'Infosys Springboard Certified',
      desc: 'Certified in Java and Database Management Systems by Infosys',
      color: '#533AB7',
      bg: '#EEEDFE',
      border: '#AFA9EC',
    },
  ];

  const stats = [
    { number: '15+', label: 'Projects Built' },
    { number: '600+', label: 'Students Helped (VJIT Portal)' },
    { number: '72hrs', label: 'Average Delivery Time' },
    { number: '100%', label: 'Satisfaction Guarantee' },
  ];

  return (
    <section id="trust" style={{ padding: '100px var(--space-10, 40px)', background: '#F8FAFC' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px',
          marginBottom: '64px',
        }}>
          {stats.map((s) => (
            <div key={s.label} style={{
              background: '#fff',
              border: '0.5px solid #E5E7EB',
              borderRadius: '12px',
              padding: '24px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '32px', fontWeight: 700, color: '#1A1A2E', fontFamily: 'Bricolage Grotesque, sans-serif' }}>{s.number}</div>
              <div style={{ fontSize: '13px', color: '#6B7280', marginTop: '4px' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Section heading */}
        <div style={{ marginBottom: '32px' }}>
          <p style={{ fontSize: '13px', fontFamily: 'monospace', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2563EB', marginBottom: '8px' }}>
            VERIFIED ACHIEVEMENTS
          </p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: '#1A1A2E', fontFamily: 'Bricolage Grotesque, sans-serif' }}>
            Recognition & Credentials
          </h2>
        </div>

        {/* Achievement cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
        }}>
          {achievements.map((a) => (
            <div key={a.title} style={{
              background: a.bg,
              border: `0.5px solid ${a.border}`,
              borderRadius: '12px',
              padding: '20px',
            }}>
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>{a.emoji}</div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: a.color, marginBottom: '6px', lineHeight: 1.3 }}>{a.title}</div>
              <div style={{ fontSize: '12px', color: a.color, opacity: 0.8, lineHeight: 1.6 }}>{a.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}