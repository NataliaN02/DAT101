"use strict";

//-----------------------------------------------------------------------------------------
//----------- Import modules, mjs files  ---------------------------------------------------
//-----------------------------------------------------------------------------------------
import { TSpriteCanvas, TSprite } from "libSprite";
import { TGameBoard, GameBoardSize, TBoardCell } from "./gameBoard.js";
import { TSnake, EDirection } from "./snake.js";
import { TBait } from "./bait.js";
import { TMenu } from "./menu.js";

//-----------------------------------------------------------------------------------------
//----------- variables and object --------------------------------------------------------
//-----------------------------------------------------------------------------------------
const cvs = document.getElementById("cvs");
const spcvs = new TSpriteCanvas(cvs);
let gameSpeed = 4; // Game speed multiplier;
let hndUpdateGame = null;
let gameMenu = null;
export const EGameStatus = { Idle: 0, Playing: 1, Pause: 2, GameOver: 3 };
cvs.addEventListener("click", onMouseClick);



// prettier-ignore
export const SheetData = {
  Head:     { x:   0, y:   0, width:  38, height:  38, count:  4 },
  Body:     { x:   0, y:  38, width:  38, height:  38, count:  6 },
  Tail:     { x:   0, y:  76, width:  38, height:  38, count:  4 },
  Bait:     { x:   0, y: 114, width:  38, height:  38, count:  1 },
  Play:     { x:   0, y: 155, width: 202, height: 202, count: 10 },
  GameOver: { x:   0, y: 647, width: 856, height: 580, count:  1 },
  Home:     { x:  65, y: 995, width: 169, height: 167, count:  1 },
  Retry:    { x: 614, y: 995, width: 169, height: 167, count:  1 },
  Resume:   { x:   0, y: 357, width: 202, height: 202, count: 10 },
  Number:   { x:   0, y: 560, width:  81, height:  86, count: 10 },
};

export const GameProps = {
  gameBoard: null,
  gameStatus: EGameStatus.Idle,
  snake: null,
  bait: null,
  score: 0,
  baitSpawnTime: 0
};

//------------------------------------------------------------------------------------------
//----------- Exported functions -----------------------------------------------------------
//------------------------------------------------------------------------------------------

export function newGame() {
  clearInterval(hndUpdateGame);
  GameProps.gameBoard = new TGameBoard();
  GameProps.snake = new TSnake(spcvs, new TBoardCell(5, 5)); // Initialize snake with a starting position
  GameProps.bait = new TBait(spcvs); // Initialize bait with a starting position
  GameProps.score = 0;
  gameSpeed = 4; // Reset game speed
  hndUpdateGame = 
    setInterval(updateGame, 1000 / gameSpeed);
}

export function baitIsEaten() {

  console.log("Bait eaten!");
  /* Logic to increase the snake size and score when bait is eaten */
  // Time passed since bait spawned
  const elapsedTime = Date.now() - GameProps.baitSpawnTime;
  // Convert ms to seconds
  const seconds = elapsedTime / 1000;
  let points = 1; // minimal score
  if (seconds <= 3) {
    points = 5;
  } else if (seconds <= 4) {
    points = 4;
  } else if (seconds <= 5) {
    points = 3;
  } else if (seconds <= 6) {
    points = 2;
  }
  GameProps.score += points;
  console.log(`+${points} points`);
  console.log(`Total score: ${GameProps.score}`);
  GameProps.snake.grow();
  GameProps.bait.update();
  increaseGameSpeed(); // Increase game speed
}


//------------------------------------------------------------------------------------------
//----------- functions -------------------------------------------------------------------
//------------------------------------------------------------------------------------------

function loadGame() {
  cvs.width = GameBoardSize.Cols * SheetData.Head.width;
  cvs.height = GameBoardSize.Rows * SheetData.Head.height;

  GameProps.gameStatus = EGameStatus.Idle; // change game status to Idle
  
  /* Create the game menu here */ 
  gameMenu = new TMenu(spcvs);

  requestAnimationFrame(drawGame);
  console.log("Game canvas is rendering!");
  hndUpdateGame = setInterval(updateGame, 1000 / gameSpeed); // Update game every 1000ms / gameSpeed
  console.log("Game canvas is updating!");
}

function drawGame() {
  // Clear the canvas
  spcvs.clearCanvas();

  switch (GameProps.gameStatus) {
    case EGameStatus.Playing:
    case EGameStatus.Pause:
      GameProps.bait.draw();
      GameProps.snake.draw();
      break;
  }
  // Score is shown only when the game is being played or paused
  if (
    GameProps.gameStatus === EGameStatus.Playing ||
    GameProps.gameStatus === EGameStatus.Pause
  ) {
    drawScore();
  }
  gameMenu.draw();
  // Request the next frame
  requestAnimationFrame(drawGame);
}

function updateGame() {
  // Update game logic here
  switch (GameProps.gameStatus) {
    case EGameStatus.Playing:

      if (!GameProps.snake.update()) {
        GameProps.gameStatus = EGameStatus.GameOver;
        console.log("Game over!");
      }
      break;
  }
}

function increaseGameSpeed() {
  /* Increase game speed logic here */
  // speed limit 15
  if (gameSpeed < 15) {
      gameSpeed += 0.5;
  }
  console.log(`Speed: ${gameSpeed}`);
  // Clear old update loop
  clearInterval(hndUpdateGame);
  // Start new faster loop
  hndUpdateGame = setInterval(updateGame, 1000 / gameSpeed);
}

function drawScore() {
  const scoreText = GameProps.score.toString();
  let x = 20;
  const y = 20;
  for (let i = 0; i < scoreText.length; i++) {
    const digit = parseInt(scoreText[i]);
    // Create temporary sprite
    const numberSprite = new TSprite(
      spcvs,
      SheetData.Number,
      x,
      y
    );
    // Select correct digit sprite
    numberSprite.index = digit;
    // Draw sprite
    numberSprite.draw();
    x += 60; // space between digits
  }
}

//-----------------------------------------------------------------------------------------
//----------- Event handlers --------------------------------------------------------------
//-----------------------------------------------------------------------------------------

function onKeyDown(event) {
  switch (event.key) {
    case "ArrowUp":
      GameProps.snake.setDirection(EDirection.Up);
      break;
    case "ArrowDown":
      GameProps.snake.setDirection(EDirection.Down);
      break;
    case "ArrowLeft":
      GameProps.snake.setDirection(EDirection.Left);
      break;
    case "ArrowRight":
      GameProps.snake.setDirection(EDirection.Right);
      break;
    case " ":
      console.log("Space key pressed!");
      /* Pause the game logic here */
      if (GameProps.gameStatus === EGameStatus.Playing) {
        GameProps.gameStatus = EGameStatus.Pause
      } else if (GameProps.gameStatus === EGameStatus.Pause) {
        GameProps.gameStatus = EGameStatus.Playing
      }
      break;
    default:
      console.log(`Key pressed: "${event.key}"`);
  }
}

function onMouseClick(event) {
  const rect = cvs.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;
  switch(GameProps.gameStatus) {
    case EGameStatus.Idle:
      if (gameMenu.playButton.isClicked(mouseX, mouseY)) {
        newGame();
        GameProps.gameStatus = EGameStatus.Playing;
      }
      break;
    case EGameStatus.GameOver:
      if (gameMenu.retryButton.isClicked(mouseX, mouseY)) {
        newGame();
        GameProps.gameStatus = EGameStatus.Playing
      }
      if (gameMenu.homeButton.isClicked(mouseX, mouseY)) {
        GameProps.gameStatus = EGameStatus.Idle;
      }
      break;
  }
}
//-----------------------------------------------------------------------------------------
//----------- main -----------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

spcvs.loadSpriteImage("./Media/spriteSheet.png", loadGame);
document.addEventListener("keydown", onKeyDown);
