import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [state, handleSubmit] = useForm('mvgbjeqn');

  useEffect(() => {
    if (state.succeeded) {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  }, [state.succeeded]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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

        <Row className="contact-row align-items-stretch">
          <Col lg={6}>
            <div className="contact-info h-100 d-flex flex-column">
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

              {/* Moved Current Availability card here, replacing social media section */}
              <div className="availability-card text-center mt-4 mt-auto">
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
            </div>
          </Col>

          <Col lg={6}>
            <div className="contact-form-container h-100 d-flex flex-column">
              <Form className="contact-form flex-grow-1 d-flex flex-column" onSubmit={handleSubmit}>
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
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
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

                <Form.Group className="mb-3 flex-grow-1 d-flex flex-column">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or idea..."
                    className="flex-grow-1"
                    required
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </Form.Group>

                <Button type="submit" className="btn-primary w-100 mt-auto" disabled={state.submitting}>
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default Contact;
