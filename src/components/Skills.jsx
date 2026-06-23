import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: [
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'Python', level: 'Advanced' },
        { name: 'C#', level: 'Proficient' },
        { name: 'Java', level: 'Proficient' },
        { name: 'C / C++', level: 'Proficient' }
      ]
    },
    {
      title: 'Frontend Development',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      skills: [
        { name: 'React JS', level: 'Advanced' },
        { name: 'HTML5 & CSS3', level: 'Advanced' },
        { name: 'Responsive Layouts', level: 'Advanced' },
        { name: 'UI Optimization', level: 'Proficient' }
      ]
    },
    {
      title: 'AI & Data Science',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      ),
      skills: [
        { name: 'NumPy & Pandas', level: 'Proficient' },
        { name: 'Artificial Intelligence', level: 'Intermediate' },
        { name: 'Deep Learning / NLP', level: 'Intermediate' },
        { name: 'Computer Vision 101', level: 'Intermediate' }
      ]
    },
    {
      title: 'Backend & Databases',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
      skills: [
        { name: '.NET & ASP.NET', level: 'Advanced' },
        { name: 'SQL Database', level: 'Advanced' },
        { name: 'Firebase Database', level: 'Proficient' },
        { name: 'Git & GitHub', level: 'Advanced' },
        { name: 'VS Code Editor', level: 'Advanced' },
        { name: 'XAMPP Local Server', level: 'Proficient' }
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
    <section id="skills" className="skills-section section">
      <div className="skills-container container">
        <div className="section-header">
          <h2 className="section-title">
            Skills & <span className="gradient-text">Proficiencies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my technological toolkit and core architectural capabilities.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className={`skills-category-card interactive-card cat-${['indigo', 'cyan', 'amber', 'emerald'][catIdx]}`}
              onMouseMove={handleMouseMove}
            >
              <div className="category-header">
                <div className="category-icon-wrapper">
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className={`skill-level level-${skill.level.toLowerCase()}`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="skill-progress-track">
                      <div
                        className={`skill-progress-bar fill-${skill.level.toLowerCase()}`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
