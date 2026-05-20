const Projects = () => {
  const projects = [
    {
      title: 'CoinPredict AI',
      description: 'AI-powered crypto signal tool that predicts when to buy, sell, or hold BTC, ETH, and SOL.',
      tags: ['Python', 'AI/ML', 'React', 'API'],
      gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
      icon: '🪙',
      link: '#',
      github: 'https://github.com/abhinay-kumar-tippani/'
    },
    {
      title: 'FocusFlow',
      description: 'Chrome extension that summarizes any webpage into bullet points — built for dyslexia and ADHD users.',
      tags: ['JavaScript', 'Chrome API', 'AI', 'Accessibility'],
      gradient: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
      icon: '🧠',
      link: '#',
      github: 'https://github.com/abhinay-kumar-tippani/FocusFlow'
    },
    {
      title: 'LifeOS',
      description: 'Productivity OS with day planning, habit streaks, Pomodoro timer, and daily reflection — built for clarity.',
      tags: ['React', 'Node.js', 'MongoDB'],
      gradient: 'linear-gradient(135deg, #10B981, #059669)',
      icon: '🌿',
      link: 'https://abhinay-kumar-life-os.vercel.app/',
      github: 'https://github.com/abhinay-kumar-tippani/LifeOS'
    },
    {
      title: 'VJIT Study Portal',
      description: 'Academic resource portal used by 600+ students at VJIT for notes, schedules, and study material.',
      tags: ['React', 'Node.js', 'MongoDB'],
      gradient: 'linear-gradient(135deg, #2563EB, #1D4ED8)',
      icon: '🎓',
      link: 'https://abhinay-kumar-tippani.github.io/VJIT-Study-Portal/',
      github: 'https://github.com/abhinay-kumar-tippani/VJIT-Study-Portal'
    },
    {
      title: 'JARVIS',
      description: 'AI-powered voice assistant that listens, understands, and responds like a virtual personal assistant.',
      tags: ['Python', 'AI', 'Speech API'],
      gradient: 'linear-gradient(135deg, #EF4444, #DC2626)',
      icon: '🤖',
      link: '#',
      github: 'https://github.com/abhinay-kumar-tippani/JARVIS'
    }
  ];

  return (
    <section id="projects" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        <div style={{ marginBottom: '64px' }} className="reveal-element">
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>Featured Work</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', marginTop: '16px', maxWidth: '600px' }}>
            A selection of my recent projects. While I build complex web apps, my current focus is delivering clean, high-converting websites for local businesses.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="card reveal-element" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div
                style={{
                  height: '160px',
                  background: project.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '64px',
                }}
              >
                {project.icon}
              </div>
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '16px' }}>
                <h3 style={{ fontSize: '20px' }}>{project.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6, flexGrow: 1 }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag" style={{ fontSize: '12px', padding: '2px 10px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                  <a href={project.link} className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '14px', flex: 1 }}>
                    View Project
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '14px', flex: 1 }}>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .projects-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 32px;
          }
          @media (min-width: 768px) {
            .projects-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (min-width: 1024px) {
            .projects-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Projects;
