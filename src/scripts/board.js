import Character from "./character";
import Tile from "./tile";
import Coin from "./coin";
import Spike from "./spike";
import { Snail, Pig, Fairy } from "./monster";

export default class Board {
  constructor(gameWidth, gameHeight, ctx, level, currLevel){
    
    this.ctx = ctx;
    this.currLevel = currLevel;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.board = level;
    this.coinsArr = [];
    this.tilesArr = [];
    this.spikesArr = [];
    this.monsters = [];
    this.tree = new Image();
    this.tree.src = "./src/images/bg/sakura.png";
    this.grass = new Image();
    this.grass.src = "./src/images/tiles/grass.png";
    this.initializeBoard();
  }

  initializeBoard() {
    
    let pos_x;
    let pos_y;
    let temp;
    for (let i = 0; i < this.board.length; i++){
      temp = [];
      for (let j = 0; j < this.board[0].length; j++) {
        pos_y = i * this.gameHeight / 18;
        pos_x = j * this.gameWidth / 25;
        if (this.board[i][j] === "#"){
          let tile = new Tile(pos_x, pos_y, this.ctx, this.gameWidth, this.gameHeight,);
          temp.push(tile);
          this.tilesArr.push(tile);
        }
        else if (this.board[i][j] === "P"){
          
          this.character = new Character(this.gameWidth, this.gameHeight, pos_x, pos_y);
          temp.push(this.character);
        }
        else if (this.board[i][j] === "C") {
          let coin = new Coin(pos_x, pos_y, this.ctx, this.gameWidth, this.gameHeight,);
          temp.push(coin);
          this.coinsArr.push(coin);
        }
        else if (this.board[i][j] === "S") {
          let spike = new Spike(pos_x, pos_y, this.ctx, this.gameWidth, this.gameHeight,);
          temp.push(spike);
          this.spikesArr.push(spike);
        }
        else if (this.board[i][j] === "Z") {
          let monster = new Snail(pos_x, pos_y, this.ctx, this.gameWidth, this.gameHeight);
          temp.push(monster);
          this.monsters.push(monster);
        }
        else if (this.board[i][j] === "X") {
          let monster = new Fairy(pos_x, pos_y, this.ctx, this.gameWidth, this.gameHeight);
          temp.push(monster);
          this.monsters.push(monster);
        }
        else if (this.board[i][j] === "V") {
          let monster = new Pig(pos_x, pos_y, this.ctx, this.gameWidth, this.gameHeight);
          temp.push(monster);
          this.monsters.push(monster);
        }
        else {
          temp.push(" ");
        }
      }
      this.board[i] = temp;
    }
    
    this.numCoins = this.coinsArr.length;
  }

  updateBoard(time) {
    if (!time) return;

    // Render background environment
    if (this.currLevel === 1) {
      this.ctx.drawImage(this.tree, this.gameWidth / 25, -(this.gameHeight / 36), this.gameWidth * 0.175, this.gameHeight / 2.4);
      this.ctx.drawImage(this.tree, this.gameWidth * 0.9, this.gameHeight / 9, this.gameWidth * 0.12, this.gameHeight / 3.6);
    }

    // Render tiles
    for (let i=0; i < this.tilesArr.length; i++){
      this.tilesArr[i].renderTile();
    }

    // Render Coins
    for (let i=0; i < this.coinsArr.length; i++){
      this.coinsArr[i].renderCoin();
    }

    // Render spikes
    for (let i = 0; i < this.spikesArr.length; i++) {
      this.spikesArr[i].renderSpike();
    }

    // Render monsters
    for (let i = 0; i < this.monsters.length; i++) {
      this.monsters[i].renderMonster();
    }

    // Update score and character position
    let numCoins = this.coinsArr.length;
    let result = this.character.update(this.board, this.coinsArr, this.spikesArr, this.monsters);
    if (typeof result === 'boolean') return true;
    this.coinsArr = result;
    
    // Render character
    this.character.renderCharacter(this.ctx);
    
    return (numCoins - this.coinsArr.length);
  }
}