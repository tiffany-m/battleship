class GameBoard {
  constructor(rows, cols) {
    (this.rows = rows), (this.cols = cols), (this.board = []);
  }

  buildBoard() {
    for (let i = 0; i < this.rows; i++) {
      this.board.push([]);
      for (let j = 0; j < this.cols; j++) {
        this.board[i].push(null);
      }
    }
    return this.board;
  }

  receiveAttack(row, col) {
    this.board[row][col] = "X"

  }
}

export { GameBoard }

// let test = new GameBoard(10, 10)

// console.log(test.buildBoard())
