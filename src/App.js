

// import React from 'react';
import './App.css';
import Navb from './components/Navbar';
import HomeWrapper from './components/HomeWrapper';
import CartProvider from './store/CartProvider';
import { Route } from 'react-router-dom';
import Header from './components/Home/Header';
import Footer from './components/Home/Footer';
import About from './components/About/About';

function App() {
  return (
    <CartProvider>
       <Navb />
     <Header />
       <main>
        <Route path='/home'>
           <HomeWrapper />
        </Route>
        <Route path='/about'>
          <About />
        </Route>

       </main>
       
     <Footer />
    </CartProvider>
  );
}

export default App;
