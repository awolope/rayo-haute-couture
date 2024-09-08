import React from "react";
import "./LOgo.png";
import "./navbar.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="navbar-transparent " fixed="top">
      <Container>
        <Navbar.Brand href="#">
          <img
            src="/LOgo.png"
            alt="FashionShop"
            width="90"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="px-3">
              Collection
            </Nav.Link>
            <Nav.Link href="#shop" className="px-3">
              Shop
            </Nav.Link>
            <Nav.Link href="#contact" className="px-3">
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#cart">
              <i className="fas fa-shopping-cart text-danger"></i>{" "}
            </Nav.Link>
            <Nav.Link href="#profile">
              <i className="fas fa-user-circle text-danger"></i>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
