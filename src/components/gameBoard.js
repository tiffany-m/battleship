class Cell {
  constructor() {
  this.empty = true,
  this.ship = null,
  this.hit = false,
  this.miss = false
  }
}

class GameBoard {
  constructor(rows, cols) {
    (this.rows = rows), (this.cols = cols), (this.board = []);
  }

  buildBoard() {
    const newCell = new Cell();
    for (let i = 0; i < this.rows; i++) {
      this.board.push([]);
      for (let j = 0; j < this.cols; j++) {
        this.board[i].push(newCell);
      }
    }
    return this.board;
  }

  receiveAttack(row, col) {
    this.board[row][col].hit = true;
  }
}

export { GameBoard };

// let test = new GameBoard(10, 10)

// console.log(test.buildBoard())
