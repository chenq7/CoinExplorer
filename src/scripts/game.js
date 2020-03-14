import Board from "./board";
import Levels from "./levels";

export default class CoinExplorer {
  constructor(gameCanvas){
    this.ctx = gameCanvas.getContext("2d");
    this.gameWidth = gameCanvas.width;
    this.gameHeight = gameCanvas.height;
    this.gameRunning = false;
    this.currentLevel = 1;
    this.numDeaths = 0;
    this.muted = false;
    this.setSound();
    this.renderHomeScreen();
    this.addListeners();
  }

  setSound() {
    this.menuMusic = new Audio("./src/audio/music/main-menu.mp3");
    this.menuMusic.volume = 0.3;
    this.menuMusic.loop = true;
    this.gameMusic = new Audio("./src/audio/music/background.mp3");
    this.menuMusic.volume = 0.7;
    this.gameMusic.loop = true;
    this.winMusic = new Audio("./src/audio/music/victory.mp3");
    this.winMusic.loop = true;
    this.winMusic.volume = 0.35;
    this.selectSound = new Audio("./src/audio/sound/select.wav");
  }

  play(sound) {
    if (this.muted) return;
    sound.pause();
    sound.currentTime = 0;
    sound.play();
  }

  pauseAllMusic(){
    this.menuMusic.pause();
    this.gameMusic.pause();
    this.winMusic.pause();
  }

  addListeners(){
    document.addEventListener('click', event => {
      if (!this.gameRunning && !this.muted) {
        this.menuMusic.play();
      }
    });
    document.addEventListener('keydown', event => {
      // m key
      if (event.keyCode === 77){
        if (this.muted){
          if (this.gameRunning){
            this.gameMusic.play();
          }
          else {
            this.menuMusic.play();
          }
          this.muted = false;
        }
        else {
          this.pauseAllMusic();
          this.muted = true;
        }
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
    coin.src = "./src/images/items/coin-gold.png";
    coin.onload = function () {
      this.ctx.drawImage(coin, 280, 470, 40, 40);
    }.bind(this);

    const slime = new Image();
    slime.src = "./src/images/slime/slime.png";
    slime.onload = function() {
      this.ctx.drawImage(slime, 280, 530, 40, 40);
    }.bind(this);

    this.checkEnter = this.checkEnter.bind(this);
    document.addEventListener('keydown', this.checkEnter);
  }

  checkEnter(event) {
    if (event.keyCode === 13) {
      
      this.play(this.selectSound);
      document.removeEventListener('keydown', this.checkEnter);
      this.currentLevel = 1;
      this.newGame();
    }
  }

  checkEsc(event){
    // esc key
    if (event.keyCode === 27) {
      document.removeEventListener('keydown', this.checkEsc);
      document.removeEventListener('keydown', this.checkRestart);
      this.gameRunning = false;
      this.pauseAllMusic();
      this.play(this.selectSound);
      this.play(this.menuMusic);
      this.renderHomeScreen();
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
      this.play(this.selectSound);
      document.removeEventListener('keydown', this.checkRestart);
      this.gameRunning = true;
      this.newGame();
    }
  }

  renderWin() {
    this.gameMusic.pause();
    this.play(this.winMusic);
    this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);

    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);

    this.ctx.font = "bold 80px Arial";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("YOU WIN!", 305, 200);

    this.ctx.font = "bold 30px Arial";
    this.ctx.fillText("Congrats on beating the game!", 280, 480);

    this.ctx.fillStyle = "blue"
    this.ctx.fillText(`You died a total of ${this.numDeaths} times`, 322, 560);
    
    this.ctx.fillStyle = "white"
    this.ctx.font = "bold 20px Arial";
    this.ctx.fillText("Press esc to go back to home screen", 325, 640);

    const chest = new Image();
    chest.onload = function () {
      this.ctx.drawImage(chest, 430, 250, 139, 149);
    }.bind(this);
    chest.src = "./src/images/items/chest-gold-close.png";
  }

  newGame(){
    if (!this.gameRunning){
      this.menuMusic.pause()
      this.play(this.gameMusic);
      this.numDeaths = 0;
    }
    document.removeEventListener('keydown', this.checkEsc);
    this.checkEsc = this.checkEsc.bind(this);
    document.addEventListener('keydown', this.checkEsc);
    this.ctx.fillStyle = "black"
    this.gameRunning = true;
    this.coins = 0;
    this.time = 60;
    this.prevTime = 0;
    this.levels = Levels();
    this.maxLevel = this.levels.length - 1;
    this.board = new Board(this.gameWidth, this.gameHeight, this.ctx, this.levels[this.currentLevel], this.currentLevel);
    this.gameLoop = this.gameLoop.bind(this);
    this.gameLoop();
  }

  gameLoop(timestamp) {
    if (!this.gameRunning) return;
  
    let time = timestamp - this.prevTime;
    this.prevTime = timestamp;

    this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);

    this.renderDeaths(this.numDeaths);
    this.renderCoins(this.coins);

    let result = this.board.updateBoard(time);
    if (typeof result === 'boolean'){
      this.numDeaths += 1;
      // this.gameRunning = false;
      this.renderGameOver();
      return;
    }

    this.coins += (isNaN(result) ? 0 : result);
    if (this.coins >= this.board.numCoins){
      
      if (this.currentLevel < this.maxLevel){
        this.currentLevel += 1;
        this.newGame();
      }
      else {
        // this.gameRunning = false;
        this.renderWin();
      }
      return;
    }
    requestAnimationFrame(this.gameLoop);
  }

  renderDeaths(deaths) {
    this.ctx.font = "20px Arial";
    this.ctx.fillText("Deaths:", 10, 30);
    this.ctx.fillText(deaths, 90, 30);
  }

  renderCoins(coins){
    this.ctx.font = "20px Arial";
    this.ctx.fillText("Coins:", this.gameWidth - 110, 30);
    this.ctx.fillText(coins, this.gameWidth - 40, 30);
  }
}