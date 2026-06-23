import profileImg from '../assets/profile.jpg';
import './Hero.css';

export default function Hero() {
  const handleScrollToSection = (id) => {
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
    <section id="home" className="hero-section section">
      {/* Decorative background grid and glow */}
      <div className="grid-bg-overlay"></div>
      <div className="hero-radial-glow"></div>

      <div className="hero-container container">
        {/* Left Column: Text Content */}
        <div className="hero-text-content">
          <div className="badge hero-badge">
            <span className="tagline-dot pulse-glow"></span>
            Software Developer
          </div>
          
          <h1 className="hero-title">
            Web Development <br />
            & AI <br />
            Integration
          </h1>
          
          <p className="hero-description">
            Hi, I'm <strong>Thirubalagurumoorthi G</strong>. I engineer robust React web applications, 
            Python pipelines, and database solutions with a focus on frontend optimization, clean code 
            standards, and client-side performance.
          </p>

          <div className="hero-highlight-card">
            <span className="highlight-icon">📜</span>
            <div className="highlight-info">
              <h4 className="highlight-title">TANII Hackathon Certified</h4>
              <p className="highlight-desc">Project-Based Learning – Govt of Tamil Nadu</p>
            </div>
          </div>

          <div className="hero-actions">
            <button onClick={() => handleScrollToSection('skills')} className="btn btn-primary btn-hero-cta">
              My Skills
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>
            <a href="/Thirubalagurumoorthi_G_Resume.pdf" className="btn btn-secondary btn-hero-resume" download="Thirubalagurumoorthi_G_Resume.pdf">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Resume
            </a>
          </div>
        </div>

        {/* Right Column: Tilted Portrait Card & Decorative Shapes */}
        <div className="hero-portrait-aside">
          <div className="portrait-card-wrapper">
            {/* Tilted frame card */}
            <div className="portrait-tilted-card">
              <div className="card-grid-bg"></div>
              <img src={profileImg} alt="Thirubalagurumoorthi G" className="portrait-avatar" />
            </div>

            {/* Floating SVG Geometric Elements matching the Figma design */}
            {/* 1. Squiggle top-left */}
            <svg className="floating-vector vector-squiggle delay-1" width="67" height="24" viewBox="0 0 67 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 22L11.5 12L21 22L30.5 12L40 22L49.5 12L59 22L65 15.5" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            </svg>

            {/* 2. Double circle top-right */}
            <div className="floating-vector vector-circles delay-2">
              <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="16" stroke="white" strokeWidth="2"/>
                <circle cx="25" cy="25" r="16" stroke="white" strokeWidth="2"/>
              </svg>
            </div>

            {/* 3. Triangle bottom-left */}
            <div className="floating-vector vector-triangle delay-3">
              <svg width="42" height="46" viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 40L21 8L38 40H2Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M7 43L23.5 15L37 43H7Z" stroke="white" strokeWidth="1" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* 4. Cross bottom-right */}
            <svg className="floating-vector vector-cross" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 2V20M2 11H20" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
