import React from 'react';
import { Container } from 'react-bootstrap';

const CareerHighlights = () => {
  const timelineData = [
    {
      year: '2025',
      title: 'Unilorin Central Research Lab',
      description: 'Joined the Unilorin Central Research Lab to explore sustainable infrastructure solutions and smart city technologies.',
      achievements: ['Smart Infrastructure', 'IoT Integration', 'Real-Time Data Analysis', 'Research']
    },
    {
      year: '2025',
      title: 'Civil Engineering Research Lab',
      description: 'Joined the Civil Engineering Research Lab to explore sustainable infrastructure solutions and smart city technologies.',
      achievements: ['Smart Infrastructure', 'IoT Integration', 'Data Analysis']
    },
    {
      year: '2023 - 2025',
      title: 'Agricultural & Biosystems Engineering',
      description: 'Started pursuing Agricultural and Biosystems Engineering with focus on precision agriculture and automation.',
      achievements: ['Precision Agriculture', 'Automation Systems', 'IoT Sensors']
    },
    {
      year: '2021',
      title: 'DevOps Engineering Journey',
      description: 'Began transition into DevOps engineering, learning infrastructure automation and cloud technologies.',
      achievements: ['Terraform', 'Docker', 'Kubernetes', 'AWS']
    },
    {
      year: '2021',
      title: 'Software Development Foundation',
      description: 'Established strong foundation in software development and engineering principles.',
      achievements: ['Full-Stack Development', 'Database Design', 'API Development']
    }
  ];

  return (
    <section id="career-highlights" className="career-highlights-section">
      <Container>
        <div className="section-header">
          <h2 className="section-title">Career Highlights</h2>
          <p className="section-subtitle">
            My academic and professional development timeline
          </p>
        </div>

        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {index < timelineData.length - 1 && <div className="marker-line"></div>}
              </div>
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
                <div className="timeline-achievements">
                  {item.achievements.map((achievement, idx) => (
                    <span key={idx} className="achievement-tag">{achievement}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CareerHighlights; 