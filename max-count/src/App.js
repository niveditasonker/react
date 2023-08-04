/*
Implement a button and timmer that will start from 10 and ends at 0.
and tracks the counter untill the timer expires and button should
disapper once timer expires.
*/
import './App.css';
import React, { useState, useEffect } from 'react';

// Create a button, maintain state to track its timer
// create a counter, incrment counter while the timer runs
// Hide button once the time is at 0;

function App() {
  const [timer, setTimer] = useState(10);
  const [timerIsRunning, setTimerIsRunning] = useState(true);
  const [count, setCount] = useState(0);

  let intervalId;

  const clear = () => window.clearInterval(intervalId);

  useEffect(() => {
    intervalId = setInterval(() => {
      setTimer((time) => {
        return time > 0 ? time - 1 : 0;
      });
    }, 1000);

    return clear;
  }, []);

  useEffect(() => {
    if(timer === 0){
      clear();
      setTimerIsRunning(!timerIsRunning);
    }
  }, [timer]);

  const handleClick = () => {
    setCount((prev) => prev+1);
  }

  // {timer === 0 ? '' : <button onClick={handleClick}>+</button>};

  return (
    <div className="App">
      <div className="timer-conatiner">
        <span>{'No of clicks until timer expires'}</span>
        <br></br>
        <br></br>
        <span>{count}</span>
        <br></br>
        <br></br>
        <span>{`Time left: ${timer} seconds`}</span>
        <br></br>
        <br></br>

        <button disabled = {!timerIsRunning} onClick={handleClick}>+</button>
      </div>
    </div>
  );
}

export default App;
