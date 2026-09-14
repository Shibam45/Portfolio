import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Terminal, Github, Linkedin, Twitter, Mail, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = PORTFOLIO_DATA.personal.role;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section
      id="home"
      className="cyber-grid-bg"
      style={{
        minHeight: '100vh',
        paddingTop: '130px',
        paddingBottom: '80px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflowX: 'hidden'
      }}
    >
      {/* Background Neon Ambient Orbs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(0,243,255,0.15) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255,0,85,0.15) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px', alignItems: 'center' }}>
          
          {/* Text & Introduction Column */}
          <div style={{ gridColumn: 'span 12' }} className="hero-text-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <div className="badge-neon-pink">
                <Sparkles size={14} color="#ff0055" />
                WELCOME TO MY PORTFOLIO
              </div>
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '16px' }}>
              Hi, I'm <span className="gradient-text-cyan-pink">{PORTFOLIO_DATA.personal.name}</span>
            </h1>

            <div style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
              fontFamily: 'var(--font-mono)',
              color: 'var(--cyan-glow)',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              minHeight: '2.4rem'
            }}>
              <span>&gt;</span>
              <span>{typedText}</span>
              <span style={{ animation: 'pulseGlow 1s infinite', color: '#ff0055' }}>_</span>
            </div>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '620px', marginBottom: '32px', lineHeight: 1.7 }}>
              {PORTFOLIO_DATA.personal.tagline}. {PORTFOLIO_DATA.personal.bio}
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
              <a href="#projects" className="btn-neon-primary">
                Explore Projects
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-neon-secondary">
                Get In Touch
                <Mail size={18} />
              </a>
              <a href={PORTFOLIO_DATA.personal.resumeUrl} className="btn-neon-ghost" target="_blank" rel="noopener noreferrer">
                <Download size={18} />
                Resume
              </a>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>CONNECT:</span>
              <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noreferrer" style={{
                color: 'var(--text-muted)',
                padding: '10px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'all 0.3s ease'
              }} className="social-icon">
                <Github size={20} />
              </a>
              <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noreferrer" style={{
                color: 'var(--text-muted)',
                padding: '10px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'all 0.3s ease'
              }} className="social-icon">
                <Linkedin size={20} />
              </a>
              <a href={PORTFOLIO_DATA.personal.twitter} target="_blank" rel="noreferrer" style={{
                color: 'var(--text-muted)',
                padding: '10px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'all 0.3s ease'
              }} className="social-icon">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Avatar Image Column */}
          <div style={{ gridColumn: 'span 12' }} className="hero-img-col">
            {/* paddingBottom+paddingLeft absorb the floating badge overflow so it never clips */}
            <div style={{
              position: 'relative',
              maxWidth: '440px',
              margin: '0 auto',
              paddingBottom: '48px',
              paddingLeft: '16px'
            }}>
              
              {/* Dual Tone Glow Frame */}
              <div className="neon-avatar-frame">
                <img
                  src={PORTFOLIO_DATA.personal.avatar}
                  alt={PORTFOLIO_DATA.personal.name}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '20px',
                    display: 'block',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Floating Pill Badge — uses bottom/left within padding space so it never overflows */}
              <div className="glass-panel" style={{
                position: 'absolute',
                bottom: '0px',
                left: '0px',
                padding: '12px 20px',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(0, 243, 255, 0.15)',
                  border: '1px solid rgba(0, 243, 255, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Terminal size={20} color="#00f3ff" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>SPECIALTY</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>Full-Stack Systems</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-text-col { grid-column: span 7 !important; }
          .hero-img-col { grid-column: span 5 !important; }
        }
        .social-icon:hover {
          color: #00f3ff !important;
          border-color: rgba(0, 243, 255, 0.4) !important;
          box-shadow: 0 0 15px rgba(0, 243, 255, 0.3);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
