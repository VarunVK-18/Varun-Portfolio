import React from 'react';
import { ArrowUpRight, Mail, FileText, ArrowDown, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons/Icons';
import { personalInfo } from '../../data/portfolioData';
import './Hero.css';

export default function Hero() {
  const getIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github': return <GithubIcon size={18} />;
      case 'linkedin': return <LinkedinIcon size={18} />;
      case 'email': return <Mail size={18} />;
      case 'phone': return <Phone size={18} />;
      case 'resume': return <FileText size={18} />;
      default: return <ArrowUpRight size={18} />;
    }
  };

  return (
    <section id="hero" className="hero-section">
      
      {/* Honeycomb / Hexagonal Background Pattern */}
      <div className="hero-hex-bg" aria-hidden="true">
        <svg className="hero-hex-svg" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex-pattern" width="104" height="180" patternUnits="userSpaceOnUse">
              {/* Primary Hexagon 1 (Center 52, 60) */}
              <polygon
                points="52,2 102,31 102,89 52,118 2,89 2,31"
                fill="#F8F8F8"
                stroke="#E2E2E2"
                strokeWidth="1.5"
              />
              <polygon
                points="52,8 96,34 96,86 52,112 8,86 8,34"
                fill="#FFFFFF"
                stroke="#EAEAEA"
                strokeWidth="1"
              />

              {/* Offset Hexagon 2 (Center 0, 150) */}
              <polygon
                points="0,92 50,121 50,179 0,208 -50,179 -50,121"
                fill="#F8F8F8"
                stroke="#E2E2E2"
                strokeWidth="1.5"
              />
              <polygon
                points="0,98 44,124 44,176 0,202 -44,176 -44,124"
                fill="#FFFFFF"
                stroke="#EAEAEA"
                strokeWidth="1"
              />

              {/* Offset Hexagon 3 (Center 104, 150) */}
              <polygon
                points="104,92 154,121 154,179 104,208 54,179 54,121"
                fill="#F8F8F8"
                stroke="#E2E2E2"
                strokeWidth="1.5"
              />
              <polygon
                points="104,98 148,124 148,176 104,202 60,176 60,124"
                fill="#FFFFFF"
                stroke="#EAEAEA"
                strokeWidth="1"
              />

              {/* Accent Beveled Highlights in #7B7B7B and #222222 */}
              <path
                d="M52,2 L102,31 L102,89"
                fill="none"
                stroke="#7B7B7B"
                strokeWidth="1.5"
                strokeOpacity="0.45"
              />
              <path
                d="M54,121 L104,92 L154,121"
                fill="none"
                stroke="#222222"
                strokeWidth="1.5"
                strokeOpacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-pattern)" />
        </svg>

        {/* Ambient radial glow to blend seamlessly with pure white canvas */}
        <div className="hero-hex-fade" />
      </div>

      <div className="container hero-container">
        
        {/* Availability Badge */}
        <div className="hero-badge reveal-fade-up">
          <span className="pulse-dot" />
          <span className="badge-text">{personalInfo.status}</span>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="hero-content reveal-fade-up">
          <h1 className="hero-title">
            Hi, I'm <span className="hover-gradient-text hero-name">{personalInfo.name}</span>
            <br />
            <span className="hero-role text-gradient">{personalInfo.role}</span>
          </h1>

          <p className="hero-tagline">
            {personalInfo.tagline}
          </p>
        </div>

        {/* Action CTAs */}
        <div className="hero-actions reveal-fade-up">
          <a href="#projects" className="btn-cta-primary">
            <span>Explore Projects</span>
            <ArrowDown size={17} />
          </a>
          <a href="#contact" className="btn-cta-secondary">
            <span>Contact Me</span>
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* Social Icons & Metrics Strip */}
        <div className="hero-bottom reveal-fade-up">
          <div className="hero-socials">
            {personalInfo.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith('http') ? "_blank" : undefined}
                rel="noreferrer"
                className="social-icon-btn"
                aria-label={social.name}
                title={social.name}
              >
                {getIcon(social.name)}
              </a>
            ))}
          </div>

          {/* Quick Metrics Strip */}
          <div className="hero-stats-strip">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="stat-item">
                <span className="stat-value hover-gradient-text">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
