import { Ship } from "./components/ship.js";
import {
  renderPlayerBoards,
  addListenersToCells,
  humanPlayer,
  computerPlayer,
} from "./components/gameLogic.js";
import { humanGameBoard, computerGameBoard } from "./components/dom.js";
import "./styles.css";

// Human setup
let carrierHuman = new Ship("Carrier", 5);
let battleshipHuman = new Ship("Battleship", 4);
let cruiserHuman = new Ship("Cruiser", 3);
let submarineHuman = new Ship("Submarine", 3);
let patrolBoatHuman = new Ship("Patrol Boat", 2);
// Computer setup
let carrierComp = new Ship("Carrier", 5);
let battleshipComp = new Ship("Battleship", 4);
let cruiserComp = new Ship("Cruiser", 3);
let submarineComp = new Ship("Submarine", 3);
let patrolBoatComp = new Ship("Patrol Boat", 2);

humanPlayer.gameBoardInstance.randomlyPlaceShip(carrierHuman);
humanPlayer.gameBoardInstance.randomlyPlaceShip(battleshipHuman);
humanPlayer.gameBoardInstance.randomlyPlaceShip(cruiserHuman);
humanPlayer.gameBoardInstance.randomlyPlaceShip(submarineHuman);
humanPlayer.gameBoardInstance.randomlyPlaceShip(patrolBoatHuman);
computerPlayer.gameBoardInstance.randomlyPlaceShip(carrierComp);
computerPlayer.gameBoardInstance.randomlyPlaceShip(battleshipComp);
computerPlayer.gameBoardInstance.randomlyPlaceShip(cruiserComp);
computerPlayer.gameBoardInstance.randomlyPlaceShip(submarineComp);
computerPlayer.gameBoardInstance.randomlyPlaceShip(patrolBoatComp);

renderPlayerBoards(humanPlayer, humanGameBoard);
renderPlayerBoards(computerPlayer, computerGameBoard);
addListenersToCells(humanPlayer, humanGameBoard);
addListenersToCells(computerPlayer, computerGameBoard);
