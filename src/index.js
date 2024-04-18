import { Ship } from "./components/ship.js";
import { Player } from "./components/player.js";
import "./styles.css";

// Human setup
let humanPlayer = new Player(false);
let carrierHuman = new Ship("Carrier", 5);
let battleshipHuman = new Ship("Battleship", 4);
let cruiserHuman = new Ship("Cruiser", 3);
let submarineHuman = new Ship("Submarine", 3);
let patrolBoatHuman = new Ship("Patrol Boat", 2);
// Computer setup
let computerPlayer = new Player(true);
let carrierComp = new Ship("Carrier", 5);
let battleshipComp = new Ship("Battleship", 4);
let cruiserComp = new Ship("Cruiser", 3);
let submarineComp = new Ship("Submarine", 3);
let patrolBoatComp = new Ship("Patrol Boat", 2);
// DOM
let humanGameBoard = document.getElementById("human-game-board");
let computerGameBoard = document.getElementById("computer-game-board");
let closePopUpBtn = document.getElementById("close-popup-btn");
let sunkAlert = document.getElementById("sunk-alert");
let endOfGameAlert = document.getElementById("end-of-game-alert")

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

function renderPlayerBoards(player, playerBoard) {
  for (let i = 0; i < player.gameBoardInstance.board.length; i++) {
    let rowWrapper = document.createElement("div");
    rowWrapper.classList.add("row");
    for (let j = 0; j < player.gameBoardInstance.board[i].length; j++) {
      let cellElement = document.createElement("div");
      cellElement.classList.add("cell");
      cellElement.dataset.row = i;
      cellElement.dataset.col = j;

      if (player.gameBoardInstance.board[i][j].ship) {
        if (player.isComputer === false)
        cellElement.classList.add("hasShip");
      }

      rowWrapper.appendChild(cellElement);
    }
    playerBoard.appendChild(rowWrapper);
  }
}

closePopUpBtn.addEventListener("click", () => {
  sunkAlert.classList.replace("visible", "hidden");
});

function addListenersToCells(player, board) {
  const cells = board.querySelectorAll(".cell");

  cells.forEach((cell) => {
    const handleClick = () => {
      // Named function for handling the click
      const row = parseInt(cell.dataset.row);
      const col = parseInt(cell.dataset.col);
      const boardCell = player.gameBoardInstance.board[row][col];

      player.gameBoardInstance.receiveAttack(row, col);

      if (boardCell.hit) {
        cell.innerText = "X";
        cell.classList.add("hit");
      } else {
        cell.classList.add("miss");
      }

      if (boardCell.ship && boardCell.ship.sunk) {
        sunkAlert.classList.replace("hidden", "visible");
        player.allShipsSunk++;
        if(player.allShipsSunk === 5) {
          endOfGameAlert.classList.replace("hidden", "visible");
          alert(`${player} loses, all ships sunk`)
        }
      }

      console.log(player);

      cell.removeEventListener("click", handleClick); // Remove the listener after the click
    };

    cell.addEventListener("click", handleClick);
  });
}

renderPlayerBoards(humanPlayer, humanGameBoard);
renderPlayerBoards(computerPlayer, computerGameBoard);
addListenersToCells(humanPlayer, humanGameBoard);
addListenersToCells(computerPlayer, computerGameBoard);