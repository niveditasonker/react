// import './App.css';
import Chessboard from './Chessboard';
import ChessboardUi from './ChessBoardUi';

function App() {
  return (
    <div className="App">
      <h3> Chessboard </h3>
      <Chessboard />
      {/* <ChessboardUi /> */}
    </div>
  );
}

export default App;

// chess game: https://codepen.io/vim123/pen/WBZNez
// Move logic: https://basithkunimal.medium.com/building-a-chess-game-using-react-hooks-f5a045a2d769
// https://levelup.gitconnected.com/how-to-create-a-simple-chess-app-with-react-e18c0179b167