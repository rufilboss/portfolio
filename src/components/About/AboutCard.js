import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="card">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", fontSize: "1.1rem", lineHeight: "1.7" }}>
            Hello! I'm <span style={{ color: 'var(--primary-navy)', fontWeight: '600' }}>Ilyas Rufai</span>, 
            a dedicated engineering student from <span style={{ color: 'var(--primary-navy)', fontWeight: '600' }}>Nigeria</span> 
            with a passion for both academic research and software engineering.
            <br />
            <br />
            Currently pursuing my engineering degree at the <span style={{ color: 'var(--primary-navy)', fontWeight: '600' }}>University of Ilorin</span>, 
            I've recently joined a research lab where I'm working on cutting-edge projects and preparing for my first publications. 
            This academic journey has deepened my understanding of complex systems and problem-solving methodologies.
            <br />
            <br />
            As a software engineer, I specialize in building robust, scalable solutions using modern technologies. 
            My expertise spans across <span style={{ color: 'var(--primary-navy)', fontWeight: '600' }}>full-stack development, 
            DevOps practices, and system architecture</span>. I'm particularly passionate about creating software 
            that solves real world engineering problems and bridges the gap between research and practical applications.
            <br />
            <br />
            I maintain an active blog where I share insights on software engineering, research methodologies, 
            and technical tutorials. My writing has helped many developers and students in the community, 
            and I believe in the power of knowledge sharing to drive innovation.
            <br />
            <br />
            Beyond my technical work, I'm committed to:
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
              <ImPointRight style={{ color: 'var(--accent-gold)', marginRight: '0.5rem' }} />
              <span>Contributing to open-source projects and the developer community</span>
            </li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
              <ImPointRight style={{ color: 'var(--accent-gold)', marginRight: '0.5rem' }} />
              <span>Writing technical articles and research papers</span>
            </li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
              <ImPointRight style={{ color: 'var(--accent-gold)', marginRight: '0.5rem' }} />
              <span>Mentoring fellow students and junior developers</span>
            </li>
            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
              <ImPointRight style={{ color: 'var(--accent-gold)', marginRight: '0.5rem' }} />
              <span>Staying updated with the latest in technology and research</span>
            </li>
          </ul>

          <p style={{ 
            color: "var(--text-muted)", 
            fontStyle: "italic", 
            marginTop: "1.5rem",
            fontSize: "1rem"
          }}>
            "The best way to predict the future is to create it through research, innovation, and collaboration."
          </p>
          <footer className="blockquote-footer" style={{ color: 'var(--primary-navy)', fontWeight: '500' }}>
            Ilyas Rufai
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
