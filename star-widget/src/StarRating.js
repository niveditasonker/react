import React, {useState} from 'react';
import './App.css';

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className='star-rating'>
            {[...Array(5)].map((item, idx) => {
                idx += 1;
                return (
                    <button
                        type="button"
                        key={idx}
                        onClick={() => setRating(idx)}
                        // className={idx <= rating ? "on" : "off"} just click
                        className={idx <= (hover || rating) ? "on" : "off"}
                        onMouseEnter={() => setHover(idx)}
                        onMouseLeave={() => setHover(rating)}
                    >
                    <span className='star'>&#9733;</span>
                    </button>
                    
                )
            })}
        </div>
    )

}

export default StarRating;