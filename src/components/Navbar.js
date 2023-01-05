import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import ModalCard from './UI/Modal';
import './Navbar.css'

const Navb = () => {
  return (
    <Navbar className='sticky-top' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Container>
        <div className='link-container'>
        <NavLink className='navLinks' to="/">Home</NavLink>
        <NavLink className='navLinks' to="/store">Store</NavLink>
        <NavLink className='navLinks' to="/about">About</NavLink>
        <NavLink className='navLinks' to="/contact">Contact Us</NavLink>
        </div>
       
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