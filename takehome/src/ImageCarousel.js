import "./styles.css";
import { useRef, useState, useEffect } from "react";
import CarouselSlider from "./CarouselSlider";

/*
 * Component to handle the logic for rotation of images
 */
const ImageCarousel = ({ photos }) => {
  const [current, setCurrent] = useState(0);
  const photosLength = photos.length;
  const intervalRef = useRef(null);

  /*
  * Logic to keep rotating between the images
  */
  const carouselScroll = () => {
    setCurrent((prev) => prev === photosLength - 1 ? 0 : prev + 1);
  };

  const startAutoLoop = () => {
    const intervalId = setInterval(() => {
      carouselScroll();
    }, 4000);

    intervalRef.current = intervalId;
  };

  const stopAutoLoop = () => {
    clearInterval(intervalRef.current);
  };

  /*
  * Callback to toggle the carousel loop
  */
  const updateLoop = (isPaused) => {
    if (isPaused) {
      stopAutoLoop();
    } else {
      startAutoLoop();
    }
  };

  /*
  * Callback to update current image on click
  */
  const setActiveImage = async(event, id) => {
    setCurrent(id);
    stopAutoLoop();
  };

  useEffect(() => {
    startAutoLoop();

    return () => clearInterval(intervalRef.current);
  }, [current]);

  /*
  * Helper to get classNames of the images based on their position
  */
  const getClassName = (current, pic) => {
    const classes = [
      "carousel-item-active",
      "carousel-item-top",
      "carousel-item-bottom"
    ];

    const index = (3 + pic.id - current) % 3;
    return classes[index];
  };

  return (
    <>
      <div className="image-container">
        <div className="images">
          {photos.map((pic) => {
            return (
              <div key={pic.id} className={`${getClassName(current, pic)}`}>
                <img src={pic.url} alt={pic.title}></img>
              </div>
            );
          })}
        </div>
      </div>
      <CarouselSlider
        len={photosLength}
        current={current}
        pauseLoop={updateLoop}
        setActiveImg={setActiveImage}
      ></CarouselSlider>
    </>
  );
};

export default ImageCarousel;
