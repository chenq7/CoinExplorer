
export default class Character {
  constructor(gameWidth, gameHeight, startX, startY) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.characterWidth = 40;
    this.characterHeight = 40;
    this.jumping = true;
    this.x_velocity = 0;
    this.y_velocity = 5;
    this.position = { x: startX, y: startY }
    this.prevPosition = { x: startX, y: startY }
    this.characterImage = new Image();
    this.characterImage.src = "./src/images/slime/slime.png";
    this.flipped = false;
  }

  getLeft() { return this.position.x }
  getRight() { return this.position.x + this.characterWidth }
  getTop() { return this.position.y }
  getBottom() { return this.position.y + this.characterHeight }

  getPrevLeft() { return this.prevPosition.x }
  getPrevRight() { return this.prevPosition.x + this.characterWidth }
  getPrevTop() { return this.prevPosition.y }
  getPrevBottom() { return this.prevPosition.y + this.characterHeight }

  setLeft(x) { this.position.x = x}
  setRight(x) { this.position.x = x - this.characterWidth }
  setTop(y) { this.position.y = y }
  setBottom(y) { this.position.y = y - this.characterHeight }

  setPrevLeft(x) { this.prevPosition.x = x }
  setPrevRight(x) { this.prevPosition.x = x - this.characterWidth }
  setPrevTop(y) { this.prevPosition.y = y }
  setPrevBottom(y) { this.prevPosition.y = y - this.characterHeight }


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
          this.characterImage.src = "./src/images/slime/left-slime.png";
        }
        this.x_velocity = -7;
        break;
      case 'right':
        if (this.flipped) {
          this.flipped = false;
          this.characterImage.src = "./src/images/slime/right-slime.png";
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

  update(board, coins) {
    this.prevPosition.x = this.position.x;
    this.prevPosition.y = this.position.y;
    
    this.position.x += this.x_velocity;
    this.position.y += this.y_velocity;
    
    this.handleEdgeCollision();

    // handle tile collision 
    let left;
    let right;
    let top;
    let bottom;
    let value;

    top = Math.floor(this.getTop() / 40);
    left = Math.floor(this.getLeft() / 40);
    value = board[top][left];
    this.handleTileCollision(value, left * 40, top * 40, 40);

    top = Math.floor(this.getTop() / 40);
    right = Math.floor(this.getRight() / 40);
    value = board[top][right];
    this.handleTileCollision(value, right * 40, top * 40, 40);

    bottom = Math.floor(this.getBottom()/ 40);
    left = Math.floor(this.getLeft() / 40);
    value = board[bottom][left];
    this.handleTileCollision(value, left * 40, bottom * 40, 40);

    bottom = Math.floor(this.getBottom() / 40);
    right = Math.floor(this.getRight() / 40);
    value = board[bottom][right];
    this.handleTileCollision(value, right * 40, bottom * 40, 40);

    if (this.getBottom() > this.gameHeight) this.setBottom(this.gameHeight);
    return this.handleCoinCollision(coins);   
  }

  handleEdgeCollision() {
    if (this.getLeft() < 0) {
      this.setPrevLeft(this.getLeft());
      this.setLeft(0);
    }
    if (this.getRight() > this.gameWidth){
      this.setPrevRight(this.getRight());
      this.setRight(this.gameWidth);
    } 
    if (this.getTop() < 0){
      this.setPrevTop(this.getTop());
      this.setTop(0);
    } 
    if (this.getBottom() > this.gameHeight){
      this.setPrevBottom(this.getBottom());
      this.setBottom(this.gameHeight);
    } 
  }

  handleCoinCollision(coins) {
    for (let i = 0; i < coins.length; i++) {
      if (
        this.getLeft() < coins[i].position.x + coins[i].width &&
        this.getLeft() + coins[i].width > coins[i].position.x &&
        this.getTop() < coins[i].position.y + coins[i].height &&
        this.getBottom() > coins[i].position.y) {
        coins.splice(i, 1);
      }
    }

    return coins;
  }

  handleTileCollision(value, tileX, tileY, tileSize){
    if (value instanceof Object && value.constructor.name === 'Tile'){
      if (this.topTileCollision(tileY)) return;
      if (this.leftTileCollision(tileX)) return;
      if (this.rightTileCollision(tileX + tileSize)) return;
      if (this.bottomTileCollision(tileY + tileSize)) return;
    }
  }

  bottomTileCollision(bottomTile){
    if (this.getTop() < bottomTile && this.getPrevTop() >= bottomTile){
      this.setPrevTop(this.getTop());
      this.setTop(bottomTile);
      return true;
    }
    return false;
  }

  leftTileCollision(leftTile){
    if (this.getRight() > leftTile && this.getPrevRight() <= leftTile){
      this.setPrevRight(this.getRight());
      this.setRight(leftTile - 0.01);
      return true; 
    }
    return false;
  }

  rightTileCollision(rightTile){
    if (this.getLeft() < rightTile && this.getPrevLeft() >= rightTile){
      this.setPrevLeft(this.getLeft());
      this.setLeft(rightTile);
      return true;
    }
    return false;
  }

  topTileCollision(topTile){
    if (this.getBottom() > topTile && this.getPrevBottom() <= topTile){
      this.setPrevBottom(this.getBottom());
      this.setBottom(topTile - 0.01);
      return true;
    }
    return false;
  }
}