import { GameBoard } from "../components/gameboard.js";
import { Ship } from "../components/ship.js";

describe("Creating Game Board", () => {
  test("Game Board Creation Test", () => {
    let gameBoard = new GameBoard(10, 10);
    expect(gameBoard.rows).toBe(10);
    expect(gameBoard.cols).toBe(10);
    gameBoard.buildBoard();
    expect(gameBoard.board[0][0]).toEqual({
      empty: true,
      ship: null,
      hit: false,
      miss: false,
    });
    expect(gameBoard.board[9][9]).toEqual({
      empty: true,
      ship: null,
      hit: false,
      miss: false,
    });
  });
});

describe("Ship Placement on Game Board", () => {
  //  SETUP -------------------------------------------------------------------------------------------->
  let gameBoard;
  beforeEach(() => {
    gameBoard = new GameBoard(10, 10);
    gameBoard.buildBoard();
  });
  //  All 5 Ships -------------------------------------------------------------------------------------------->
  describe("Place all 5 ships on board.", () => {
    test("Test Carrier, Battleship, Cruiser, Submarine, Patrol Boat Placement", () => {
      let carrier = new Ship("Carrier", 5);
      let battleship = new Ship("Battleship", 4);
      let cruiser = new Ship("Cruiser", 3);
      let submarine = new Ship("Submarine", 3);
      let patrolBoat = new Ship("Patrol Boat", 2);
      gameBoard.placeShip(carrier, 1, 1, "horizontal");
      expect(gameBoard.board[1][1]).toEqual(
        expect.objectContaining({ ship: "Carrier" }),
      );
      expect(gameBoard.board[1][5]).toEqual(
        expect.objectContaining({ ship: "Carrier" }),
      );
      gameBoard.placeShip(battleship, 3, 5, "vertical");
      expect(gameBoard.board[3][5]).toEqual(
        expect.objectContaining({ ship: "Battleship" }),
      );
      expect(gameBoard.board[6][5]).toEqual(
        expect.objectContaining({ ship: "Battleship" }),
      );
      gameBoard.placeShip(cruiser, 8, 1, "horizontal");
      expect(gameBoard.board[8][1]).toEqual(
        expect.objectContaining({ ship: "Cruiser" }),
      );
      expect(gameBoard.board[8][3]).toEqual(
        expect.objectContaining({ ship: "Cruiser" }),
      );
      gameBoard.placeShip(submarine, 2, 8, "vertical");
      expect(gameBoard.board[2][8]).toEqual(
        expect.objectContaining({ ship: "Submarine" }),
      );
      expect(gameBoard.board[4][8]).toEqual(
        expect.objectContaining({ ship: "Submarine" }),
      );
      gameBoard.placeShip(patrolBoat, 9, 7, "horizontal");
      expect(gameBoard.board[9][7]).toEqual(
        expect.objectContaining({ ship: "Patrol Boat" }),
      );
      expect(gameBoard.board[9][8]).toEqual(
        expect.objectContaining({ ship: "Patrol Boat" }),
      );
    });
  });
  // Horizontal Ship -------------------------------------------------------------------------------------------->
  describe("Horizonal Ship Placement", () => {
    test("Horizontal Test", () => {
      let cruiser = new Ship("Cruiser", 3);
      gameBoard.placeShip(cruiser, 8, 1, "horizontal");
      expect(gameBoard.board[8][1]).toEqual(
        expect.objectContaining({ ship: "Cruiser" }),
      );
      expect(gameBoard.board[8][2]).toEqual(
        expect.objectContaining({ ship: "Cruiser" }),
      );
      expect(gameBoard.board[8][3]).toEqual(
        expect.objectContaining({ ship: "Cruiser" }),
      );
    });
  });
  // Vertical Ship -------------------------------------------------------------------------------------------->
  describe("Vertical Ship Placement", () => {
    test("Vertical Test", () => {
      let submarine = new Ship("Submarine", 3);
      gameBoard.placeShip(submarine, 3, 5, "vertical");
      expect(gameBoard.board[3][5]).toEqual(
        expect.objectContaining({ ship: "Submarine" }),
      );
      expect(gameBoard.board[4][5]).toEqual(
        expect.objectContaining({ ship: "Submarine" }),
      );
      expect(gameBoard.board[5][5]).toEqual(
        expect.objectContaining({ ship: "Submarine" }),
      );
    });
  });
  // Out of Bounds or Overlapping -------------------------------------------------------------------------------------------->
  describe("Out of Bounds or Overlapping Test Should Fail", () => {
    let cruiser = new Ship("Cruiser", 3);
    let submarine = new Ship("Submarine", 3);
    test("Horizontal Out of Bounds Test", () => {
      expect(gameBoard.placeShip(cruiser, 0, 9, "horizontal")).toEqual(expect.objectContaining({
        message:
          "Cruiser placement is out of bounds. Horizontal orientation would extend beyond game board's edge.",
      }));
    });
    test("Vertical Out of Bounds Test", () => {
      expect(gameBoard.placeShip(cruiser, 9, 0, "vertical")).toEqual(expect.objectContaining({
        message:
          "Cruiser placement is out of bounds. Vertical orientation would extend beyond game board's edge.",
      }));
    });
    test("Overlapping Ships", () => {
      gameBoard.placeShip(cruiser, 3, 3, "horizontal");
      expect(gameBoard.placeShip(submarine, 2, 4, "vertical")).toEqual(expect.objectContaining({
        message: "Cannot place Submarine: space already occupied by Cruiser.",
      }));
    });
  });
});
