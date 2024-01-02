import './App.css';
import Autocomplete from './Autocomplete.js';
import {useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState([]);

  const fetchData = async() => {
    await fetch('/data.json')
    .then((res) => res.json())
    .then((response) => setData(response))
    .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
}, []);
  
  return (
    <div className="App">
      <Autocomplete data={data}/>
    </div>
  );
}

export default App;
