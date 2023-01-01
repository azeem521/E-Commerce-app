

import React from 'react';
import './App.css';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Navb from './components/Navbar';
import SeeCard from './components/SeeCard';

function App() {
  return (
    <>
     <Navb />
     <Header />
     <Main />
     <Cards />
     <SeeCard />
     <Footer />
    </>
  );
}

export default App;
