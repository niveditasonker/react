// import logo from './logo.svg';
import './Caraousel.css';
import Caraousel from './CaraouselTray.js';
import { useState, useEffect } from 'react';

const App =({}) => {
  let album = [];
  const [users, setUsers] = useState([]);
  const [imagesAlbum, setPhotos] = useState([]);

  useEffect(() => {
    fetchUserData();
    fetchPhotots();
  }, []);
  // website for fetch endpoint practice https://jsonplaceholder.typicode.com/
  const fetchUserData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      return response.json();
    }).then((data) => {
      // console.log(data);
      setUsers(data);
    })
  }

  const fetchPhotots = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => {
      return response.json();
    }).then(photos => {
      album = photos.slice(0,30);
      // console.log("=====>", album);

      setPhotos(album);
    }).catch((error) => {
      throw new Error(error);
    })
  }

  return (
    <div className="App">
      <div>
      <table>
        <thead>
        <tr>
          <th>Sr No.</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
      {users.length && users.map(u => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.email}</td>
          </tr>))}
          </tbody>
      </table>
      </div>
        <br/><br/><br/><br/><br/><br/>
      <div> <Caraousel photos={imagesAlbum}></Caraousel>
      </div>
    </div>
  );
}

export default App;
