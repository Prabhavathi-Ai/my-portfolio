import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <motion.nav 
        className="navbar"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="nav-container">
          <motion.h2 
            className="nav-logo"
            whileHover={{ scale: 1.05 }}
          >
            PRABHAVATHI A
          </motion.h2>
          <ul className="nav-menu">
            {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((item) => (
              <motion.li key={item} className="nav-item" whileHover={{ scale: 1.1 }}>
                <a href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        <motion.div 
          className="hero-content"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div className="hero-text" variants={fadeInUp}>
            <h1>Hi, I'm <span className="highlight">PRABHAVATHI A</span></h1>
            <p className="hero-subtitle">Computer Science Engineer & Aspiring Software Developer</p>
            <p className="hero-description">Crafting digital experiences with code and creativity</p>
          </motion.div>
          <motion.div className="hero-actions" variants={fadeInUp}>
            <motion.button 
              className="cta-button primary"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(74, 144, 226, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              🚀 View My Work
            </motion.button>
            <motion.button 
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              📧 Get In Touch
            </motion.button>
          </motion.div>
          <motion.div className="scroll-indicator" variants={fadeInUp}>
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <p>Scroll to explore</p>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>About Me</h2>
            <div className="section-divider"></div>
          </motion.div>
          
          <div className="about-content">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>
                I'm a passionate Computer Science Engineering student at KSR College of Engineering 
                with a CGPA of 8.65. I love building software solutions and continuously learning 
                new technologies. My goal is to become a skilled Software Developer who creates 
                efficient and innovative applications.
              </p>
              <div className="stats">
                <div className="stat">
                  <h3>8.65</h3>
                  <p>CGPA</p>
                </div>
                <div className="stat">
                  <h3>2+</h3>
                  <p>Projects</p>
                </div>
                <div className="stat">
                  <h3>3</h3>
                  <p>Certifications</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="skills-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3>Technical Skills</h3>
              <div className="skills-grid">
                {[
                  { name: 'C Programming', level: 85 },
                  { name: 'Python', level: 80 },
                  { name: 'MATLAB', level: 75 },
                  { name: 'Microsoft Excel', level: 90 },
                  { name: 'React', level: 70 },
                  { name: 'Git & GitHub', level: 80 }
                ].map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-header">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>My Projects</h2>
            <div className="section-divider"></div>
            <p>Here are some of my recent works</p>
          </motion.div>

          <div className="projects-grid">
            {[
              {
                title: "AI Chatbot",
                description: "Currently developing an intelligent chatbot using modern AI technologies and natural language processing.",
                technologies: ["Python", "AI/ML", "NLP"],
                link: "https://github.com/Prabhavathi-Ai?tab=repositories",
                icon: "🤖"
              },
              {
                title: "Personal Portfolio",
                description: "A responsive portfolio website built with React to showcase my projects and skills.",
                technologies: ["React", "CSS3", "JavaScript"],
                link: "https://github.com/Prabhavathi-Ai?tab=repositories",
                icon: "💼"
              },
              {
                title: "More Projects Coming Soon",
                description: "I'm continuously working on new projects to enhance my skills and build my portfolio.",
                technologies: ["Learning", "Growing"],
                link: "https://github.com/Prabhavathi-Ai",
                icon: "🚀"
              }
            ].map((project, index) => (
              <motion.div 
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="project-icon">{project.icon}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <motion.a 
                    href={project.link} 
                    className="project-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Code →
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="resume">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Resume</h2>
            <div className="section-divider"></div>
          </motion.div>

          <div className="resume-content">
            <div className="resume-grid">
              <motion.div 
                className="resume-card"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3>🎓 Education</h3>
                <div className="resume-item">
                  <h4>BE Computer Science and Engineering</h4>
                  <p className="institution">KSR College of Engineering</p>
                  <p className="details">CGPA: 8.65 | 2021-2025</p>
                </div>
                <div className="resume-item">
                  <h4>12th Grade</h4>
                  <p className="institution">Government Higher Secondary School</p>
                  <p className="details">Percentage: 84% | 2020-2021</p>
                </div>
                <div className="resume-item">
                  <h4>10th Grade</h4>
                  <p className="institution">Government Higher Secondary School</p>
                  <p className="details">Percentage: 89% | 2018-2019</p>
                </div>
              </motion.div>

              <motion.div 
                className="resume-card"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3>📜 Certifications</h3>
                <div className="resume-item">
                  <h4>Introduction to Microsoft Excel</h4>
                  <p className="institution">Coursera</p>
                </div>
                <div className="resume-item">
                  <h4>MATLAB & MATLAB Onramp</h4>
                  <p className="institution">Coursera</p>
                </div>
              </motion.div>

              <motion.div 
                className="resume-card"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3>🏆 Achievements</h3>
                <div className="resume-item">
                  <h4>Paper Presentation</h4>
                  <p className="institution">TNWISE 2025 - Sona College of Engineering</p>
                </div>
                <div className="resume-item">
                  <h4>Workshop Attendee</h4>
                  <p className="institution">KPR College of Engineering</p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="resume-download"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="/resume.pdf" 
                className="cta-button primary"
                download="Prabhavathi_A_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📄 Download Resume
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Get In Touch</h2>
            <div className="section-divider"></div>
            <p>I'm always interested in new opportunities and collaborations!</p>
          </motion.div>

          <div className="contact-content">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Let's Connect! 🌟</h3>
              <p>Feel free to reach out for collaborations or just to say hello!</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h4>Email</h4>
                    <p>prabhavathi06052007@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">💼</span>
                  <div>
                    <h4>LinkedIn</h4>
                    <p>linkedin.com/in/prabhavathi-a-965b4b34a</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">💻</span>
                  <div>
                    <h4>GitHub</h4>
                    <p>github.com/Prabhavathi-Ai</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-links"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                { icon: "📧", text: "Send Email", link: "mailto:prabhavathi06052007@gmail.com", color: "#EA4335" },
                { icon: "💼", text: "LinkedIn", link: "https://linkedin.com/in/prabhavathi-a-965b4b34a", color: "#0077B5" },
                { icon: "💻", text: "GitHub", link: "https://github.com/Prabhavathi-Ai", color: "#333" }
              ].map((contact, index) => (
                <motion.a
                  key={contact.text}
                  href={contact.link}
                  className="contact-link-card"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ '--hover-color': contact.color }}
                >
                  <span className="contact-card-icon">{contact.icon}</span>
                  <span className="contact-card-text">{contact.text}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <motion.div
            className="footer-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-text">
              <h3>PRABHAVATHI A</h3>
              <p>Computer Science Engineer & Aspiring Software Developer</p>
            </div>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-copyright">
              <p>&copy; 2024 PRABHAVATHI A. Built with React & ❤️</p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;