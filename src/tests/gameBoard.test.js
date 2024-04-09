import { GameBoard } from "../components/gameBoard.js";
import { Ship } from "../components/ship.js";


describe("Game Board", () => {
  test("Game Board test", () => {
    let gameBoard = new GameBoard(10, 10);
    expect(gameBoard.rows).toBe(10);
    expect(gameBoard.cols).toBe(10);
    gameBoard.buildBoard();
    expect(gameBoard.board[0][0]).toBe(null)
    expect(gameBoard.board[9][9]).toBe(null);
    gameBoard.receiveAttack(0, 0);
    expect(gameBoard.board[0][0]).toBe("X")
  });
});