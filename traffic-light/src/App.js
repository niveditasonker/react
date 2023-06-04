import TrafficLight from './TrafficLight';

import './styles.css';

const config = {
  red: {
    duration: 4000,
    next: 'green'
  },
  yellow: {
    duration: 500,
    next: 'red'
  },
  green: {
    duration: 3000,
    next: 'yellow'
  }    
};

export default function App() {
  return <TrafficLight config={config} firstColor='red' />;
}
