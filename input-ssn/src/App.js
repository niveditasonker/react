import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'

function App() {
  const [ssn, setSsn] = useState('123456789'.split(''));
  // console.log(ssn);

  function handleInput(event, idx){
    const newVal = [...ssn];
    newVal[idx] = event.target.value;
    setSsn(newVal);
    console.log(ssn);
  }

  return (
    <div className="App">
      {ssn.map((s, idx) => {
        return (<input key={idx} type='text' value={s} onChange={(event) => handleInput(event, idx)}></input>)
      })}
    </div>
  );
}

export default App;
