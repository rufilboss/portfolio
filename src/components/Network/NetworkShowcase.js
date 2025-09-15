import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const NetworkShowcase = () => {
  const connections = [
    {
      name: 'Engr. Yusuf',
      role: 'Research Supervisor',
      institution: 'Civil Engineering Lab',
      field: 'Smart Infrastructure',
      type: 'Academic'
    },
    {
      name: 'Yusuf Adeyemo',
      role: 'Senior DevOps Engineer',
      institution: 'Pronto Ville',
      field: 'Cloud Infrastructure',
      type: 'Professional'
    },
    {
      name: 'Prof. K O Yusuf',
      role: 'Agricultural Technology Expert',
      institution: 'AgriTech Research Center',
      field: 'Precision Agriculture',
      type: 'Research'
    }
  ];

  const communities = [
    {
      name: 'DevOps Community',
      role: 'Active Member',
      description: 'Contributing to open-source projects and sharing knowledge about infrastructure automation.'
    },
    {
      name: 'Agricultural Engineering Society',
      role: 'Student Representative',
      description: 'Leading initiatives to promote sustainable engineering practices in agriculture.'
    },
    {
      name: 'Research Collaboration Network',
      role: 'Collaborator',
      description: 'Working with interdisciplinary teams on innovative engineering solutions.'
    }
  ];

  return (
    <section id="network" className="network-showcase-section">
      <Container>
        <div className="section-header">
          <h2 className="section-title">Professional Network</h2>
          <p className="section-subtitle">
            Building connections across academia, industry, and research communities
          </p>
        </div>

        {/* Compact social chips row */}
        <div className="network-social-chips">
          <a href="https://linkedin.com/in/rufilboss" target="_blank" rel="noopener noreferrer" className="chip linkedin" aria-label="LinkedIn">
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
          <a href="https://github.com/rufilboss" target="_blank" rel="noopener noreferrer" className="chip github" aria-label="GitHub">
            <FaGithub /> <span>GitHub</span>
          </a>
          <a href="https://twitter.com/rufilboss" target="_blank" rel="noopener noreferrer" className="chip twitter" aria-label="Twitter">
            <FaTwitter /> <span>Twitter</span>
          </a>
          <a href="mailto:rufilboss@gmail.com" className="chip email" aria-label="Email">
            <FaEnvelope /> <span>Email</span>
          </a>
        </div>

        <Row>
          <Col lg={6}>
            <h3 className="subsection-title">Key Connections</h3>
            <div className="connections-list">
              {connections.map((connection, index) => (
                <div key={index} className="connection-item">
                  <div className="connection-avatar">
                    <div className="avatar-circle">
                      {connection.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="connection-info">
                    <div className="connection-name">{connection.name}</div>
                    <div className="connection-role">{connection.role}</div>
                    <div className="connection-institution">{connection.institution}</div>
                    <div className="connection-details">
                      <span className="connection-field">{connection.field}</span>
                      <span className="connection-type">{connection.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          <Col lg={6}>
            <h3 className="subsection-title">Community Involvement</h3>
            <div className="communities-list">
              {communities.map((community, index) => (
                <div key={index} className="community-item">
                  <div className="community-name">{community.name}</div>
                  <div className="community-role">{community.role}</div>
                  <div className="community-description">{community.description}</div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        <div className="network-stats text-center">
          <Row>
            <Col md={3}>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Professional Connections</span>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Research Collaborations</span>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Community Leadership</span>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-item">
                <span className="stat-number">15k+</span>
                <span className="stat-label">Network Reach</span>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default NetworkShowcase;
