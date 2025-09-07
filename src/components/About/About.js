import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { 
  FaGraduationCap, 
  FaCode, 
  FaResearch, 
  FaBlog, 
  FaHeart,
  FaQuoteLeft,
  FaArrowRight,
  FaUniversity,
  FaGlobe,
  FaLightbulb,
  FaUsers,
  FaBookOpen
} from "react-icons/fa";
import { ImPointRight } from "react-icons/im";
import avatar from "../../Assets/avatar.svg";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Github from "./Github";

function About() {
  const [activeTab, setActiveTab] = useState('story');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const tabs = [
    { id: 'story', label: 'My Story', icon: FaHeart },
    { id: 'academic', label: 'Academic Journey', icon: FaGraduationCap },
    { id: 'engineering', label: 'Software Engineering', icon: FaCode },
    { id: 'research', label: 'Research & Publications', icon: FaResearch }
  ];

  const achievements = [
    { icon: FaUniversity, text: "Engineering Student at University of Ilorin", color: "#3B82F6" },
    { icon: FaResearch, text: "Research Lab Member", color: "#10B981" },
    { icon: FaBlog, text: "Technical Writer & Blogger", color: "#F59E0B" },
    { icon: FaCode, text: "Full-Stack Developer", color: "#8B5CF6" },
    { icon: FaUsers, text: "Community Mentor", color: "#EF4444" },
    { icon: FaBookOpen, text: "Knowledge Sharer", color: "#06B6D4" }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'story':
        return (
          <div className="about-content">
            <div className="story-section">
              <div className="intro-text">
                <h3 className="content-title">Hello! I'm <span className="highlight">Ilyas Rufai</span></h3>
                <p className="lead-text">
                  A dedicated engineering student from <span className="highlight">Nigeria</span> with a passion for both 
                  academic research and software engineering.
                </p>
              </div>
              
              <div className="story-grid">
                <div className="story-card">
                  <div className="story-icon">
                    <FaUniversity />
                  </div>
                  <h4>Academic Excellence</h4>
                  <p>Currently pursuing my engineering degree at the University of Ilorin, I've recently joined a research lab where I'm working on cutting-edge projects and preparing for my first publications.</p>
                </div>
                
                <div className="story-card">
                  <div className="story-icon">
                    <FaCode />
                  </div>
                  <h4>Software Engineering</h4>
                  <p>I specialize in building robust, scalable solutions using modern technologies. My expertise spans full-stack development, DevOps practices, and system architecture.</p>
                </div>
                
                <div className="story-card">
                  <div className="story-icon">
                    <FaBlog />
                  </div>
                  <h4>Knowledge Sharing</h4>
                  <p>I maintain an active blog where I share insights on software engineering, research methodologies, and technical tutorials that help developers and students.</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'academic':
        return (
          <div className="about-content">
            <div className="academic-section">
              <div className="academic-header">
                <h3 className="content-title">Academic Journey</h3>
                <p className="lead-text">Bridging the gap between research and practical applications</p>
              </div>
              
              <div className="academic-timeline">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>University of Ilorin</h4>
                    <p className="timeline-role">Engineering Student</p>
                    <p>Pursuing my degree in Agricultural & Biosystems Engineering with a focus on innovative solutions and research methodologies.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>Research Lab</h4>
                    <p className="timeline-role">Research Assistant</p>
                    <p>Recently joined a civil engineering research lab, working on cutting-edge projects and preparing for upcoming publications.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>Future Collaborations</h4>
                    <p className="timeline-role">Lab Collaborator</p>
                    <p>Planning to join additional research labs to expand my knowledge and contribute to multiple research domains.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'engineering':
        return (
          <div className="about-content">
            <div className="engineering-section">
              <div className="engineering-header">
                <h3 className="content-title">Software Engineering</h3>
                <p className="lead-text">Creating software that solves real-world engineering problems</p>
              </div>
              
              <div className="engineering-grid">
                <div className="skill-category">
                  <h4>Full-Stack Development</h4>
                  <div className="skill-tags">
                    <Badge>React.js</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>Python</Badge>
                    <Badge>JavaScript</Badge>
                  </div>
                </div>
                
                <div className="skill-category">
                  <h4>DevOps & Infrastructure</h4>
                  <div className="skill-tags">
                    <Badge>Docker</Badge>
                    <Badge>Kubernetes</Badge>
                    <Badge>AWS</Badge>
                    <Badge>CI/CD</Badge>
                  </div>
                </div>
                
                <div className="skill-category">
                  <h4>System Architecture</h4>
                  <div className="skill-tags">
                    <Badge>Microservices</Badge>
                    <Badge>API Design</Badge>
                    <Badge>Database Design</Badge>
                    <Badge>Cloud Solutions</Badge>
                  </div>
                </div>
              </div>
              
              <div className="engineering-philosophy">
                <h4>My Engineering Philosophy</h4>
                <p>I believe in creating software that not only meets technical requirements but also addresses real-world challenges. My approach combines rigorous engineering principles with innovative thinking to deliver solutions that make a meaningful impact.</p>
              </div>
            </div>
          </div>
        );
      
      case 'research':
        return (
          <div className="about-content">
            <div className="research-section">
              <div className="research-header">
                <h3 className="content-title">Research & Publications</h3>
                <p className="lead-text">Contributing to the advancement of knowledge through research and writing</p>
              </div>
              
              <div className="research-highlights">
                <div className="research-card">
                  <div className="research-icon">
                    <FaBookOpen />
                  </div>
                  <h4>Technical Blog</h4>
                  <p>Active technical writer sharing insights on software engineering, research methodologies, and development best practices.</p>
                </div>
                
                <div className="research-card">
                  <div className="research-icon">
                    <FaResearch />
                  </div>
                  <h4>Research Papers</h4>
                  <p>Working on upcoming publications in engineering research, focusing on innovative solutions and methodologies.</p>
                </div>
                
                <div className="research-card">
                  <div className="research-icon">
                    <FaUsers />
                  </div>
                  <h4>Community Impact</h4>
                  <p>My writing has helped many developers and students in the community, driving innovation through knowledge sharing.</p>
                </div>
              </div>
              
              <div className="commitment-section">
                <h4>My Commitments</h4>
                <ul className="commitment-list">
                  <li><ImPointRight /> Contributing to open-source projects and the developer community</li>
                  <li><ImPointRight /> Writing technical articles and research papers</li>
                  <li><ImPointRight /> Mentoring fellow students and junior developers</li>
                  <li><ImPointRight /> Staying updated with the latest in technology and research</li>
                </ul>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <Container fluid className="about-section" id="about">
      <Container>
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A passionate engineering student and software engineer dedicated to research, innovation, and creating meaningful solutions.
          </p>
        </div>
        
        <Row className="about-main-content">
          <Col lg={4} className="about-sidebar">
            <div className="profile-card">
              <div className="profile-image">
                <img src={avatar} alt="Ilyas Rufai" />
                <div className="profile-overlay">
                  <div className="profile-badge">Engineering Student</div>
                </div>
              </div>
              
              <div className="profile-info">
                <h3>Ilyas Rufai</h3>
                <p className="profile-title">Agricultural & Biosystems Engineer</p>
                <p className="profile-location">University of Ilorin, Nigeria</p>
              </div>
              
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-item">
                    <achievement.icon style={{ color: achievement.color }} />
                    <span>{achievement.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          
          <Col lg={8} className="about-content-area">
            <div className="content-tabs">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <IconComponent />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
            
            <div className={`tab-content ${isVisible ? 'visible' : ''}`}>
              {renderContent()}
            </div>
            
            <div className="quote-section">
              <div className="quote-card">
                <FaQuoteLeft className="quote-icon" />
                <blockquote>
                  "The best way to predict the future is to create it through research, innovation, and collaboration."
                </blockquote>
                <cite>— Ilyas Rufai</cite>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="skills-section">
          <Col md={12}>
            <div className="section-header">
              <h3 className="section-title">Technical Skills</h3>
              <p className="section-subtitle">
                Technologies and tools I work with to bring ideas to life.
              </p>
            </div>
            <Techstack />
          </Col>
        </Row>

        <Row className="tools-section">
          <Col md={12}>
            <div className="section-header">
              <h3 className="section-title">Development Tools</h3>
              <p className="section-subtitle">
                Tools and platforms that enhance my development workflow.
              </p>
            </div>
            <Toolstack />
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Github />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
