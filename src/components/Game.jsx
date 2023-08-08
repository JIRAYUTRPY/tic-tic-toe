import { calculateWinner } from "./calculateWinner";
import { useState } from "react";
const styleSqaure = {
  background: "lightblue",
  border: "2px solid darkblue",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};
const styleBoard = {
  border: "4px solid darkblue",
  borderRadius: "10px",
  width: "500px",
  height: "500px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

const Square = (props) => {
  return (
    <button onClick={props.onClick} style={styleSqaure}>
      {props.value}
    </button>
  );
};
const Board = (props) => (
  <div style={styleBoard}>
    {props.squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => props.onClick(i)} />
    ))}
  </div>
);
function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };
  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div>
        <p>
          {winner
            ? "Winner: " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </p>
      </div>
    </>
  );
}

export default Game;
