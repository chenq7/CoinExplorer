
export default class Character {
  constructor(gameWidth, gameHeight, startX, startY) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.characterWidth = 40;
    this.characterHeight = 55;
    this.jumping = true;
    this.x_velocity = 0;
    this.y_velocity = 5;
    this.position = { x: startX, y: startY }
    this.characterImage = new Image();
    this.characterImage.src = "./src/images/wizard/wizard/1_IDLE_000.png";
    this.flipped = false;
  }

  renderCharacter(ctx) {
    ctx.drawImage(
      this.characterImage,
      this.position.x,
      this.position.y,
      this.characterWidth,
      this.characterHeight
    );
  }

  moveCharacter(direction) {
    switch(direction){
      case 'none':
        this.x_velocity = 0;
        break;
      case 'left':
        if (!this.flipped){
          this.flipped = true;
          this.characterImage.src = "./src/images/wizard/wizard/1_IDLE_0001.png";
        }
        this.x_velocity = -7;
        break;
      case 'right':
        if (this.flipped) {
          this.flipped = false;
          this.characterImage.src = "./src/images/wizard/wizard/1_IDLE_000.png";
        }
        this.x_velocity = 7; 
        break;
      case 'up':
        this.y_velocity = -10;
        break;
      case 'fall':
        this.y_velocity = 5;
        break;
    }
  }

  bounds() {
    return {
      left: this.x,
      right: this.x + CONSTANTS.BIRD_WIDTH,
      top: this.y,
      bottom: this.y + CONSTANTS.BIRD_HEIGHT
    };
  }

  update(board, tiles, coins) {
    this.position.x += this.x_velocity;
    this.position.y += this.y_velocity;
    
    let left = this.position.x;
    let right = this.position.x + this.characterWidth
    let top = this.position.y;
    let bottom = this.position.y + this.characterHeight;
    
    // Check map edges
    if (left < 0) this.position.x = 0;
    if (right > this.gameWidth)
      this.position.x = this.gameWidth - this.characterWidth;
    if (bottom > this.gameHeight)
      this.position.y = this.gameHeight - this.characterHeight;
    if (top < 0) this.position.y = 0;

    // Check for tile collision
    // check for the four sides, if it hits a tile, reset position

    // 600, 665
    // handle down
    let charLeft = Math.floor(left / 40);
    let charRight = Math.floor(right / 40);
    let charTop = Math.floor(top / 40);
    let charBottom = Math.floor(bottom / 40);

    // if (this.position.x < charLeft * 40 && board[charBottom-1][charLeft] instanceof Object && 
    //   board[charBottom-1][charLeft].constructor.name === 'Tile'){
    //   this.position.x = charLeft * 40;
    // }
    // if (this.position.x > charRight * 40 && board[charBottom-1][charRight] instanceof Object &&
    //   board[charBottom-1][charRight].constructor.name === 'Tile') {
    //   this.position.x = charRight * 40 - 40;
    // }
    // if (this.position.y > charTop * 40 && board[charTop][charLeft+1] instanceof Object &&
    //   board[charTop][charLeft+1].constructor.name === 'Tile') {
    //   this.position.y = charTop * 40;
    // }
    // if (this.position.y < charBottom * 40 && board[charBottom][charLeft+1] instanceof Object &&
    //   board[charBottom][charLeft+1].constructor.name === 'Tile') {
    //   this.position.y = charBottom * 40 - 55;
    // }

    // handle tile collision 
    // for (let i=0; i < tiles.length; i++){
    //   if (this.position.x < coins[i].position.x + coins[i].width){

    //   }
    // }


    // handle coin collision
    for (let i=0; i < coins.length; i++) {
      if (
        this.position.x < coins[i].position.x + coins[i].width &&
        this.position.x + coins[i].width > coins[i].position.x &&
        this.position.y < coins[i].position.y + coins[i].height &&
        this.position.y + this.characterHeight > coins[i].position.y) {
        debugger
        coins.splice(i, 1);
      }
    }

    return coins;
  }
}