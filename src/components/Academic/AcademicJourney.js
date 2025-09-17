import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AcademicJourney = () => {
  const academicData = [
    {
      year: '2025',
      title: 'Advanced Research Methods',
      institution: 'University Research Lab',
      description: 'Currently engaged in advanced research methodologies and interdisciplinary collaboration.',
      achievements: [
        'Research Lab Collaboration',
        'Publication Preparation',
        'Cross-disciplinary Projects'
      ]
    },
    {
      year: '2024',
      title: 'Agricultural & Biosystems Engineering',
      institution: 'University of Agriculture',
      description: 'Pursuing comprehensive engineering education with focus on agricultural technology and biosystems.',
      achievements: [
        'Precision Agriculture Studies',
        'IoT Implementation',
        'Sustainable Engineering'
      ]
    }
  ];

  const skills = [
    { name: 'DevOps & Infrastructure', percentage: 85 },
    { name: 'Agricultural Engineering', percentage: 50 },
    { name: 'Research & Analysis', percentage: 40 },
    { name: 'Software Development', percentage: 60 },
    { name: 'IoT & Automation', percentage: 50 },
    { name: 'Project Management', percentage: 65 }
  ];

  return (
    <section id="academic" className="academic-journey-section">
      <Container>
        <div className="section-header">
          <h2 className="section-title">Academic Journey</h2>
          <p className="section-subtitle">
            My educational path and skill development
          </p>
        </div>

        <Row>
          <Col lg={8}>
            <div className="journey-timeline">
              {academicData.map((item, index) => (
                <div key={index} className="journey-item">
                  <div className="journey-year">{item.year}</div>
                  <div className="journey-content">
                    <h3 className="journey-title">{item.title}</h3>
                    <div className="journey-institution">{item.institution}</div>
                    <p className="journey-description">{item.description}</p>
                    <div className="journey-achievements">
                      {item.achievements.map((achievement, idx) => (
                        <div key={idx} className="achievement-item">• {achievement}</div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          <Col lg={4}>
            <div className="skills-section">
              <h3 className="skills-title">Core Skills</h3>
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}

              <div className="academic-highlights">
                <h4>Academic Highlights</h4>
                <div className="highlights-grid">
                  <div className="highlight-item">
                    <span className="highlight-number">5+</span>
                    <span className="highlight-label">Research Labs</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-number">2+</span>
                    <span className="highlight-label">Publications</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-number">300</span>
                    <span className="highlight-label">Level</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-number">10+</span>
                    <span className="highlight-label">Projects</span>
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

export default AcademicJourney;
