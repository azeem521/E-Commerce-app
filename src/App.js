

import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Items from './components/Items';
import Main from './components/Main';
import Navb from './components/Navbar';
import SeeCard from './components/SeeCard';

function App() {
  return (
    <>
     <Navb />
     <Header />
     <Main />
     <Items />
     <SeeCard />
     <Footer />
    </>
  );
}

export default App;
