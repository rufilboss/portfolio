import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to collaborate on innovative projects? Let's connect!
          </p>
        </div>

        <Row>
          <Col lg={6}>
            <div className="contact-info">
              <h3>Let's Start a Conversation</h3>
              <p className="contact-description">
                I'm always excited to discuss new opportunities, research collaborations, 
                or innovative engineering projects. Whether you're looking for a DevOps engineer, 
                research collaborator, or just want to chat about technology, I'd love to hear from you.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>rufilboss@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>Available for remote work worldwide</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">⏰</div>
                  <div className="contact-text">
                    <h4>Response Time</h4>
                    <p>Usually within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h4>Connect on Social Media</h4>
                <div className="social-icons">
                  <a href="https://linkedin.com/in/rufilboss" className="social-link" target="_blank" rel="noopener noreferrer">
                    💼
                  </a>
                  <a href="https://github.com/rufilboss" className="social-link" target="_blank" rel="noopener noreferrer">
                    💻
                  </a>
                  <a href="https://twitter.com/rufilboss" className="social-link" target="_blank" rel="noopener noreferrer">
                    🐦
                  </a>
                  <a href="https://rufilboss.substack.com" className="social-link" target="_blank" rel="noopener noreferrer">
                    📝
                  </a>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="contact-form-container">
              <Form className="contact-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or idea..."
                    required
                  />
                </Form.Group>

                <Button type="submit" className="btn-primary w-100">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>

        <div className="availability-section">
          <Row>
            <Col md={8} className="mx-auto">
              <div className="availability-card text-center">
                <h3>Current Availability</h3>
                <div className="availability-status">
                  <div className="status-indicator available"></div>
                  <span className="status-text">Available for new opportunities</span>
                </div>
                <p className="availability-note">
                  Open to research collaborations, freelance projects, and full-time opportunities 
                  in DevOps, Agricultural Engineering, and Software Development.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
