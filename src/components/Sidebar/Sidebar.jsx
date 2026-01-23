import { useState, useEffect } from 'react';
import './Sidebar.css';

const navLinks = [
  { id: 'about', label: 'About', code: '01' },
  { id: 'projects', label: 'Projects', code: '02' },
  { id: 'resume', label: 'Resume', code: '03' },
];

const socialLinks = [
  { 
    id: 'github', 
    label: 'GitHub', 
    url: 'https://github.com/xPurification',
    icon: '⌘'
  },
  { 
    id: 'linkedin', 
    label: 'LinkedIn', 
    url: 'https://linkedin.com/in/devonpurification',
    icon: '◈'
  },
  { 
    id: 'website', 
    label: 'Website', 
    url: 'https://purification.sys',
    icon: '◉'
  },
  { 
    id: 'email', 
    label: 'Email', 
    url: 'mailto:devon.purification@gmail.com',
    icon: '@'
  },
];

function Sidebar() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll to track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navLinks[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button 
        className={`sidebar__toggle ${isMenuOpen ? 'sidebar__toggle--open' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className="sidebar__toggle-bar" />
        <span className="sidebar__toggle-bar" />
        <span className="sidebar__toggle-bar" />
      </button>

      {/* Overlay for mobile */}
      {isMenuOpen && (
        <div 
          className="sidebar__overlay" 
          onClick={() => setIsMenuOpen(false)} 
        />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${isMenuOpen ? 'sidebar--open' : ''}`}>
        {/* Logo / Name */}
        <div className="sidebar__header">
          <div className="sidebar__logo">
            <span className="sidebar__logo-bracket">[</span>
            <span className="sidebar__logo-text">DP</span>
            <span className="sidebar__logo-bracket">]</span>
          </div>
          <div className="sidebar__name">
            <span className="sidebar__name-first">Devon</span>
            <span className="sidebar__name-last">Purification</span>
          </div>
          <span className="sidebar__title">Software Developer & QA Engineer</span>
        </div>

        {/* Decorative line */}
        <div className="sidebar__divider" />

        {/* Navigation */}
        <nav className="sidebar__nav">
          <span className="sidebar__nav-label">// Navigation</span>
          <ul className="sidebar__nav-list">
            {navLinks.map((link) => (
              <li key={link.id} className="sidebar__nav-item">
                <a
                  href={`#${link.id}`}
                  className={`sidebar__nav-link ${activeSection === link.id ? 'sidebar__nav-link--active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  <span className="sidebar__nav-code">{link.code}</span>
                  <span className="sidebar__nav-text">{link.label}</span>
                  <span className="sidebar__nav-arrow">→</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Spacer */}
        <div className="sidebar__spacer" />

        {/* Social Links */}
        <div className="sidebar__social">
          <span className="sidebar__nav-label">// Connect</span>
          <ul className="sidebar__social-list">
            {socialLinks.map((link) => (
              <li key={link.id} className="sidebar__social-item">
                <a
                  href={link.url}
                  target={link.id !== 'email' ? '_blank' : undefined}
                  rel={link.id !== 'email' ? 'noopener noreferrer' : undefined}
                  className="sidebar__social-link"
                >
                  <span className="sidebar__social-icon">{link.icon}</span>
                  <span className="sidebar__social-text">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Status */}
        <div className="sidebar__footer">
          <div className="sidebar__status">
            <span className="sidebar__status-dot" />
            <span className="sidebar__status-text">AVAILABLE FOR WORK</span>
          </div>
        </div>

        {/* Corner decorations */}
        <div className="sidebar__corner sidebar__corner--tl" />
        <div className="sidebar__corner sidebar__corner--br" />
      </aside>
    </>
  );
}

export default Sidebar;
