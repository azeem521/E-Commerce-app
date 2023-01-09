import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useHistory } from 'react-router-dom';
import ModalCard from './UI/Modal';
import './Navbar.css'
import cartContext from '../store/cart-context';
import Autherizarion from './Autherizarion';
import AuthContext from './AuthContext/Auth-context';
// import Button from 'react-bootstrap/esm/Button';

const Navb = () => {

  const ctx=useContext(cartContext);

  const totalItem=ctx.item.length;

  
  const authCtx=useContext(AuthContext);
  const history=useHistory();

  const isLoggedIn=authCtx.isLoggedIn;

  const logOutHandler=()=>{
   authCtx.logout();
   history.replace('/')

  }

 

  return (
    <Navbar className='sticky-top' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Container>
        <div className='link-container'>
        <NavLink className='navLinks' to="/">Home</NavLink>
        <NavLink className='navLinks' to="/home">Store</NavLink>
        <NavLink className='navLinks' to="/about">About</NavLink>
        <NavLink className='navLinks' to="/contact">Contact Us</NavLink>
        {!isLoggedIn && (<li>
          <NavLink className='navLinks' to='/auth'>Login</NavLink>
        </li>)}
        {isLoggedIn && (<li>
            <Button onClick={logOutHandler}>Logout</Button>
          </li>)}
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