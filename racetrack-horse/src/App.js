import React, { useState } from "react";

const RaceTrack = ({ id, horse }) => {
  const [position, setPosition] = useState(0);

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    setPosition(position + randomNumber);
  };

  return (
    <div id={id}>
      <h1>Race Track {id}</h1>
      <h2>Horse: {horse}</h2>
      <div>
        {Array(position).fill("-")}
        <h3>{horse}</h3>
      </div>
      <button onClick={handleClick}>Move Horse</button>
    </div>
  );
};

const App = () => {
  const [winner, setWinner] = useState("");
  const [horses, setHorses] = useState(["Horse 1", "Horse 2", "Horse 3"]);

  const handleClick = () => {
    const randomHorse = Math.floor(Math.random() * horses.length);
    const randomNumber = Math.floor(Math.random() * 10);

    const horse = horses[randomHorse];
    const raceTrackId = randomHorse + 1;

    setHorses(horses.map((h) => (h === horse ? `${h} ${randomNumber}` : h)));

    if (randomNumber === 10) {
      setWinner(horse);
    }
  };

  return (
    <div>
      <h1>Horse Race</h1>
      <RaceTrack id="1" horse={horses[0]} />
      <RaceTrack id="2" horse={horses[1]} />
      <RaceTrack id="3" horse={horses[2]} />
      <button onClick={handleClick}>Start Race</button>
      <h2>Winner: {winner}</h2>
    </div>
  );
};

export default App;



// ChatGpt solution
import React, { useState, useEffect } from 'react';
import './App.css';

const App2 = () => {
  const [tracks, setTracks] = useState([
    { id: 1, position: 0 },
    { id: 2, position: 0 },
    { id: 3, position: 0 }
  ]);
  const endPosition = 10;

  const moveHorse = (trackId) => {
    const updatedTracks = tracks.map(track => {
      if (track.id === trackId) {
        return { ...track, position: track.position + 1 };
      }
      return track;
    });
    setTracks(updatedTracks);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomTrackId = Math.floor(Math.random() * 3) + 1;
      moveHorse(randomTrackId);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const renderTrack = (track) => {
    const dashes = Array.from({ length: endPosition }, (_, index) => (
      <span key={index} className={track.position >= index ? 'active' : ''}>-</span>
    ));

    return (
      <div key={track.id} className="track">
        <span className="horse">H</span>
        {dashes}
        {track.position >= endPosition && <span className="winner">Winner!</span>}
      </div>
    );
  };

  return (
    <div className="App">
      {tracks.map(renderTrack)}
    </div>
  );
};

export default App2;
