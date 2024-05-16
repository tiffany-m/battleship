import { Player } from "./player.js";
import {
  humanGameBoard,
  computerGameBoard,
  sunkAlert,
  closePopUpBtn,
  endOfGameAlert,
} from "./dom.js";
let humanPlayer = new Player(false);
let computerPlayer = new Player(true);
let currentPlayer = humanPlayer;
let computerPicks = [];

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
        if (player.isComputer === false) cellElement.classList.add("hasShip");
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
      endOfGameAlert.classList.replace("hidden", "visible");

      if(player.isComputer) {
        alert(`Computer loses, all ships sunk`);
      } else {
        alert(`Human loses, all ships sunk`);
      }
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
  if (currentPlayer === humanPlayer) {
    currentPlayer = computerPlayer;
    computerGameBoard.classList.add("nextTurn");
    handleComputerAttack();
  } else {
    currentPlayer = humanPlayer;
    computerGameBoard.classList.remove("nextTurn");
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

export {
  renderPlayerBoards,
  addListenersToCells,
  humanPlayer,
  computerPlayer,
  currentPlayer,
};