import React, { useState } from 'react';
import './App.css';

const initialBoard = [
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
];

const ChessBoardUi = () => {
  const [board, setBoard] = useState(initialBoard);

  return (
    <div className="chessboard">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((piece, colIndex) => (
            <div key={`${rowIndex}-${colIndex}`} className="square">
              {piece}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChessBoardUi;
