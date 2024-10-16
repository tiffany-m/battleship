import { Player } from "./player.js";
import { Ship } from "./ship.js"
import {
  humanGameBoard,
  computerGameBoard,
  chooseShipPlacementBtn,
  restartGameBtn,
  humanShipsSunkCount,
  computerShipsSunkCount,
  winnerText
} from "./dom.js";
import { pickNewShipPlacement } from "../index.js"
let humanPlayer = new Player(false);
let computerPlayer = new Player(true);
let currentPlayer = humanPlayer;
let computerPicks = [];
let isGameOver = false;
let humanShipsArr = []
let computerShipsArr = []
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

restartGameBtn.addEventListener("click", gameReset);
humanShipsArr.push(carrierHuman, battleshipHuman, cruiserHuman, submarineHuman, patrolBoatHuman)
computerShipsArr.push(carrierComp, battleshipComp, cruiserComp, submarineComp, patrolBoatComp)

function gameReset() {
  console.log("beginning of game reset func", humanPlayer.allShipsSunk)
  console.log("beginning of game reset func", computerPlayer.allShipsSunk);

  // Human Reset
  humanPlayer.gameBoardInstance.reset();
  humanShipsArr.forEach((ship) => ship.reset());
  pickNewShipPlacement(humanPlayer, humanGameBoard);
  renderPlayerBoards(humanPlayer, humanGameBoard);
  addListenersToCells(humanPlayer, humanGameBoard);
  humanPlayer.allShipsSunk = 0;
  humanShipsSunkCount.innerHTML = 0;
  // Computer Reset
  computerPlayer.gameBoardInstance.reset();
  computerShipsArr.forEach((ship) => ship.reset());
  pickNewShipPlacement(computerPlayer, computerGameBoard);
  renderPlayerBoards(computerPlayer, computerGameBoard);
  addListenersToCells(computerPlayer, computerGameBoard);
  computerPlayer.allShipsSunk = 0;
  computerShipsSunkCount.innerHTML = 0;

  chooseShipPlacementBtn.addEventListener("click", pickNewShipPlacement);
  isGameOver = false;
  currentPlayer = humanPlayer;
  modal.close();
  console.log("end of game reset func", humanPlayer.allShipsSunk);
  console.log("end of game reset func", computerPlayer.allShipsSunk);
}

function restartGame(player) {
  console.log("restart window", humanPlayer.allShipsSunk);
  console.log("restart window", computerPlayer.allShipsSunk);
  winnerText.innerHTML = player.isComputer ? `Human has WON!` : `Computer has WON!`;
  modal.showModal();
}

function renderPlayerBoards(player, playerBoard) {
  playerBoard.innerHTML = "";
  for (let i = 0; i < player.gameBoardInstance.board.length; i++) {
    let rowWrapper = document.createElement("div");
    rowWrapper.classList.add("row");
    for (let j = 0; j < player.gameBoardInstance.board[i].length; j++) {
      let cellElement = document.createElement("div");
      cellElement.classList.add("cell");
      cellElement.dataset.row = i;
      cellElement.dataset.col = j;
// Uncomment for Debugging |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
      // if (player.gameBoardInstance.board[i][j].ship) {
      //   cellElement.classList.add("hasShip");
      // }
// Comment for Debugging
      if (player.gameBoardInstance.board[i][j].ship) {
        if (player.isComputer === false) cellElement.classList.add("hasShip");
        player.gameBoardInstance.board[i][j].ship && player.isComputer === false && cellElement.classList.add("hasShip");
      }
      rowWrapper.appendChild(cellElement);
    }
    playerBoard.appendChild(rowWrapper);
  }
}

function updateCell(cell, boardCell, player) {
    console.log("update cell", humanPlayer.allShipsSunk);
    console.log("update cell", computerPlayer.allShipsSunk);
  if (cell) {
    cell.innerText = "X";
    boardCell.hit ? cell.classList.add("hit") : cell.classList.add("miss")
    }

  if (boardCell.ship && boardCell.ship.sunk) {
    player.allShipsSunk++;
    player.isComputer 
      ? computerShipsSunkCount.innerHTML = `${player.allShipsSunk}` 
      : humanShipsSunkCount.innerHTML = `${player.allShipsSunk}`;
    
    if (player.allShipsSunk === 5) {
      computerGameBoard.classList.add("board-not-active");
      isGameOver = true;
      restartGame(player);
    }
  }
}

function handleComputerAttack() {
  let row = Math.floor(Math.random() * 10);
  let col = Math.floor(Math.random() * 10);
  let coordinate = `${row},${col}`;

  while (computerPicks.includes(coordinate)) {
    row = Math.floor(Math.random() * 10);
    col = Math.floor(Math.random() * 10);
    coordinate = `${row},${col}`;
  }

  const cell = document.querySelector(`[data-row='${row}'][data-col='${col}']`);

  computerPicks.push(coordinate);
  const boardCell = humanPlayer.gameBoardInstance.board[row][col];
  humanPlayer.gameBoardInstance.receiveAttack(row, col);

  updateCell(cell, boardCell, humanPlayer)
  nextTurn();
}


function nextTurn() {
  if (isGameOver) return;

  if (currentPlayer === humanPlayer) {
    currentPlayer = computerPlayer;
    computerGameBoard.classList.add("board-not-active");
    handleComputerAttack();
  } else {
    currentPlayer = humanPlayer;
    computerGameBoard.classList.remove("board-not-active");
  }
}

function handleClick(player) {
  return function (event) {
    const cell = event.target;
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);
    const boardCell = player.gameBoardInstance.board[row][col];

    player.gameBoardInstance.receiveAttack(row, col);
    updateCell(cell, boardCell, player)
    nextTurn();
  };
}

function addListenersToCells(player, board) {
  const cells = board.querySelectorAll(".cell");

  cells.forEach((cell) => {
    const handleEvent = handleClick(player); // Create a new handler for each cell
    cell.addEventListener("click", handleEvent, { once: true }); // makes cell only clickable once
  });
}

function randomShipPlacement(player, a, b, c, d, e) {
  player.gameBoardInstance.randomlyPlaceShip(a);
  player.gameBoardInstance.randomlyPlaceShip(b);
  player.gameBoardInstance.randomlyPlaceShip(c);
  player.gameBoardInstance.randomlyPlaceShip(d);
  player.gameBoardInstance.randomlyPlaceShip(e);
}

export {
  randomShipPlacement,
  renderPlayerBoards,
  addListenersToCells,
  humanPlayer,
  computerPlayer,
  currentPlayer,
  humanShipsArr,
  computerShipsArr
};