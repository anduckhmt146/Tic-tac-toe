const attacks = [0, 1, 64, 4096, 262144, 16777216, 1073741824];
const defends = [0, 1, 8, 512, 32768, 2097152, 134217728];

const AttackPointInRow = (board, i, j, attack, defend) => {
  let scoreRow = 0;
  let countO = 0,
    countX = 0,
    countO2 = 0,
    countX2 = 0;
  for (let iDem = 1; iDem < 6 && j + iDem < 12; iDem++) {
    if (board[i][j + iDem] === 'O') countO++;
    else if (board[i][j + iDem] === 'X') {
      countX++;
      break;
    } else {
      for (let iDem2 = 2; iDem2 < 7 && j + iDem2 < 12; iDem2++) {
        if (board[i][j + iDem2] === 'O') countO2++;
        else if (board[i][j + iDem2] === 'X') {
          countX2++;
          break;
        } else break;
      }
      break;
    }
  }
  for (let iDem = 1; iDem < 6 && j - iDem >= 0; iDem++) {
    if (board[i][j - iDem] === 'O') countO++;
    else if (board[i][j - iDem] === 'X') {
      countX++;
      break;
    } else {
      for (let iDem2 = 2; iDem2 < 7 && j - iDem2 >= 0; iDem2++) {
        if (board[i][j - iDem2] === 'O') countO2++;
        else if (board[i][j - iDem2] === 'X') {
          countX2++;
          break;
        } else break;
      }
      break;
    }
  }
  scoreRow += countX === 0 ? attack[countO] * 2 : attack[countO];
  scoreRow += countO === 0 ? defend[countX] * 2 : defend[countX];
  scoreRow += countO2 === 0 ? defend[countX2] * 2 : defend[countX2];
  if (countO === 4) scoreRow *= 2;
  return scoreRow;
};
const AttackPointInCol = (board, i, j, attack, defend) => {
  let scoreCol = 0;
  let countO = 0,
    countX = 0,
    countO2 = 0,
    countX2 = 0;
  for (let iDem = 1; iDem < 6 && i + iDem < 12; iDem++) {
    if (board[i + iDem][j] === 'O') countO++;
    else if (board[i + iDem][j] === 'X') {
      countX++;
      break;
    } else {
      for (let iDem2 = 2; iDem2 < 7 && i + iDem2 < 12; iDem2++) {
        if (board[i + iDem2][j] === 'O') countO2++;
        else if (board[i + iDem2][j] === 'X') {
          countX2++;
          break;
        } else break;
      }
      break;
    }
  }
  for (let iDem = 1; iDem < 6 && i - iDem >= 0; iDem++) {
    if (board[i - iDem][j] === 'O') countO++;
    else if (board[i - iDem][j] === 'X') {
      countX++;
      break;
    } else {
      for (let iDem2 = 2; iDem2 < 7 && i - iDem2 >= 0; iDem2++) {
        if (board[i - iDem2][j] === 'O') countO2++;
        else if (board[i - iDem2][j] === 'X') {
          countX2++;
          break;
        } else break;
      }
      break;
    }
  }
  scoreCol += countX === 0 ? attack[countO] * 2 : attack[countO];
  scoreCol += countX2 === 0 ? attack[countO2] * 2 : attack[countO2];
  scoreCol += countO === 0 ? defend[countX] * 2 : defend[countX];
  scoreCol += countO2 === 0 ? defend[countX2] * 2 : defend[countX2];
  if (countO === 4) scoreCol *= 2;
  return scoreCol;
};
const AttackPointInLeftDiagonal = (board, i, j, attack, defend) => {
  let scoreLeftDiagonal = 0;
  let countO = 0,
    countX = 0,
    countO2 = 0,
    countX2 = 0;
  for (let iDem = 1; iDem < 6 && j + iDem < 12 && i + iDem < 12; iDem++) {
    if (board[i + iDem][j + iDem] === 'O') countO++;
    else if (board[i + iDem][j + iDem] === 'X') {
      countX++;
      break;
    } else {
      for (
        let iDem2 = 2;
        iDem2 < 7 && j + iDem2 < 12 && i + iDem2 < 12;
        iDem2++
      ) {
        if (board[i + iDem2][j + iDem2] === 'O') countO2++;
        else if (board[i + iDem2][j + iDem2] === 'X') {
          countX2++;
          break;
        } else break;
      }
      break;
    }
  }
  for (let iDem = 1; iDem < 6 && j - iDem >= 0 && i - iDem >= 0; iDem++) {
    if (board[i - iDem][j - iDem] === 'O') countO++;
    else if (board[i - iDem][j - iDem] === 'X') {
      countX++;
      break;
    } else {
      for (
        let iDem2 = 2;
        iDem2 < 7 && j - iDem2 >= 0 && i - iDem2 >= 0;
        iDem2++
      ) {
        if (board[i - iDem2][j - iDem2] === 'O') countO2++;
        else if (board[i - iDem2][j - iDem2] === 'X') {
          countX2++;
          break;
        } else break;
      }
      break;
    }
  }
  scoreLeftDiagonal += countX === 0 ? attack[countO] * 2 : attack[countO];
  scoreLeftDiagonal += countX2 === 0 ? attack[countO2] * 2 : attack[countO2];
  scoreLeftDiagonal += countO === 0 ? defend[countX] * 2 : defend[countX];
  scoreLeftDiagonal += countO2 === 0 ? defend[countX2] * 2 : defend[countX2];
  if (countO === 4) scoreLeftDiagonal *= 2;
  return scoreLeftDiagonal;
};
const AttackPointInRightDiagonal = (board, i, j, attack, defend) => {
  let scoreRightDiagonal = 0;
  let countO = 0,
    countX = 0,
    countO2 = 0,
    countX2 = 0;
  for (let iDem = 1; iDem < 6 && j - iDem >= 0 && i + iDem < 12; iDem++) {
    if (board[i + iDem][j - iDem] === 'O') countO++;
    else if (board[i + iDem][j - iDem] === 'X') {
      countX++;
      break;
    } else {
      for (
        let iDem2 = 2;
        iDem2 < 7 && j - iDem2 >= 0 && i + iDem2 < 12;
        iDem2++
      ) {
        if (board[i + iDem2][j - iDem2] === 'O') countO2++;
        else if (board[i + iDem2][j - iDem2] === 'X') {
          countX2++;
          break;
        } else break;
      }
      break;
    }
  }
  for (let iDem = 1; iDem < 6 && j + iDem < 12 && i - iDem >= 0; iDem++) {
    if (board[i - iDem][j + iDem] === 'O') countO++;
    else if (board[i - iDem][j + iDem] === 'X') {
      countX++;
      break;
    } else {
      for (
        let iDem2 = 2;
        iDem2 < 7 && j + iDem2 < 12 && i - iDem2 >= 0;
        iDem2++
      ) {
        if (board[i - iDem2][j + iDem2] === 'O') countO2++;
        else if (board[i - iDem2][j + iDem2] === 'X') {
          countX2++;
          break;
        } else break;
      }
      break;
    }
  }
  scoreRightDiagonal += countX === 0 ? attack[countO] * 2 : attack[countO];
  scoreRightDiagonal += countX2 === 0 ? attack[countO2] * 2 : attack[countO2];
  scoreRightDiagonal += countO === 0 ? defend[countX] * 2 : defend[countX];
  scoreRightDiagonal += countO2 === 0 ? defend[countX2] * 2 : defend[countX2];
  if (countO === 4) scoreRightDiagonal *= 2;
  return scoreRightDiagonal;
};
const DefendPointInRow = (board, i, j, attack, defend) => {
  let scoreRow = 0;
  let countX = 0,
    countO = 0,
    countX2 = 0,
    countO2 = 0;
  for (let iDem = 1; iDem < 6 && j + iDem < 12; iDem++) {
    if (board[i][j + iDem] === 'O') {
      countO++;
      break;
    } else if (board[i][j + iDem] === 'X') countX++;
    else {
      for (let iDem2 = 2; iDem2 < 7 && j + iDem2 < 12; iDem2++) {
        if (board[i][j + iDem2] === 'O') {
          countO2++;
          break;
        } else if (board[i][j + iDem2] === 'X') countX2++;
        else break;
      }
      break;
    }
  }
  for (let iDem = 1; iDem < 6 && j - iDem >= 0; iDem++) {
    if (board[i][j - iDem] === 'O') {
      countO++;
      break;
    } else if (board[i][j - iDem] === 'X') countX++;
    else {
      for (let iDem2 = 2; iDem2 < 7 && j - iDem2 >= 0; iDem2++) {
        if (board[i][j - iDem2] === 'O') {
          countO2++;
          break;
        } else if (board[i][j - iDem2] === 'X') countX2++;
        else break;
      }
      break;
    }
  }
  scoreRow += countO === 0 ? defend[countX] * 2 : defend[countX];
  scoreRow += countO2 === 0 ? defend[countX2] * 2 : defend[countX2];
  if (countX === 4) scoreRow *= 2;
  return scoreRow;
};
const DefendPointInCol = (board, i, j, attack, defend) => {
  let scoreCol = 0;
  let countX = 0,
    countO = 0,
    countX2 = 0,
    countO2 = 0;
  for (let iDem = 1; iDem < 6 && i + iDem < 12; iDem++) {
    if (board[i + iDem][j] === 'O') {
      countO++;
      break;
    } else if (board[i + iDem][j] === 'X') countX++;
    else {
      for (let iDem2 = 2; iDem2 < 7 && i + iDem2 < 12; iDem2++) {
        if (board[i + iDem2][j] === 'O') {
          countO2++;
          break;
        } else if (board[i + iDem2][j] === 'X') countX2++;
        else break;
      }
      break;
    }
  }
  for (let iDem = 1; iDem < 6 && i - iDem >= 0; iDem++) {
    if (board[i - iDem][j] === 'O') {
      countO++;
      break;
    } else if (board[i - iDem][j] === 'X') countX++;
    else {
      for (let iDem2 = 2; iDem2 < 7 && i - iDem2 >= 0; iDem2++) {
        if (board[i - iDem2][j] === 'O') {
          countO2++;
          break;
        } else if (board[i - iDem2][j] === 'X') countX2++;
        else break;
      }
      break;
    }
  }
  scoreCol += countO === 0 ? defend[countX] * 2 : defend[countX];
  scoreCol += countO2 === 0 ? defend[countX2] * 2 : defend[countX2];
  if (countX === 4) scoreCol *= 2;
  return scoreCol;
};
const DefendPointInLeftDiagonal = (board, i, j, attack, defend) => {
  let scoreLeftDiagonal = 0;
  let countX = 0,
    countO = 0,
    countX2 = 0,
    countO2 = 0;
  for (let iDem = 1; iDem < 6 && j + iDem < 12 && i + iDem < 12; iDem++) {
    if (board[i + iDem][j + iDem] === 'O') {
      countO++;
      break;
    } else if (board[i + iDem][j + iDem] === 'X') countX++;
    else {
      for (
        let iDem2 = 2;
        iDem2 < 7 && j + iDem2 < 12 && i + iDem2 < 12;
        iDem2++
      ) {
        if (board[i + iDem2][j + iDem2] === 'O') {
          countO2++;
          break;
        } else if (board[i + iDem2][j + iDem2] === 'X') countX2++;
        else break;
      }
      break;
    }
  }
  for (let iDem = 1; iDem < 6 && j - iDem >= 0 && i - iDem >= 0; iDem++) {
    if (board[i - iDem][j - iDem] === 'O') {
      countO++;
      break;
    } else if (board[i - iDem][j - iDem] === 'X') countX++;
    else {
      for (
        let iDem2 = 2;
        iDem2 < 7 && j - iDem2 >= 0 && i - iDem2 >= 0;
        iDem2++
      ) {
        if (board[i - iDem2][j - iDem2] === 'O') {
          countO2++;
          break;
        } else if (board[i - iDem2][j - iDem2] === 'X') countX2++;
        else break;
      }
      break;
    }
  }
  scoreLeftDiagonal += countO === 2 ? defend[countX] * 2 : defend[countX];
  scoreLeftDiagonal += countO2 === 2 ? defend[countX2] * 2 : defend[countX2];
  if (countX === 4) scoreLeftDiagonal *= 2;
  return scoreLeftDiagonal;
};
const DefendPointInRightDiagonal = (board, i, j, attack, defend) => {
  let scoreRightDiagonal = 0;
  let countX = 0,
    countO = 0,
    countX2 = 0,
    countO2 = 0;
  for (let iDem = 1; iDem < 6 && j - iDem >= 0 && i + iDem < 12; iDem++) {
    if (board[i + iDem][j - iDem] === 'O') {
      countO++;
      break;
    } else if (board[i + iDem][j - iDem] === 'X') countX++;
    else {
      for (
        let iDem2 = 2;
        iDem2 < 7 && j - iDem2 >= 0 && i + iDem2 < 12;
        iDem2++
      ) {
        if (board[i + iDem2][j - iDem2] === 'O') {
          countO2++;
          break;
        } else if (board[i + iDem2][j - iDem2] === 'X') countX2++;
        else break;
      }
      break;
    }
  }
  for (let iDem = 1; iDem < 6 && j + iDem < 12 && i - iDem >= 0; iDem++) {
    if (board[i - iDem][j + iDem] === 'O') {
      countO++;
      break;
    } else if (board[i - iDem][j + iDem] === 'X') countX++;
    else {
      for (
        let iDem2 = 2;
        iDem < 7 && j + iDem2 < 12 && i - iDem2 >= 0;
        iDem2++
      ) {
        if (board[i - iDem2][j + iDem2] === 'O') {
          countO2++;
          break;
        } else if (board[i - iDem2][j + iDem2] === 'X') countX2++;
        else break;
      }
      break;
    }
  }
  scoreRightDiagonal += countO === 2 ? defend[countX] * 2 : defend[countX];
  scoreRightDiagonal += countO2 === 2 ? defend[countX2] * 2 : defend[countX2];
  if (countX === 4) scoreRightDiagonal *= 2;
  return scoreRightDiagonal;
};
export const getAISolution = (board) => {
  let resPoint = 0;
  let resRow = 0,
    resCol = 0;
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
      let AttackPoint = 0;
      let DefendPoint = 0;
      if (board[i][j] === null) {
        AttackPoint += AttackPointInCol(board, i, j, attacks, defends);
        AttackPoint += AttackPointInRow(board, i, j, attacks, defends);
        AttackPoint += AttackPointInLeftDiagonal(board, i, j, attacks, defends);
        AttackPoint += AttackPointInRightDiagonal(
          board,
          i,
          j,
          attacks,
          defends
        );
        DefendPoint += DefendPointInCol(board, i, j, attacks, defends);
        DefendPoint += DefendPointInRow(board, i, j, attacks, defends);
        DefendPoint += DefendPointInLeftDiagonal(board, i, j, attacks, defends);
        DefendPoint += DefendPointInRightDiagonal(
          board,
          i,
          j,
          attacks,
          defends
        );
        let maxPoint = AttackPoint > DefendPoint ? AttackPoint : DefendPoint;
        if (resPoint < maxPoint) {
          resPoint = maxPoint;
          resRow = i;
          resCol = j;
        }
      }
    }
  }
  return { resRow, resCol };
};
// const resBoard = [
//   ['X', null, null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null, null, null],
// ];
// console.log(getAISolution(resBoard));
