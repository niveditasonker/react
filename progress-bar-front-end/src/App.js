import './styles.css';
import {useState, useEffect} from 'react';

const ProgressBar = (props) => {
  // console.log("===> here", props);
  // const bar = props;
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    if (transition) return;

    setTransition(true);
    console.log("transition: ", transition);
  });
  
return (
   <div className="bar-container">
    {transition ? (<div className={'fill-bar bar-contents--filled'} />) : <div className={'fill-bar'}/>}
    </div>)
}

export default function App() {
  const [barCount, setBarCount] = useState(0);

  function addNewProgressBar() {
    setBarCount((prev) => prev + 1);
    console.log(barCount);
  }
  return (
    <div className="container">
      <button onClick={addNewProgressBar}>Add</button>
      <div className="bars">
        { barCount > 0 ? Array(barCount).fill(null).map((_, idx) => {
          return <ProgressBar key={idx}/>
        }): '' }
      </div>
    </div>
  );
}

/*
import ProgressBar from './ProgressBar';

import './styles.css';

export default function App() {
  const colorData = [
    {color: 'green', completed: 25},
    {color: 'yellow', completed: 45},
    {color: 'blueviolet', completed: 65},
    {color: 'pink', completed: 85},
  ];
  return (
    <div>
    {colorData.map((item, idx) => {
      return <ProgressBar key={idx} bgColor={item.color} completed={item.completed}/>
    })}
     
    </div>
  );
}

body {
  font-family: sans-serif;
}

.progress {
  background-color: rgb(233, 236, 239);
  border: 1px solid #c5c5c5;
  border-radius: 8px;
  height: 20px;
}

.bars {
  text-align: center;
}

*/
