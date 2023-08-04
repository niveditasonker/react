import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from 'react';

function App() {
  const [news, setNews] = useState({});
  const [ids, setIds] = useState([]);

  const newsObj = {};

  useEffect(() => {
    callStack();
  }, []);

  /*
  const fetchStory = async (id) => {
    try {
      const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
      return story;
    } catch (error) {
      console.log('Error while getting a story.');
    }
  };
*/

  function callStack(){
    fetchNewsData();
    getStory();
  }
  
  async function fetchStory(id){
    try{
      const endpoint = `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      const result = await fetch(endpoint)
      .then((res) => res.json())
      .then((data) => data);
      return result;
    }catch(err){
      console.log(err);
    }

  }

  const getStory = async() => {
    const res = await Promise.all(
      ids.map(async(id) => {
        const story = fetchStory(id);
        return story;
      })
    );

    setNews({...res});
  }

  async function fetchNewsData() {
    await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then((res) => res.json())
    .then(async(data) => {
      const arr = [...data].slice(0,30);
      await setIds(arr);
    });

    console.log(ids);
  }



async function getStory2(){
  ids.map(async(id) => {
    const endpoint = `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    await fetch(endpoint)
    .then((res) => res.json())
    .then(async (data) => {
      newsObj[id] = data;
      await setNews({...newsObj});
      ;
    });
  });

    // Object.keys(news).map((k) => {
    // console.log(`k: ${k}, id ${news[k].id}, title: ${news[k].title}, by: ${news[k].by}`);
    // });
}

  return (
    <div className="App">
      <h2>Hacker Rank News</h2>
      <ol>
        {Object.keys(news).map((k) => {
          return (
            <li key={k}>
              <span style={{fontWeight:'bold'}}>{`Author: `}</span>
              <span>{news[k].by}</span>
              <span style={{fontWeight:'bold'}}>{`Title: `}</span>
              <span>{news[k].title}</span>
            </li>
          )
        })}
      </ol>
    </div>
  );
}

export default App;
