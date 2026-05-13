"use strict";

/* Use this file to create the menu for the snake game. */
import { TSprite } from "libSprite";
import { SheetData, GameProps, EGameStatus, newGame } from "./game.mjs";

class TButton extends TSprite {

  constructor(aSpriteCanvas, aSpriteInfo, x, y) {
    super(aSpriteCanvas, aSpriteInfo, x, y);
  }

  isClicked(mouseX, mouseY) {

    return (
      mouseX >= this.x &&
      mouseX <= this.x + this.spi.width &&
      mouseY >= this.y &&
      mouseY <= this.y + this.spi.height
    );
  }
}

export class TMenu {

  constructor(aSpriteCanvas) {

    this.playButton =
      new TButton(aSpriteCanvas, SheetData.Play, 365, 235);

    this.resumeButton =
      new TButton(aSpriteCanvas, SheetData.Resume, 365, 235);

    this.retryButton =
      new TButton(aSpriteCanvas, SheetData.Retry, 645, 400);

    this.homeButton =
      new TButton(aSpriteCanvas, SheetData.Home, 95, 400);

    this.gameOverSprite =
      new TSprite(aSpriteCanvas, SheetData.GameOver, 30, 50);
  }

  draw() {

    switch(GameProps.gameStatus) {

      case EGameStatus.Idle:
        this.playButton.draw();
        break;

      case EGameStatus.Pause:
        this.resumeButton.draw();
        break;

      case EGameStatus.GameOver:
        this.gameOverSprite.draw();
        this.drawFinalScore();
        this.retryButton.draw();
        this.homeButton.draw();
        break;
    }
  }

  drawFinalScore() {
    const scoreText = GameProps.score.toString();
    let x = 600;
    const y = 255;
    for (let i = 0; i < scoreText.length; i++) {
        const digit = parseInt(scoreText[i]);
        const numberSprite = new TSprite(
            this.playButton.spcvs,
            SheetData.Number,
            x,
            y
        );
        numberSprite.index = digit;
        numberSprite.draw();
        x += 60;
    }
  }
}