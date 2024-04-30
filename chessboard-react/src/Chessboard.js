import { useEffect, useState } from 'react';
import './chessboard.css';

const Chessboard = () => {
    const numRows = 8;
    const numCols = 8;

    const [board, setBoard] = useState([]);
    const [currMove, setCurrMove] = useState(null);

    useEffect(() => {
        const resBoard = [];
        resBoard.push(['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']);
        resBoard.push(['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P']);

        for (let i=2; i<numRows-2; i++){
            const row = Array.from({ length:numCols });
            resBoard.push(row);
        }

        resBoard.push(['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p']);
        resBoard.push(['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']);

        setBoard(resBoard);
    }, []);

    const selectPiece = (row, col, piece) => {
        console.log('here', row, col, piece);

        if (currMove !== null) {
            const tmpBoard = [...board];
            tmpBoard[row][col] = currMove.piece;
            tmpBoard[currMove.row][currMove.col] = undefined;

            setCurrMove(null);
            setBoard(tmpBoard);
            return;
        }

        if (piece !== undefined){
            setCurrMove({row,col,piece});
            return;
        }
    }

    return (
        <>
            {board.length && board.map((row, rIdx) => {
                return(
                    <div className='row' key={rIdx}>
                        {row.map((piece, cIdx) => {
                            return (
                                <div
                                    data-testid={`box-${rIdx}-${cIdx}`}
                                    className={`box ${
                                    // If the sum of row index 
                                    // and column index is even 
                                    // then background will be 
                                    // black else white
                                    (rIdx + cIdx) % 2 === 0
                                        ? "black" : "white"
                                    }`}
                                    key={cIdx}
                                    onClick={() => {
                                        selectPiece(rIdx, cIdx, piece)}
                                    }
                                >
                                {piece ? piece : ''}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </>
    )
}

export default Chessboard;
