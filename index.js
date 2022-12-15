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

  const solveTour = (board, x, y, moveCount) => {
    if (boardSize * boardSize === moveCount) {
      return true;
    }
    for (const move of moves) {
      const nextX = x + move[0];
      const nextY = y + move[1];
      if (isValidMove(nextX, nextY)) {
      }
    }
  };

  solveTour(chessboard, 0, 0, 1);

  return chessboard;
};

/*


const chessboard = [
  [1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];


*/
