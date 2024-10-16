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
            As a DevOps Engineer, I'm passionate about revolutionizing software delivery and infrastructure management. 
            Whether working with startups or established companies, I bring a strong focus on cutting-edge automation technologies and efficient systems.
            <br/>
            Throughout my career, I've been instrumental in implementing and optimizing automation processes using tools such as Git, Terraform, Jenkins, 
            Docker, and Kubernetes. I have extensive experience in scaling and automating the deployment of microservices on cloud platforms, 
            mastering configuration management, continuous integration (CI), and continuous delivery (CD).
            <br />
            I'm always looking ahead, constantly learning and adapting to new automation technologies. My holistic approach covers not just 
            technical know-how but also a passion for IT automation, system design, scalable and resilient applications, software architecture, 
            cybersecurity, and distributed systems.
            <br />
            Having recently worked as a DevOps Engineer at Aladdin Digital, I’m now seeking new opportunities where I can apply my skills and 
            knowledge to exciting, challenging projects. I thrive on collaborating with teams to push the boundaries of innovation, making a 
            meaningful impact through groundbreaking solutions.
            <br/>
            In the ever-evolving world of DevOps, I'm ready to bring my expertise, passion, and innovation to any technological endeavor.
            <br />
            Lastly, I'm an undergraduate engineering student of <span className="purple">University Of Ilorin, Nigeria,</span>
            currently exploring deeper into <span className="purple">system design</span> and distributed systems.
            <br/>
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
