import {useState, useEffect} from 'react';

import './styles.css';

export default function TrafficLight({ config, firstColor }) {
  const [currentColor, setCurrentColor] = useState(firstColor);
  // const [isRedVisible, setRedVisibility] = useState(false);
  // const [isYellowVisible, setYellowVisibility] = useState(false);
  // const [isGreenVisible, setGreenVisibility] = useState(false);

  useEffect(() => {
    const currentConfig = config[currentColor];

    const timerId = setTimeout(() => {
      setCurrentColor(currentConfig.next);
    }, currentConfig.duration); 

    return () => {
      clearTimeout(timerId);
    };

  }, [currentColor]);

  return (
    <div className="container">
    {Object.keys(config).map((k) => {
      const bgColor = k === currentColor ? currentColor : undefined;
      return (<div className="signalClass" style={{backgroundColor:bgColor}}></div>) })
    }
    </div>
  );
}
