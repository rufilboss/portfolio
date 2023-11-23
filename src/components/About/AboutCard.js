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
            I am currently employed as a DevOps developer at Aladdin Digital.
            <br />
            I'm an undergrate student at University Of Ilorin, Nigeria.
            <br />
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
              <ImPointRight /> Do Qur'an revision
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
