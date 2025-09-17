import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PublicationGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const publications = [

    {
      id: 1,
      type: 'Research Paper',
      title: 'IoT-Based Smart Agriculture Monitoring System',
      description: 'A comprehensive study on implementing IoT sensors for real-time crop monitoring and yield optimization.',
      date: '2025',
      readTime: '8 min read',
      tags: ['IoT', 'Agriculture', 'Machine Learning'],
      category: 'research',
      featured: true,
      url: '#'
    },
    {
      id: 2,
      type: 'Blog Post',
      title: 'DevOps Best Practices for Startups',
      description: 'Essential DevOps strategies and tools for scaling engineering teams and infrastructure.',
      date: '2025',
      readTime: '5 min read',
      tags: ['DevOps', 'Infrastructure', 'Automation'],
      category: 'blog',
      featured: false,
      url: '#'
    },
    {
      id: 3,
      type: 'Technical Article',
      title: 'Building Scalable Microservices Architecture',
      description: 'A deep dive into designing and implementing microservices for large-scale applications.',
      date: '2025',
      readTime: '12 min read',
      tags: ['Microservices', 'Architecture', 'Scalability'],
      category: 'technical',
      featured: true,
      url: '#'
    },
    {
      id: 4,
      type: 'Research Paper',
      title: 'Sustainable Engineering Solutions in Agriculture',
      description: 'Exploring innovative approaches to sustainable farming through engineering and technology.',
      date: '2025',
      readTime: '10 min read',
      tags: ['Sustainability', 'Engineering', 'Agriculture'],
      category: 'research',
      featured: false,
      url: '#'
    },
    {
      id: 5,
      type: 'Blog Post',
      title: 'Civil Engineering Meets Technology',
      description: 'How modern technology is revolutionizing civil engineering and infrastructure development.',
      date: '2025',
      readTime: '6 min read',
      tags: ['Civil Engineering', 'Technology', 'Innovation'],
      category: 'blog',
      featured: false,
      url: '#'
    },
    {
      id: 6,
      type: 'Technical Article',
      title: 'Kubernetes for Agricultural IoT',
      description: 'Deploying and managing IoT devices in agricultural settings using container orchestration.',
      date: '2025',
      readTime: '9 min read',
      tags: ['Kubernetes', 'IoT', 'Agriculture', 'DevOps'],
      category: 'technical',
      featured: true,
      url: '#'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Publications' },
    { id: 'research', label: 'Research Papers' },
    { id: 'blog', label: 'Blog Posts' },
    { id: 'technical', label: 'Technical Articles' }
  ];

  const filteredPublications = activeFilter === 'all' 
    ? publications 
    : publications.filter(pub => pub.category === activeFilter);

  const handleFilterClick = (categoryId) => {
    setActiveFilter(categoryId);
  };

  const handleReadMore = (url) => {
    // For now, just show an alert. In a real app, this would navigate to the article
    alert('This would open the full article. URL: ' + url);
  };

  return (
    <section id="publications" className="publication-gallery-section">
      <Container>
        <div className="section-header">
          <h2 className="section-title">Publications & Articles</h2>
          <p className="section-subtitle">
            Sharing knowledge through research papers, technical articles, and blog posts
          </p>
        </div>

        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => handleFilterClick(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <Row>
          {filteredPublications.map((publication) => (
            <Col key={publication.id} lg={6} className="mb-4">
              <div className={`publication-card ${publication.featured ? 'featured' : ''}`}>
                <div className="publication-header">
                  <span className="publication-type">{publication.type}</span>
                  <span className="publication-date">{publication.date}</span>
                </div>
                
                <h3 className="publication-title">{publication.title}</h3>
                <p className="publication-description">{publication.description}</p>
                
                <div className="publication-meta">
                  <span className="read-time">{publication.readTime}</span>
                  <div className="publication-tags">
                    {publication.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
                
                <button 
                  className="read-more-btn"
                  onClick={() => handleReadMore(publication.url)}
                >
                  Read More →
                </button>
              </div>
            </Col>
          ))}
        </Row>

        <div className="publication-stats text-center">
          <Row>
            <Col md={3}>
              <div className="stat-item">
                <span className="stat-number">{publications.length}</span>
                <span className="stat-label">Total Publications</span>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-item">
                <span className="stat-number">{publications.filter(p => p.category === 'research').length}</span>
                <span className="stat-label">Research Papers</span>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-item">
                <span className="stat-number">{publications.filter(p => p.category === 'blog').length}</span>
                <span className="stat-label">Blog Posts</span>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-item">
                <span className="stat-number">{publications.filter(p => p.featured).length}</span>
                <span className="stat-label">Featured Articles</span>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default PublicationGallery;
