import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Journey' },
  { id: 'projects', label: 'Portfolio' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section calculation
      const scrollPosition = window.scrollY + 150;
      const sections = ['home', 'skills', 'experience', 'projects', 'contact'];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId === 'contact' ? 'contact' : sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 96; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        {/* Enver Logo Format */}
        <a href="#home" className="navbar-logo" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>
          <div className="logo-icon-wrapper">
            <svg className="logo-icon-svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="16" stroke="url(#logoGradient)" strokeWidth="8"/>
              <defs>
                <linearGradient id="logoGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#5454D4" />
                  <stop offset="1" stopColor="#00D2FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="logo-text">Thirubalagurumoorthi G</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.id);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Contact button */}
        <div className="navbar-actions-desktop">
          <button 
            className="btn btn-navbar-contact" 
            onClick={() => handleLinkClick('contact')}
          >
            Contact Me
          </button>
        </div>

        {/* Hamburger Mobile Toggle */}
        <button
          className={`mobile-toggle-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.id);
              }}
            >
              {link.label}
            </a>
          ))}
          <button 
            className="btn btn-navbar-contact mobile-nav-contact-btn" 
            onClick={() => handleLinkClick('contact')}
          >
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  );
}
