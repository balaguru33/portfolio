import { useState } from 'react';
import './Projects.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterOptions = ['All', 'React', 'ASP.net', 'Flutter'];

  const projectsData = [
    {
      title: 'Skill Cert Manager',
      description: 'A web-based certification management application for handling student skill certifications, record management, and validation verification processes.',
      techStack: ['React JS', 'HTML5', 'CSS3', 'JavaScript', 'Git'],
      tags: ['React'],
      githubLink: 'https://github.com/balaguru33/pro.git',
      liveLink: 'https://github.com/balaguru33/pro.git',
      gradientClass: 'proj-grad-1'
    },
    {
      title: 'E-Odonata Monitoring',
      description: 'A responsive mobile application featuring secure user authentication, cloud data storage, and customized reporting layers for environmental monitoring.',
      techStack: ['Flutter', 'Dart', 'Firebase', 'Cloud Storage'],
      tags: ['Flutter'],
      githubLink: 'https://github.com/devgowthamz/odo-dash.git',
      liveLink: 'https://github.com/devgowthamz/odo-dash.git',
      gradientClass: 'proj-grad-2'
    },
    {
      title: 'Student CRUD System',
      description: 'A web application engineered using ASP.NET and C# for performing CRUD database transactions on student records with structured backend schemas.',
      techStack: ['ASP.NET', 'C#', 'SQL Server', 'Bootstrap', 'Git'],
      tags: ['ASP.net'],
      githubLink: 'https://github.com/balaguru33/Student_CRUD_ASP.net.git',
      liveLink: 'https://github.com/balaguru33/Student_CRUD_ASP.net.git',
      gradientClass: 'proj-grad-3'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(activeFilter));

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="projects" className="projects-section section">
      <div className="projects-container container">
        <div className="section-header">
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of key technical projects that showcase stack diversity, clean structures, and performance optimizations.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="projects-filter-bar">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className={`project-card interactive-card proj-${['orange', 'indigo', 'emerald'][idx]}`}
              onMouseMove={handleMouseMove}
            >
              <div className="project-card-header">
                <span className="project-index">/ 0{idx + 1}</span>
                <span className="project-category-tag">{project.tags[0]}</span>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech-tags">
                  {project.techStack.map((tech, techIdx) => (
                    <span key={techIdx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-action-link" aria-label="GitHub Code">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Code
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-action-link" aria-label="Live Demo">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
