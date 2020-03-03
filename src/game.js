// import Character from "./character";
// import InputHandler from "./input";
import Level from "./level";

export default class CoinExplorer {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.gameWidth = canvas.width;
    this.gameHeight = canvas.height;
    this.prevTime = 0;
    this.newGame();
    this.gameLoop = this.gameLoop.bind(this);
    this.gameLoop();
  }

  newGame(){
    this.coins = 0;
    this.time = 60;
    this.board = new Level(this.gameWidth, this.gameHeight, this.ctx);
  }

  gameLoop(timestamp) {
    let time = timestamp - this.prevTime;
    this.prevTime = timestamp;
    this.board.updateBoard(time);

    requestAnimationFrame(this.gameLoop);
  }
}