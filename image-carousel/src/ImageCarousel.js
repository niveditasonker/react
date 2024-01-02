import React, { useState } from "react";
import "./styles.css";

const ImageCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="images">
      {images.map((currImg, idx) => {
        return idx === current ? (
          <div>
            <img src={currImg.url} alt={currImg.title}></img>
            <span className="image-title">{currImg.title}</span>
          </div>
        ) : (
          ""
        );
      })}

      <button type="submit" className="prev-button" onClick={handlePrev}>
        {"<"}
      </button>
      <button type="submit" className="next-button" onClick={handleNext}>
        {">"}
      </button>
    </div>
  );
};

export default ImageCarousel;
