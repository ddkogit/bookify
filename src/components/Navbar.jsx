import React from 'react'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavbarH() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Brand href="/book/list">Add Listing</Navbar.Brand>
       
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarH