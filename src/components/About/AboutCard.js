import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">ILYAS RUFAI </span>
            from <span className="purple">Nigeria.</span>
            <br />
            A seasoned professional dedicated to revolutionizing software delivery and infrastructure management for startups and established companies alike. 
            With a robust skill set and a passion for cutting-edge automation technologies, I stand at the forefront of the DevOps landscape.
            <br/>
            Throughout my career, I have been instrumental in implementing and optimizing automation processes using tools such as Git, 
            Terraform, Jenkins, Docker, Kubernetes, and more. I bring a wealth of experience in scaling and automating the deployment of microservices 
            within the AWS Cloud, showcasing my mastery of configuration management, continuous integration, and continuous delivery.
            <br />
            I am not content with the status quo; I am committed to staying ahead of the curve by continually exploring and adopting new automation technologies. 
            This drive to learn and evolve positions me as a dynamic force in the ever-evolving field of DevOps. 
            Beyond technical expertise, I am fueled by a genuine passion for IT automation, scalable and resilient applications, system design, 
            software architecture, and cybersecurity. This holistic approach sets me apart, making me not just a technical expert but a well-rounded 
            professional with a keen eye for creating efficient, secure, and innovative solutions.
            <br />
            Currently working as a DevOps Engineer at Aladdin Digital, I aspire to contribute my skills and knowledge to a technology company. 
            I seek to take on challenging projects that push the boundaries of innovation and am eager to collaborate with like-minded individuals 
            who share my commitment to excellence and a relentless pursuit of groundbreaking solutions.
            <br/>
            In the dynamic world of DevOps, <span className="purple">Ilyas Rufai</span> emerges as a standout candidate, ready to bring my expertise, passion, 
            and innovation to the forefront of any technological endeavor.
            <br />
            I'm an undergrate student at University Of Ilorin, Nigeria.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Read Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Qur'an revision as an Haafidh
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you want to be a leader you must be a reader"{" "}
          </p>
          <footer className="blockquote-footer">rufilboss</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
