import "./styles.css";
import { useState } from "react";

/*
 * Component to indicate which image is in focus and allow play-pause of timer
 */
const CarouselSlider = ({ len, current, pauseLoop, setActiveImg }) => {
  const [isPaused, setIsPaused] = useState(false);

  /*
  * Helper method to get carousel indicators
  */
  const getElements = (len) => {
    let elements = [];
    for (let i = 0; i < len; i++) {
      const addActiveClass = i === current ? "active" : "";
      elements.push(
        <div key={i}>
          <span
            className={`dots-number ${addActiveClass}`}
            onClick={(evt) => setActiveImg(evt, i)}
          >
            {`0${i + 1} `}
          </span>
          <span key={i} className={`dots ${addActiveClass}`}></span>
        </div>
      );
    }
    return elements;
  };

  /*
  * Toggle play-pause icon
  */
  const togglePlayPause = () => {
    // Toggle the state
    const updatedIsPaused = !isPaused;
    setIsPaused(updatedIsPaused);
  
    // Pass the updated value of isPaused to pauseLoop
    pauseLoop(updatedIsPaused);
  };  

  return (
    <div className="carousel-slider">
      {getElements(len)}
      <img
        className="play-pause"
        src={
          isPaused ? "../icons/button-play.png" : "../icons/button-pause.png"
        }
        onClick={togglePlayPause}
      ></img>
    </div>
  );
};

export default CarouselSlider;
