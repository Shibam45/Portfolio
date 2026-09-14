import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, Trash2, Code2, Play } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Terminal() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      content: `WELCOME TO ${PORTFOLIO_DATA.personal.name.toUpperCase()}-OS CLI LAB v2.4\nType "help" or click any command on the left panel to execute.`
    }
  ]);
  const consoleBoxRef = useRef(null);

  useEffect(() => {
    if (consoleBoxRef.current) {
      consoleBoxRef.current.scrollTop = consoleBoxRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'input', content: `guest@shibam-dev:~$ ${cmdStr}` }];

    switch (trimmed) {
      case 'help':
        newHistory.push({
          type: 'output',
          content: `AVAILABLE COMMANDS:
  help       - Display command manual
  bio        - View developer profile & background
  skills     - List tech stack proficiencies
  projects   - Show featured projects
  contact    - Display email & social profiles
  sudo hire  - [SPECIAL] Trigger hiring sequence
  clear      - Reset console screen`
        });
        break;

      case 'bio':
        newHistory.push({
          type: 'output',
          content: `${PORTFOLIO_DATA.personal.name} | ${PORTFOLIO_DATA.personal.role}\n${PORTFOLIO_DATA.personal.bio}\nLocation: ${PORTFOLIO_DATA.personal.location}`
        });
        break;

      case 'skills':
        const skillList = PORTFOLIO_DATA.skills.map(s => `• ${s.name} (${s.level}%)`).join('\n');
        newHistory.push({
          type: 'output',
          content: `SKILLS & PROFICIENCIES:\n${skillList}`
        });
        break;

      case 'projects':
        const projList = PORTFOLIO_DATA.projects.map(p => `• [${p.title}] - ${p.tagline}`).join('\n');
        newHistory.push({
          type: 'output',
          content: `FEATURED PROJECTS:\n${projList}`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          content: `CONTACT INFO:\nEmail: ${PORTFOLIO_DATA.personal.email}\nGitHub: ${PORTFOLIO_DATA.personal.github}\nLinkedIn: ${PORTFOLIO_DATA.personal.linkedin}`
        });
        break;

      case 'sudo hire':
        newHistory.push({
          type: 'special',
          content: `🎉 ACCESS GRANTED! HIRING PROTOCOL INITIATED 🎉\nDirect Contact: ${PORTFOLIO_DATA.personal.email}`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'error',
          content: `bash: command not found: ${trimmed}. Type "help" for a list of valid commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  const commandsList = [
    { cmd: 'help', desc: 'Display available manual' },
    { cmd: 'bio', desc: 'Developer profile & location' },
    { cmd: 'skills', desc: 'Tech stack & percentages' },
    { cmd: 'projects', desc: 'Overview of featured builds' },
    { cmd: 'contact', desc: 'Get direct email & links' },
    { cmd: 'sudo hire', desc: 'Execute hiring sequence' },
    { cmd: 'clear', desc: 'Clear output buffer' }
  ];

  return (
    <section id="terminal" className="cyber-grid-bg" style={{ padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Title */}
        <div className="section-title-wrapper">
          <div className="badge-neon-cyan" style={{ marginBottom: '12px' }}>
            <TerminalIcon size={14} />
            DEVELOPER LAB
          </div>
          <h2 className="section-title">Interactive Terminal</h2>
          <p className="section-subtitle">
            Query bio details, tech stack, and projects directly via an interactive command-line console.
          </p>
        </div>

        {/* Horizontal 2-Column Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '30px', alignItems: 'stretch' }}>
          
          {/* Left Column: Command Palette & Controls */}
          <div style={{ gridColumn: 'span 12' }} className="terminal-col-left">
            <div className="glass-panel" style={{
              padding: '28px',
              borderRadius: '20px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div style={{
                    padding: '10px',
                    borderRadius: '10px',
                    background: 'rgba(0, 243, 255, 0.1)',
                    border: '1px solid rgba(0, 243, 255, 0.3)',
                    color: '#00f3ff'
                  }}>
                    <Code2 size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>CLI Command Suite</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Click to execute or type manually</p>
                  </div>
                </div>

                {/* Commands Stack */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
                  {commandsList.map((item) => (
                    <button
                      key={item.cmd}
                      onClick={() => handleCommand(item.cmd)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        background: item.cmd === 'sudo hire' ? 'rgba(255, 0, 85, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                        border: item.cmd === 'sudo hire' ? '1px solid rgba(255, 0, 85, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#ffffff',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.2s ease'
                      }}
                      className="cmd-btn"
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.85rem',
                          color: item.cmd === 'sudo hire' ? '#ff0055' : '#00f3ff',
                          fontWeight: 600
                        }}>
                          $ {item.cmd}
                        </span>
                      </div>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Box */}
              <div style={{
                marginTop: '24px',
                padding: '12px 16px',
                borderRadius: '10px',
                background: 'rgba(0, 243, 255, 0.05)',
                border: '1px solid rgba(0, 243, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <Sparkles size={16} color="#00f3ff" />
                <span style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>
                  Pro tip: Type <code style={{ color: '#00f3ff' }}>sudo hire</code> for an easter egg!
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Terminal Console Window */}
          <div style={{ gridColumn: 'span 12' }} className="terminal-col-right">
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 243, 255, 0.3)',
              background: '#040711',
              boxShadow: '0 0 40px rgba(0, 243, 255, 0.15)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* Window Titlebar */}
              <div style={{
                background: '#0a0e1c',
                padding: '12px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(0, 243, 255, 0.15)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
                  <span style={{ marginLeft: '12px', fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    guest@shibam-dev:~ (zsh)
                  </span>
                </div>

                <button
                  onClick={() => setHistory([])}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.78rem'
                  }}
                  title="Clear screen"
                >
                  <Trash2 size={14} /> Clear
                </button>
              </div>

              {/* Console Screen Output */}
              <div
                ref={consoleBoxRef}
                style={{
                  padding: '24px',
                  flex: 1,
                  minHeight: '320px',
                  maxHeight: '440px',
                  overflowY: 'auto',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.88rem',
                  lineHeight: 1.6
                }}
              >
                {history.map((item, idx) => (
                  <div key={idx} style={{ marginBottom: '12px' }}>
                    {item.type === 'input' && (
                      <div style={{ color: '#00f3ff', fontWeight: 600 }}>{item.content}</div>
                    )}
                    {item.type === 'output' && (
                      <pre style={{ color: '#cbd5e1', whitespace: 'pre-wrap', fontFamily: 'inherit' }}>{item.content}</pre>
                    )}
                    {item.type === 'system' && (
                      <div style={{ color: '#38bdf8', fontStyle: 'italic' }}>{item.content}</div>
                    )}
                    {item.type === 'special' && (
                      <div style={{ color: '#ff0055', fontWeight: 700, padding: '10px 14px', borderRadius: '8px', background: 'rgba(255, 0, 85, 0.15)', border: '1px solid rgba(255, 0, 85, 0.4)' }}>
                        {item.content}
                      </div>
                    )}
                    {item.type === 'error' && (
                      <div style={{ color: '#ef4444' }}>{item.content}</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Console Input Bar */}
              <form onSubmit={handleSubmit} style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                background: '#070b17'
              }}>
                <span style={{ color: '#00f3ff', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginRight: '10px', whiteSpace: 'nowrap' }}>
                  guest@shibam-dev:~$
                </span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Type command ('help', 'skills')..."
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#ffffff',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: 'rgba(0, 243, 255, 0.15)',
                    border: '1px solid rgba(0, 243, 255, 0.3)',
                    color: '#00f3ff',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <CornerDownLeft size={16} />
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .terminal-col-left { grid-column: span 5 !important; }
          .terminal-col-right { grid-column: span 7 !important; }
        }
        .cmd-btn:hover {
          border-color: rgba(0, 243, 255, 0.4) !important;
          background: rgba(0, 243, 255, 0.08) !important;
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
}
