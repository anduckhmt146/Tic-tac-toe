/**
 * @param {number} row
 * @param {number} col
 */
function isSafe(row, col) {
  return row >= 0 && row < 12 && col >= 0 && col < 12;
}
/**
 * @param {{ [x: string]: any; }[]} board
 * @param {number} row
 * @param {number} col
 */
function checkRow(board, row, col) {
  if (!board[row][col]) return false;
  for (var i = col - 2; i <= col + 2; i++) {
    if (!isSafe(row, i)) return false;
    if (board[row][i] !== board[row][col]) return false;
  }
  return true;
}
/**
 * @param {{ [x: string]: any; }[]} board
 * @param {number} row
 * @param {number} col
 */
function checkCol(board, row, col) {
  if (!board[row][col]) return false;
  for (var i = row - 2; i <= row + 2; i++) {
    if (!isSafe(i, col)) return false;
    if (board[i][col] !== board[row][col]) return false;
  }
  return true;
}
/**
 * @param {{ [x: string]: any; }[]} board
 * @param {number} row
 * @param {number} col
 */
function checkLeftDiagonal(board, row, col) {
  if (!board[row][col]) return false;
  for (var i = -2; i <= 2; i++) {
    if (!isSafe(row + i, col + i)) return false;
    if (board[row + i][col + i] !== board[row][col]) return false;
  }
  return true;
}
/**
 * @param {{ [x: string]: any; }[]} board
 * @param {number} row
 * @param {number} col
 */
function checkRightDiagonal(board, row, col) {
  if (!board[row][col]) return false;
  for (var i = -2; i <= 2; i++) {
    if (!isSafe(row + i, col - i)) return false;
    if (board[row + i][col - i] !== board[row][col]) return false;
  }
  return true;
}

/**
 * @param {{ [x: string]: any; }[]} board
 */
export function checkWin(board) {
  for (var i = 0; i < 12; i++) {
    for (var j = 0; j < 12; j++) {
      if (
        checkRow(board, i, j) ||
        checkCol(board, i, j) ||
        checkLeftDiagonal(board, i, j) ||
        checkRightDiagonal(board, i, j)
      )
        return board[i][j];
    }
  }
  return null;
}
