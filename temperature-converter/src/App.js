import './styles.css';
import React, {useState} from 'react';

export default function App() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const convertToFah  = (event) => {
    if (isNaN(event.target.value)) return;

    const fahVal = ((event.target.value * 1.8) + 32).toFixed(4); 
    setFahrenheit(fahVal);
    setCelsius(event.target.value);
  }

  const convertToCelsius = (event) => {
    if (isNaN(event.target.value)) return;

    const celsiusVal = ((event.target.value - 32) * (5/9)).toFixed(4);
    setCelsius(celsiusVal);
    setFahrenheit(event.target.value);

  }  

  return (
    <div className="temp-converter">
      <label className="temp-column-bottom-row" for celsiusInput>Celsius</label>
      <input type="text" className="temp-celsius" onChange={convertToFah} value={celsius}/>
      <span> = </span>
      <br></br> <br></br>
      <label className="temp-column-bottom-row" for fahrenheitInput>Fahrenheit</label>
      <input type="text" className="temp-fah" onChange={convertToCelsius} value={fahrenheit}/>
    </div>
  );
}
