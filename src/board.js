import Character from "./character";
import InputHandler from "./input";
import Tile from "./tile";
import Coin from "./coin";
import Spike from "./spike";

// size 25 x 18 (1000 x 720), 40 x 40 pixels per block
let GAME_MAP = new Array(
  "                         ",
  "         C S C S C       ",
  "       ############      ",
  "                         ",
  "   ##                ##  ",
  "                         ",
  "   M     M            SS ",
  "###############    ######",
  "                         ",
  "C        S              C",
  "#       ##     ###    ###",
  "##M                      ",
  "####S       C         M  ",
  "######  C  ###   C  #####",
  "        #       ##       ",
  "C                        ",
  "C      M       P    C   C",
  "#SSS#######   ###  ###SS#"
);


export default class Board {
  constructor(gameWidth, gameHeight, ctx){
    this.ctx = ctx;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.board = [];
    this.character = new Character(this.gameWidth, this.gameHeight, 600, 600);
    new InputHandler(this.character);
    this.coinsArr = [];
    this.tilesArr = [];
    this.spikesArr = [];
    this.initializeBoard();
  }

  initializeBoard() {
    let pos_x;
    let pos_y;
    let temp;
    for (let i = 0; i < GAME_MAP.length; i++){
      temp = [];
      for (let j = 0; j < GAME_MAP[0].length; j++) {
        pos_y = i * 40;
        pos_x = j * 40;
        if (GAME_MAP[i][j] === "#"){
          let tile = new Tile(pos_x, pos_y, this.ctx);
          temp.push(tile);
          this.tilesArr.push(tile);
        }
        else if (GAME_MAP[i][j] === "P"){
          temp.push(this.character);
        }
        else if (GAME_MAP[i][j] === "C") {
          let coin = new Coin(pos_x, pos_y, this.ctx);
          temp.push(coin);
          this.coinsArr.push(coin);
        }
        else if (GAME_MAP[i][j] === "S") {
          let spike = new Spike(pos_x, pos_y, this.ctx);
          temp.push(spike);
          this.spikesArr.push(spike);
        }
        else {
          temp.push(" ");
        }
      }
      this.board.push(temp);
    }
  }

  updateBoard(time) {
    if (!time) return;

    // Render sakura trees
    const treeImage = new Image();
    treeImage.src = "./src/images/bg/sakura.png";
    this.ctx.drawImage(treeImage, 40, -20, 150, 300);
    this.ctx.drawImage(treeImage, 900, 80, 120, 200);
    
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

    // Update score and character position
    let numCoins = this.coinsArr.length;
    let result = this.character.update(this.board, this.coinsArr, this.spikesArr);
    if (typeof result === 'boolean') return true;
    this.coinsArr = result;
    
    // Render character
    this.character.renderCharacter(this.ctx);
    
    return (numCoins - this.coinsArr.length);
  }
}