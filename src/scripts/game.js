import Board from "./board";
import Levels from "./levels";

export default class CoinExplorer {
  constructor(gameCanvas){
    this.ctx = gameCanvas.getContext("2d");
    this.gameWidth = gameCanvas.width;
    this.gameHeight = gameCanvas.height;
    this.renderHomeScreen();
    this.gameRunning = false;
    this.currentLevel = 1;
    // esc key for home screen
    document.addEventListener('keydown', event => {
      if (event.keyCode === 27) {
        this.gameRunning = false;
        this.renderHomeScreen();
      }
    });
  }

  renderHomeScreen() {
    this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);

    this.ctx.font = "bold 80px Arial";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText("COIN EXPLORER", 170, 300);
    this.ctx.strokeStyle = "blue";
    this.ctx.lineWidth = 2;
    this.ctx.strokeText("COIN EXPLORER", 170, 300);

    this.ctx.fillStyle = "blue"
    this.ctx.font = "bold 30px Arial";
    this.ctx.fillText("Press Enter to Begin!", 350, 500);

    this.ctx.font = "bold 20px Arial";
    this.ctx.fillText("Press esc to go back to home screen", 340, 560);

    const coin = new Image();
    coin.onload = function () {
      this.ctx.drawImage(coin, 280, 470, 40, 40);
    }.bind(this);
    coin.src = "./src/images/items/coin-gold.png";

    const slime = new Image();
    slime.onload = function() {
      this.ctx.drawImage(slime, 280, 530, 40, 40);
    }.bind(this);
    slime.src = "./src/images/slime/slime.png";

    this.checkEnter = this.checkEnter.bind(this);
    document.addEventListener('keydown', this.checkEnter);
  }

  checkEnter(event) {
    if (event.keyCode === 13) {
      debugger
      document.removeEventListener('keydown', this.checkEnter);
      this.ctx.fillStyle = "black"
      this.currentLevel = 1;
      this.newGame();
    }
  }

  renderGameOver() {
    this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);

    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);

    this.ctx.font = "bold 80px Arial";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("GAME OVER", 250, 300);

    this.ctx.font = "bold 30px Arial";
    this.ctx.fillText("Press r key to retry level", 325, 500);

    this.ctx.font = "bold 20px Arial";
    this.ctx.fillText("Press esc to go back to home screen", 325, 560);

    const sadSlime = new Image();
    sadSlime.onload = function () {
      this.ctx.drawImage(sadSlime, 730, 500, 298, 200);
    }.bind(this);
    sadSlime.src = "./src/images/slime/sad-slime.png";

    this.checkRestart = this.checkRestart.bind(this);
    document.addEventListener('keydown', this.checkRestart);
  }

  checkRestart(event) {
    if (event.keyCode === 82) {
      document.removeEventListener('keydown', this.checkRestart);
      this.gameRunning = true;
      this.newGame();
    }
  }

  renderWin() {
    this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);

    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);

    this.ctx.font = "bold 80px Arial";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("YOU WIN!", 300, 200);

    this.ctx.font = "bold 30px Arial";
    this.ctx.fillText("Congrats on beating the game!", 280, 500);

    this.ctx.font = "bold 20px Arial";
    this.ctx.fillText("Press esc to go back to home screen", 325, 560);

    const chest = new Image();
    chest.onload = function () {
      this.ctx.drawImage(chest, 430, 250, 139, 149);
    }.bind(this);
    chest.src = "./src/images/items/chest-gold-close.png";

  }

  newGame(){
    debugger
    this.gameRunning = true;
    this.coins = 0;
    this.time = 60;
    this.prevTime = 0;
    this.levels = new Levels().getLevels()
    this.maxLevel = this.levels.length - 1;
    this.board = new Board(this.gameWidth, this.gameHeight, this.ctx, this.levels[this.currentLevel]);
    this.gameLoop = this.gameLoop.bind(this);
    this.gameLoop();
  }

  gameLoop(timestamp) {
    if (!this.gameRunning) return;
  
    let time = timestamp - this.prevTime;
    this.prevTime = timestamp;

    this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);

    this.renderCoins(this.coins)

    let result = this.board.updateBoard(time);
    if (typeof result === 'boolean'){
      debugger
      this.gameRunning = false;
      this.renderGameOver();
      return;
    }

    this.coins += (isNaN(result) ? 0 : result);
    if (this.coins >= this.board.numCoins){
      debugger
      this.gameRunning = false;
      if (this.currentLevel < this.maxLevel){
        this.currentLevel += 1;
        this.newGame();
      }
      else {
        this.renderWin();
      }
      return;
    }
    requestAnimationFrame(this.gameLoop);
  }

  renderCoins(coins){
    this.ctx.font = "20px Arial";
    this.ctx.fillText("Coins:", this.gameWidth - 110, 30);
    this.ctx.fillText(coins, this.gameWidth - 40, 30);
  }
}