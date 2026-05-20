const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-primary)', color: 'white', paddingTop: '64px' }}>
      <div className="container">
        {/* Availability Banner */}
        <div style={{ paddingBottom: '48px', borderBottom: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px' }}>
            <span style={{ color: 'var(--color-success)', marginRight: '8px' }}>●</span>
            Currently available for new projects · <a href="mailto:tippaniabhinay@gmail.com" style={{ textDecoration: 'underline' }}>tippaniabhinay@gmail.com</a>
          </p>
        </div>

        <div className="footer-grid" style={{ padding: '48px 0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '24px' }}>
              Abhinay.
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
              Freelance Web Developer · Hyderabad
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
            <a href="#about" className="footer-link">About</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#services" className="footer-link">Services</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <a href="https://www.linkedin.com/in/abhinay-kumar-tippani/" target="_blank" rel="noopener noreferrer" className="footer-icon">
              in
            </a>
            <a href="https://github.com/abhinay-kumar-tippani/" target="_blank" rel="noopener noreferrer" className="footer-icon">
              gh
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ padding: '24px 0', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>
          © 2025 Abhinay Kumar. Built with React.
        </div>
      </div>

      <style>
        {`
          .footer-link {
            color: rgba(255,255,255,0.8);
            font-size: 15px;
            transition: color 0.2s;
          }
          .footer-link:hover {
            color: white;
          }
          .footer-icon {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-color: rgba(255,255,255,0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 14px;
            text-transform: uppercase;
            transition: background-color 0.2s;
          }
          .footer-icon:hover {
            background-color: var(--color-accent);
          }
          @media (min-width: 768px) {
            .footer-grid {
              flex-direction: row !important;
              justify-content: space-between;
              align-items: center;
            }
            .footer-grid > div {
              text-align: left;
              align-items: flex-start !important;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
