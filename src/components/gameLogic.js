import { Player } from "./player.js";
import {
  computerGameBoard,
  sunkAlert,
  closePopUpBtn,
} from "./dom.js";
let humanPlayer = new Player(false);
let computerPlayer = new Player(true);
let currentPlayer = humanPlayer;
let computerPicks = [];
let isGameOver = false;

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
// FIX LATER SO SHIPS ON COMPUTER BOARD DONT SHOW IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
      if (player.gameBoardInstance.board[i][j].ship) {
        // if (player.isComputer === false) cellElement.classList.add("hasShip");
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

function updateCell(cell, boardCell, player) {
  if (cell) {
    if (boardCell.hit) {
      cell.innerText = "X";
      cell.classList.add("hit");
    } else {
      cell.classList.add("miss");
    }
  }

  if (boardCell.ship && boardCell.ship.sunk) {
    sunkAlert.classList.replace("hidden", "visible");
    player.allShipsSunk++;
    if (player.allShipsSunk === 5) {
      computerGameBoard.classList.add("board-not-active");

      if (player.isComputer) {
        modal.showModal();
        modal.innerHTML = "Computer has lost."
      } else {
        modal.showModal();
        modal.innerHTML = "Human has lost."
      }

      isGameOver = true;
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
  if (isGameOver) {
    return; // Exit the function if the game is over
  }

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
};