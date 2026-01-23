import './sections.css';
import { profile, skills } from '../data/content';

function About() {
  // Skill categories with labels and icons
  const skillCategories = [
    { key: 'languages', label: 'Languages', icon: '< />' },
    { key: 'testing', label: 'Testing & QA', icon: '[ ]' },
    { key: 'frameworks', label: 'Frameworks & Tools', icon: '{ }' },
    { key: 'databases', label: 'Databases', icon: '⬡' },
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <header className="section__header">
          <span className="section__label">// 01. About</span>
          <h2 className="section__title">About Me</h2>
          <p className="section__subtitle">
            Developer. Problem Solver. Eternal Learner.
          </p>
        </header>

        <div className="about__content">
          {/* Bio Card */}
          <div className="about__bio-card">
            <div className="about__bio-header">
              <span className="about__bio-indicator"></span>
              <span className="about__bio-label">PROFILE_DATA</span>
            </div>
            <p className="about__bio-text">{profile.summary}</p>
            <div className="about__tagline">
              <span className="about__tagline-bracket">[</span>
              <span className="about__tagline-text">{profile.tagline}</span>
              <span className="about__tagline-bracket">]</span>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="about__skills">
            <h3 className="about__skills-title">
              <span className="about__skills-icon">◆</span>
              Technical Skills
            </h3>
            
            <div className="about__skills-grid">
              {skillCategories.map((category) => (
                <div key={category.key} className="about__skill-category">
                  <div className="about__skill-category-header">
                    <span className="about__skill-category-icon">{category.icon}</span>
                    <span className="about__skill-category-label">{category.label}</span>
                  </div>
                  <div className="about__skill-badges">
                    {skills[category.key]?.map((skill, index) => (
                      <span key={index} className="about__skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
