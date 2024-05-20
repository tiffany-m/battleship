let humanGameBoard = document.getElementById("human-game-board");
let computerGameBoard = document.getElementById("computer-game-board");
let chooseShipPlacementBtn = document.getElementById("choose-ship-placement-btn");
let startGameBtn = document.getElementById('start-game-btn');
let humanShipsSunkCount = document.querySelector(".human-ship-sunk-count")
let computerShipsSunkCount = document.querySelector(".computer-ship-sunk-count");

export {
  humanGameBoard,
  computerGameBoard,
  chooseShipPlacementBtn,
  startGameBtn,
  humanShipsSunkCount,
  computerShipsSunkCount
};
