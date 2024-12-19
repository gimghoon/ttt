import { useState } from "react";
import Board from "./board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [move, setMove] = useState(0);
  let isnextX = move % 2 === 0;
  const currentSquares = history[move];
  const handleSquareclick = (nextSquares) => {
    const nextHistory = [...history.slice(0, move + 1), nextSquares];
    setHistory(nextHistory);
    setMove(nextHistory.length - 1);
  };

  const moves = history.map((squares, i) => {
    let description;
    if (i > 0) description = `go to move ${i}`;
    else {
      description = "gotogamesTart";
    }
    return (
      <li key={i}>
        <button onClick={() => setMove(i)}>{description}</button>
      </li>
    );
  });
  return (
    <>
      <div>
        <Board
          squares={currentSquares}
          Onplay={handleSquareclick}
          isnextX={isnextX}
        />
      </div>
      <div>{moves}</div>
    </>
  );
};
export default Game;
//데이터 값들: square 버튼  =>거의 동일한 상태 Board, history
// 버튼을 누르면 => square, Board,  history가 변함 ==> 가장 큰 단위인 history 가 state가 되어야지 전체가 렌더링
//현재 움직이고 있는 순서 => squares에 있는 클릭하면 move가 +1 됨history에 이쓴ㄴ 버튼 누르면 move가 바뀜
