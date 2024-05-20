import { Ship } from "./components/ship.js";
import {
  renderPlayerBoards,
  addListenersToCells,
  humanPlayer,
  computerPlayer,
  randomShipPlacement,
} from "./components/gameLogic.js";
import {
  humanGameBoard,
  computerGameBoard,
  chooseShipPlacementBtn,
  startGameBtn
} from "./components/dom.js";
import "./styles.css";

let carrierHuman = new Ship("Carrier", 5);
let battleshipHuman = new Ship("Battleship", 4);
let cruiserHuman = new Ship("Cruiser", 3);
let submarineHuman = new Ship("Submarine", 3);
let patrolBoatHuman = new Ship("Patrol Boat", 2);
let carrierComp = new Ship("Carrier", 5);
let battleshipComp = new Ship("Battleship", 4);
let cruiserComp = new Ship("Cruiser", 3);
let submarineComp = new Ship("Submarine", 3);
let patrolBoatComp = new Ship("Patrol Boat", 2);

function pickNewShipPlacement(player, gameBoard){
    player.gameBoardInstance.reset();

    randomShipPlacement(
      player,
      carrierHuman,
      battleshipHuman,
      cruiserHuman,
      submarineHuman,
      patrolBoatHuman,
    );

    renderPlayerBoards(player, gameBoard);
}

randomShipPlacement(
  humanPlayer,
  carrierHuman,
  battleshipHuman,
  cruiserHuman,
  submarineHuman,
  patrolBoatHuman,
);

randomShipPlacement(
  computerPlayer,
  carrierComp,
  battleshipComp,
  cruiserComp,
  submarineComp,
  patrolBoatComp,
);

renderPlayerBoards(humanPlayer, humanGameBoard);
renderPlayerBoards(computerPlayer, computerGameBoard);
addListenersToCells(computerPlayer, computerGameBoard);

chooseShipPlacementBtn.addEventListener("click", () => {
  pickNewShipPlacement(humanPlayer, humanGameBoard)
});

startGameBtn.addEventListener("click", () => {
  computerGameBoard.classList.remove("board-not-active")
  chooseShipPlacementBtn.removeEventListener("click", pickNewShipPlacement);
})

export { pickNewShipPlacement }