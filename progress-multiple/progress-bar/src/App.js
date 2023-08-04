import logo from './logo.svg';
import './App.css';
import './styles.css';
import {useState, useEffect} from 'react';

export default function ProgressBar({ value = 10 }) {
  const[progress, setProgress] =useState(0);

  useEffect(() => {
    setProgress(value > 100 ? 100 : value < 0 ? 0 : value);
  }, [value]);

  const handleDecrement = () => {
    setProgress((prevProgress)=> {
      const nextProgress = prevProgress - 1;
      return nextProgress > 100 ? 100 : nextProgress;
    });
  }
  const handleIncrement = () => {
    setProgress((prevProgress)=> {
      const nextProgress = prevProgress + 1;
      return nextProgress < 0 ? 10 : nextProgress;
    });
  }  

  return (
    <div className="progress-container">
        <div className="progress-bar" style={{width:`${progress}%`}}> </div>
        <div className='progress-value'>{progress}</div>
        <button
          id="buttonMinus"
          onClick={handleDecrement}
          disabled={progress <= 0}> - 
        </button>

        <button
          id="buttonMinus"
          onClick={handleIncrement}
          disabled={progress >= 100}> +
        </button>
      </div>
  );
}
