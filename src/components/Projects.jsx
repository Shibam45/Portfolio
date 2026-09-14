import React, { useState } from 'react';
import { Layers, ExternalLink, Github, Info, X, Check, Activity } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="cyber-grid-bg" style={{ padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Title */}
        <div className="section-title-wrapper">
          <div className="badge-neon-pink" style={{ marginBottom: '12px' }}>
            <Layers size={14} />
            PORTFOLIO SHOWCASE
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of recent web applications, cloud architectures, and open-source contributions.
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '45px'
        }}>
          {PORTFOLIO_DATA.projectCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '10px 22px',
                  borderRadius: '12px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: isActive ? '1px solid #ff0055' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isActive ? 'rgba(255, 0, 85, 0.12)' : 'rgba(15, 23, 42, 0.6)',
                  color: isActive ? '#ff0055' : 'var(--text-muted)',
                  boxShadow: isActive ? '0 0 20px rgba(255, 0, 85, 0.25)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '30px'
        }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Project Image Banner */}
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  className="project-img"
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, #0d1322 0%, transparent 100%)'
                }} />
                {project.featured && (
                  <div style={{ position: 'absolute', top: '14px', right: '14px' }}>
                    <span className="badge-neon-cyan" style={{ background: 'rgba(6, 9, 19, 0.85)' }}>
                      FEATURED
                    </span>
                  </div>
                )}
              </div>

              {/* Project Card Content */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                  {project.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '18px', lineHeight: 1.6, flex: 1 }}>
                  {project.tagline}
                </p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} style={{
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: 'rgba(0, 243, 255, 0.06)',
                      border: '1px solid rgba(0, 243, 255, 0.2)',
                      color: '#00f3ff',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)'
                    }}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', alignSelf: 'center' }}>
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Card Action Links */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--cyan-glow)',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Info size={16} />
                    Details
                  </button>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        padding: '8px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        color: 'var(--text-muted)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        textDecoration: 'none'
                      }}
                      title="GitHub Repository"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        padding: '8px',
                        borderRadius: '8px',
                        background: 'rgba(255, 0, 85, 0.12)',
                        color: '#ff0055',
                        border: '1px solid rgba(255, 0, 85, 0.3)',
                        textDecoration: 'none'
                      }}
                      title="Live Preview"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div style={{
              padding: '20px 24px',
              borderBottom: '1px solid rgba(0, 243, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#0a0e1c'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Activity size={20} color="#00f3ff" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '4px'
                }}
              >
                <X size={22} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px' }}>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '14px', marginBottom: '20px' }}
              />

              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.98rem', marginBottom: '20px' }}>
                {selectedProject.description}
              </p>

              {/* Metrics Highlights */}
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '0.9rem', color: '#00f3ff', fontFamily: 'var(--font-mono)', marginBottom: '10px' }}>
                  KEY METRICS & HIGHLIGHTS
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {selectedProject.metrics.map((m, idx) => (
                    <div key={idx} className="badge-neon-pink">
                      <Check size={14} />
                      {m}
                    </div>
                  ))}
                </div>
              </div>

              {/* Full Tech Stack */}
              <div style={{ marginBottom: '28px' }}>
                <h4 style={{ fontSize: '0.9rem', color: '#ff0055', fontFamily: 'var(--font-mono)', marginBottom: '10px' }}>
                  TECHNOLOGY STACK
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {selectedProject.technologies.map((t, idx) => (
                    <span key={idx} style={{
                      padding: '6px 14px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div style={{ display: 'flex', gap: '14px', justifyContent: 'flex-end' }}>
                <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="btn-neon-ghost">
                  <Github size={18} />
                  GitHub Source
                </a>
                <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer" className="btn-neon-primary">
                  <ExternalLink size={18} />
                  Visit Live Site
                </a>
              </div>

            </div>
          </div>
        </div>
      )}

      <style>{`
        .project-img:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
