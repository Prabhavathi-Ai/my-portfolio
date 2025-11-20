import React, { useEffect, useRef } from 'react';
import './App.css';

const NeuroSynapsePortfolio = () => {
  const canvasRef = useRef(null);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Open external links
  const openExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Send email
  const sendEmail = () => {
    window.location.href = 'mailto:prabhavathi06052007@gmail.com';
  };

  // View projects
  const viewProjects = () => {
    scrollToSection('projects');
  };

  // View resume
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Prabhavathi_A_Resume.pdf';
    link.click();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 2 + 1;
        this.alpha = Math.random() * 0.5 + 0.1;
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        this.alpha = 0.1 + Math.sin(Date.now() * 0.001 + this.x * 0.01) * 0.1;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const particles = Array.from({ length: 150 }, () => new Particle());

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(102, 126, 234, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(2, 6, 23, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      connectParticles();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="neuro-portfolio">
      {/* Animated Background Canvas */}
      <canvas ref={canvasRef} className="particle-canvas"></canvas>
      
      {/* Animated Grid Overlay */}
      <div className="grid-overlay"></div>

      {/* FIXED Navigation - Now Working */}
      <nav className="neuro-nav">
        <div className="nav-glitch">
          <span className="glitch-text" data-text="PRABHAVATHI A">PRABHAVATHI A</span>
          <div className="nav-pulse"></div>
        </div>
        <div className="neuro-links">
          <button className="neuro-link" onClick={() => scrollToSection('home')}>
            <span className="link-text">Home</span>
            <span className="link-glow"></span>
          </button>
          <button className="neuro-link" onClick={() => scrollToSection('neuro')}>
            <span className="link-text">Skills</span>
            <span className="link-glow"></span>
          </button>
          <button className="neuro-link" onClick={() => scrollToSection('projects')}>
            <span className="link-text">Projects</span>
            <span className="link-glow"></span>
          </button>
          <button className="neuro-link" onClick={() => scrollToSection('contact')}>
            <span className="link-text">Contact</span>
            <span className="link-glow"></span>
          </button>
        </div>
      </nav>

      {/* Hero Section - FIXED Buttons */}
      <section id="home" className="neuro-hero">
        <div className="hero-matrix">
          <div className="matrix-code"></div>
        </div>
        <div className="hero-content">
          <div className="cyber-badge">
            <span className="badge-pulse"></span>
            AI DEVELOPER
          </div>
          
          <h1 className="cyber-title">
            <span className="title-line">HELLO, I'M</span>
            <span className="title-line gradient-glitch" data-text="PRABHAVATHI">
              <span className="title-main">PRABHAVATHI</span>
              <span className="title-glitch">PRABHAVATHI</span>
            </span>
            <span className="title-line">AI & FULL-STACK DEVELOPER</span>
          </h1>

          <p className="cyber-desc">
            <span className="desc-cursor">></span> 
            COMPUTER SCIENCE ENGINEER BUILDING INTELLIGENT SOLUTIONS AND 
            REVOLUTIONARY DIGITAL EXPERIENCES.
          </p>

          <div className="cyber-stats">
            <div className="stat-terminal">
              <div className="terminal-line">
                <span className="prompt">$</span> EDUCATION: <span className="accent">KSR COLLEGE - 8.65 CGPA</span>
              </div>
              <div className="terminal-line">
                <span className="prompt">$</span> PROJECTS: <span className="accent">2+ ACTIVE</span>
              </div>
              <div className="terminal-line">
                <span className="prompt">$</span> SPECIALIZATION: <span className="accent">AI & WEB DEVELOPMENT</span>
              </div>
            </div>
          </div>

          {/* FIXED Buttons - Now Working */}
          <div className="cyber-controls">
            <button className="cyber-btn primary" onClick={viewProjects}>
              <span className="btn-glow"></span>
              VIEW MY PROJECTS
              <span className="btn-pulse">▶</span>
            </button>
            <button className="cyber-btn secondary" onClick={sendEmail}>
              GET IN TOUCH
              <span className="btn-scan"></span>
            </button>
          </div>
        </div>

        {/* 3D Cube Animation */}
        <div className="cube-container">
          <div className="cube">
            <div className="face front">AI</div>
            <div className="face back">ML</div>
            <div className="face right">DEV</div>
            <div className="face left">CODE</div>
            <div className="face top">WEB</div>
            <div className="face bottom">APP</div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="neuro" className="neuro-skills">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-hack">[</span>
            TECHNICAL SKILLS
            <span className="title-hack">]</span>
          </h2>
          <div className="section-subtitle">MY TECHNICAL TOOLKIT & EXPERTISE</div>
        </div>

        <div className="skills-matrix">
          <div className="skill-node">
            <div className="node-core">
              <div className="node-icon">🤖</div>
              <h3>AI & MACHINE LEARNING</h3>
            </div>
            <div className="node-connections">
              <div className="connection"></div>
              <div className="connection"></div>
              <div className="connection"></div>
            </div>
            <div className="node-skills">
              <span className="skill-chip">Python</span>
              <span className="skill-chip">Neural Networks</span>
              <span className="skill-chip">Natural Language Processing</span>
              <span className="skill-chip">Computer Vision</span>
            </div>
          </div>

          <div className="skill-node">
            <div className="node-core">
              <div className="node-icon">⚡</div>
              <h3>FULL STACK DEVELOPMENT</h3>
            </div>
            <div className="node-connections">
              <div className="connection"></div>
              <div className="connection"></div>
            </div>
            <div className="node-skills">
              <span className="skill-chip">React</span>
              <span className="skill-chip">JavaScript</span>
              <span className="skill-chip">Node.js</span>
              <span className="skill-chip">HTML/CSS</span>
              <span className="skill-chip">MongoDB</span>
            </div>
          </div>

          <div className="skill-node">
            <div className="node-core">
              <div className="node-icon">🔧</div>
              <h3>TOOLS & TECHNOLOGIES</h3>
            </div>
            <div className="node-connections">
              <div className="connection"></div>
            </div>
            <div className="node-skills">
              <span className="skill-chip">Git & GitHub</span>
              <span className="skill-chip">MATLAB</span>
              <span className="skill-chip">VS Code</span>
              <span className="skill-chip">Microsoft Excel</span>
              <span className="skill-chip">Figma</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - FIXED Links */}
      <section id="projects" className="holographic-projects">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-hack">{">"}</span>
            MY PROJECTS
            <span className="title-hack">_</span>
          </h2>
        </div>

        <div className="hologram-grid">
          <div className="hologram-card">
            <div className="holo-header">
              <div className="holo-badge">AI PROJECT</div>
              <div className="holo-status active"></div>
            </div>
            <div className="holo-content">
              <h3>AI CHATBOT</h3>
              <div className="holo-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '75%'}}></div>
                </div>
                <span>IN DEVELOPMENT</span>
              </div>
              <p>Intelligent chatbot using modern AI technologies and natural language processing with Python.</p>
              <div className="holo-tech">
                <span>PYTHON</span>
                <span>AI/ML</span>
                <span>NLP</span>
              </div>
            </div>
            <div className="holo-actions">
              <button className="holo-btn" onClick={() => openExternalLink('https://github.com/Prabhavathi-Ai')}>
                VIEW CODE
              </button>
              <button className="holo-btn outline" onClick={() => openExternalLink('https://github.com/Prabhavathi-Ai?tab=repositories')}>
                GITHUB
              </button>
            </div>
          </div>

          <div className="hologram-card">
            <div className="holo-header">
              <div className="holo-badge">PORTFOLIO</div>
              <div className="holo-status live"></div>
            </div>
            <div className="holo-content">
              <h3>MODERN PORTFOLIO</h3>
              <div className="holo-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '100%'}}></div>
                </div>
                <span>COMPLETED</span>
              </div>
              <p>Advanced portfolio website with React, animations, and responsive design deployed on GitHub Pages.</p>
              <div className="holo-tech">
                <span>REACT</span>
                <span>CSS3</span>
                <span>JAVASCRIPT</span>
              </div>
            </div>
            <div className="holo-actions">
              <button className="holo-btn" onClick={() => openExternalLink('https://github.com/Prabhavathi-Ai/my-portfolio')}>
                SOURCE CODE
              </button>
              <button className="holo-btn outline" onClick={() => openExternalLink('https://prabhavathi-ai.github.io/my-portfolio')}>
                LIVE DEMO
              </button>
            </div>
          </div>

          <div className="hologram-card">
            <div className="holo-header">
              <div className="holo-badge">COMING SOON</div>
              <div className="holo-status active"></div>
            </div>
            <div className="holo-content">
              <h3>SKILLSYNAPSE AI</h3>
              <div className="holo-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '25%'}}></div>
                </div>
                <span>PLANNING STAGE</span>
              </div>
              <p>AI-powered learning assessment platform with personalized learning paths and cognitive analysis.</p>
              <div className="holo-tech">
                <span>REACT</span>
                <span>NODE.JS</span>
                <span>MONGODB</span>
              </div>
            </div>
            <div className="holo-actions">
              <button className="holo-btn" onClick={() => scrollToSection('contact')}>
                COLLABORATE
              </button>
              <button className="holo-btn outline" onClick={sendEmail}>
                GET UPDATES
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - FIXED Terminal */}
      <section id="contact" className="contact-terminal">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-controls">
              <div className="control close"></div>
              <div className="control minimize"></div>
              <div className="control maximize"></div>
            </div>
            <div className="terminal-title">contact_protocol.exe</div>
          </div>
          <div className="terminal-body">
            <div className="terminal-output">
              <div className="output-line">
                <span className="prompt">user@prabhavathi:~$</span> initiate_contact_protocol
              </div>
              <div className="output-line">
                <span className="accent">>> CONTACT PROTOCOL INITIALIZED</span>
              </div>
              <div className="output-line">
                <span className="prompt">></span> Available communication channels:
              </div>
              <div className="output-line clickable" onClick={sendEmail}>
                <span className="prompt">></span> 📧 prabhavathi06052007@gmail.com
              </div>
              <div className="output-line clickable" onClick={() => openExternalLink('https://linkedin.com/in/prabhavathi-a-965b4b34a')}>
                <span className="prompt">></span> 💼 linkedin.com/in/prabhavathi-a-965b4b34a
              </div>
              <div className="output-line clickable" onClick={() => openExternalLink('https://github.com/Prabhavathi-Ai')}>
                <span className="prompt">></span> 🐙 github.com/Prabhavathi-Ai
              </div>
              <div className="output-line">
                <span className="prompt">></span> Ready for collaboration and innovative projects.
              </div>
            </div>
            <div className="terminal-input">
              <span className="prompt">user@prabhavathi:~$</span>
              <input 
                type="text" 
                placeholder="type_command_here..." 
                className="terminal-cmd"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    const command = e.target.value.toLowerCase();
                    if (command.includes('email')) sendEmail();
                    else if (command.includes('linkedin')) openExternalLink('https://linkedin.com/in/prabhavathi-a-965b4b34a');
                    else if (command.includes('github')) openExternalLink('https://github.com/Prabhavathi-Ai');
                    else if (command.includes('projects')) scrollToSection('projects');
                    e.target.value = '';
                  }
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="cyber-footer">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-title">PRABHAVATHI A</div>
            <div className="footer-status">AI DEVELOPER • FULL STACK ENGINEER • INNOVATOR</div>
          </div>
          <div className="footer-section">
            <div className="footer-copyright">
              © 2024 PRABHAVATHI A • BUILT WITH REACT & PASSION FOR TECHNOLOGY
            </div>
          </div>
        </div>
        <div className="footer-scanline"></div>
      </footer>
    </div>
  );
};

export default NeuroSynapsePortfolio;