import React from 'react';
import { Cpu, Layout, Server, Wrench, Check } from 'lucide-react';
import { skillsData } from '../../data/portfolioData';
import './Skills.css';

export default function Skills() {
  const getCategoryIcon = (category) => {
    const lower = category.toLowerCase();
    if (lower.includes('frontend')) return <Layout size={20} />;
    if (lower.includes('backend') || lower.includes('systems')) return <Server size={20} />;
    return <Wrench size={20} />;
  };

  return (
    <section id="skills" className="section-wrapper skills-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal-fade-up">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Capabilities</span>
          </div>
          <h2 className="section-title">
            Technical <span className="hover-gradient-text">Skillset</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive breakdown of tools, frameworks, and engineering competencies.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {skillsData.map((group, index) => (
            <div key={index} className="skills-card reveal-fade-up">
              
              <div className="skills-category-header">
                <div className="category-icon-box">
                  {getCategoryIcon(group.category)}
                </div>
                <h3 className="category-title hover-gradient-text">{group.category}</h3>
              </div>

              <div className="skills-items-container">
                {group.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item-badge">
                    <Check size={14} className="skill-check-icon" />
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
