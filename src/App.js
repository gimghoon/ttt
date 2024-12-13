import "./styles.css";
import { useState } from "react";
const Square = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};
const Board = ({ xisnext, squares, onPlay }) => {
  const handleClick = () => {};
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};
const calculateWinner = (squares) => {
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
    if (squares[a] && squares[a] === squares[b] && squares[c] === squares[b]) {
      return squares[a];
    }
  }
  return null;
};
export default Game = () => {
  const [xisnext, setXisnext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquare = history[history.length - 1];

  const onPlay = (i) => {
    if (currentSquare[i] || calculateWinner(currentSquare)) return;
    const nextSquares = currentSquare.slice();
    nextSquares[i] = xisnext ? "X" : "O";
    setSquares(nextSquares);
    setXisnext(!xisnext);
  };
  const winner = calculateWinner(currentSquare);
  let status;
  if (winner) {
    status = `winner is:${winner}`;
  } else {
    status = `next player :${xisnext ? "x" : "o"}`;
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xisnext={xisnext} value={currentSquare} onPlay={onPlay} />
      </div>
      <div className="game-info">
        <ol>{status}</ol>
      </div>
    </div>
  );
};
