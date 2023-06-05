import { useState, useEffect } from 'react';
// import { StyledSlider } from "./SlideImage";

// import {
//   FaChevronRight,
//   FaChevronLeft,
// } from "react-icons/fa";

const CaraouseTray = ({photos}) => {
    const [current, setCurrent] = useState(0);
    const photosLength = photos.length;

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 1000,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     className: "slides",
    //   };

      const carouselScroll = () => {
        if (current === photosLength - 1 ) {
            setCurrent(0);
        }
        setCurrent(current+1);
      }

      useEffect(() => {
        const interval = setTimeout(() => {
            carouselScroll();
        }, 3000);

        return () => clearTimeout(interval);
      }, [current]);

    const previousSlide = () => {
        setCurrent(current == 0 ? photosLength - 1 :current - 1);
    }

    const nextSlide = () => {
        setCurrent(current == photosLength - 1 ? 0 : current + 1);
    }

    return (
        <div className='caraousel-container'>
            {/* <button
                className="left-arrow"
                onClick={previousSlide}>Prev
            </button> 
            <button
                className="right-arrow"
                onClick={nextSlide}> Next
            </button> */}

            {photos.map((pic, idx) => {
                return(<div key={pic.id} className='carousel-item'>
                        {idx===current && (
                            <img src={pic.url} alt={pic.title}></img>
                        )}
                </div>)
            })}
        </div>
    );

}

export default CaraouseTray;