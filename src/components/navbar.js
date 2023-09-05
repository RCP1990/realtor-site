import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function MainNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary mx-auto" data-bs-theme="light">
          <Container fluid="md">
          <Navbar.Brand href="#home">
                <img
                  src={require('../images/Logo.png')}
                  height="52"
                  className="d-inline-block align-top"
                  alt="Realtor logo"
                />
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="">Home</Nav.Link>
                <Nav.Link href="">Properties</Nav.Link>
                <Nav.Link href="">Agents</Nav.Link>
                <Nav.Link href="">Blog</Nav.Link>
                <Button variant="outline-primary">LOG IN</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}

export default MainNavbar