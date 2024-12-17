import { useState } from "react";
import Board from "./board";

const Game = () => {
  const [cmove, setcMove] = useState(0);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const xisnext = cmove % 2 === 0;
  const currentsquare = history[cmove];
  const handleplay = (nextSquares) => {
    const nextHistory = [...history.slice(0, cmove + 1), nextSquares];
    setcMove(nextHistory.length - 1);
    setHistory(nextHistory);
  };
  function jumpTo(nextMove) {
    setcMove(nextMove);
  }
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }

    return (
      <li key={move}>
        {move !== cmove ? (
          <button onClick={() => jumpTo(move)}>{description}</button>
        ) : (
          `당신은 ${cmove}번째 순서에 있습니다…`
        )}
      </li>
    );
  });
  return (
    <>
      <Board xisnext={xisnext} squares={currentsquare} onplay={handleplay} />
      <div>{moves}</div>
    </>
  );
};

export default Game;
