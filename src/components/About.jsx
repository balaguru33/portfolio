import { useState, useEffect } from 'react';
import './About.css';

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [terminalText, setTerminalText] = useState('');

  const stats = [
    { value: '2', label: 'Tech Internships' },
    { value: '2', label: 'CS Degrees' },
    { value: '3', label: 'Key Certifications' },
  ];

  const fullTerminalText = `> balaguru --info
Name: Thirubalagurumoorthi G
Role: Software Developer
Location: Coimbatore, TN
Hackathon: TANII Hackathon Certified (Govt of Tamil Nadu)

> npm run competencies
- React JS (Advanced Components & Hooks)
- Python (Data Analytics & Pipelines)
- Database (SQL Server, Firebase)
- Responsive UI Design & Performance Optimization

> git status
On branch master
Your branch is up to date with 'origin/master'.
Changes to be committed:
  modified:   portfolio-aesthetics.css (premium)
  modified:   framework-overhaul.js (completed)

> echo "Ready to build awesome platforms!"
Ready to build awesome platforms!`;

  useEffect(() => {
    if (!isPlaying) {
      setTerminalText('');
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      setTerminalText((prev) => prev + fullTerminalText.charAt(index));
      index++;
      if (index >= fullTerminalText.length) {
        clearInterval(interval);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section id="about" className="about-section section">
      <div className="about-container container">
        
        {/* Top Section: Header & Intro */}
        <div className="about-header-grid">
          <h2 className="section-title about-title">
            Why Choose Me?
          </h2>
          <p className="about-intro-desc">
            Leveraging practical React JS development experience and strong programming foundations to 
            engineer responsive, high-performance web solutions.
          </p>
        </div>

        {/* Bottom Section: Media Player and Bio */}
        <div className="about-content-grid">
          {/* Column 1: Video Player Mockup / Interactive Terminal */}
          <div className="about-media-column">
            <div className="terminal-window">
              {/* Window Header bar */}
              <div className="terminal-header-bar">
                <div className="header-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="header-title-text">developer_session.sh</div>
              </div>

              {/* Terminal Canvas */}
              <div className="terminal-body">
                {!isPlaying ? (
                  <div className="terminal-placeholder">
                    {/* Visual Mock Play Overlay */}
                    <button onClick={() => setIsPlaying(true)} className="play-button-circle" aria-label="Run Terminal Demo">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="6,4 20,12 6,20"></polygon>
                      </svg>
                    </button>
                    <p className="play-hint-text">Click to run interactive terminal demo</p>
                  </div>
                ) : (
                  <div className="terminal-code-stream">
                    <pre>{terminalText}</pre>
                    <span className="terminal-cursor">|</span>
                    <button onClick={() => setIsPlaying(false)} className="terminal-reset-btn">Reset</button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Column 2: Bio details & Stats */}
          <div className="about-details-column">
            <p className="bio-paragraph">
              I am a motivated Computer Science graduate with hands-on experience in React JS development, 
              Python programming, and practical project builds. Having worked at Scoto Systect Pvt.Ltd 
              and completed multiple internships, I have refined my ability to troubleshoot client-side 
              challenges, write modular code, and deliver responsive interfaces.
            </p>

            {/* Glowing Stats Cards Grid */}
            <div className="about-stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="about-stat-card">
                  <div className="stat-card-glow"></div>
                  <div className="stat-number">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
