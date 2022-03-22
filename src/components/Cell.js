import React from 'react';

const Cell = ({value, onClick, status}) => {
    return (
        <div className={`game__cell ${status}`} onClick={onClick}>{value}</div>
    );
};

export default Cell;