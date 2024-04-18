import { Ship } from "./components/ship.js";
import { renderPlayerBoards, addListenersToCells, humanPlayer, computerPlayer } from "./components/gameLogic.js";
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

// temp placement of ships
humanPlayer.gameBoardInstance.placeShip(carrierHuman, 1, 1, "horizontal");
humanPlayer.gameBoardInstance.placeShip(battleshipHuman, 3, 5, "vertical");
humanPlayer.gameBoardInstance.placeShip(cruiserHuman, 8, 1, "horizontal");
humanPlayer.gameBoardInstance.placeShip(submarineHuman, 2, 8, "vertical");
humanPlayer.gameBoardInstance.placeShip(patrolBoatHuman, 9, 7, "horizontal");
computerPlayer.gameBoardInstance.placeShip(carrierComp, 1, 1, "horizontal");
computerPlayer.gameBoardInstance.placeShip(battleshipComp, 3, 5, "vertical");
computerPlayer.gameBoardInstance.placeShip(cruiserComp, 8, 1, "horizontal");
computerPlayer.gameBoardInstance.placeShip(submarineComp, 2, 8, "vertical");
computerPlayer.gameBoardInstance.placeShip(patrolBoatComp, 9, 7, "horizontal");

renderPlayerBoards(humanPlayer, humanGameBoard);
renderPlayerBoards(computerPlayer, computerGameBoard);
addListenersToCells(humanPlayer, humanGameBoard);
addListenersToCells(computerPlayer, computerGameBoard);
