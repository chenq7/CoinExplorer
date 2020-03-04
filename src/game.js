import Level from "./level";

export default class CoinExplorer {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.gameWidth = canvas.width;
    this.gameHeight = canvas.height;
    this.prevTime = 0;
    this.coins = 0;
    this.time = 60;
    this.newGame();
    this.gameLoop = this.gameLoop.bind(this);
    this.gameLoop();
  }

  newGame(){
    this.time = 60;
    this.level = new Level(this.gameWidth, this.gameHeight, this.ctx);
  }

  gameLoop(timestamp) {
    let time = timestamp - this.prevTime;
    this.prevTime = timestamp;

    this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);

    this.renderCoins(this.coins)

    let coins = this.level.updateBoard(time);
    this.coins += (isNaN(coins) ? 0 : coins);

    requestAnimationFrame(this.gameLoop);
  }

  renderCoins(coins){
    debugger
    this.ctx.font = "20px Arial";
    this.ctx.fillText("Coins:", this.gameWidth - 110, 30);
    this.ctx.fillText(coins, this.gameWidth - 40, 30);
  }
}