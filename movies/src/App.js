import logo from './logo.svg';
import './App.css';

import react, { useState, useEffect } from 'react';


function App() {

  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const endpoint = 'https://dummyjson.com/products';
    const res = await fetch(endpoint
      // {
      // method: 'get',
      // headers: {
      //   'content-type': 'text/csv; charset=UTF-8',
      // }
      // }
    ).then((response) => {
      // return convertCSV(response.text());
      return response.json();
    });
    console.log("====> res: ", res);
    await setList(res);
    console.log("====> list: ",list.products);
  }

  const convertCSV = (csv) => {
    const lines = csv.split('\n');
    const headers = lines[0].split(',');

    const res = [];

    for (let i=1; i<lines.length;i++){
      if (!lines[i]) continue;
      const obj = {};
      const currLine = lines[i].split(',');

      for (let j=0; j<currLine.length; j++){
        obj[headers[j]] = currLine[j];
      }
      res.push(obj);
    }

    return res;
  }

  // {list.map((item) => {
  //   return (
  //     <li key={item.id}>{}</li>
  //   )
  // })}  

  return (
    <div className="App">
      <ul>
      {list.products.map((item) => {
        return (
          <li key={item.id}>{}</li>
        )
      })}
      </ul>
    </div>
  );
}

export default App;
