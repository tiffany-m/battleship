import { Player } from "./player.js"
import {
  humanGameBoard,
  computerGameBoard,
  sunkAlert,
  closePopUpBtn,
  endOfGameAlert,
} from "./dom.js";
let humanPlayer = new Player(false);
let computerPlayer = new Player(true);
let currentPlayer = humanPlayer

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

function nextTurn() {
  if (currentPlayer === humanPlayer) {
    currentPlayer = computerPlayer;
    computerGameBoard.classList.add("nextTurn");
    humanGameBoard.classList.remove("nextTurn");
  } else {
    currentPlayer = humanPlayer;
    humanGameBoard.classList.add("nextTurn");
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

    if (boardCell.hit) {
      cell.innerText = "X";
      cell.classList.add("hit");
    } else {
      cell.classList.add("miss");
    }

    if (boardCell.ship && boardCell.ship.sunk) {
      sunkAlert.classList.replace("hidden", "visible");
      player.allShipsSunk++;
      if (player.allShipsSunk === 5) {
        endOfGameAlert.classList.replace("hidden", "visible");
        alert(`${player} loses, all ships sunk`);
      }
    }
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

export { renderPlayerBoards, addListenersToCells, humanPlayer, computerPlayer, currentPlayer };
