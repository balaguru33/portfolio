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

  const credentials = [
    {
      title: 'Master of Computer Science (M.Sc)',
      subtitle: 'Thanthai Periyar Govt Arts & College',
      period: '2024 - 2026',
      desc: 'Mastered Advanced Software Design, database engines, and algorithms. Graduated with a strong academic CGPA of 71.6%.'
    },
    {
      title: 'Bachelor of Computer Science (B.Sc)',
      subtitle: "Rajapalayam Rajus' College",
      period: '2021 - 2024',
      desc: 'Graduated with a CGPA of 72.16%. Built strong foundations in Object-Oriented programming, database management, and UI architecture.'
    },
    {
      title: 'Infosys Springboard Certification',
      subtitle: 'AI & Data Science Stream',
      period: '2023',
      desc: 'Completed training in Artificial Intelligence, Deep Learning, Natural Language Processing (NLP), Computer Vision 101, Data Science, and OpenAI GPT Models.'
    },
    {
      title: 'Microsoft & Naan Mudhalvan',
      subtitle: 'Office & Collaboration Suite',
      period: '2023',
      desc: 'Certified in Microsoft Office Suite (Advanced Word, Excel, PowerPoint), Teams, OneDrive, SharePoint, and Outlook collaborative networks.'
    },
    {
      title: 'Python Programming Cert',
      subtitle: 'IGL Hands-On Pvt. Ltd',
      period: '2022',
      desc: 'Earned certification in core Python programming structures, data manipulation scripting, and algorithm prototyping.'
    },
    {
      title: 'TANII Hackathon certified',
      subtitle: 'Government of Tamil Nadu',
      period: '2026',
      desc: 'Completed project-based learning and rapid prototyping hackathon sponsored by the State Government.'
    }
  ];

  return (
    <section id="experience" className="experience-section section">
      {/* Glow overlays */}
      <div className="journey-radial-glow"></div>

      <div className="experience-container container">
        
        {/* Part 1: Timeline Career Journey */}
        <div className="section-header">
          <h2 className="section-title">
            Career Journey
          </h2>
          <p className="section-subtitle">
            My professional career path and key technical accomplishments in industry settings.
          </p>
        </div>

        <div className="timeline-journey-wrapper">
          <div className="journey-track-line"></div>

          {experiences.map((exp, idx) => (
            <div key={idx} className="journey-timeline-node">
              <div className="journey-marker-circle">
                <div className="inner-glow-dot"></div>
              </div>

              <div className="journey-experience-card">
                <div className="journey-card-header">
                  <div className="header-role-block">
                    <h3 className="journey-role-title">{exp.role}</h3>
                    <span className="journey-company-text">
                      {exp.company}
                      {exp.certificateLink && (
                        <a href={exp.certificateLink} className="journey-cert-download" download>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '6px', marginRight: '4px', verticalAlign: 'middle' }}>
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                          </svg>
                          Verify Cert
                        </a>
                      )}
                    </span>
                  </div>
                  <span className="journey-duration-badge">{exp.duration}</span>
                </div>

                <ul className="journey-points-list">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="journey-point-item">
                      <span className="point-bullet-symbol">›</span>
                      <p className="point-body-text">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Part 2: Credentials testimonials style grid */}
        <div className="credentials-testimonials-block">
          <div className="section-header">
            <h2 className="section-title">
              Education & Credentials
            </h2>
            <p className="section-subtitle">
              Academic history and professional training certifications from recognized industry leaders.
            </p>
          </div>

          {/* Testimonial card grid format from Enver */}
          <div className="credentials-cards-grid">
            {credentials.map((cred, idx) => (
              <div key={idx} className="credential-glow-card">
                <div className="credential-card-glow-bg"></div>
                <div className="credential-card-header">
                  <div className="credential-avatar-placeholder">
                    {/* Tiny initial icon representation */}
                    <span className="avatar-initial">{cred.title[0]}</span>
                  </div>
                  <div className="credential-header-meta">
                    <h3 className="credential-card-title">{cred.title}</h3>
                    <p className="credential-card-subtitle">{cred.subtitle}</p>
                  </div>
                  <span className="credential-year-tag">{cred.period}</span>
                </div>
                <p className="credential-card-desc">{cred.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
