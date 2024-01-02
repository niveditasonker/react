import './App.css';
import React, { useState, useEffect } from 'react';

const Task = ({ task }) => {
  return(
    <div className = 'task-class' key ={task.id}>
      <h2> {task.userId} </h2>
      <li
        className={task.completed ? 'text' : 'default'}
      >{task.todo}</li>
    </div>
  )
}

const Users = ({ data }) => {
  return (
    <>
      {data.map((task) => {
        return <Task key={task.id} task={task}/>
      })}
    </>
  );
}

function App() {
  const [data, setData] = useState([]);

  const fetchData = async() => {
    const res = await fetch('https://dummyjson.com/todos?limit=10&skip=70')
    .then((response) => response.json());

    setData(res);

    console.log(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {data.todos !== undefined ? 
        <Users data={data.todos} />
      : ''}
    </div>
  );
}

export default App;
