import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProjectShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');

      const projects = [
    {
      id: 1,
      category: 'DevOps',
      title: 'Infrastructure Automation Platform',
      description: 'Automated deployment pipeline using Terraform, Docker, and Kubernetes for scalable cloud infrastructure.',
      techStack: ['Terraform', 'Docker', 'Kubernetes', 'AWS', 'Jenkins'],
      status: 'completed',
      screenshot: 'Images/malariadetect.png',
      githubUrl: 'https://github.com/rufilboss/infrastructure-automation',
      liveUrl: 'https://infra-demo.example.com',
      featured: true
    },
    {
      id: 2,
      category: 'Research',
      title: 'Smart Agricultural IoT System',
      description: 'Comprehensive IoT monitoring system for crop health using sensors, machine learning, and real-time data analysis.',
      techStack: ['Python', 'Arduino', 'TensorFlow', 'MQTT', 'React'],
      status: 'in-development',
      screenshot: 'Images/malariadetect.png',
      githubUrl: 'https://github.com/rufilboss/smart-agriculture-iot',
      liveUrl: 'https://agri-iot-demo.example.com',
      featured: true
    },
    {
      id: 3,
      category: 'Web Development',
      title: 'Engineering Blog Platform',
      description: 'Full-stack blog platform for sharing engineering insights and research findings.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      status: 'completed',
      screenshot: 'Images/malariadetect.png',
      githubUrl: 'https://github.com/rufilboss/engineering-blog',
      liveUrl: 'https://engineering-blog.example.com',
      featured: false
    },
    {
      id: 4,
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
      id: 5,
      category: 'DevOps',
      title: 'Microservices Monitoring Dashboard',
      description: 'Real-time monitoring dashboard for microservices architecture with alerting.',
      techStack: ['Grafana', 'Prometheus', 'ELK Stack', 'Docker', 'Kubernetes'],
      status: 'completed',
      screenshot: 'Images/malariadetect.png',
      githubUrl: 'https://github.com/rufilboss/microservices-monitoring',
      liveUrl: 'https://monitoring-demo.example.com',
      featured: true
    },
    {
      id: 6,
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
