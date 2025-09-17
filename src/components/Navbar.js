import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" className="navbar" expanded={expanded} onToggle={setExpanded}>
      <div className="container">
        <Navbar.Brand href="#home" className="navbar-brand" onClick={() => setExpanded(false)}>
          <img
            src={process.env.PUBLIC_URL + "/Images/logo.png"}
            alt="Ilyas Rufai Logo"
            className="navbar-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-link" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link href="#about" className="nav-link" onClick={() => setExpanded(false)}>About</Nav.Link>
            <Nav.Link href="#career-highlights" className="nav-link" onClick={() => setExpanded(false)}>Career Highlights</Nav.Link>
            <Nav.Link href="#projects" className="nav-link" onClick={() => setExpanded(false)}>Projects</Nav.Link>
            <Nav.Link href="#publications" className="nav-link" onClick={() => setExpanded(false)}>Publications</Nav.Link>
            <Nav.Link href="#academic" className="nav-link" onClick={() => setExpanded(false)}>Academic</Nav.Link>
            <Nav.Link href="#network" className="nav-link" onClick={() => setExpanded(false)}>Network</Nav.Link>
            <Nav.Link href="#contact" className="nav-link" onClick={() => setExpanded(false)}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navigation;
