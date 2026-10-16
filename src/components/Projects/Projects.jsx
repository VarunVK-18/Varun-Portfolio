import React, { useState } from 'react';
import { Layers, ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../Icons/Icons';
import { projectsData } from '../../data/portfolioData';
import './Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'featured'
    ? projectsData.filter((p) => p.featured)
    : projectsData;

  return (
    <section id="projects" className="section-wrapper projects-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal-fade-up">
          <div className="section-tag">
            <Layers size={14} />
            <span>Portfolio</span>
          </div>
          <div className="projects-header-flex">
            <div>
              <h2 className="section-title">
                Featured <span className="hover-gradient-text">Projects</span>
              </h2>
              <p className="section-subtitle">
                A selection of real-world applications, tools, and technical prototypes.
              </p>
            </div>

            {/* Filter Toggle */}
            <div className="project-filter-group">
              <button
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All Projects
              </button>
              <button
                className={`filter-btn ${filter === 'featured' ? 'active' : ''}`}
                onClick={() => setFilter('featured')}
              >
                Featured Only
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card reveal-fade-up">
              
              <div className="project-top-row">
                <span className="project-counter">0{index + 1}</span>
                <div className="project-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link-icon"
                      aria-label="View Source Code on GitHub"
                      title="Source Code"
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link-icon"
                      aria-label="View Live Project"
                      title="Live Preview"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="project-body">
                <h3 className="project-title hover-gradient-text">
                  <a href={project.liveUrl || project.githubUrl} target="_blank" rel="noreferrer">
                    {project.title}
                  </a>
                </h3>

                <p className="project-desc">{project.description}</p>
              </div>

              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-footer">
                <a
                  href={project.liveUrl || project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-action-link"
                >
                  <span>Explore Project</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
