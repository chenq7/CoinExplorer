import Level from "./level";

export default class CoinExplorer {
  constructor(gameCanvas){
    this.ctx = gameCanvas.getContext("2d");
    this.gameWidth = gameCanvas.width;
    this.gameHeight = gameCanvas.height;
    this.renderHomePage();
    this.gameRunning = false;
    document.addEventListener('keydown', event => {
      debugger
      if (event.keyCode === 27) {
        debugger
        this.gameRunning = false;
        this.renderHomePage();
      }
    });
  }

  renderHomePage() {
    this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);

    this.ctx.font = "bold 80px Arial";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText("COIN EXPLORER", 170, 300);
    this.ctx.strokeStyle = "blue";
    this.ctx.lineWidth = 2;
    this.ctx.strokeText("COIN EXPLORER", 170, 300);

    this.ctx.fillStyle = "blue"
    this.ctx.font = "bold 30px Arial";
    this.ctx.fillText("Press Enter to Begin Game!", 300, 500);

    this.ctx.font = "bold 20px Arial";
    this.ctx.fillText("Press esc to go back to home", 350, 550);

    this.checkEnter = this.checkEnter.bind(this);
    document.addEventListener('keydown', this.checkEnter);
  }

  checkEnter(event) {
    if (event.keyCode === 13) {
      document.removeEventListener('keydown', this.checkEnter);
      this.ctx.fillStyle = "black"
      this.gameRunning = true;
      this.newGame();
    }
  }

  newGame(){
    this.coins = 0;
    this.time = 60;
    this.prevTime = 0;
    this.level = new Level(this.gameWidth, this.gameHeight, this.ctx);
    this.gameLoop = this.gameLoop.bind(this);
    this.gameLoop();
  }

  gameLoop(timestamp) {
    if (!this.gameRunning) return;

    let time = timestamp - this.prevTime;
    this.prevTime = timestamp;

    this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);

    this.renderCoins(this.coins)

    let coins = this.level.updateBoard(time);
    this.coins += (isNaN(coins) ? 0 : coins);

    requestAnimationFrame(this.gameLoop);
  }

  renderCoins(coins){
    this.ctx.font = "20px Arial";
    this.ctx.fillText("Coins:", this.gameWidth - 110, 30);
    this.ctx.fillText(coins, this.gameWidth - 40, 30);
  }
}