import React, { useState } from 'react';
import { Mail, MapPin, Send, Copy, Check, MessageSquare, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    showToast('Email address copied to clipboard!');
    setTimeout(() => setCopied(false), 3000);
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill out all required fields.');
      return;
    }
    showToast('🚀 Thank you! Your message has been sent successfully.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="cyber-grid-bg" style={{ padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Title */}
        <div className="section-title-wrapper">
          <div className="badge-neon-cyan" style={{ marginBottom: '12px' }}>
            <Mail size={14} />
            GET IN TOUCH
          </div>
          <h2 className="section-title">Let's Build Something Great</h2>
          <p className="section-subtitle">
            Whether you have an inquiry, project proposal, or just want to connect, send me a message!
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px' }}>
          
          {/* Left Info Column */}
          <div style={{ gridColumn: 'span 12' }} className="contact-col-left">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div className="glass-panel" style={{ padding: '24px', borderRadius: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                  <div style={{
                    padding: '12px',
                    borderRadius: '12px',
                    background: 'rgba(0, 243, 255, 0.1)',
                    border: '1px solid rgba(0, 243, 255, 0.3)',
                    color: '#00f3ff'
                  }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>DIRECT EMAIL</div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>
                      {PORTFOLIO_DATA.personal.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="btn-neon-ghost"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.88rem' }}
                >
                  {copied ? <Check size={16} color="#00f3ff" /> : <Copy size={16} />}
                  {copied ? 'Copied to Clipboard!' : 'Copy Email Address'}
                </button>
              </div>

              <div className="glass-panel" style={{ padding: '24px', borderRadius: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    padding: '12px',
                    borderRadius: '12px',
                    background: 'rgba(255, 0, 85, 0.1)',
                    border: '1px solid rgba(255, 0, 85, 0.3)',
                    color: '#ff0055'
                  }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>LOCATION</div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>
                      {PORTFOLIO_DATA.personal.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="glass-panel" style={{ padding: '24px', borderRadius: '18px' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '14px' }}>
                  SOCIAL PROFILES
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noreferrer" className="social-box">
                    <Github size={20} />
                  </a>
                  <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="social-box">
                    <Linkedin size={20} />
                  </a>
                  <a href={PORTFOLIO_DATA.personal.twitter} target="_blank" rel="noreferrer" className="social-box">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Contact Form Column */}
          <div style={{ gridColumn: 'span 12' }} className="contact-col-right">
            <form onSubmit={handleSubmit} className="glass-panel" style={{
              padding: '32px',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
                Send a Message
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(6, 9, 19, 0.8)',
                      border: '1px solid rgba(0, 243, 255, 0.2)',
                      color: '#ffffff',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(6, 9, 19, 0.8)',
                      border: '1px solid rgba(0, 243, 255, 0.2)',
                      color: '#ffffff',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
                  SUBJECT
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project Inquiry / Job Opportunity"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(6, 9, 19, 0.8)',
                    border: '1px solid rgba(0, 243, 255, 0.2)',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
                  MESSAGE *
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello! I'd love to talk about building..."
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(6, 9, 19, 0.8)',
                    border: '1px solid rgba(0, 243, 255, 0.2)',
                    color: '#ffffff',
                    fontSize: '0.92rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button type="submit" className="btn-neon-primary" style={{ justifyContent: 'center', marginTop: '8px' }}>
                <Send size={18} />
                Send Message
              </button>

            </form>
          </div>

        </div>

      </div>

      {/* Toast Notification Banner */}
      {toast && (
        <div style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: 100,
          padding: '14px 22px',
          borderRadius: '12px',
          background: '#0d1322',
          border: '1px solid #00f3ff',
          color: '#ffffff',
          boxShadow: '0 0 25px rgba(0, 243, 255, 0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '0.92rem',
          fontFamily: 'var(--font-mono)'
        }}>
          <Sparkles size={18} color="#00f3ff" />
          {toast}
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .contact-col-left { grid-column: span 5 !important; }
          .contact-col-right { grid-column: span 7 !important; }
        }
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
        .social-box {
          padding: 12px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-muted);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }
        .social-box:hover {
          color: #00f3ff;
          border-color: rgba(0, 243, 255, 0.4);
          box-shadow: 0 0 15px rgba(0, 243, 255, 0.3);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
