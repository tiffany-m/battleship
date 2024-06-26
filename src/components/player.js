import { GameBoard } from "./gameBoard.js";

class Player {
  constructor(isComputer) {
    this.isComputer = isComputer;
    this.gameBoardInstance = new GameBoard(10, 10);
    this.gameBoardInstance.buildBoard();
    this.allShipsSunk = 0;
  }
}

export { Player };
