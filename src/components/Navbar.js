import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import ModalCard from './UI/Modal';
import './Navbar.css'
import cartContext from '../store/cart-context';
import Autherizarion from './Autherizarion';

const Navb = () => {

  const ctx=useContext(cartContext);

  const totalItem=ctx.item.length;

  return (
    <Navbar className='sticky-top' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Container>
        <div className='link-container'>
        <NavLink className='navLinks' to="/">Home</NavLink>
        <NavLink className='navLinks' to="/store">Store</NavLink>
        <NavLink className='navLinks' to="/about">About</NavLink>
        <NavLink className='navLinks' to="/contact">Contact Us</NavLink>
        <NavLink className='navLinks' to="/auth">
        Login
        </NavLink>
        </div>
        </Container>
      <Container style={{color:'white'}}>
      <Button variant="primary">
      <ModalCard  />
        </Button>
        {totalItem}
      
      </Container>
      </Container>
    </Navbar>
  )
}

export default Navb