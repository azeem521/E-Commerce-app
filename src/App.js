// import React from 'react';
import "./App.css";
import Navb from "./components/Navbar";
import HomeWrapper from "./components/HomeWrapper";
import CartProvider from "./store/CartProvider";
import { Route } from "react-router-dom";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";
import About from "./components/About/About";
import Store from "./components/store/Store";
import ContactUs from "./components/contactUs/ContactUs";
import Autherizarion from "./components/Autherizarion";

function App() {
  return (
    <CartProvider>
      <Navb />
      <Header />
      <main>
        <Route path="/" exact>
          <HomeWrapper />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/store" exact>
          <Store />
        </Route>

        <Route path="/contact" exact>
          <ContactUs />
        </Route>
        <Route path='/auth' exact>
        <Autherizarion />
        </Route>
      </main>

      <Footer />
    </CartProvider>
  );
}

export default App;
