import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 96; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container container">
        {/* Left Side: Logo */}
        <div className="footer-left-branding">
          <a href="#home" className="footer-logo" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>
            <div className="footer-logo-icon">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '32px', height: '32px' }}>
                <circle cx="20" cy="20" r="16" stroke="url(#footerLogoGrad)" strokeWidth="8"/>
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5454D4" />
                    <stop offset="1" stopColor="#00D2FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="footer-logo-text">Thirubalagurumoorthi G</span>
          </a>
        </div>

        {/* Center / Right: Nav links and social shortcuts */}
        <div className="footer-right-meta">
          <div className="footer-social-links">
            <a href="https://github.com/balaguru33" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span className="footer-dot-divider">•</span>
            <a href="https://www.linkedin.com/in/thirubalagurumoorthi-g-25a362240" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span className="footer-dot-divider">•</span>
            <a href="mailto:balaguru3012@gmail.com">Email</a>
          </div>
          <p className="copyright-info-text">
            © {currentYear} Thirubalagurumoorthi G. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
