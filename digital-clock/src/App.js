import {useState, useEffect} from 'react';
import Clock from './Clock';

import './styles.css';

export default function App() {
  const [time, setTime] = useState('');
  
  useEffect(() => {
    const timer = setInterval(() => {
      getCurentTime();
    }, 100);

    return () => {
      window.clearInterval(timer);
    };    
  }, [time]);
  

  function getCurentTime(){
    let dt = new Date();
    let tm = [padTo2Digits(dt.getHours()),
               padTo2Digits(dt.getMinutes()),
               padTo2Digits(dt.getSeconds())].join(':');
    setTime(tm);
  }

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }  
  return <Clock currTime={time}></Clock>;
}
