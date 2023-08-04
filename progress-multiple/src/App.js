import logo from './logo.svg';
import './App.css';
import ProgressBar from './ProgressBar.js';

function App() {
  const colorData = [
    { bgColor: '#6a1b9a', completed: 60 },
    { bgColor: '#00695c', completed: 30 },
    { bgColor: '#ef6c00', completed: 90 },
  ]

  return (
    <div className="App">
      {colorData.map((data, idx) => (
        <ProgressBar key={idx} bgColor={data.bgColor} completed={data.completed}></ProgressBar>
      ))}
      
    </div>
  );
}

export default App;
