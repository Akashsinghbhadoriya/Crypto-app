import './App.css';
import React from 'react';
import Crypto from './Crypto';
import Exchange from './exchange';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={page:'homepage'};
  }

  handleClick(e){
    if(e==='crypto'){
      this.setState({page:'crypto'});
    }
    else if(e==='exchangerate'){
      this.setState({page:'exchangerate'});
    }
  }
  render(){
    if(this.state.page==='homepage')
    {
      return (
        <div className='home-page'>
          <h1>Welcome to Crypto World!!!</h1>
          <div className='link-page'>
            <button value='crypto' onClick={()=>this.handleClick('crypto')}> Cryptocurrencies</button>
            <button value='exchangerate' onClick={()=>this.handleClick('exchangerate')}>Exchange Rates</button>
          </div>
        </div>
      );
    }
    else if(this.state.page==='crypto')
    {
      return(<Crypto></Crypto>)
    }
    else if(this.state.page==='exchangerate')
    {
      return(<Exchange></Exchange>)
    }
  }
}

export default App;
