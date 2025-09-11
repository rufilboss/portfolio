import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../Assets/logo.svg";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <div className="container">
        <Navbar.Brand href="#home" className="navbar-brand">
          <img
            src={logo}
            alt="Ilyas Rufai Logo"
            className="navbar-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-link">About</Nav.Link>
            <Nav.Link href="#research" className="nav-link">Research</Nav.Link>
            <Nav.Link href="#projects" className="nav-link">Projects</Nav.Link>
            <Nav.Link href="#publications" className="nav-link">Publications</Nav.Link>
            <Nav.Link href="#academic" className="nav-link">Academic</Nav.Link>
            <Nav.Link href="#network" className="nav-link">Network</Nav.Link>
            <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navigation;
