import Character from "./character";
import InputHandler from "./input";
import Tile from "./tile";
import Coin from "./coin";

// size 25 x 18 (1000 x 720), 40 x 40 pixels per block
let GAME_MAP = new Array(
  "         C   C   C       ",
  "       ############      ",
  "                         ",
  "                         ",
  "      ###    ###   ###   ",
  "                         ",
  "    M      M             ",
  "#################    ####",
  "                         ",
  "C                      C",
  "#              ###    ###",
  "##M                      ",
  "####       C          M  ",
  "######    #### C  #######",
  "               #         ",
  "C       #                ",
  "C     M # C    P    C   C",
  "#   #######   ###  ###  #"
);


export default class Level {
  constructor(gameWidth, gameHeight, ctx){
    this.ctx = ctx;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.board = [];
    this.character = new Character(this.gameWidth, this.gameHeight, 600, 600);
    new InputHandler(this.character);
    // this.initializeBoard = this.initializeBoard.bind(this);
    this.initializeBoard();
  }

  initializeBoard() {
    // this.character = new Character(this.gameWidth, this.gameHeight, 400, 840);
    // this.character.renderCharacter(this.ctx);
    // new InputHandler(this.character);
    let pos_x;
    let pos_y;
    let temp;
    for (let i = 0; i < GAME_MAP.length; i++){
      temp = [];
      for (let j = 0; j < GAME_MAP[0].length; j++) {
        pos_y = i * 40;
        pos_x = j * 40;
        if (GAME_MAP[i][j] === "#"){
          temp.push(new Tile(pos_x, pos_y, this.ctx));
        }
        else if (GAME_MAP[i][j] === "P"){
          temp.push(this.character);
        }
        else if (GAME_MAP[i][j] === "C") {
          temp.push(new Coin(pos_x, pos_y, this.ctx));
        }
        else {
          temp.push(" ");
        }
      }
      this.board.push(temp);
    }
    debugger
  }

  updateBoard(time) {
    this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
    if (!time) return;
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[0].length; j++) {
        if (this.board[i][j] instanceof Object && this.board[i][j].constructor.name === 'Tile'){
          this.board[i][j].renderTile();    
        }
        else if (this.board[i][j] instanceof Object && this.board[i][j].constructor.name === 'Coin') {
          this.board[i][j].renderCoin();
        }
      }
    }
    this.character.update();
    this.character.renderCharacter(this.ctx);
  }
}