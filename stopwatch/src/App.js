import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer = null;

    if (isRunning){
      timer = setInterval(() => {
        setTime(time+1)
      }, 10);
    }
    return () => {
      clearInterval(timer);
    }

  }, [isRunning, time]);

  const hours = Math.floor(time/360000);

  const minutes = Math.floor((time % 360000)/60000);

  const seconds = Math.floor((time % 6000)/100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  function startAndStop(){
    setIsRunning(!isRunning);
  }

  function reset(){
    setTime(0);
    setIsRunning(!isRunning);
  }

  return (
    <div>
      <p>{hours}:{minutes.toString().padStart(2, '0')}:
      {seconds.toString().padStart(2, '0')}:
      {milliseconds.toString().padStart(2, '0')}</p>
      <div>
        <button onClick={startAndStop}>{isRunning ? "Stop" : "Start"}</button>
        {' '}
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Stopwatch/>
    </div>
  );
}

export default App;
