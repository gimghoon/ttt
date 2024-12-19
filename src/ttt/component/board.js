import Square from "./square";

const Board = ({ squares, Onplay, isnextX }) => {
  const handleSquareClickB = (i) => {
    const nextSquares = squares.slice();
    nextSquares[i] = isnextX ? "x" : "o";
    Onplay(nextSquares);
  };
  return (
    <>
      <div className="board-row">
        <Square
          value={squares[0]}
          handleSquareClickB={() => handleSquareClickB(0)}
        />
        <Square
          value={squares[1]}
          handleSquareClickB={() => handleSquareClickB(1)}
        />
        <Square
          value={squares[2]}
          handleSquareClickB={() => handleSquareClickB(2)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          handleSquareClickB={() => handleSquareClickB(3)}
        />
        <Square
          value={squares[4]}
          handleSquareClickB={() => handleSquareClickB(4)}
        />
        <Square
          value={squares[5]}
          handleSquareClickB={() => handleSquareClickB(5)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          handleSquareClickB={() => handleSquareClickB(6)}
        />
        <Square
          value={squares[7]}
          handleSquareClickB={() => handleSquareClickB(7)}
        />
        <Square
          value={squares[8]}
          handleSquareClickB={() => handleSquareClickB(8)}
        />
      </div>
    </>
  );
};
export default Board;
