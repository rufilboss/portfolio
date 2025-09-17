import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiPhp,
  DiDocker,
  DiJenkins,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiPostgresql,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiPrometheus,
  SiGrafana,
  SiChef,
  SiPuppet,
  SiRabbitmq,
  SiGo,
  SiReact,
  SiTypescript,
  SiNginx,
  SiAmazonaws,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons docker">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons kubernetes">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons jenkins">
        <DiJenkins />
      </Col>
      <Col xs={4} md={2} className="tech-icons terraform">
        <SiTerraform />
      </Col>
      <Col xs={4} md={2} className="tech-icons ansible">
        <SiAnsible />
      </Col>
      <Col xs={4} md={2} className="tech-icons python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons php">
        <DiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons javascript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons golang">
        <SiGo />
      </Col>
      <Col xs={4} md={2} className="tech-icons node">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons mongodb">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons firebase">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons redis">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons postgresql">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons prometheus">
        <SiPrometheus />
      </Col>
      <Col xs={4} md={2} className="tech-icons grafana">
        <SiGrafana />
      </Col>
      <Col xs={4} md={2} className="tech-icons chef">
        <SiChef />
      </Col>
      <Col xs={4} md={2} className="tech-icons puppet">
        <SiPuppet />
      </Col>
      <Col xs={4} md={2} className="tech-icons rabbitmq">
        <SiRabbitmq />
      </Col>
      {/* New additions for full alignment and relevance */}
      <Col xs={4} md={2} className="tech-icons react">
        <SiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons typescript">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons nginx">
        <SiNginx />
      </Col>
      <Col xs={4} md={2} className="tech-icons aws">
        <SiAmazonaws />
      </Col>
    </Row>
  );
}

export default Techstack;
