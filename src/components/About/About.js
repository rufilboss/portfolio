import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutCard from "./AboutCard";
import avatar from "../../Assets/avatar.svg";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Github from "./Github";

function About() {
  return (
    <Container fluid className="section" id="about">
      <Container>
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A passionate engineering student and software engineer dedicated to research, innovation, and creating meaningful solutions.
          </p>
        </div>
        
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <AboutCard />
          </Col>
          <Col md={6} className="text-center">
            <img 
              src={avatar} 
              alt="Ilyas Rufai" 
              className="img-fluid"
              style={{ 
                maxWidth: '400px',
                borderRadius: '20px',
                boxShadow: 'var(--shadow-lg)'
              }}
            />
          </Col>
        </Row>

        <Row>
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

        <Row>
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
