import React from 'react';
import Cell from './Cell';

const Board = (props) => {
    return (
        <div className="game__board">
            {props.cells.map((items, index) => {
                return (items.map((subitem, subindex) => {
                    return <Cell key= {(index * 8 + subindex).toString()}
                                 value = {subitem} 
                                 onClick ={() => props.onClick(index * 8 + subindex)}
                                 status = {subitem === 'X' ? 'is_x' : subitem === 'O' ? 'is_o' : ''}    
                            ></Cell>
                }))
            })}
        </div>
    );
};

export default Board;