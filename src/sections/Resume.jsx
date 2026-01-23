import { experience, education, profile } from '../data/content';
import './sections.css';

function Resume() {
  return (
    <section id="resume" className="section resume">
      <div className="container">
        <header className="section__header">
          <span className="section__label">// 03. Resume</span>
          <h2 className="section__title">Resume</h2>
          <p className="section__subtitle">
            Experience · Education · Expertise
          </p>
        </header>

        <div className="resume__content">
          {/* Download Button */}
          <div className="resume__download">
            <a 
              href="/resume.pdf" 
              download="Devon_Purification_Resume.pdf"
              className="resume__download-btn"
            >
              <span className="resume__download-icon">↓</span>
              <span className="resume__download-text">Download Resume</span>
              <span className="resume__download-format">.PDF</span>
            </a>
          </div>

          {/* Experience Timeline */}
          <div className="resume__section">
            <div className="resume__section-header">
              <span className="resume__section-icon">◆</span>
              <h3 className="resume__section-title">Experience</h3>
              <div className="resume__section-line"></div>
            </div>

            <div className="resume__timeline">
              {experience.map((job, index) => (
                <article key={job.id} className="timeline-item">
                  {/* Timeline connector */}
                  <div className="timeline-item__connector">
                    <div className="timeline-item__dot"></div>
                    {index < experience.length - 1 && (
                      <div className="timeline-item__line"></div>
                    )}
                  </div>

                  {/* Job content */}
                  <div className="timeline-item__content">
                    <div className="timeline-item__header">
                      <div className="timeline-item__title-group">
                        <h4 className="timeline-item__title">{job.title}</h4>
                        <span className="timeline-item__company">{job.company}</span>
                        <span className="timeline-item__type">{job.type}</span>
                      </div>
                      <div className="timeline-item__meta">
                        <span className="timeline-item__date">
                          {job.startDate} — {job.endDate}
                        </span>
                        <span className="timeline-item__location">{job.location}</span>
                      </div>
                    </div>
                    
                    <ul className="timeline-item__highlights">
                      {job.highlights.map((highlight, idx) => (
                        <li key={idx} className="timeline-item__highlight">
                          <span className="timeline-item__highlight-marker">›</span>
                          <span className="timeline-item__highlight-text">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="resume__section">
            <div className="resume__section-header">
              <span className="resume__section-icon">◆</span>
              <h3 className="resume__section-title">Education</h3>
              <div className="resume__section-line"></div>
            </div>

            <article className="education-card">
              {/* Corner decorations */}
              <div className="education-card__corner education-card__corner--tl"></div>
              <div className="education-card__corner education-card__corner--br"></div>

              <div className="education-card__header">
                <div className="education-card__degree-group">
                  <h4 className="education-card__degree">{education.degree}</h4>
                  <span className="education-card__minor">Minor: {education.minor}</span>
                </div>
                <div className="education-card__gpa">
                  <span className="education-card__gpa-label">GPA</span>
                  <span className="education-card__gpa-value">{education.gpa}</span>
                </div>
              </div>

              <div className="education-card__school">
                <span className="education-card__school-name">{education.school}</span>
                <span className="education-card__school-details">
                  {education.location} · {education.startDate} — {education.endDate}
                </span>
              </div>

              <div className="education-card__honors">
                <span className="education-card__honors-label">Honors:</span>
                <div className="education-card__honors-list">
                  {education.honors.map((honor, idx) => (
                    <span key={idx} className="education-card__honor-badge">
                      {honor}
                    </span>
                  ))}
                </div>
              </div>

              <div className="education-card__coursework">
                <span className="education-card__coursework-label">Relevant Coursework:</span>
                <div className="education-card__coursework-list">
                  {education.coursework.map((course, idx) => (
                    <span key={idx} className="education-card__course-badge">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>

          {/* Contact CTA */}
          <div className="resume__cta">
            <div className="resume__cta-content">
              <span className="resume__cta-label">// READY TO CONNECT?</span>
              <p className="resume__cta-text">
                Let's discuss how I can contribute to your team
              </p>
            </div>
            <a href={`mailto:${profile.email}`} className="resume__cta-btn">
              <span className="resume__cta-btn-text">Get In Touch</span>
              <span className="resume__cta-btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
