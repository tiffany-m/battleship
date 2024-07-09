import battleshipLogo from "../battleship-logo.png";

let logoContainer = document.getElementById("logo-container");
let humanGameBoard = document.getElementById("human-game-board");
let computerGameBoard = document.getElementById("computer-game-board");
let chooseShipPlacementBtn = document.getElementById("choose-ship-placement-btn");
let startGameBtn = document.getElementById("start-game-btn");
let restartGameBtn = document.getElementById("restart-game-btn");
let humanShipsSunkCount = document.querySelector(".human-ship-sunk-count");
let computerShipsSunkCount = document.querySelector(".computer-ship-sunk-count");
let winnerText = document.getElementById("winner-text");

const gameLogo = new Image();
gameLogo.src = battleshipLogo;
gameLogo.classList.add("logo")
logoContainer.appendChild(gameLogo);

export { humanGameBoard, computerGameBoard, chooseShipPlacementBtn, startGameBtn, restartGameBtn, humanShipsSunkCount, computerShipsSunkCount, winnerText };
