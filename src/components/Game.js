import React, { useState } from 'react';
import Board from './Board';
import { checkWin } from './Helper';
import { getAISolution } from 'model/AI';
const Game = () => {
  const initialboard = () => {
    const board = [];
    for (var i = 0; i < 12; i++) {
      // @ts-ignore
      board.push(Array(12).fill(null));
    }
    return board;
  };
  const isFullBoard = (board) => {
    for (var i = 0; i < 12; i++) {
      if (board[i].includes(null)) return false;
    }
    return true;
  };
  const [board, setBoard] = useState(initialboard);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = checkWin(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[Math.floor(index / 12)][index % 12]) return;
    boardCopy[Math.floor(index / 12)][index % 12] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext((xIsNext) => !xIsNext);
    console.log('Run');
  };
  const handleResetGame = () => {
    setXIsNext(true);
    setBoard(initialboard);
  };
  const AIClick = (board) => {
    const { resRow, resCol } = getAISolution(board);
    handleClick(resRow * 12 + resCol);
    console.log('AI Click');
  };
  return (
    <div className="game__content">
      <h1>Welcome to game Tic Tac Toe</h1>
      <div className="game__button">
        <button onClick={handleResetGame}>Reset Game</button>
      </div>
      <div className="game__infor">
        <h2 className={xIsNext ? 'x_turn' : 'o_turn'}>
          Lượt của {xIsNext ? 'X' : 'O'}
        </h2>
        <h2 className={xIsNext ? 'o_turn' : 'x_turn'}>
          {' '}
          {winner
            ? `Người chiến thắng là: ${winner}`
            : isFullBoard(board)
            ? 'Hòa'
            : ''}
        </h2>
      </div>
      {!xIsNext && AIClick(board)}
      <Board cells={board} onClick={handleClick} xIsNext={xIsNext}></Board>
    </div>
  );
};

export default Game;
