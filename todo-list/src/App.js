import { useState }  from 'react';

import './styles.css';

let id=0;
const givenTasks = [
  {id: id++, task: 'Walk the dog'},
  {id: id++, task: 'Water the plants'},
  {id: id++, task: 'Wash the dishes'},
];

function ListItem( {id, task, cb} ) {
  return (
    <li key={id}>
            <span>{task}</span>
            <button onClick={() => cb(id)}> Delete </button>
    </li>);
}

export default function App() {

  const [tasks, setTasks] = useState(givenTasks);
  console.log(tasks);
  const [inputText, setInputText] = useState('');

  function handleSubmit() {
    const newTasks = [...tasks];
    newTasks.push({id: id++, task: inputText});
    setTasks(newTasks);
    setInputText('');
  }

  function addTask(event) {
    // console.log(event.target.value);
    setInputText(event.target.value);
  }

  function deleteTask(id) {
    // console.log(id);
    const newSetofTasks = tasks.filter((task) => task.id !== id);
    setTasks(newSetofTasks);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" placeholder="Add your task" id="inputTask" value={inputText} onChange={addTask}/>
        <div>
          <button id="submitButton" value="" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      <ul>
        {tasks.map(({id, task}) => {
          return <ListItem key={id} id={id} task={task} deleteCallback={deleteTask}></ListItem>
        })}
      </ul>
    </div>
  );
}
