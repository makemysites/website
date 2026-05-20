const Marquee = () => {
  const items = [
    "Websites for Doctors", "Clinic Websites", "Business Websites",
    "Landing Pages", "E-Commerce", "AI Integration", "Chrome Extensions",
    "SEO Optimization", "React Apps", "Fast Delivery"
  ];

  return (
    <div
      style={{
        backgroundColor: 'var(--color-primary)',
        padding: '16px 0',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        whiteSpace: 'nowrap',
      }}
      className="marquee-container"
    >
      <div className="marquee-content">
        {[...items, ...items, ...items].map((item, index) => (
          <span
            key={index}
            style={{
              color: 'white',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: '14px',
              padding: '0 32px',
              fontWeight: 500,
            }}
          >
            {item}
            <span style={{ margin: '0 0 0 64px', color: 'rgba(255,255,255,0.7)' }}>◆</span>
          </span>
        ))}
      </div>

      <style>
        {`
          .marquee-content {
            display: inline-flex;
            animation: marquee 30s linear infinite;
          }
          .marquee-container:hover .marquee-content {
            animation-play-state: paused;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
        `}
      </style>
    </div>
  );
};

export default Marquee;
