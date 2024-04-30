import { render, screen, fireEvent, userEvent } from '@testing-library/react';
import Chessboard from '../Chessboard';

const mockBoard = [
    ['R','B','C','D','E','F','G','H'],
    ['a','a','a','a','a','a','a','a'],
    [],
    [],
    [],
    [],
    ['b','b','b','b','b','b','b','b'],
    ['P','Q','R','S','T','U','V','W']
];

test("Board renders successfully", () => {
    render(<Chessboard board={mockBoard} movePiece={() => {}} />)
    expect(screen).toMatchSnapshot();
});


test("Check className of innermost div", () => {
    render(<Chessboard board={mockBoard} movePiece={() => {}} />)
    
    const firstInnerMostDiv = screen.getByTestId('box-0-0');

    expect(firstInnerMostDiv).toHaveClass('box black');
});

// test("if onClick updates the board state",  () => {
//     const movePieceSpy = jest.fn();
//     render(<Chessboard board={mockBoard} onClick={movePieceSpy} />);
  
//     // Assuming you want to test the click on the first box
//     const firstBox = screen.getByTestId('box-0-0');
//     firstBox.click();
  
//     // console.log(movePieceSpy);
//     expect(movePieceSpy).toHaveBeenCalledTimes(1);
//     // expect(movePieceSpy).toHaveBeenCalledWith(0, 0, mockBoard[0][0]);
// });

test('selectPiece updates board and currMove state', () => {
  render(<Chessboard board={mockBoard} onClick={()=>{}}/>);

  // Assuming you want to test the click on the first box
  const firstInnermostBox = screen.getByTestId('box-0-0');
  fireEvent.click(firstInnermostBox);

  // Check if currMove state is updated
  expect(screen.getByTestId('box-0-0')).toHaveTextContent('R'); // Assuming it was initially empty
//   expect(screen.getByTestId('box-0-0')).toHaveClass(''); // Add a "selected" class based on your logic

  // Click on another box to complete the move
  const secondInnermostBox = screen.getByTestId('box-2-0');
  fireEvent.click(secondInnermostBox);

  // Check if board state is updated
//   expect(screen.getByTestId('box-0-0')).toHaveTextContent(''); // The first box should be empty after the move
  expect(screen.getByTestId('box-2-0')).toHaveTextContent('R'); // The second box should have the piece moved

  // Check if currMove state is reset
  expect(screen.getByTestId('box-0-0')).not.toHaveTextContent('R');
//   expect(screen.getByTestId('box-2-0')).not.toHaveClass('selected');
});
