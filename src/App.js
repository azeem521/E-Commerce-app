// import React from 'react';
import "./App.css";
import Navb from "./components/Navbar";
import HomeWrapper from "./components/HomeWrapper";
import CartProvider from "./store/CartProvider";
import { Redirect, Route } from "react-router-dom";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";
import About from "./components/About/About";
import Store from "./components/store/Store";
import ContactUs from "./components/contactUs/ContactUs";
import Autherizarion from "./components/Autherizarion";
import { useContext } from "react";
import AuthContext from "./components/AuthContext/Auth-context";


function App() {
  const authCtx=useContext(AuthContext)


  return (
    <CartProvider>
      <Navb />
      <Header />
      <main>
        {authCtx.isLoggedIn && <Route path="/home" exact>
          <HomeWrapper />
        </Route>}
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/" exact>
          <Store />
        </Route>

        {authCtx.isLoggedIn && (<Route path="/contact" exact>
          <ContactUs />
        </Route>)}
       {!authCtx.isLoggedIn && < Route path='/auth' exact>
        <Autherizarion />
        </Route>}

        {!authCtx.isLoggedIn && (<Route path="/contact" exact>
        <Redirect to='/auth'/>
        </Route>)}

        {!authCtx.isLoggedIn && <Route path="/home" exact>
        <Redirect to='/auth'/>
        </Route>}

        <Route path='*'>
          <Redirect to='/'/>
        </Route>
      </main>

      <Footer />
    </CartProvider>
  );
}

export default App;
