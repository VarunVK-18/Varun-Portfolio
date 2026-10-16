import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { experienceData } from '../../data/portfolioData';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper experience-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal-fade-up">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Career Path</span>
          </div>
          <h2 className="section-title">
            Professional <span className="hover-gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            A chronological timeline of roles, impact, and technology stacks.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="timeline-container">
          {experienceData.map((exp, index) => (
            <div key={index} className="timeline-item reveal-fade-up">
              
              {/* Timeline marker */}
              <div className="timeline-marker">
                <div className="marker-dot" />
                <div className="marker-line" />
              </div>

              {/* Timeline Card */}
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="role-title hover-gradient-text">{exp.role}</h3>
                    <div className="company-name">{exp.company}</div>
                  </div>

                  <div className="timeline-meta">
                    <span className="meta-badge">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </span>
                    <span className="meta-badge">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <p className="experience-desc">{exp.description}</p>

                {/* Key Achievements */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="highlights-list">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="highlight-item">
                        <ChevronRight size={15} className="highlight-bullet" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Pills */}
                <div className="tech-pills-list">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
