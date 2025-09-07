import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import avatar from '../../Assets/avatar.svg';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    'Agricultural & Biosystems Engineering Student',
    'Student Engineering Researcher',
    'DevOps Engineer',
    'Software Engineer',
    'Future Lab Collaborator'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="hero-content text-center text-lg-start">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Ilyas Rufai</span>
            </h1>
            
            <div className="role-display">
              <span className="role-label">I am a</span>
              <div className="role-text">{roles[currentRole]}</div>
            </div>
            
            <p className="hero-description">
              Passionate about bridging the gap between agricultural engineering and technology. 
              Currently pursuing Agricultural & Biosystems Engineering while actively contributing 
              to different engineering research in my school. Exploring multiple research labs to expand my 
              interdisciplinary knowledge and make meaningful contributions to sustainable engineering solutions.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Research Areas</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Publications</span>
              </div>
            </div>
            
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-secondary">Get In Touch</a>
            </div>
          </Col>
          
          <Col lg={6} className="hero-visual">
            <div className="avatar-container">
              <img src={avatar} alt="Ilyas Rufai" className="hero-avatar" />
              <div className="floating-elements">
                <div className="floating-icon research">🔬</div>
                <div className="floating-icon code">💻</div>
                <div className="floating-icon book">📚</div>
                <div className="floating-icon rocket">🚀</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
