import React, { useEffect, useState } from 'react'
import './App.css'

/**
 * Movie Search Page
 * 
 * We would like you to build a simple movie search page with an input field to enter the search query and then list out all movies from the search API
 * 
 * Search API: https://tubi-mock-movies.herokuapp.com/search/${YOUR_SEARCH_QUERY}
 * 
 * Example:
 * 1. If you want to search for "bad" then the query is https://tubi-mock-movies.herokuapp.com/search/bad
 * 2. If you want to search for letter "a" then the query is 
 * https://tubi-mock-movies.herokuapp.com/search/a
 * 
 *
 * Requirements
 * 1. Use the endpoint to retrieve the list of movies and display the movies below the input field
 * 2. Performance is very important and please think about optimizations while you code. Get to the solution first if needed and then focus on optimizations. 
 * 
 */

function App() {
  let timer;
  const [listOfMovies, setListOfMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  
  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    console.log("called fetch movies");
    const endpoint = `https://tubi-mock-movies.herokuapp.com/search/${searchInput}`;
    // console.log("====> enpoint", endpoint);
    await fetch(endpoint)
    .then(data => data.json())
    .then(movies => {
      // console.log(movies);
      setListOfMovies(movies);
      // console.log("====>", listOfMovies[0]);
    });

  }

  function debounce(fn, delay){

    return(...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {

        console.log("invoking fetch movies");
        fn(...args);
        // timer = null;
      }, delay);
    }
  }

  function handleInput(event) {
    const userInput = event.target.value;
    console.log(`userInp: ${userInput}`);
    if (userInput.length >= 2) {
      setSearchInput(event.target.value);
      console.log("calling fetch movies");
      const func = debounce(fetchMovies, 100);
      func();
      
    }
  }

  return (
    <div className="app">
      <input type="text" alt="Search any movie" placeholder="Search for any movie here...." onChange={handleInput}/>

      <ul>
        {listOfMovies.map((item, idx) => {
          // console.log(item, listOfMovies[item]);
          return (<li key={item.id}>{item.title}</li>);
        })}
      </ul>

    </div>
  )
}

export default App
