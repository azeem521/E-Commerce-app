import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Navbar from 'react-bootstrap/Navbar';
import ModalCard from './UI/Modal';

const Navb = () => {
  return (
    <Navbar className='sticky-top' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Brand href="#home">Store</Navbar.Brand>
        <Navbar.Brand href="#home">About</Navbar.Brand>
        </Container>
      
      <Container style={{color:'white'}}>
      <Button variant="primary">
      <ModalCard />
        </Button>
        {1}
      </Container>
      </Container>
    </Navbar>
  )
}

export default Navb