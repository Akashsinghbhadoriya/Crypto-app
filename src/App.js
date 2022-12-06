import './App.css';
import React, { Component } from 'react';
import Crypto from './Crypto';
import Exchange from './exchange';
import {BrowserRouter as Router,Link, Route, Routes } from 'react-router-dom';


class App extends Component{
  render(){
    return (
      <Router>
        <div className='home-page'>
        <h1>Welcome to Crypto World!!!</h1>
        <div className='link-page'>
          <button ><Link to="/crypto">Cryptocurrencies</Link></button>
          <button ><Link to="/exchange">Exchange Rates</Link></button>
        </div>
        <Routes>
          <Route path='/crypto' element={<Crypto></Crypto>}></Route>
          <Route path='/exchange' element={<Exchange></Exchange>}></Route>
        </Routes>
      </div>
      </Router>
    );
  }
}

export default App;
