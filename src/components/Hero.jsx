import profileImg from '../assets/profile.jpg';
import './Hero.css';

export default function Hero() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section section">
      <div className="hero-container container">
        <div className="hero-content">
          <div className="badge hero-badge">
            <span className="tagline-dot pulse-glow"></span>
            Software Developer
          </div>
          
          <h1 className="hero-title">
            Thirubalagurumoorthi G
          </h1>
          <h2 className="hero-subtitle">
            Engineering robust React web applications, Python pipelines, and database solutions.
          </h2>
          
          <p className="hero-description">
            Computer Science graduate with hands-on experience in frontend optimization, 
            responsive user interfaces, and custom script architectures. Former developer 
            at Scoto Systect Pvt.Ltd, focusing on clean code standards and client-side performance.
          </p>

          {/* Core Achievement Highlight Badge */}
          <div className="hero-highlight-card">
            <div className="highlight-icon">📜</div>
            <div>
              <h4 className="highlight-title">TANII Hackathon Certified</h4>
              <p className="highlight-desc">Project-Based Learning Hackathon – Government of Tamil Nadu</p>
            </div>
          </div>

          <div className="hero-actions">
            <a href="/Thirubalagurumoorthi_G_Resume.pdf" className="btn btn-primary" download="Thirubalagurumoorthi_G_Resume.pdf">
              <svg className="btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Resume
            </a>
            <button onClick={handleScrollToContact} className="btn btn-secondary">
              Let's Connect
              <svg className="btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/balaguru33" target="_blank" rel="noopener noreferrer" className="social-link-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/thirubalagurumoorthi-g-25a362240" target="_blank" rel="noopener noreferrer" className="social-link-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>
            <a href="mailto:balaguru3012@gmail.com" className="social-link-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Email
            </a>
          </div>
        </div>

        {/* Human-designed modern profile card grid */}
        <div className="hero-portrait-aside">
          <div className="portrait-frame">
            <img src={profileImg} alt="Thirubalagurumoorthi G" className="portrait-img" />
            <div className="portrait-meta-info">
              <div className="meta-row">
                <span className="meta-label">Location:</span>
                <span className="meta-val">Coimbatore, TN</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Workplace:</span>
                <span className="meta-val">Scoto Systect Pvt.Ltd</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
