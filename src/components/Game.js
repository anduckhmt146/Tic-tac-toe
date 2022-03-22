import React, { useState } from 'react';
import Board from './Board';
import { checkWin } from './Helper';
const Game = () => {
    const initialboard = () => {
        const board = [];
        for(var i = 0; i < 8; i++) {
            board.push(Array(8).fill(null));
        }
        return board;   
    }
    const isFullBoard = (board) => {
        for(var i = 0; i < 8; i++) {
            if(board[i].includes(null)) return false;
        }
        return true;
    }
    const [board, setBoard] = useState(initialboard);
    const [xIsNext, setXIsNext] = useState(true);
    const winner = checkWin(board);
    const handleClick = (index) => {
        const boardCopy = [...board];
        if(winner || boardCopy[Math.floor(index / 8)][index % 8]) return;
        boardCopy[Math.floor(index / 8)][index % 8] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXIsNext((xIsNext) => !xIsNext);
    }
    const handleResetGame = () => {
        setBoard(initialboard);
    }
    return (
        <div className="game__content">
            <h1>Welcome to game Tic Tac Toe</h1>
            <div className="game__button">
                <button onClick={handleResetGame}>Reset Game</button>
            </div>
            <div className="game__infor">
                <h2 className= {xIsNext ? "x_turn": "o_turn"}>Lượt của {xIsNext ? "X" : "O"}</h2>
                <h2 className= {xIsNext ? "o_turn": "x_turn"}> {winner ? `Người chiến thắng là: ${winner}` : isFullBoard(board) ? "Hòa" : "" }</h2>
            </div>
            <Board cells= {board} onClick = {handleClick}></Board>
        </div>
    );
};

export default Game;