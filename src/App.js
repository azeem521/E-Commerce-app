

import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Items from './components/Items';
import Main from './components/Main';
import Navb from './components/Navbar';
import SeeCard from './components/SeeCard';
import CartProvider from './store/CartProvider';

function App() {
  return (
    <CartProvider>
     <Navb />
     <Header />
     <Main />
     <Items />
     <SeeCard />
     <Footer />
    </CartProvider>
  );
}

export default App;
