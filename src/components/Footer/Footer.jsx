import React from 'react';
import { ArrowUp, Code2, Mail, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons/Icons';
import { personalInfo } from '../../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github': return <GithubIcon size={17} />;
      case 'linkedin': return <LinkedinIcon size={17} />;
      case 'email': return <Mail size={17} />;
      case 'resume': return <FileText size={17} />;
      default: return null;
    }
  };

  return (
    <footer className="footer-container">
      <div className="container footer-content">
        
        {/* Brand & Note */}
        <div className="footer-brand-side">
          <div className="footer-logo">
            <div className="footer-icon-box">
              <Code2 size={18} />
            </div>
            <span className="footer-brand-name hover-gradient-text">{personalInfo.name}</span>
          </div>
          <p className="footer-text">
            Minimalist, high-performance portfolio template crafted with React and modern CSS.
          </p>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="footer-right-side">
          <div className="footer-socials">
            {personalInfo.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label={social.name}
                title={social.name}
              >
                {getIcon(social.name)}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="btn-back-to-top"
            aria-label="Scroll back to top"
            title="Back to Top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>

      </div>

      <div className="container footer-bottom-strip">
        <p className="copyright-text">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
