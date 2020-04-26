import Tile from "./tile";

export default class Character {
  constructor(gameWidth, gameHeight, startX, startY) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.characterWidth = this.gameWidth / 25 - 0.01;
    this.characterHeight = this.gameHeight / 18 - 0.01;
    this.jumping = false;
    this.x_velocity = 0;
    this.y_velocity = 0;
    this.position = { x: startX, y: startY }
    this.prevPosition = { x: startX, y: startY }
    this.setSound();
    this.setImage();

    this.left = false;
    this.right = false;
    this.up = false;

    document.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 37:
          this.left = true;
          break;
        case 32:
        case 38:
          this.up = true;
          break;
        case 39:
          this.right = true;
          break;
      }
    })

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          this.left = false;
          break;
        case 32:
        case 38:
          this.up = false;
          break;
        case 39:
          this.right = false;
          break;
      }
    });

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

  setSound() {
    this.coinSound = new Audio("./src/audio/sound/coin-sound.mp3");
    this.coinSound.volume = 0.3;
    this.jumpSound = new Audio("./src/audio/sound/jump.mp3");
    this.jumpSound.volume = 0.7;
  }

  setImage() {
    this.characterImage = new Image();
    this.characterImage.src = "./src/images/slime/slime.png";
    this.leftImage = new Image();
    this.leftImage.src = "./src/images/slime/left-slime.png";
    this.rightImage = new Image();
    this.rightImage.src = "./src/images/slime/right-slime.png";
  }

  play(sound) {
    sound.pause();
    sound.currentTime = 0;
    sound.play();
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

  updateCharacter() {
    
    if (this.up && this.jumping == false) {
      this.play(this.jumpSound);
      this.y_velocity -= this.gameHeight / 20;
      this.jumping = true;
    }
    if (this.left) {
      this.characterImage = this.leftImage;
      this.x_velocity -= 0.9;
    }
    if (this.right) {
      this.characterImage = this.rightImage;
      this.x_velocity += 0.9;
    }
    
    this.y_velocity += 1.3;

    this.prevPosition.x = this.position.x;
    this.prevPosition.y = this.position.y;

    this.position.x += this.x_velocity;
    this.position.y += this.y_velocity;
    this.x_velocity *= 0.85;
    this.y_velocity *= 0.85;
  }

  update(board, coins, spikes, monsters) {

    this.updateCharacter();

    this.handleEdgeCollision();

    // handle tile collision 
    let left;
    let right;
    let top;
    let bottom;
    let value;

    let tileWidth = this.gameWidth / 25;
    let tileHeight = this.gameHeight / 18;

    top = Math.floor(this.getTop() / tileHeight);
    left = Math.floor(this.getLeft() / tileWidth);
    value = board[top][left];
    this.handleTileCollision(value, left * tileWidth, top * tileHeight, tileWidth);

    top = Math.floor(this.getTop() / tileHeight);
    right = Math.floor(this.getRight() / tileWidth);
    value = board[top][right];
    this.handleTileCollision(value, right * tileWidth, top * tileHeight, tileWidth);

    bottom = Math.floor(this.getBottom() / tileHeight);
    bottom = (bottom > 17 ? 17 : bottom);
    left = Math.floor(this.getLeft() / tileWidth);
    value = board[bottom][left];
    this.handleTileCollision(value, left * tileWidth, bottom * tileHeight, tileWidth);

    bottom = Math.floor(this.getBottom() / tileHeight);
    bottom = (bottom > 17 ? 17 : bottom);
    right = Math.floor(this.getRight() / tileWidth);
    value = board[bottom][right];
    this.handleTileCollision(value, right * tileWidth, bottom * tileHeight, tileWidth);

    if (this.getBottom() > this.gameHeight) this.setBottom(this.gameHeight);

    if (this.handleMonsterCollision(monsters)) return true;
    if (this.handleSpikeCollision(spikes)) return true;
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
      this.jumping = false;
    } 
  }

  handleCoinCollision(coins) {
    for (let i = 0; i < coins.length; i++) {
      if (
        this.getLeft() < coins[i].position.x + coins[i].width &&
        this.getLeft() + coins[i].width > coins[i].position.x &&
        this.getTop() < coins[i].position.y + coins[i].height &&
        this.getBottom() > coins[i].position.y) {
        this.play(this.coinSound);
        coins.splice(i, 1);
      }
    }
    return coins;
  }

  handleSpikeCollision(spikes) {
    for (let i = 0; i < spikes.length; i++) {
      if (
        this.getLeft() < spikes[i].position.x + spikes[i].width &&
        this.getLeft() + spikes[i].width > spikes[i].position.x &&
        this.getTop() < spikes[i].position.y + spikes[i].height &&
        this.getBottom() > spikes[i].position.y) {
        return true;
      }
    }
    return false;
  }

  handleMonsterCollision(monsters) {
    for (let i = 0; i < monsters.length; i++) {
      if (
        this.getLeft() < monsters[i].position.x + monsters[i].width &&
        this.getRight() > monsters[i].position.x &&
        this.getTop() < monsters[i].position.y + monsters[i].height &&
        this.getBottom() > monsters[i].position.y) {
        return true;
      }
    }
    return false;
  }

  handleTileCollision(value, tileX, tileY, tileSize){
    if (value instanceof Object && value instanceof Tile){
      if (this.topTileCollision(tileY)) return;
      if (this.leftTileCollision(tileX)) return;
      if (this.rightTileCollision(tileX + tileSize)) return;
    }
  }

  topTileCollision(topTile) {
    if (this.getBottom() > topTile && this.getPrevBottom() <= topTile) {
      this.setPrevBottom(this.getBottom());
      this.setBottom(topTile - 0.01);
      this.jumping = false;
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

  bottomTileCollision(bottomTile) {
    if (this.getTop() < bottomTile && this.getPrevTop() >= bottomTile) {
      this.setPrevTop(this.getTop());
      this.setTop(bottomTile);
      return true;
    }
    return false;
  }
}