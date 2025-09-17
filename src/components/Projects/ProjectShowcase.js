import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProjectShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');

      const projects = [
    {
      id: 1,
      category: 'DevOps',
      title: 'Real-Time Log Processing API',
      description: 'This project is a Real-Time Log Processing API built with FastAPI, Celery, Redis, and MongoDB. It processes incoming log data asynchronously, stores them in a MongoDB database, and performs background tasks (e.g., filtering sensitive information) using Celery workers. The infrastructure is containerized with Docker, making it highly scalable and suitable for real-world applications such as centralized log processing,fraud detection, and asynchronous data processing.',
      techStack: ['FastAPI', 'Celery', 'Redis', 'MongoDB', 'Docker'],
      status: 'completed',
      screenshot: 'Images/malariadetect.png',
      githubUrl: 'https://github.com/rufilboss/real-time-log-processing-api',
      liveUrl: 'https://github.com/rufilboss/real-time-log-processing-api',
      featured: false
    },
    {
      id: 2,
      category: 'Web Development',
      title: 'LOGIQ',
      description: 'LogIQ is an open-source web performance monitoring tool that provides a comprehensive analysis of website performance on both desktop and mobile devices. With LogIQ, website owners and developers can gain deep insights into their websites performance and take actions to improve the speed and user experience.',
      techStack: ['Python', 'Arduino', 'TensorFlow', 'MQTT', 'React'],
      status: 'in-development',
      screenshot: 'Images/logiq.png',
      githubUrl: 'https://github.com/FreeOps-Tools/LogIQ',
      liveUrl: 'https://logiq.netlify.app/',
      featured: true
    },
    {
      id: 3,
      category: 'Research',
      title: 'Smart Agricultural IoT System',
      description: 'Comprehensive IoT monitoring system for crop health using sensors, machine learning, and real-time data analysis.',
      techStack: ['Python', 'Arduino', 'TensorFlow', 'MQTT', 'React'],
      status: 'in-development',
      screenshot: 'Images/malariadetect.png',
      githubUrl: 'https://github.com/rufilboss/smart-agriculture-iot',
      liveUrl: 'https://agri-iot-demo.example.com',
      featured: false
    },
    {
      id: 4,
      category: 'Web Development',
      title: 'Malaria Detect',
      description: 'Malaria Detect is dedicated to leveraging artificial intelligence to provide rapid, accurate, and accessible malaria diagnosis.',
      techStack: [ 'Jupyter Notebook', 'TensorFlow', 'Keras', 'Python', 'JavaScript', 'CSS', 'HTML'],
      status: 'completed',
      screenshot: 'Images/malariadetect.png',
      githubUrl: 'https://github.com/rufilboss/MalariaDetect',
      liveUrl: 'https://malariadetect.netlify.app/',
      featured: true
    },
    {
      id: 5,
      category: 'Research',
      title: 'Civil Engineering Data Analytics',
      description: 'Data analysis platform for civil engineering projects with predictive modeling.',
      techStack: ['Python', 'Pandas', 'Scikit-learn', 'D3.js', 'PostgreSQL'],
      status: 'in-development',
      screenshot: 'Images/malariadetect.png',
      githubUrl: 'https://github.com/rufilboss/civil-engineering-analytics',
      liveUrl: 'https://civil-analytics-demo.example.com',
      featured: false
    },
    {
      id: 6,
      category: 'Web Development',
      title: 'GrowCycle',
      description: 'A comprehensive web application that helps users create, track, and optimize their personal productivity systems with advanced analytics, notifications, and a digital whiteboard.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Python', 'PostgreSQL', 'JWT', 'FastAPI', 'Bash'],
      status: 'in-development',
      screenshot: 'Images/malariadetect.png',
      githubUrl: 'https://github.com/rufilboss/GrowCycle',
      liveUrl: 'https://growcycle.netlify.app/',
      featured: false
    },
    {
      id: 7,
      category: 'Web Development',
      title: 'Agricultural Data Visualization',
      description: 'Interactive data visualization platform for agricultural research data.',
      techStack: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      status: 'completed',
      screenshot: 'Images/malariadetect.png',
      githubUrl: 'https://github.com/rufilboss/agri-data-viz',
      liveUrl: 'https://agri-viz.example.com',
      featured: false
    }
  ];

      const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured Projects' },
    { id: 'DevOps', label: 'DevOps' },
    { id: 'Research', label: 'Research' },
    { id: 'Web Development', label: 'Web Development' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : activeFilter === 'featured'
    ? projects.filter(project => project.featured === true)
    : projects.filter(project => project.category === activeFilter);

  const handleFilterClick = (categoryId) => {
    setActiveFilter(categoryId);
  };

  const handleGitHubClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleLiveClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
          {categories.map((category) => (
            <button
              key={category.id}
              className={`nav-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => handleFilterClick(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <Row>
          {filteredProjects.map((project) => (
            <Col key={project.id} lg={6} className="mb-4">
              <div className={`project-card ${project.featured ? 'featured' : ''}`}>
                <div className="project-image-container">
                  <img 
                    src={project.screenshot} 
                    alt={project.title}
                    className="project-screenshot"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="project-placeholder">
                    <div className="placeholder-icon">💻</div>
                    <div className="placeholder-text">{project.category}</div>
                  </div>
                  <div className="project-overlay">
                    <div className="project-status">
                      <span className={`status-badge ${project.status}`}>
                        {project.status === 'completed' ? 'Completed' : 'In Development'}
                      </span>
                    </div>
                    {project.featured && (
                      <div className="featured-badge">
                        <span>⭐ Featured</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>


                  <div className="project-actions">
                    <button 
                      className="btn-primary"
                      onClick={() => handleLiveClick(project.liveUrl)}
                    >
                      <span>🌐</span> Live Demo
                    </button>
                    <button 
                      className="btn-secondary"
                      onClick={() => handleGitHubClick(project.githubUrl)}
                    >
                      <span>💻</span> Source Code
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="project-stats text-center">
          <Row>
            <Col md={3}>
              <div className="stat-item">
                <span className="stat-number">{projects.length}</span>
                <span className="stat-label">Total Projects</span>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-item">
                <span className="stat-number">{projects.filter(p => p.status === 'completed').length}</span>
                <span className="stat-label">Completed</span>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-item">
                <span className="stat-number">{projects.filter(p => p.featured).length}</span>
                <span className="stat-label">Featured</span>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-item">
                <span className="stat-number">{projects.filter(p => p.status === 'in-development').length}</span>
                <span className="stat-label">In Development</span>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default ProjectShowcase;
