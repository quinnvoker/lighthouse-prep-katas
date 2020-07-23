const boardSize = 8;

const generateBoard = function(blackQueen, whiteQueen) {
  let board = [];
  for (let y = 0; y < boardSize; y++) {
    let row = [];
    for (let x = 0; x < boardSize; x++) {
      row.push(0);
    }
    board.push(row);
  }
  board[blackQueen[0]][blackQueen[1]] = 1;
  board[whiteQueen[0]][whiteQueen[1]] = 1;
  return board;
};

const queenThreat = function(board) {
  let queenLocation = [];
  for (let y = 0; y < boardSize; y++) {
    for (let x = 0; x < boardSize; x++) {
      if (board[y][x] === 1) {
        queenLocation = [y, x];
      }
    }
    if (queenLocation.length !== 0) {
      break;
    }
  }
  for (let y = -1; y <= 1; y++) {
    for (let x = -1; x <= 1; x++) {
      if (!(y === 0 && x === 0) && queenInDirection(board, queenLocation, [y, x]) === true) {
        return true;
      }
    }
  }
  return false;
};

const queenInDirection = function(board, position, direction) {
  const checkY = position[0] + direction[0];
  const checkX = position[1] + direction[1];
  if (checkY < 0 || checkY >= boardSize || checkX < 0 || checkX >= boardSize) {
    return false;
  } else if (board[checkY][checkX] === 1) {
    return true;
  } else {
    return queenInDirection(board, [checkY, checkX], direction);
  }
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));