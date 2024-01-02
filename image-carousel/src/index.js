/*

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

*/
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { getDogs } from "./dogapi";
import ImageCarousel from "./ImageCarousel";
import "./styles.css";

// TODO replace with your slideshow App
const App = () => {
  const [images, setImages] = useState([]);
  // <section>
  //   <h1>Getting Started</h1>
  //   <p>Hey there! Welcome to DoorDash's frontend interview!</p>
  //   <p>
  //     The purpose of this exercise is for you to build a slideshow that displays
  //     the top N images returned from Reddit's /r/dogswithjobs subreddit!
  //   </p>
  //   <p>
  //     The goal here is not to purely demonstrate your coding ability, we're here
  //     to give you a problem that's not totally spec'd out for you, and we want
  //     to see how far you can go.
  //   </p>
  //   <ul>
  //     <li>How good can you make it without much guidance?</li>
  //     <li>
  //       What are the sort of improvements and choices you'll make as you build
  //       this, and where do your priorities lie?
  //     </li>
  //   </ul>
  //   <p>
  //     In the interest of time, we are providing the basic functionality for
  //     fetching the images from the reddit channel, check the
  //     <i> dogapi.js </i>
  //     file for more details.
  //   </p>
  //   <p>
  //     Remember, building stuff is supposed to be fun, so be creative! Happy
  //     coding!
  //   </p>
  // </section>

  const fetchImages = async () => {
    // console.log("===> calling fetchImages");
    const res = await getDogs();
    console.log("===> res:", res);
    await setImages(res);
  };

  useEffect(() => {
    console.log("===> calling fetchImages");
    fetchImages();
  }, []);

  return (
    <div>
      <ImageCarousel images={images} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
