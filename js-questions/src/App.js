import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  let count = 0;
  // const container = document.getElementById('hello');

  useEffect(() => {
    const container = document.getElementById('hello');
    highlightText(container, 'text', 'green');
  }, []);

  const expensiveFn = () => {
    setTimeout(() => {
      console.log(`I have been typed ${count} times`);
      count++;
    }, 500);
  }

  const debounce = (cb, delay, immediate=false) => {
    let timer = null;

    // return function(...args){
    return(...args) => {
      let firstCall = immediate === true && !timer

      if (firstCall){
        // cb.call(this, ...args);
        cb(...args);
      }
      
      if (timer) {
        clearTimeout(timer);
      }
      
      timer = setTimeout(() => {
        if (!immediate) {
          cb(...args);
        }
        timer = null;
      }, delay);
    }
  }

  const handleDebounce = debounce(expensiveFn, 300, true);

  const highlightText = (element, wordlookup, bgColor) => {
    const exp = new RegExp(wordlookup, 'g');
    console.log(element, exp, wordlookup);

    element.innerHTML = element.innerHTML.replace(exp, (word) => {
      console.log(word);
      return `<span style={background-color: ${bgColor}}>${word}</span>`
    })
  }

  return (
    <div className="App">
      <input type="text" onKeyUp={handleDebounce}></input>

      <div id="hello">
          I have a text
          <p>Which has an anchor <a href='#'>that has a link</a></p>
          <p>And a sibling</p>
          Finally some random text
      </div>

      <div className="grid">
        <div className="item" style={{'block-size': '2em'}}></div>
        <div className="item" style={{'block-size': '3em'}}></div>
        <div className="item" style={{'block-size': '1.6em'}}></div>
        <div className="item" style={{'block-size': '4em'}}></div>
        <div className="item positioned" style={{'block-size': '2.2em'}}>positioned</div>
        <div className="item" style={{'block-size': '3em'}}></div>
        <div className="item" style={{'block-size': '4.5em'}}></div>
        <div className="item" style={{'block-size': '1em'}}></div>
        <div className="item" style={{'block-size': '3.5em'}}></div>
        <div className="item" style={{'block-size': '2.8em'}}></div>
      </div>
    </div>
  );
}

export default App;

// Leading trailing :
// https://dev.to/uttarasriya/js-polyfill-part-4-debounce-throttle-leading-trailing-options-3nn8
