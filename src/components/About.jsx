import './About.css';

export default function About() {
  const stats = [
    { value: '2', label: 'Tech Internships' },
    { value: '2', label: 'CS Degrees' },
    { value: '3', label: 'Key Certifications' },
  ];

  const education = [
    {
      degree: 'Master of Computer Science (M.Sc)',
      institution: 'Thanthai Periyar Govt Arts & Science College',
      duration: 'Aug 2024 - May 2026',
      details: 'Department of Computer Science. Maintained strong academic standing with a CGPA of 71.6%. Focus on Advanced Software Design and Algorithms.'
    },
    {
      degree: 'Bachelor of Computer Science (B.Sc)',
      institution: "Rajapalayam Rajus' College",
      duration: 'Jun 2021 - May 2024',
      details: 'Department of Computer Science. Graduated with a CGPA of 72.16%, mastering fundamental Programming, Database Management, and UI concepts.'
    },
    {
      degree: 'Professional Certifications',
      institution: 'Infosys, Microsoft, IGL & Government of Tamil Nadu',
      duration: '2022 - 2026',
      details: '• TANII Hackathon Program: Completed Project-Based Learning (2026).\n• Infosys Springboard: AI, Deep Learning, Natural Language Processing, Computer Vision 101, Data Science, Robotic Process Automation, OpenAI GPT Models (2023).\n• Microsoft & Naan Mudhalvan: Office Suite (Word, Excel, PowerPoint - Advanced Levels), Teams, OneDrive, SharePoint, Outlook (2023).\n• Python Programming: IGL HANDSON PVT. LTD & Rajapalayam Rajus\' College (2022).'
    }
  ];

  return (
    <section id="about" className="about-section section">
      <div className="about-container container">
        <div className="section-header">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Leveraging practical React JS development experience and strong programming foundations to engineer responsive solutions.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-bio">
            <h3 className="about-subtitle">Who I Am</h3>
            <p className="bio-text">
              I am a motivated Computer Science graduate with hands-on experience in React JS development, Python programming, and practical project builds. My development approach centers on writing clean, modular components and resolving client-side challenges efficiently.
            </p>
            <p className="bio-text">
              Having worked at Scoto Systect Pvt.Ltd and completed multiple internships, I have refined my ability to troubleshoot coding issues, optimize frontend elements, and deliver responsive interfaces that ensure excellent user experiences.
            </p>

            <div className="about-stats">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card glass-panel">
                  <div className="stat-value gradient-text">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-education">
            <h3 className="about-subtitle">Education & Credentials</h3>
            <div className="education-timeline">
              {education.map((edu, idx) => (
                <div key={idx} className="education-item interactive-card">
                  <div className="edu-dot"></div>
                  <div className="edu-header">
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <span className="edu-duration">{edu.duration}</span>
                  </div>
                  <div className="edu-institution">{edu.institution}</div>
                  <p className="edu-details">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
