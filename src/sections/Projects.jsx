import './sections.css';
import { projects } from '../data/content';

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <header className="section__header">
          <span className="section__label">// 02. Projects</span>
          <h2 className="section__title">My Projects</h2>
          <p className="section__subtitle">
            Featured work and personal experiments
          </p>
        </header>

        <div className="projects__content">
          <div className="projects__grid">
            {projects.map((project) => (
              <article key={project.id} className="project-card">
                {/* Card Header */}
                <div className="project-card__header">
                  <div className="project-card__category">
                    <span className="project-card__category-dot"></span>
                    {project.category}
                  </div>
                  <span className="project-card__year">{project.year}</span>
                </div>

                {/* Card Body */}
                <div className="project-card__body">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__description">{project.description}</p>
                  
                  {/* Highlights */}
                  <ul className="project-card__highlights">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="project-card__highlight">
                        <span className="project-card__highlight-marker">▸</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="project-card__tech">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="project-card__tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Footer - Links */}
                <div className="project-card__footer">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-card__link"
                    >
                      <span className="project-card__link-icon">⌘</span>
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-card__link project-card__link--live"
                    >
                      <span className="project-card__link-icon">◈</span>
                      Live Demo
                    </a>
                  )}
                  {!project.github && !project.live && (
                    <span className="project-card__link project-card__link--private">
                      <span className="project-card__link-icon">◎</span>
                      Private Project
                    </span>
                  )}
                </div>

                {/* Corner decorations */}
                <div className="project-card__corner project-card__corner--tl"></div>
                <div className="project-card__corner project-card__corner--br"></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
