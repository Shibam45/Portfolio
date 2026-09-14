import React, { useState } from 'react';
import { Cpu, Code, FileCode, Globe, Palette, Server, Database, Network, Box, Cloud, GitBranch, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const getIconComponent = (iconName) => {
    const icons = { Code, FileCode, Globe, Palette, Server, Cpu, Database, Network, Box, Cloud, GitBranch, Layers };
    const IconComp = icons[iconName] || Cpu;
    return <IconComp size={20} />;
  };

  const filteredSkills = activeCategory === 'all'
    ? PORTFOLIO_DATA.skills
    : PORTFOLIO_DATA.skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="cyber-grid-bg" style={{ padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Title */}
        <div className="section-title-wrapper">
          <div className="badge-neon-pink" style={{ marginBottom: '12px' }}>
            <Cpu size={14} />
            TECHNICAL EXPERTISE
          </div>
          <h2 className="section-title">Skills & Capabilities</h2>
          <p className="section-subtitle">
            A comprehensive overview of tools, languages, and technologies I rely on to craft production systems.
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
          {PORTFOLIO_DATA.skillCategories.map((cat) => {
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
                  border: isActive ? '1px solid #00f3ff' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isActive ? 'rgba(0, 243, 255, 0.12)' : 'rgba(15, 23, 42, 0.6)',
                  color: isActive ? '#00f3ff' : 'var(--text-muted)',
                  boxShadow: isActive ? '0 0 20px rgba(0, 243, 255, 0.25)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))',
          gap: '24px'
        }}>
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '22px',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    padding: '10px',
                    borderRadius: '10px',
                    background: 'rgba(0, 243, 255, 0.1)',
                    border: '1px solid rgba(0, 243, 255, 0.3)',
                    color: '#00f3ff'
                  }}>
                    {getIconComponent(skill.icon)}
                  </div>
                  <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
                    {skill.name}
                  </span>
                </div>
                <span style={{
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--cyan-glow)',
                  fontWeight: 600
                }}>
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar Container */}
              <div style={{
                height: '8px',
                borderRadius: '4px',
                background: 'rgba(255, 255, 255, 0.06)',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <div style={{
                  height: '100%',
                  width: `${skill.level}%`,
                  borderRadius: '4px',
                  background: 'linear-gradient(90deg, #00f3ff, #ff0055)',
                  boxShadow: '0 0 10px rgba(0, 243, 255, 0.5)',
                  transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                }} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
