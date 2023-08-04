import './styles.css';
import {useState, useEffect} from 'react';

const totalCount = 3;
const ProgressBar = ({isEmpty, onCompleted}) => {
  // console.log("===> here", props);
  // const bar = props;
  const [transition, setTransition] = useState(false);
  // Start transition when the bar is no longer empty.
  useEffect(() => {
    if (isEmpty || transition) {
      return;
    }

    setTransition(true);
  }, [isEmpty]);  
  
return (
   <div className="bar-container">
    {transition ? (<div className={'fill-bar bar-contents--filled'}         onTransitionEnd={() => {
          onCompleted();
        }} />) : <div className={'fill-bar'}/>}
    </div>)
}

export default function App() {
  const [barCount, setBarCount] = useState(0);
  const [numFilledUpBars, setNumFilledUpBars] = useState(0);

  function addNewProgressBar() {
    // if (numFilledUpBars < 3){
      setBarCount((prev) => prev + 1);
    // }
    setNumFilledUpBars((num) => num + 1);
    console.log("====", barCount, numFilledUpBars);
  }
  return (
    <div className="container">
      <button onClick={addNewProgressBar}>Add</button>
      <div className="bars">
        { barCount > 0 ? Array(barCount).fill(null).map((_, idx) => {
          return <ProgressBar
              isEmpty={
                idx >= numFilledUpBars + 3
              }
            key={idx}
            onCompleted = {(() => {setNumFilledUpBars((prev) => prev+1)})}
          />
        }): '' }
      </div>
    </div>
  );
}
