import React from 'react';
import { User, MapPin, Mail, FileText, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import './About.css';

export default function About() {
  const highlights = [
    "Frontend architecture with modular React & modern JavaScript",
    "Performance tuning, accessibility, and zero layout shift",
    "Clean code philosophy, DRY principles, and thorough testing",
    "Collaborative mindset with strong cross-functional communication"
  ];

  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-header reveal-fade-up">
          <div className="section-tag">
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Passionate About Crafting <span className="hover-gradient-text">Clean Digital Solutions</span>
          </h2>
          <p className="section-subtitle">
            A developer who values clarity, user-centric engineering, and minimalist aesthetics.
          </p>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          
          {/* Main Story Box */}
          <div className="about-card main-story-card reveal-fade-up">
            <h3 className="card-heading hover-gradient-text">Background & Approach</h3>
            <div className="about-bio">
              {personalInfo.bio.map((paragraph, idx) => (
                <p key={idx} className="bio-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="about-details-list">
              <div className="detail-item">
                <MapPin size={17} className="detail-icon" />
                <span className="detail-text">{personalInfo.location}</span>
              </div>
              <div className="detail-item">
                <Mail size={17} className="detail-icon" />
                <span className="detail-text">{personalInfo.email}</span>
              </div>
            </div>

            <div className="about-action">
              <a href={personalInfo.resumeUrl} className="btn-resume">
                <FileText size={16} />
                <span>Download Resume</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* Highlights / Principles Box */}
          <div className="about-card highlights-card reveal-fade-up">
            <h3 className="card-heading hover-gradient-text">Engineering Principles</h3>
            <ul className="principles-list">
              {highlights.map((item, index) => (
                <li key={index} className="principle-item">
                  <div className="principle-icon-box">
                    <CheckCircle2 size={16} className="principle-icon" />
                  </div>
                  <span className="principle-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
