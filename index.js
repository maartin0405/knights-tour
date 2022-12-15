const knightsTour = (boardSize) => {
  const chessboard = new Array(boardSize)
    .fill(0)
    .map(() => new Array(boardSize).fill(0));

  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  const isValidMove = (x, y) =>
    x >= 0 &&
    y >= 0 &&
    x < boardSize &&
    y < boardSize &&
    chessboard[x][y] === 0;

  const solveTour = (chessboard, x, y, moveCount) => {
    if (boardSize * boardSize === moveCount) {
      return true;
    }
    for (const move of moves) {
      const nextX = x + move[0];
      const nextY = y + move[1];
      if (isValidMove(nextX, nextY)) {
        chessboard[nextX][nextY] = moveCount + 1;
        if (solveTour(chessboard, nextX, nextY, moveCount + 1)) {
          return true;
        }
        chessboard[nextX][nextY] = 0;
      }
    }
    return false;
  };

  solveTour(chessboard, 0, 0, 1);

  return chessboard;
};

console.log(knightsTour(5));

/*


const chessboard = [
  [1, 0, 0, 0, 0],
  [0, 0, 2, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];


*/
