import React, { useState, useEffect } from 'react';
import { Terminal, Code2, Menu, X, Briefcase, Mail, User, Layers, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'terminal', 'contact'];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 160 && rect.bottom >= 160;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Code2 },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Layers },
    { id: 'terminal', label: 'CLI Lab', icon: Terminal },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '10px 0' : '16px 0',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(6, 9, 19, 0.92)' : 'rgba(6, 9, 19, 0.4)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(0, 243, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px'
      }}>
        
        {/* Brand Logo */}
        <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #00f3ff, #ff0055)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(0, 243, 255, 0.4)'
          }}>
            <Code2 size={20} color="#040814" strokeWidth={2.5} />
          </div>
          <div>
            <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.5px', whiteSpace: 'nowrap' }}>
              {PORTFOLIO_DATA.personal.name.split(' ')[0]}
              <span className="gradient-text-cyan-pink">.{PORTFOLIO_DATA.personal.name.split(' ')[1] || 'dev'}</span>
            </span>
            <div style={{ fontSize: '0.68rem', color: 'var(--cyan-glow)', fontFamily: 'var(--font-mono)' }}>FULL-STACK DEV</div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(15, 23, 42, 0.5)',
            padding: '4px 8px',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  color: isActive ? '#00f3ff' : 'var(--text-muted)',
                  background: isActive ? 'rgba(0, 243, 255, 0.12)' : 'transparent',
                  border: isActive ? '1px solid rgba(0, 243, 255, 0.3)' : '1px solid transparent',
                  boxShadow: isActive ? '0 0 12px rgba(0, 243, 255, 0.2)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={14} color={isActive ? '#00f3ff' : 'var(--text-muted)'} />
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Availability Badge */}
        <div style={{ display: 'none', alignItems: 'center', gap: '12px', flexShrink: 0 }} className="desktop-nav">
          <div className="badge-neon-cyan" style={{ fontSize: '0.78rem', padding: '5px 12px' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#00f3ff', boxShadow: '0 0 8px #00f3ff' }} />
            {PORTFOLIO_DATA.personal.status}
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid var(--border-color)',
            color: '#ffffff',
            padding: '8px',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
          className="mobile-toggle"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X size={22} color="#00f3ff" /> : <Menu size={22} color="#ffffff" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(6, 9, 19, 0.96)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 243, 255, 0.2)',
          padding: '16px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  color: activeSection === item.id ? '#00f3ff' : '#ffffff',
                  background: activeSection === item.id ? 'rgba(0, 243, 255, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  fontWeight: 500
                }}
              >
                <Icon size={18} />
                {item.label}
              </a>
            );
          })}
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
