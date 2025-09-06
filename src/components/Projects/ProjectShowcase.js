import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 0,
      category: 'DevOps',
      title: 'Infrastructure Automation Platform',
      description: 'Automated deployment pipeline using Terraform, Docker, and Kubernetes for scalable cloud infrastructure. Features CI/CD integration, monitoring, and auto-scaling capabilities.',
      techStack: ['Terraform', 'Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Prometheus'],
      status: 'completed',
      demoUrl: 'https://demo.example.com',
      codeUrl: 'https://github.com/ilyasrufai/infrastructure-automation'
    },
    {
      id: 1,
      category: 'Research',
      title: 'Smart Agricultural IoT System',
      description: 'Comprehensive IoT monitoring system for crop health using sensors, machine learning, and real-time data analysis. Includes mobile app and web dashboard.',
      techStack: ['Python', 'Arduino', 'TensorFlow', 'MQTT', 'React', 'Node.js'],
      status: 'in-development',
      demoUrl: 'https://agri-iot-demo.example.com',
      codeUrl: 'https://github.com/ilyasrufai/smart-agriculture-iot'
    },
    {
      id: 2,
      category: 'Web Development',
      title: 'Engineering Blog Platform',
      description: 'Full-stack blog platform for sharing engineering insights and research findings. Features content management, user authentication, and analytics.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Stripe'],
      status: 'completed',
      demoUrl: 'https://engineering-blog.example.com',
      codeUrl: 'https://github.com/ilyasrufai/engineering-blog'
    },
    {
      id: 3,
      category: 'Research',
      title: 'Civil Engineering Data Analytics',
      description: 'Data analysis platform for civil engineering projects, featuring predictive modeling for infrastructure maintenance and optimization.',
      techStack: ['Python', 'Pandas', 'Scikit-learn', 'D3.js', 'PostgreSQL'],
      status: 'in-development',
      demoUrl: 'https://civil-analytics-demo.example.com',
      codeUrl: 'https://github.com/ilyasrufai/civil-engineering-analytics'
    }
  ];

  const handleProjectClick = (projectId) => {
    setActiveProject(projectId);
  };

  const handleDemoClick = (url) => {
    // For demo purposes, show an alert. In a real app, this would open the demo
    alert('This would open the live demo at: ' + url);
  };

  const handleCodeClick = (url) => {
    // For demo purposes, show an alert. In a real app, this would open the GitHub repo
    alert('This would open the GitHub repository at: ' + url);
  };

  const currentProject = projects[activeProject];

  return (
    <section id="projects" className="project-showcase-section">
      <Container>
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing my work across DevOps, research, and software development
          </p>
        </div>

        <div className="project-navigation">
          {projects.map((project) => (
            <button
              key={project.id}
              className={`nav-btn ${activeProject === project.id ? 'active' : ''}`}
              onClick={() => handleProjectClick(project.id)}
            >
              {project.category}
            </button>
          ))}
        </div>

        <Row className="project-details">
          <Col lg={6} className="project-info">
            <div className="project-category">{currentProject.category}</div>
            <h3 className="project-title">{currentProject.title}</h3>
            <p className="project-description">{currentProject.description}</p>
            
            <div className="tech-stack">
              <h4>Tech Stack</h4>
              <div className="tech-tags">
                {currentProject.techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className={`status-badge ${currentProject.status}`}>
              {currentProject.status === 'completed' ? 'Completed' : 'In Development'}
            </div>

            <div className="project-actions">
              <button 
                className="btn-primary"
                onClick={() => handleDemoClick(currentProject.demoUrl)}
              >
                Live Demo
              </button>
              <button 
                className="btn-secondary"
                onClick={() => handleCodeClick(currentProject.codeUrl)}
              >
                View Code
              </button>
            </div>
          </Col>

          <Col lg={6} className="project-visual">
            <div className="project-mockup">
              <div className="mockup-header">
                <div className="mockup-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="mockup-content">
                <div className="code-preview">
                  <div className="code-line">
                    <span className="code-keyword">const</span> 
                    <span className="code-function"> {currentProject.category.toLowerCase()}</span> 
                    <span className="code-bracket"> = </span>
                    <span className="code-string">'{currentProject.title}'</span>
                  </div>
                  <div className="code-line">
                    <span className="code-keyword">console</span>
                    <span className="code-bracket">.</span>
                    <span className="code-function">log</span>
                    <span className="code-bracket">(</span>
                    <span className="code-string">'Building the future'</span>
                    <span className="code-bracket">)</span>
                  </div>
                  <div className="code-line">
                    <span className="code-keyword">const</span>
                    <span className="code-function"> status</span>
                    <span className="code-bracket"> = </span>
                    <span className="code-string">'{currentProject.status}'</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectShowcase;
