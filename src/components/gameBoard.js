class Cell {
  constructor() {
    (this.empty = true),
      (this.ship = null),
      (this.hit = false),
      (this.miss = false);
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
        this.board[i].push(new Cell());
      }
    }
    return this.board;
  }

  placeShip(ship, row, col, orientation) {
    // Checks for placement beyound board edges.
    if (orientation === "horizontal") {
      if (col + ship.length > this.cols) {
        return {
          success: false,
          message: `${ship.name} placement is out of bounds. Horizontal orientation would extend beyond game board's edge.`,
        };
      }
    } else {
      if (row + ship.length > this.rows) {
        return {
          success: false,
          message: `${ship.name} placement is out of bounds. Vertical orientation would extend beyond game board's edge.`,
        };
      }
    }
    // Checks for exisiting ships.
    if (orientation === "horizontal") {
      for (let i = 0; i < ship.length; i++) {
        if (this.board[row][col + i].empty === false) {
          return {
            success: false,
            message: `Cannot place ${ship.name}: space already occupied by ${this.board[row][col + i].ship.name}.`,
          };
        }
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        if (this.board[row + i][col].empty === false) {
          return {
            success: false,
            message: `Cannot place ${ship.name}: space already occupied by ${this.board[row + i][col].ship.name}.`,
          };
        }
      }
    }
    // Places ships.
    for (let i = 0; i < ship.length; i++) {
      if (orientation === "horizontal") {
        this.board[row][col + i].empty = false;
        this.board[row][col + i].ship = ship;
      } else {
        this.board[row + i][col].empty = false;
        this.board[row + i][col].ship = ship;
      }
    }
    return true;
  }

  randomlyPlaceShip(ship) {
  let result;
  do {
    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);
    let orientation = Math.random() < 0.5 ? "horizontal" : "vertical";

    result = this.placeShip(ship, row, col, orientation);
  } while (result.success === false);
}

  receiveAttack(row, col) {
    let cell = this.board[row][col];
    if (cell.ship != null) {
      cell.hit = true;
      cell.ship.hit();
      cell.ship.isSunk();
      return cell.hit;
    } else {
      cell.miss = true;
      return cell.miss;
    }
  }
}

export { GameBoard };
