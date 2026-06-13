import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <footer className="footer-container">
      <div className="footer-content container">
        <div className="footer-top">
          <a href="#home" className="footer-logo" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>
            <span className="logo-symbol">&lt;</span>
            <span className="logo-text gradient-text">Balaguna.Dev</span>
            <span className="logo-symbol"> /&gt;</span>
          </a>

          <div className="footer-nav">
            <a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }}>About</a>
            <a href="#skills" onClick={(e) => { e.preventDefault(); handleLinkClick('skills'); }}>Skills</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); handleLinkClick('projects'); }}>Projects</a>
            <a href="#experience" onClick={(e) => { e.preventDefault(); handleLinkClick('experience'); }}>Experience</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }}>Contact</a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {currentYear} Thirubalagurumoorthi G. All rights reserved. Designed & built for MNC opportunities.
          </p>
          
          <div className="footer-socials">
            <a href="https://github.com/balaguru33" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              GitHub
            </a>
            <span className="social-divider">•</span>
            <a href="https://www.linkedin.com/in/thirubalagurumoorthi-g-25a362240" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
            <span className="social-divider">•</span>
            <a href="mailto:balaguru3012@gmail.com" aria-label="Email">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
