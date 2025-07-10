// src/views/NavBar.js
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    // Dodano variant="dark" aby tekst był biały na niebieskim tle.
    // Usunięto 'rounded' i 'mt-4', pozostawiono 'mb-4' dla marginesu na dole.
    <Navbar bg="primary" variant="dark" expand="lg" className="rounded mb-4">
      <Container>
        {/* Zmieniono href="/" na as={NavLink} to="/" dla spójności z React Router DOM */}
        <Navbar.Brand as={NavLink} to="/">Waiter.app</Navbar.Brand>
        <Nav className="ms-auto"> {/* ms-auto wyrówna link do prawej */}
          <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
