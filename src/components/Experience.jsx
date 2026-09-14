import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Title */}
        <div className="section-title-wrapper">
          <div className="badge-neon-cyan" style={{ marginBottom: '12px' }}>
            <Briefcase size={14} />
            CAREER PATH
          </div>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My journey building high-impact software products and working alongside cross-functional engineering teams.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Glowing Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '24px',
            top: '20px',
            bottom: '20px',
            width: '2px',
            background: 'linear-gradient(180deg, #00f3ff, #ff0055, #a855f7)',
            boxShadow: '0 0 12px rgba(0, 243, 255, 0.4)',
            zIndex: 1
          }} className="timeline-line" />

          {PORTFOLIO_DATA.experience.map((item, idx) => (
            <div key={idx} style={{
              position: 'relative',
              paddingLeft: '64px',
              marginBottom: '40px',
              zIndex: 2
            }}>
              {/* Timeline Marker Dot */}
              <div style={{
                position: 'absolute',
                left: '14px',
                top: '6px',
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                background: '#060913',
                border: `3px solid ${idx === 0 ? '#00f3ff' : idx === 1 ? '#ff0055' : '#a855f7'}`,
                boxShadow: `0 0 15px ${idx === 0 ? '#00f3ff' : idx === 1 ? '#ff0055' : '#a855f7'}`,
                zIndex: 3
              }} />

              {/* Timeline Experience Card */}
              <div className="glass-panel" style={{
                padding: '28px',
                borderRadius: '20px'
              }}>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  marginBottom: '14px'
                }}>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
                      {item.role}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--cyan-glow)', fontSize: '0.95rem', fontWeight: 600 }}>
                      <Building2 size={16} />
                      {item.company}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span className="badge-neon-pink">
                      <Calendar size={13} />
                      {item.period}
                    </span>
                    <span className="badge-neon-purple">
                      {item.type}
                    </span>
                  </div>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', marginBottom: '18px', lineHeight: 1.6 }}>
                  {item.description}
                </p>

                {/* Key Achievements Bullet points */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                  {item.achievements.map((ach, aIdx) => (
                    <div key={aIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={18} color="#00f3ff" style={{ marginTop: '2px', shrink: 0 }} />
                      <span style={{ fontSize: '0.92rem', color: '#cbd5e1' }}>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {item.technologies.map((tech, tIdx) => (
                    <span key={tIdx} style={{
                      padding: '4px 12px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      color: 'var(--text-muted)',
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)'
                    }}>
                      #{tech}
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
