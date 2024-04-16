import { Player } from "../components/player.js"

describe("Create Human and Computer Player", () => {
  test("Human Player Test", () => {
    const human = new Player(false);
    expect(human.isComputer).toBe(false)
});
  test("Computer Player Test", () => {
    const computer = new Player(true);
    expect(computer.isComputer).toBe(true)
});
})

describe("Each Player Has 10 X 10 Game Board", () => {
  test("Human Game Board Test", () => {
    const human = new Player(false);
    expect(human.gameBoardInstance.board.length).toBe(10);
    expect(human.gameBoardInstance.board[0].length).toBe(10);
  });
  test("Computer Game Board Test", () => {
    const computer = new Player(true);
    expect(computer.gameBoardInstance.board.length).toBe(10);
    expect(computer.gameBoardInstance.board[0].length).toBe(10);
  });
});
