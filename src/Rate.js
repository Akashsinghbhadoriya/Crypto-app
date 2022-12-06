import React from 'react';
import './rate.css';

const Rate = ({name,unit,value,type}) => {
  return (
    <div className='rate-container'>
        <div className='rate-row'>
            <div className='rate-data'>
              <h1>{name}</h1>
              <p className='rate-unit'>{unit}</p>
              <p className='rate-value'>{value}</p>
              <p className='rate-type'>{type}</p>
            </div>
        </div>
    </div>
  )
}

export default Rate