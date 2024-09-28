import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import logiq from "../../Assets/Projects/logiq.png";
import awsbackup from "../../Assets/Projects/awsbackup.png";
import days100 from "../../Assets/Projects/days100.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logiq}
              isBlog={false}
              title="Real-Time Log Processing API"
              description="This project is a Real-Time Log Processing API built with FastAPI, Celery, Redis, and MongoDB. It processes incoming log data asynchronously, 
              stores them in a MongoDB database, and performs background tasks (e.g., filtering sensitive information) using Celery workers. The infrastructure is containerized 
              with Docker, making it highly scalable and suitable for real-world applications such as centralized log processing,
               fraud detection, and asynchronous data processing."
              ghLink="https://github.com/rufilboss/real-time-log-processing-api"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logiq}
              isBlog={false}
              title="LogIQ"
              description="LogIQ is an open-source web performance monitoring tool that provides a comprehensive analysis of website performance on both desktop and 
                          mobile devices. With LogIQ, website owners and developers can gain deep insights into their website's performance and take actions to 
                          improve the speed and user experience."
              ghLink="https://github.com/FreeOps-Tools/LogIQ"
              demoLink="https://logiq.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={days100}
              isBlog={false}
              title="100DaysOfDevOps"
              description="This serves as my documentation hub for delving into the DevOps realm. Started this journey on July 25, 2022, I made a 100-day commitment to 
                          devote at least one hour daily, including weekends, to immerse myself in gaining a comprehensive understanding and knowledge of diverse 
                          aspects within the world of DevOps."
              ghLink="https://github.com/rufilboss/100DaysOfDevOps"
              demoLink="https://github.com/rufilboss/100DaysOfDevOps"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Microservices Architecture"
              description="Throughout this project, I leveraged various DevOps tools to implement a microservices architecture and deployment, 
                          including Docker, Kubernetes, Helm, Terraform, and more."
              ghLink="https://github.com/rufilboss/microservices-deploy/"
              demoLink="https://github.com/rufilboss/microservices-deploy/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="AKS"
              description="Deploy an AKS cluster for a client on replit"
              ghLink="https://github.com/rufilboss/replit_projects"
              demoLink="https://github.com/rufilboss/replit_projects"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={awsbackup}
              isBlog={false}
              title="Amazon RDS Backup & Restore Using AWS Backup"
              description=""
              ghLink="https://github.com/DevSecOpsHQ/Project-3"
              demoLink="https://github.com/DevSecOpsHQ/Project-3"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description=""
              ghLink="https://github.com/rufilboss/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
