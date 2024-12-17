import Square from "./square";

const Board = ({ xisnext, squares, onplay }) => {
  let result = calculateWInner(squares)
    ? `the winner is ${calculateWInner(squares)}`
    : `nextplayer is ${xisnext ? "x" : "o"}`;
  const handleCLick = (i) => {
    if (squares[i] || calculateWInner(squares)) return;
    let nextSquares = [...squares];
    nextSquares[i] = xisnext ? "x" : "o";
    onplay(nextSquares);
  };
  const test = Array(3) // 행(row) 생성
    .fill(null)
    .map((_, row) => (
      <div className="board-row" key={row}>
        {Array(3) // 각 행의 열(column) 생성
          .fill(null)
          .map((_, col) => {
            const index = row * 3 + col; // index 계산
            return (
              <Square
                key={index}
                value={squares[index]}
                onSquareCLick={() => handleCLick(index)}
              />
            );
          })}
      </div>
    ));

  return (
    <>
      <div>{result}</div>
      <div>{test}</div>
      {/* <div>{result}</div>
      <div className="boardrow">
        <Square value={squares[0]} onSquareCLick={() => handleCLick(0)} />
        <Square value={squares[1]} onSquareCLick={() => handleCLick(1)} />
        <Square value={squares[2]} onSquareCLick={() => handleCLick(2)} />
      </div>
      <div className="boardrow">
        <Square value={squares[3]} onSquareCLick={() => handleCLick(3)} />
        <Square value={squares[4]} onSquareCLick={() => handleCLick(4)} />
        <Square value={squares[5]} onSquareCLick={() => handleCLick(5)} />
      </div>
      <div className="boardrow">
        <Square value={squares[6]} onSquareCLick={() => handleCLick(6)} />
        <Square value={squares[7]} onSquareCLick={() => handleCLick(7)} />
        <Square value={squares[8]} onSquareCLick={() => handleCLick(8)} />
      </div> */}
    </>
  );
};
export default Board;
const calculateWInner = (squares) => {
  const line = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < line.length; i++) {
    const [a, b, c] = line[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return squares[a];
  }
  return null;
};
