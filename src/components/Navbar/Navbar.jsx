import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo, navigationLinks } from '../../data/portfolioData';
import headerLogo from '../../assets/tech tools logo/transparent/header_logo.png';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const isScrolledRef = useRef(false);
  const activeSectionRef = useRef('hero');

  useEffect(() => {
    let ticking = false;
    const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];

    const updateNavState = () => {
      const scrollY = window.scrollY;

      // 1. Scrolled threshold
      const nextScrolled = scrollY > 20;
      if (nextScrolled !== isScrolledRef.current) {
        isScrolledRef.current = nextScrolled;
        setIsScrolled(nextScrolled);
      }

      // 2. Active section detection
      const scrollPos = scrollY + 220;
      let currentSection = 'hero';

      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            currentSection = sections[i];
            break;
          }
        }
      }

      if (currentSection !== activeSectionRef.current) {
        activeSectionRef.current = currentSection;
        setActiveSection(currentSection);
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavState);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateNavState(); // Check immediately on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo with Custom Image */}
        <a href="#hero" className="navbar-brand" onClick={closeMobileMenu}>
          <div className="brand-icon-box">
            <img 
              src={headerLogo} 
              alt="Varun R" 
              className="brand-logo-img" 
            />
          </div>
          <span className="brand-name hover-gradient-text">{personalInfo.name}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA Action */}
        <div className="desktop-actions">
          <a href="#contact" className="btn-primary">
            <span>Get in Touch</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="mobile-toggle-btn"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Glassmorphic Navigation Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navigationLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="mobile-nav-link"
                onClick={closeMobileMenu}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="btn-primary"
              onClick={closeMobileMenu}
              style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={16} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
