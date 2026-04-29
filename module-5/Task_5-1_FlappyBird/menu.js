"use strict";
import { TSprite, TSpriteButton, TSpriteNumber} from "libSprite";
import { startGame, soundMuted } from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";
import { EGameStatus } from "./FlappyBird.mjs";
import { hero } from "./FlappyBird.mjs";
import {obstacles, baits} from "./FlappyBird.mjs";

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";

export class TMenu{
  highScores = [];
  #spTitle;
  #spPlayBtn;
  #spCountDown;
  #sfCountDown;
  #sfRunning;
  #spGameScore;
  #spGameOver;
  #spMedal;
  #spFinalScore;
  #spHighScore;
  #spInfoText;
  constructor(aSpcvs, aSPI){
    this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 205, 160);
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 243, 220);
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
    this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 285, 220);
    this.#spCountDown.visible = false;
    this.#sfCountDown = null;
    this.#sfRunning = null;
    this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 10, 10);
    this.#spGameScore.alpha = 0.5;
    this.#spGameOver = new TSprite(aSpcvs, aSPI.gameOver, 180, 100);
    this.#spGameOver.hidden = true;
    this.#spMedal = new TSprite(aSpcvs, aSPI.medal, 205, 144);
    this.#spMedal.hidden = true;
    this.#spFinalScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 360, 134);
    this.#spFinalScore.visible = false;
    this.#spHighScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 360, 175);
    this.#spHighScore.visible = false;
    this.#spInfoText = new TSprite(aSpcvs, aSPI.infoText, 200, 140);
    this.#spInfoText.hidden = true;
  }

  incGameScore(aScore){
    this.#spGameScore.value += aScore;
  }

  stopSound(){
    this.#sfRunning.stop();
  }

  setSoundMute(aIsMuted) {
  if (!this.#sfRunning) return;

  if (aIsMuted) {
    this.#sfRunning.pause();
  } else {
    this.#sfRunning.play();
  }
}

  draw(){
    this.#spTitle.draw();
    this.#spInfoText.draw();
    this.#spPlayBtn.draw();
    this.#spCountDown.draw();
    this.#spGameScore.draw();
    this.#spGameOver.draw();
    this.#spMedal.draw();
    this.#spFinalScore.draw();
    this.#spHighScore.draw();
  }

  countDown(){
    this.#spCountDown.value--;

    if(this.#spCountDown.value > 0){
      setTimeout(this.countDown.bind(this), 1000);
    } else {

      this.#spCountDown.visible = false;

      this.#spInfoText.hidden = true;

      EGameStatus.state = EGameStatus.gaming;

      this.#sfRunning = new TSoundFile(fnRunning);
      this.setSoundMute(soundMuted);

      startGame();
    }
  }

  showGameOver() {

    this.#sfRunning?.stop();

    this.#spInfoText.hidden = true;
    this.#spGameScore.visible = false;
    this.#spCountDown.visible = false;

    this.#spGameOver.hidden = false;
    this.#spPlayBtn.hidden = false;
    this.#spMedal.hidden = false;
    this.#spFinalScore.visible = true;
    this.#spHighScore.visible = true;


    const currentScore = this.#spGameScore.value;

    if (this.highScores.length === 0) {
      this.highScores.push(currentScore);
    } else {
      const best = Math.max(...this.highScores);

      if (currentScore > best) {
        this.highScores.push(currentScore);
      }
    }

    const highScore = Math.max(...this.highScores);

    this.#spHighScore.value = highScore;
    this.#spFinalScore.value = currentScore;


    if (currentScore == 0) {
      this.#spMedal.index = 0; 
      this.#spMedal.hidden = false;
    } 
    else if (currentScore <= 3) {
      this.#spMedal.index = 3; 
      this.#spMedal.hidden = false;
    } 
    else if (currentScore <= 6) {
      this.#spMedal.index = 1; 
      this.#spMedal.hidden = false;
    } 
    else {
      this.#spMedal.index = 2
    }
  }

  spPlayBtnClick(){
  console.log("Click!");

  hero.restart();

  this.#spGameScore.visible = true;
  this.#spGameScore.value = 0;

  obstacles.length = 0;
  baits.length = 0;

  this.#spGameScore.value = 0;

  this.#spGameOver.hidden = true;
  this.#spMedal.hidden = true;
  this.#spFinalScore.visible = false;
  this.#spHighScore.visible = false;

  this.#spPlayBtn.hidden = true;
  this.#spTitle.hidden = true;

  EGameStatus.state = EGameStatus.countDown;

  this.#spInfoText.hidden = false;
  this.#spInfoText.index = 0;

  this.#spCountDown.visible = true;
  this.#spCountDown.value = 3;

  this.#sfCountDown = new TSoundFile(fnCountDown);
  if (!soundMuted) this.#sfCountDown.play();

  setTimeout(this.countDown.bind(this), 1000);
}

}