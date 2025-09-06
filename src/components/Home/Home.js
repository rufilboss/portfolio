import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import avatar from "../../Assets/avatar.svg";
import Type from "./Type";

function Home() {
  return (
    <section className="hero" id="home">
      <Container fluid>
        <Row className="align-items-center" style={{ minHeight: '100vh', paddingTop: '80px' }}>
          <Col md={6} className="text-center text-md-start">
            <div style={{ padding: '2rem' }}>
              <h1 className="hero-title">
                Hi, I'm <span style={{ color: 'var(--primary-navy)' }}>Ilyas Rufai</span>
              </h1>
              <h2 className="hero-subtitle">
                Engineering Student & Software Engineer
              </h2>
              <p className="hero-description">
                Passionate about research, innovation, and building solutions that make a difference. 
                Currently pursuing my engineering degree while contributing to cutting-edge research 
                and developing impactful software solutions.
              </p>
              <div className="hero-cta">
                <a href="#about" className="btn btn-primary">
                  Learn More About Me
                </a>
                <a href="#projects" className="btn btn-secondary">
                  View My Work
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <div style={{ padding: '2rem' }}>
              <img
                src={avatar}
                alt="Ilyas Rufai - Engineering Student & Software Engineer"
                className="img-fluid"
                style={{ 
                  maxWidth: '400px', 
                  borderRadius: '20px',
                  boxShadow: 'var(--shadow-lg)'
                }}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            <div style={{ padding: '2rem' }}>
              <Type />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
