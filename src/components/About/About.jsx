import React from 'react';
import { User, MapPin, Mail, Phone, CheckCircle2, ArrowUpRight, GraduationCap, Award } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import './About.css';

export default function About() {
  const highlights = [
    "Cross-platform app development with Flutter & Dart (State: Provider & Riverpod)",
    "Backend & REST API engineering using Node.js, Express.js, and MongoDB",
    "Authentication systems: Firebase Auth, Google Sign-In, and 2FA/TOTP security",
    "Frontend development with Angular, TypeScript, HTML5, CSS3, and modern UI/UX",
    "Production lifecycle experience publishing live applications to the Google Play Store"
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
            Passionate About Crafting <span className="hover-gradient-text">Robust Applications</span>
          </h2>
          <p className="section-subtitle">
            An IT graduate and App Developer dedicated to engineering performant mobile and web software.
          </p>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          
          {/* Main Story Box */}
          <div className="about-card main-story-card reveal-slide-left">
            <h3 className="card-heading hover-gradient-text">Background & Experience</h3>
            <div className="about-bio">
              {personalInfo.bio.map((paragraph, idx) => (
                <p key={idx} className="bio-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Metrics Pills */}
            <div className="about-metrics-row">
              <div className="about-metric-pill">
                <span className="metric-pill-val">2</span>
                <span className="metric-pill-lbl">Play Store Apps</span>
              </div>
              <div className="about-metric-pill">
                <span className="metric-pill-val">B.Tech</span>
                <span className="metric-pill-lbl">IT Graduate</span>
              </div>
              <div className="about-metric-pill">
                <span className="metric-pill-val">MEAN + Flutter</span>
                <span className="metric-pill-lbl">Core Stack</span>
              </div>
            </div>

            <div className="about-details-list">
              <div className="detail-item">
                <MapPin size={17} className="detail-icon" />
                <span className="detail-text">{personalInfo.location}</span>
              </div>
              <div className="detail-item">
                <Mail size={17} className="detail-icon" />
                <a href={`mailto:${personalInfo.email}`} className="detail-text hover-gradient-text">{personalInfo.email}</a>
              </div>
              <div className="detail-item">
                <Phone size={17} className="detail-icon" />
                <a href={`tel:${personalInfo.phone}`} className="detail-text hover-gradient-text">{personalInfo.phone}</a>
              </div>
            </div>

            {/* Education Card */}
            {personalInfo.education && (
              <div className="education-box">
                <div className="education-header">
                  <div className="edu-icon-badge">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h4 className="edu-degree">{personalInfo.education.degree}</h4>
                    <p className="edu-school">{personalInfo.education.institution} &bull; {personalInfo.education.period}</p>
                  </div>
                </div>
                <div className="edu-footer">
                  <span className="edu-tag">
                    <Award size={14} />
                    <span>{personalInfo.education.grade}</span>
                  </span>
                  <span className="edu-location">{personalInfo.education.location}</span>
                </div>
              </div>
            )}

            <div className="about-action">
              <a 
                href={personalInfo.resumeUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-resume"
              >
                <span>View Resume</span>
                <ArrowUpRight size={15} />
              </a>
              <a href="#contact" className="btn-connect">
                <span>Connect with Me</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* Highlights / Principles Box */}
          <div className="about-card highlights-card reveal-slide-right">
            <h3 className="card-heading hover-gradient-text">Core Competencies</h3>
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
