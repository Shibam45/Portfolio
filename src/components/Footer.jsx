import React, { useState, useEffect } from 'react';
import { ArrowUp, Code2, Heart, Clock } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Footer() {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid rgba(0, 243, 255, 0.15)',
      background: '#040711',
      padding: '40px 0',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px'
        }}>
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #00f3ff, #ff0055)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Code2 size={18} color="#040814" />
            </div>
            <span style={{ fontWeight: 700, color: '#ffffff', fontSize: '1.05rem' }}>
              {PORTFOLIO_DATA.personal.name}
            </span>
          </div>

          {/* Live Clock Display */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--cyan-glow)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            background: 'rgba(0, 243, 255, 0.06)',
            padding: '6px 14px',
            borderRadius: '9999px',
            border: '1px solid rgba(0, 243, 255, 0.2)'
          }}>
            <Clock size={14} />
            LOCAL TIME: {timeStr}
          </div>

          {/* Copyright & Scroll Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.
            </span>

            <button
              onClick={scrollToTop}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(0, 243, 255, 0.3)',
                color: '#00f3ff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              title="Scroll to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
