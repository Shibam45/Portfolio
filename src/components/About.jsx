import React from 'react';
import { Terminal, Shield, Zap, Layers, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Title */}
        <div className="section-title-wrapper">
          <div className="badge-neon-cyan" style={{ marginBottom: '12px' }}>
            <Terminal size={14} />
            WHO I AM
          </div>
          <h2 className="section-title">About & Engineering Philosophy</h2>
          <p className="section-subtitle">
            Crafting elegant software architecture and user experiences with production-grade reliability.
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '60px'
        }}>
          {PORTFOLIO_DATA.stats.map((stat, idx) => (
            <div key={idx} className="glass-panel" style={{
              padding: '24px',
              borderRadius: '16px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '80px',
                height: '80px',
                background: idx % 2 === 0 ? 'rgba(0, 243, 255, 0.08)' : 'rgba(255, 0, 85, 0.08)',
                borderRadius: '50%',
                filter: 'blur(20px)'
              }} />
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 900,
                color: idx % 2 === 0 ? 'var(--cyan-glow)' : 'var(--magenta-glow)',
                fontFamily: 'var(--font-mono)',
                marginBottom: '4px'
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* IDE & Philosophy 2-Column Showcase */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px', alignItems: 'center' }}>
          
          {/* IDE Window Box */}
          <div style={{ gridColumn: 'span 12' }} className="about-col-left">
            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 243, 255, 0.25)',
              background: '#090d1a',
              boxShadow: '0 0 35px rgba(0, 243, 255, 0.12)'
            }}>
              {/* IDE Header */}
              <div style={{
                background: '#0d1324',
                padding: '12px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  developer_profile.json
                </div>
                <div style={{ fontSize: '0.75rem', color: '#00f3ff', fontFamily: 'var(--font-mono)' }}>JSON</div>
              </div>

              {/* IDE Code Content */}
              <div style={{ padding: '24px', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', lineHeight: 1.7, color: '#e2e8f0' }}>
                <div><span style={{ color: '#ff79c6' }}>const</span> <span style={{ color: '#50fa7b' }}>developer</span> = &#123;</div>
                <div style={{ paddingLeft: '20px' }}>
                  <span style={{ color: '#8be9fd' }}>name:</span> <span style={{ color: '#f1fa8c' }}>"{PORTFOLIO_DATA.personal.name}"</span>,
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <span style={{ color: '#8be9fd' }}>role:</span> <span style={{ color: '#f1fa8c' }}>"{PORTFOLIO_DATA.personal.role}"</span>,
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <span style={{ color: '#8be9fd' }}>location:</span> <span style={{ color: '#f1fa8c' }}>"{PORTFOLIO_DATA.personal.location}"</span>,
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <span style={{ color: '#8be9fd' }}>coreStack:</span> [
                  <span style={{ color: '#f1fa8c' }}>"TypeScript"</span>, <span style={{ color: '#f1fa8c' }}>"React"</span>, <span style={{ color: '#f1fa8c' }}>"Node.js"</span>, <span style={{ color: '#f1fa8c' }}>"PostgreSQL"</span>, <span style={{ color: '#f1fa8c' }}>"AWS"</span>
                  ],
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <span style={{ color: '#8be9fd' }}>hardSkills:</span> [
                  <span style={{ color: '#f1fa8c' }}>"API Design"</span>, <span style={{ color: '#f1fa8c' }}>"System Architecture"</span>, <span style={{ color: '#f1fa8c' }}>"CI/CD Pipelines"</span>
                  ],
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <span style={{ color: '#8be9fd' }}>status:</span> <span style={{ color: '#50fa7b' }}>"{PORTFOLIO_DATA.personal.status}"</span>
                </div>
                <div>&#125;;</div>
              </div>
            </div>
          </div>

          {/* Philosophy Highlights */}
          <div style={{ gridColumn: 'span 12' }} className="about-col-right">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {PORTFOLIO_DATA.aboutHighlights.map((item, idx) => (
                <div key={idx} className="glass-panel" style={{
                  padding: '20px 24px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px'
                }}>
                  <div style={{
                    padding: '12px',
                    borderRadius: '12px',
                    background: idx === 0 ? 'rgba(0, 243, 255, 0.1)' : idx === 1 ? 'rgba(255, 0, 85, 0.1)' : 'rgba(168, 85, 247, 0.1)',
                    border: `1px solid ${idx === 0 ? 'rgba(0, 243, 255, 0.3)' : idx === 1 ? 'rgba(255, 0, 85, 0.3)' : 'rgba(168, 85, 247, 0.3)'}`,
                    shrink: 0
                  }}>
                    {idx === 0 ? <Shield size={22} color="#00f3ff" /> : idx === 1 ? <Zap size={22} color="#ff0055" /> : <Layers size={22} color="#a855f7" />}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '6px', color: '#ffffff' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-col-left { grid-column: span 6 !important; }
          .about-col-right { grid-column: span 6 !important; }
        }
      `}</style>
    </section>
  );
}
