import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'

function App() {
  const defaultNum = ["(", 0, 1, 2, ")", " ", 3, 4, 5, "-", 6, 7, 8, 9];
  const[phoneNumber, setphoneNumber] = useState('');

  function formatNumber(event) {
    let num = event.target.value.replace(/\D/g,'');

    if (typeof num !== Number){
      setphoneNumber(defaultNum);
      return;
    }

    if (num.length > 10){
      num = num.slice(0,10);
    }

    if (num.length > 6){
      num = `${num.slice(0,6)}-${num.slice(6)}`
    }    

    if (num.length > 3){
      num = `(${num.slice(0,3)})${num.slice(3)}`
    }

    setphoneNumber(num);
  }


  return (
    <div className="App">
      <header className="App-header">
      </header>
      <label htmlFor='phone-number'></label>
      <input data-testid="phone-number-input" value={phoneNumber} onChange={formatNumber}/>
    </div>
  );
}

export default App;
