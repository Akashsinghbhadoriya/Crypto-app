import React from 'react'
import "./home.css";
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className='home-page'>
        <h1>Welcome to Crypto World!!!</h1>
        <div className='link-page'>
        <Link to="/Crypto-app/crypto" style={{textDecoration:"none"}}><button className='linkButton'>Cryptocurrencies</button></Link>
        <Link to="/Crypto-app/exchange" style={{textDecoration:"none"}}><button className='linkButton'>Exchange Rates</button></Link>
        </div>
    </div>
  )
}

export default Home