const Square = ({ value, handleSquareClickB }) => {
  return (
    <>
      <button onClick={() => handleSquareClickB()}>{value}</button>
    </>
  );
};
export default Square;
