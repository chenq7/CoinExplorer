import Character from "./character";
import InputHandler from "./input";


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
    this.character = new Character(this.gameWidth, this.gameHeight);
    this.character.renderCharacter(this.ctx);
    new InputHandler(this.character);
  }

  gameLoop(timestamp) {
    // debugger
    let time = timestamp - this.prevTime;
    this.prevTime = timestamp;
    this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
    this.character.update(time);
    this.character.renderCharacter(this.ctx);

    requestAnimationFrame(this.gameLoop);
  }
}