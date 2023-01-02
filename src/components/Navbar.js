import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ModalCard from './UI/Modal';

const Navb = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Brand href="#home">Store</Navbar.Brand>
        <Navbar.Brand href="#home">About</Navbar.Brand>
        </Container>
      
      <Container>
      <Button variant="primary">
      <ModalCard />
        </Button>{' '}
      </Container>
      </Container>
    </Navbar>
  )
}

export default Navb