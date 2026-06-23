import './Skills.css';

export default function Skills() {
  const servicesData = [
    {
      title: 'Frontend Development',
      desc: 'Engineering robust React JS web applications with custom hooks, state management, and optimized rendering pipelines.',
      iconBg: 'rgba(84, 84, 212, 0.15)',
      iconColor: '#5454D4',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      title: 'Backend & Databases',
      desc: 'Developing scalable structured databases (SQL Server, Firebase) and writing database CRUD models (C#, .NET, ASP.NET).',
      iconBg: 'rgba(239, 68, 68, 0.15)',
      iconColor: '#EF4444',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      )
    },
    {
      title: 'Python Pipelines',
      desc: 'Writing python automation pipelines and processing datasets using mathematical packages (NumPy, Pandas).',
      iconBg: 'rgba(245, 158, 11, 0.15)',
      iconColor: '#F59E0B',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      )
    },
    {
      title: 'Mobile Development',
      desc: 'Designing responsive mobile app architectures using Flutter & Dart with secure cloud backend integrations.',
      iconBg: 'rgba(168, 85, 247, 0.15)',
      iconColor: '#A855F7',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    },
    {
      title: 'AI & Deep Learning',
      desc: 'Implementing data science algorithms, neural networks (Deep Learning), computer vision, and NLP frameworks.',
      iconBg: 'rgba(16, 185, 129, 0.15)',
      iconColor: '#10B981',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
      )
    },
    {
      title: 'Agile & Collaboration',
      desc: 'Collaborating in Git workflows, resolving merge conflicts, configuring branches, and managing codebase builds.',
      iconBg: 'rgba(6, 182, 212, 0.15)',
      iconColor: '#06B6D4',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="skills-section section">
      {/* Decorative background shapes */}
      <img className="floating-vector skills-decor-1 delay-1" src="/icons/twice-triangle.svg" alt="" style={{ display: 'none' }} />
      <div className="skills-radial-glow"></div>

      <div className="skills-container container">
        <div className="section-header">
          <h2 className="section-title">
            Skills & Expertise
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my technological capabilities, combining engineering rigor, 
            frontend excellence, and pipeline scripting.
          </p>
        </div>

        {/* 3x2 Grid layout matching Enver */}
        <div className="skills-services-grid">
          {servicesData.map((service, idx) => (
            <div key={idx} className="service-card">
              <div 
                className="service-icon-wrapper"
                style={{ backgroundColor: service.iconBg, color: service.iconColor }}
              >
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
