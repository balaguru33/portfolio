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

  return (
    <section id="projects" className="projects-section section">
      {/* Decorative vectors */}
      <div className="projects-radial-glow"></div>
      
      <div className="projects-container container">
        
        {/* Top Header Row: Left Title, Right Filters */}
        <div className="projects-header-row">
          <h2 className="section-title projects-section-title">
            My Creative Portfolio
          </h2>
          
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
        </div>

        {/* Stepped Offset Projects Grid Layout */}
        <div className="projects-offset-grid">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className={`project-step-card step-card-${idx + 1}`}
            >
              {/* Screenshot mockup box with gradient */}
              <div className={`project-visual-box ${project.gradientClass}`}>
                <span className="project-index-badge">0{idx + 1}</span>
                <span className="project-tag-pill">{project.tags[0]}</span>
                
                {/* Overlay Links */}
                <div className="project-hover-overlay">
                  <div className="overlay-actions">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="overlay-btn-circle" aria-label="Github Link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="overlay-btn-circle" aria-label="Live Demo Link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project details below visual box */}
              <div className="project-card-meta">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
                <div className="project-card-tech-stack">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-badge-item">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
