import React, { useState } from 'react';

type SquareValue = 'X' | 'O' | null;

const TicTacToe: React.FC = () => {
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);

  const winner = calculateWinner(squares);

  function handleClick(index: number): void {
    const squaresCopy = [...squares];
    if (squaresCopy[index] || winner) return;
    squaresCopy[index] = isXNext ? 'X' : 'O';
    setSquares(squaresCopy);
    setIsXNext(!isXNext);
  }

  function calculateWinner(squares: SquareValue[]): SquareValue {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] 
        && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div style={{ maxWidth: '200px' }}>
      <div style={{ clear: 'both' }}>
        {squares.map((square, index) => (
          <button 
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: '60px',
              height: '60px',
              float: 'left',
              margin: '1px',
              fontSize: '24px'
            }}
          >
            {square}
          </button>
        ))}
      </div>
      <div style={{ clear: 'both', marginTop: '20px' }}>
        {winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? 'X' : 'O'}`}
      </div>
    </div>
  );
};

export default TicTacToe;