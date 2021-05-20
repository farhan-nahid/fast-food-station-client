import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to='/'>Fast Food Station</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-center">
                  <Nav.Link as={Link} to="/user-information">User Information</Nav.Link>
                  <Nav.Link as={Link} to="/order-summery">Order Summery</Nav.Link>
                </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
    );
};

export default NavBar;