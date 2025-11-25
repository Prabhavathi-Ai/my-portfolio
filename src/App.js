import React, { useState, useEffect } from 'react';
import './App.css';

const CyberpunkPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showThemePopup, setShowThemePopup] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('cyberpunk');
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [glitchEffect, setGlitchEffect] = useState(false);

  // Add scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Skills data
  const skills = {
    'AI/ML TECHNOLOGIES': ['PYTHON', 'TENSORFLOW', 'NATURAL LANGUAGE PROCESSING', 'MACHINE LEARNING', 'NEURAL NETWORKS'],
    'WEB DEVELOPMENT': ['REACT', 'JAVASCRIPT', 'HTML5', 'CSS3', 'NODE.JS'],
    'TOOLS & PLATFORMS': ['GIT', 'GITHUB', 'VS CODE', 'JUPYTER NOTEBOOK', 'MONGO DB']
  };

  // Projects data
  const projects = [
    {
      title: 'AI CHATBOT SYSTEM',
      description: 'ADVANCED CONVERSATIONAL AI BUILT WITH NEURAL NETWORKS AND NLP CAPABILITIES FOR INTELLIGENT HUMAN-COMPUTER INTERACTIONS.',
      technologies: ['PYTHON', 'TENSORFLOW', 'NLP', 'MACHINE LEARNING', 'REACT'],
      githubLink: 'https://github.com/Prabhavathi-Ai/Ai-chatbot-project',
      status: 'ACTIVE'
    }
  ];

  // Experience data
  const experience = [
    {
      title: 'AI DEVELOPER',
      company: 'SELF-EMPLOYED',
      period: '2023 - PRESENT',
      description: 'DEVELOPING INTELLIGENT AI SOLUTIONS AND MACHINE LEARNING MODELS FOR VARIOUS APPLICATIONS.'
    },
    {
      title: 'FULL-STACK DEVELOPER',
      company: 'FREELANCE',
      period: '2022 - PRESENT',
      description: 'BUILDING SCALABLE WEB APPLICATIONS WITH MODERN TECHNOLOGIES AND BEST PRACTICES.'
    }
  ];

  // Apply cyberpunk theme
  useEffect(() => {
    const root = document.documentElement;
    const theme = {
      primary: '#00ffea',
      primaryDark: '#00ccbb',
      primaryLight: '#80ffef',
      background: '#0a0a12',
      backgroundLight: '#1a1a2e',
      textDark: '#ffffff',
      textLight: '#00ffea',
      accent: '#ff00ff',
      accentSecondary: '#ff0066',
      neon: '#ff00ff',
      neonSecondary: '#00ffea'
    };
    
    root.style.setProperty('--primary-color', theme.primary);
    root.style.setProperty('--primary-dark', theme.primaryDark);
    root.style.setProperty('--primary-light', theme.primaryLight);
    root.style.setProperty('--background', theme.background);
    root.style.setProperty('--background-light', theme.backgroundLight);
    root.style.setProperty('--text-dark', theme.textDark);
    root.style.setProperty('--text-light', theme.textLight);
    root.style.setProperty('--accent-color', theme.accent);
    root.style.setProperty('--accent-secondary', theme.accentSecondary);
    root.style.setProperty('--neon-color', theme.neon);
    root.style.setProperty('--neon-secondary', theme.neonSecondary);
  }, []);

  // Add glitch effect randomly
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 200);
    }, 5000);
    
    return () => clearInterval(glitchInterval);
  }, []);

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Binary Rain Component
  const BinaryRain = () => {
    const [digits, setDigits] = useState([]);

    useEffect(() => {
      const createDigits = () => {
        const newDigits = [];
        for (let i = 0; i < 30; i++) {
          newDigits.push({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 3 + Math.random() * 5,
            content: Math.random() > 0.5 ? '1' : '0'
          });
        }
        setDigits(newDigits);
      };

      createDigits();
    }, []);

    return (
      <div className="binary-rain">
        {digits.map(digit => (
          <div
            key={digit.id}
            className="binary-digit"
            style={{
              left: `${digit.left}%`,
              animationDelay: `${digit.delay}s`,
              animationDuration: `${digit.duration}s`
            }}
          >
            {digit.content}
          </div>
        ))}
      </div>
    );
  };

  // Neon Particles Component
  const NeonParticles = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
      const createParticles = () => {
        const newParticles = [];
        for (let i = 0; i < 15; i++) {
          newParticles.push({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * 8,
            duration: 6 + Math.random() * 4
          });
        }
        setParticles(newParticles);
      };

      createParticles();
    }, []);

    return (
      <div className="neon-particles">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>
    );
  };

  // Matrix Rain Component
  const MatrixRain = () => {
    const [columns, setColumns] = useState([]);

    useEffect(() => {
      const createColumns = () => {
        const newColumns = [];
        const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        
        for (let i = 0; i < 20; i++) {
          const columnChars = [];
          const charCount = 10 + Math.floor(Math.random() * 10);
          
          for (let j = 0; j < charCount; j++) {
            columnChars.push(characters[Math.floor(Math.random() * characters.length)]);
          }
          
          newColumns.push({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 10,
            duration: 10 + Math.random() * 10,
            characters: columnChars
          });
        }
        setColumns(newColumns);
      };

      createColumns();
    }, []);

    return (
      <div className="matrix-rain">
        {columns.map(column => (
          <div
            key={column.id}
            className="matrix-column"
            style={{
              left: `${column.left}%`,
              animationDelay: `${column.delay}s`,
              animationDuration: `${column.duration}s`
            }}
          >
            {column.characters.map((char, index) => (
              <div
                key={index}
                className="matrix-character"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {char}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  // Energy Waves Component
  const EnergyWaves = () => {
    return (
      <div className="energy-waves">
        <div className="energy-wave"></div>
        <div className="energy-wave"></div>
        <div className="energy-wave"></div>
      </div>
    );
  };

  // Cyber City Component
  const CyberCity = () => {
    const [buildings, setBuildings] = useState([]);

    useEffect(() => {
      const createBuildings = () => {
        const newBuildings = [];
        let position = 0;
        
        while (position < 100) {
          const width = 20 + Math.random() * 60;
          const height = 50 + Math.random() * 100;
          
          newBuildings.push({
            id: position,
            left: position,
            width: width,
            height: height
          });
          
          position += width + 5;
        }
        
        setBuildings(newBuildings);
      };

      createBuildings();
    }, []);

    return (
      <div className="cyber-city">
        {buildings.map(building => (
          <div
            key={building.id}
            className="building"
            style={{
              left: `${building.left}%`,
              width: `${building.width}px`,
              height: `${building.height}px`
            }}
          >
            {/* Add windows to buildings */}
            {Array.from({ length: Math.floor(building.height / 20) }).map((_, i) => (
              <div
                key={i}
                className="window"
                style={{
                  left: `${10 + Math.random() * (building.width - 20)}px`,
                  top: `${10 + i * 20}px`,
                  width: '4px',
                  height: '8px',
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        ))}
      </div>
    );
  };

  // Neural Network Component
  const NeuralNetwork = () => {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
      const createNodes = () => {
        const newNodes = [];
        for (let i = 0; i < 15; i++) {
          newNodes.push({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * 2
          });
        }
        setNodes(newNodes);
      };

      createNodes();
    }, []);

    return (
      <div className="neural-network">
        {nodes.map(node => (
          <div
            key={node.id}
            className="neural-node"
            style={{
              left: `${node.left}%`,
              top: `${node.top}%`,
              animationDelay: `${node.delay}s`
            }}
          />
        ))}
      </div>
    );
  };

  // Theme changer popup
  const ThemePopup = () => (
    <div className="popup-overlay" onClick={() => setShowThemePopup(false)}>
      <div className="popup-content cyber-popup" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <h3 className="cyber-text">SYSTEM THEMES</h3>
          <button className="popup-close cyber-button" onClick={() => setShowThemePopup(false)}>⨯</button>
        </div>
        <div className="theme-options">
          <div className={`theme-option cyber-option active`}>
            <div className="theme-preview cyber-preview"></div>
            <span>CYBERPUNK PROTOCOL</span>
            <div className="status-indicator">ACTIVE</div>
          </div>
        </div>
      </div>
    </div>
  );

  // Contact popup
  const ContactPopup = () => (
    <div className="popup-overlay" onClick={() => setShowContactPopup(false)}>
      <div className="popup-content cyber-popup contact-popup" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <h3 className="cyber-text">COMMUNICATION CHANNELS</h3>
          <button className="popup-close cyber-button" onClick={() => setShowContactPopup(false)}>⨯</button>
        </div>
        <div className="contact-popup-content">
          <div className="contact-method cyber-contact">
            <div className="contact-icon">⟁</div>
            <div>
              <h4>DATA TRANSMISSION</h4>
              <p>prabhavathi06052007@gmail.com</p>
            </div>
          </div>
          <div className="contact-method cyber-contact">
            <div className="contact-icon">⎘</div>
            <div>
              <h4>CODE REPOSITORY</h4>
              <p>github.com/Prabhavathi-Ai</p>
            </div>
          </div>
          <div className="contact-method cyber-contact">
            <div className="contact-icon">⚬</div>
            <div>
              <h4>PROFESSIONAL NETWORK</h4>
              <p>linkedin.com/in/prabhavathi-a</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="portfolio cyber-portfolio">
      {/* Enhanced Animated Background */}
      <div className="cyber-background">
        {/* Base Effects */}
        <div className="grid-lines"></div>
        <div className="scan-lines"></div>
        <div className="holographic-grid"></div>
        <div className="circuit-lines"></div>
        <div className="digital-noise"></div>
        <div className="hexagon-grid"></div>
        <div className="glitch-overlay"></div>
        
        {/* Existing orbs */}
        <div className="floating-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
        
        {/* Pulse and Stream Effects */}
        <div className="pulse-rings">
          <div className="pulse-ring"></div>
          <div className="pulse-ring"></div>
          <div className="pulse-ring"></div>
          <div className="pulse-ring"></div>
        </div>
        
        <div className="data-streams">
          <div className="data-stream"></div>
          <div className="data-stream"></div>
          <div className="data-stream"></div>
          <div className="data-stream"></div>
          <div className="data-stream"></div>
        </div>

        {/* Holographic Scan */}
        <div className="holographic-scan"></div>
        
        {/* New Advanced Effects */}
        <MatrixRain />
        <EnergyWaves />
        <NeuralNetwork />
        <CyberCity />
        
        {/* Original Effects */}
        <BinaryRain />
        <NeonParticles />
      </div>

      {/* Navigation */}
      <nav className="navbar cyber-nav">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text cyber-logo">PRABHAVATHI_A</span>
          </div>
          <ul className="nav-menu cyber-menu">
            {['home', 'skills', 'projects', 'contact'].map((item) => (
              <li key={item} className="nav-item cyber-item">
                <a 
                  href={`#${item}`}
                  className={`nav-link cyber-link ${activeSection === item ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                >
                  <span className="link-text">[{item.toUpperCase()}]</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Home Section - Clean and Well Spaced */}
      <section id="home" className="home-section cyber-home">
        <div className="container">
          <div className="hero-content compact-hero">
            <div className="hero-text">
              <div className="hero-badge cyber-badge">
                <span className="badge-text">COMPUTER SCIENCE ENGINEERING STUDENT</span>
              </div>
              
              <h1 className={`hero-title cyber-title ${glitchEffect ? 'glitch' : ''}`}>
                <span className="cyber-hello">HELLO</span>
                <span className="cyber-name">I'M <strong>PRABHAVATHI A</strong></span>
                <span className="cyber-sub">AI & FULL-STACK DEVELOPER</span>
              </h1>
              
              <p className="hero-description cyber-desc">
                COMPUTER SCIENCE VISIONARY MERGING ACADEMIC EXCELLENCE WITH REAL-WORLD AI INNOVATION TO PUSH THE BOUNDARIES OF WHAT'S POSSIBLE.
              </p>

              <div className="hero-buttons cyber-buttons compact-buttons">
                <button 
                  className="btn btn-primary cyber-btn-primary"
                  onClick={() => scrollToSection('projects')}
                >
                  <span className="btn-text">ACCESS_PROJECTS</span>
                </button>
                <button 
                  className="btn btn-secondary cyber-btn-secondary"
                  onClick={() => scrollToSection('contact')}
                >
                  <span className="btn-text">DOWNLOAD_RESUME</span>
                </button>
                <button 
                  className="btn btn-secondary cyber-btn-secondary"
                  onClick={() => setShowContactPopup(true)}
                >
                  <span className="btn-text">INITIATE_CONTACT</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section cyber-skills">
        <div className="container">
          <div className="section-header cyber-header">
            <h2 className="section-title cyber-section-title">TECHNICAL_CAPABILITIES</h2>
            <p className="section-subtitle cyber-subtitle">CORE_COMPETENCIES_AND_SYSTEMS</p>
          </div>
          
          <div className="skills-grid cyber-grid">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="skill-category cyber-category">
                <h3 className="category-title cyber-category-title">[{category}]</h3>
                <div className="skills-list">
                  {skillList.map((skill) => (
                    <span key={skill} className="skill-tag cyber-skill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section cyber-projects">
        <div className="container">
          <div className="section-header cyber-header">
            <h2 className="section-title cyber-section-title">ACTIVE_PROJECTS</h2>
            <p className="section-subtitle cyber-subtitle">CURRENT_DEVELOPMENT_INITIATIVE</p>
          </div>
          
          <div className="projects-grid cyber-projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card cyber-project" style={{maxWidth: '600px', margin: '0 auto'}}>
                <div className="project-header cyber-project-header">
                  <h3 className="project-title cyber-project-title">[{project.title}]</h3>
                  <div className="project-status">
                    <span className={`status-tag ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <p className="project-description cyber-project-desc">{project.description}</p>
                <div className="project-technologies cyber-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag cyber-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.githubLink && (
                  <div className="project-links">
                    <a 
                      href={project.githubLink} 
                      className="project-link cyber-project-link"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <span className="link-icon">⎘</span>
                      <span>VIEW_SOURCE_CODE</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Resume Download */}
      <section id="contact" className="contact-section cyber-contact-section">
        <div className="container">
          <div className="section-header cyber-header">
            <h2 className="section-title cyber-section-title">COMMUNICATION_PROTOCOLS</h2>
            <p className="section-subtitle cyber-subtitle">INITIATE_CONNECTION_SEQUENCE</p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info cyber-contact-info">
              <div className="contact-item cyber-contact-item">
                <div className="contact-icon">⟁</div>
                <div className="contact-details">
                  <h4>DATA_TRANSMISSION</h4>
                  <a href="mailto:prabhavathi06052007@gmail.com" className="contact-link cyber-contact-link">
                    prabhavathi06052007@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="contact-item cyber-contact-item">
                <div className="contact-icon">⎘</div>
                <div className="contact-details">
                  <h4>CODE_REPOSITORY</h4>
                  <a 
                    href="https://github.com/Prabhavathi-Ai" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-link cyber-contact-link"
                  >
                    github.com/Prabhavathi-Ai
                  </a>
                </div>
              </div>
              
              <div className="contact-item cyber-contact-item">
                <div className="contact-icon">⚬</div>
                <div className="contact-details">
                  <h4>PROFESSIONAL_NETWORK</h4>
                  <a 
                    href="https://www.linkedin.com/in/prabhavathi-a-965b4b34a/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-link cyber-contact-link"
                  >
                    linkedin.com/in/prabhavathi-a
                  </a>
                </div>
              </div>

              {/* Resume Download in Contact Section */}
              <div className="contact-item cyber-contact-item">
                <div className="contact-icon">📄</div>
                <div className="contact-details">
                  <h4>RESUME_DOWNLOAD</h4>
                  <p>ACCESS_COMPLETE_PROFESSIONAL_PROFILE</p>
                  <button className="btn btn-primary cyber-btn-primary" style={{marginTop: '1rem'}}>
                    <span className="btn-text">DOWNLOAD_PDF</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="contact-stats cyber-contact-stats">
              <div className="stat-card cyber-stat-card">
                <div className="stat-number">8.65</div>
                <div className="stat-label">SYSTEM_EFFICIENCY</div>
              </div>
              <div className="stat-card cyber-stat-card">
                <div className="stat-number">KSRCE</div>
                <div className="stat-label">TRAINING_FACILITY</div>
              </div>
              <div className="stat-card cyber-stat-card">
                <div className="stat-number">AI/ML</div>
                <div className="stat-label">SPECIALIZATION</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer cyber-footer">
        <div className="container">
          <div className="footer-content cyber-footer-content">
            <p>SYSTEM_ACTIVE © 2024 PRABHAVATHI_A. ALL_PROTOCOLS_SECURE.</p>
            <p>COMPUTER_SCIENCE_ENGINEER | KSRCE</p>
          </div>
        </div>
      </footer>

      {/* Popups */}
      {showThemePopup && <ThemePopup />}
      {showContactPopup && <ContactPopup />}
    </div>
  );
};

export default CyberpunkPortfolio;