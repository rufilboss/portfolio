import React from 'react';
import { Container } from 'react-bootstrap';

const CareerHighlights = () => {
  const timelineData = [
    {
      year: 'Nov 2025',
      title: 'AWS Certified Cloud Practitioner',
      description: 'Got certified as a AWS Certified Cloud Practitioner',
      achievements: ['Cloud Computing', 'AWS', 'Cloud', 'Certified']
    },
    {
      year: 'Sep 2025',
      title: 'Unilorin Central Research Lab',
      description: 'Joined the Unilorin Central Research Lab to explore sustainable infrastructure solutions and smart city technologies.',
      achievements: ['Smart Infrastructure', 'IoT Integration', 'Real-Time Data Analysis', 'Research']
    },
    {
      year: 'Aug 2025',
      title: 'Civil Engineering Research Lab',
      description: 'Joined the Civil Engineering Research Lab to explore sustainable infrastructure solutions and smart city technologies.',
      achievements: ['Smart Infrastructure', 'IoT Integration', 'Engineering', 'Research']
    },
    {
      year: 'Apr 2025 - May 2025',
      title: 'DevOps Engineer at Cloudsania',
      description: 'Joined Cloudsania as a DevOps Engineer to explore sustainable infrastructure solutions and automation.',
      achievements: ['Cloud Computing', 'Terraform', 'Docker', 'Kubernetes', 'AWS', 'Automation']
    },
    {
      year: 'May 2025',
      title: 'Terraform Assocaite Certified',
      description: 'Got certified as a Terraform Associate person',
      achievements: ['IaC', 'Terraform', 'Infrastructure', 'Automation']
    },
    {
      year: 'June 2023 - Oct 2024',
      title: 'DevOps Engineer at Aladdin Digital',
      description: 'Joined Aladdin Digital(A FinTech Company) as a DevOps Engineer to explore sustainable payment systems for Africa.',
      achievements: ['Scalability', 'Security', 'Automation', 'Terraform', 'Docker', 'Kubernetes', 'AWS']
    },
    {
      year: 'Dec 2023',
      title: 'Agricultural & Biosystems Engineering',
      description: 'Started pursuing Agricultural and Biosystems Engineering with focus on precision agriculture and automation.',
      achievements: ['Precision Agriculture', 'Automation Systems', 'IoT Sensors']
    },
    {
      year: 'Mar 2023 - Aug 2023',
      title: 'DevOps Instructor at MALhub',
      description: 'Started teaching DevOps to students at MALhub to help them build their careers in the tech industry.',
      achievements: ['DevOps', 'Infrastructure as code (IaC)', 'Cloud Computing', 'Docker', 'Kubernetes', 'AWS', 'CI/CD']
    },
    {
      year: 'Nov 2022 - Oct 2023',
      title: 'Junior DevOps Engineer at Basira App',
      description: 'Joined Basira App as a Junior DevOps Engineer to build crpto trading infrastructure for Africa.',
      achievements: ['Reliability', 'Security', 'Automation', 'Terraform', 'Docker', 'Digital Ocean', 'AWS']
    },
    {
      year: 'Jul 2022 - Nov 2022',
      title: 'Intern DevOps Engineer at Medscrape(Now DocNexus)',
      description: 'Joined Medscrape(A Healthcare Company) as an Intern DevOps Engineer to build a scalable and reliable infrastructure for the company.',
      achievements: ['Reliability', 'Python', 'Sysadm', 'Bash', 'Teamwork', 'Database', 'AWS']
    },
    {
      year: 'Mar 2021',
      title: 'DevOps Engineering Journey',
      description: 'Began transition into DevOps engineering, learning infrastructure automation and cloud technologies.',
      achievements: ['Terraform', 'Docker', 'Kubernetes', 'AWS']
    },
    {
      year: 'Aug 2020',
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