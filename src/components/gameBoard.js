class Cell {
  constructor() {
    this.empty = true;
    this.ship = null;
    this.hit = false;
    this.miss = false;
  }
}

class GameBoard {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.board = this.buildBoard();
    this.ships = [];
  }

  buildBoard() {
    const board = [];
    for (let i = 0; i < this.rows; i++) {
      board.push([]);
      for (let j = 0; j < this.cols; j++) {
        board[i].push(new Cell());
      }
    }
    return board;
  }

  placeShip(ship, row, col, orientation) {
    // Checks for placement beyond board edges.
    if (orientation === "horizontal") {
      if (col + ship.length > this.cols) {
        return {
          success: false,
          message: `${ship.name} placement is out of bounds. Horizontal orientation would extend beyond game board's edge.`
        };
      }
    } else {
      if (row + ship.length > this.rows) {
        return {
          success: false,
          message: `${ship.name} placement is out of bounds. Vertical orientation would extend beyond game board's edge.`
        };
      }
    }
    // Checks for existing ships in placement area.
    if (orientation === "horizontal") {
      for (let i = 0; i < ship.length; i++) {
        if (!this.board[row][col + i].empty) {
          return {
            success: false,
            message: `Cannot place ${ship.name}: space already occupied by ${this.board[row][col + i].ship.name}.`
          };
        }
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        if (!this.board[row + i][col].empty) {
          return {
            success: false,
            message: `Cannot place ${ship.name}: space already occupied by ${this.board[row + i][col].ship.name}.`
          };
        }
      }
    }
    // Places the ship on the board.
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

  reset() {
    this.board = this.buildBoard();
    this.ships = [];
  }
}

export { GameBoard };
