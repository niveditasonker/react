import './App.css';
import React, {useState, useEffect} from 'react';
import { fetchData } from './data';
import Tree from './Tree';

function App() {
  const [treeData, setData] = useState([]);

  const fetchFileStructure = async() => {
    const res = await fetchData();
    setData(res);
  }

  useEffect(() => {
    fetchFileStructure();
  }, []);

  return (
    <div className="App">
      {treeData.map((node) => (
        <Tree key={node.id} node={node} />
      ))}
    </div>
  );
}

export default App;
