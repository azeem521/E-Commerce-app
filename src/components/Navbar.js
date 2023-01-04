import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import ModalCard from './UI/Modal';

const Navb = () => {
  return (
    <Navbar className='sticky-top' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Container>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/home">Store</NavLink>
        <NavLink to="/about">About</NavLink>
        </Container>
      
      <Container style={{color:'white'}}>
      <Button variant="primary">
      <ModalCard  />
        </Button>
        {1}
      </Container>
      </Container>
    </Navbar>
  )
}

export default Navb