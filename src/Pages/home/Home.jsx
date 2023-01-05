import React from 'react'
import "./home.css";
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className='home-page'>
        <h1>Welcome to Crypto World!!!</h1>
        <div className='link-page'>
        <Link to="/crypto" style={{textDecoration:"none"}}><button className='linkButton'>Cryptocurrencies</button></Link>
        <Link to="/exchange" style={{textDecoration:"none"}}><button className='linkButton'>Exchange Rates</button></Link>
        </div>
    </div>
  )
}

export default Home