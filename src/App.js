import './App.css';
import React, { Component } from 'react';
import Crypto from './Pages/crypto/Crypto';
import Exchange from './Pages/exchange/exchange';
import Home from "./Pages/home/Home";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';


class App extends Component{
  render(){
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/crypto' element={<Crypto></Crypto>}></Route>
          <Route path='/exchange' element={<Exchange></Exchange>}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
