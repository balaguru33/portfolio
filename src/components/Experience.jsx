import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      role: 'Software Developer',
      company: 'Scoto Systect Pvt.Ltd',
      duration: 'May 2026 - Present',
      points: [
        'Designed and implemented clean, responsive user interfaces using React JS and semantic styling systems.',
        'Wrote structured Python backend scripts and integrated relational SQL databases to model application schemas.',
        'Partnered with product teams to debug rendering issues, execute UI improvements, and align with design mockups.'
      ]
    },
    {
      role: 'Junior React JS Intern',
      company: 'Thiran360AI, Erode',
      duration: 'Dec 2025 - Jan 2026',
      certificateLink: '/Thiran360AI_Internship_Certificate.pdf',
      points: [
        'Developed responsive React JS web applications and supported client-side bug fixing and frontend optimization.',
        'Assisted in implementing visual components and resolving state management rendering issues across browsers.',
        'Conducted cross-device troubleshooting to ensure mobile responsiveness and performance benchmarks.'
      ]
    },
    {
      role: 'Web Developer Intern',
      company: 'Anjana Infotech - Rajapalayam',
      duration: 'Aug 2023 - Apr 2024',
      points: [
        'Supported students in developing responsive React JS web applications through structured coding guidelines.',
        'Assisted in troubleshooting coding errors, detailing core JavaScript structures, and managing version repositories.',
        'Configured git branching, committed builds, and verified code consistency in collaborative workspaces.'
      ]
    }
  ];

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="experience" className="experience-section section">
      <div className="experience-container container">
        <div className="section-header">
          <h2 className="section-title">
            Career <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            My professional career path and key technical accomplishments in industry settings.
          </p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-node">
              {/* Timeline marker */}
              <div className="timeline-marker">
                <div className="marker-inner"></div>
              </div>

              {/* Experience Info */}
              <div
                className="experience-card interactive-card"
                onMouseMove={handleMouseMove}
              >
                <div className="exp-card-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company">
                      {exp.company}
                      {exp.certificateLink && (
                        <a href={exp.certificateLink} className="exp-cert-link" download>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '4px', marginRight: '4px', verticalAlign: 'middle' }}>
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                          </svg>
                          Verify Cert
                        </a>
                      )}
                    </div>
                  </div>
                  <span className="exp-duration">{exp.duration}</span>
                </div>
                
                <ul className="exp-points">
                  {exp.points.map((point, ptIdx) => (
                    <li key={ptIdx} className="exp-point-item">
                      <span className="point-bullet">›</span>
                      <p className="point-text">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
