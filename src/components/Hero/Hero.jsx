import React from 'react';
import { ArrowUpRight, Mail, FileText, ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons/Icons';
import { personalInfo } from '../../data/portfolioData';
import './Hero.css';

export default function Hero() {
  const getIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github': return <GithubIcon size={18} />;
      case 'linkedin': return <LinkedinIcon size={18} />;
      case 'email': return <Mail size={18} />;
      case 'resume': return <FileText size={18} />;
      default: return <ArrowUpRight size={18} />;
    }
  };

  return (
    <section id="hero" className="hero-section">
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
                target="_blank"
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
