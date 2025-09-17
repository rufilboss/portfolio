import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row className="align-items-center footer-row">
        {/* Left: Designed by (mobile order 2) */}
        <Col xs="12" md="4" className="footer-copywright order-2 order-md-1 text-center text-md-start">
          <p className="footer-small">Designed and Developed by ILYAS RUFAI</p>
        </Col>

        {/* Center: Copyright (mobile order 3) */}
        <Col xs="12" md="4" className="footer-copywright order-3 order-md-2 text-center">
          <p className="footer-small">Copyright © {year} rufilboss</p>
        </Col>

        {/* Right: Icons (mobile order 1) */}
        <Col xs="12" md="4" className="footer-body order-1 order-md-3 text-center text-md-start">
          <ul className="footer-icons footer-icons-large">
            <li className="social-icons">
              <a
                href="https://github.com/rufilboss"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/rufilboss"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/rufilboss/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/rufilboss"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
