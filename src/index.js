import {
  renderPlayerBoards,
  addListenersToCells,
  humanPlayer,
  computerPlayer,
  randomShipPlacement,
  humanShipsArr,
  computerShipsArr,
} from "./components/gameLogic.js";
import {
  humanGameBoard,
  computerGameBoard,
  chooseShipPlacementBtn,
  startGameBtn,
} from "./components/dom.js";
import "./styles.css";

function pickNewShipPlacement(player, gameBoard) {
  player.gameBoardInstance.reset();

  randomShipPlacement(player, ...humanShipsArr);

  renderPlayerBoards(player, gameBoard);
}

randomShipPlacement(humanPlayer, ...humanShipsArr);

randomShipPlacement(computerPlayer, ...computerShipsArr);

renderPlayerBoards(humanPlayer, humanGameBoard);
renderPlayerBoards(computerPlayer, computerGameBoard);
addListenersToCells(computerPlayer, computerGameBoard);

chooseShipPlacementBtn.addEventListener("click", () => {
  pickNewShipPlacement(humanPlayer, humanGameBoard);
});

startGameBtn.addEventListener("click", () => {
  computerGameBoard.classList.remove("board-not-active");
  chooseShipPlacementBtn.removeEventListener("click", pickNewShipPlacement);
});

export { pickNewShipPlacement };
