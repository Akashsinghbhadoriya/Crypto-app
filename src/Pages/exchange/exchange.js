import React, { useEffect,useState } from 'react'
import axios from 'axios';
import Rate from '../../components/rate/Rate'

const Exchange = () => {

  const [rates, setRates]=useState([]);

  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/exchange_rates').then(res=>{
    const array=[];
    Object.keys(res.data.rates).forEach((key)=>{
      array.push({
        id:key,
        about: res.data.rates[key]
      })
    });
    console.log(array); 
    setRates(array);
    }).catch(error=>{
      console.log(error);
    })
  })

  const display=rates.map(rate=>{
    return(
      <Rate 
      key={rate.id} 
      name={rate.about.name}
      unit={rate.about.unit}
      value={rate.about.value}
      type={rate.about.type}
      ></Rate>
    )
  });
  
  return (
    <div className="coin-app">
      <p>Exchange Rates are given in crypto unit</p>
      {display}
    </div>
  )
}

export default Exchange