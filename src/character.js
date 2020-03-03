
export default class Character {
  constructor(gameWidth, gameHeight, startX, startY) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.characterWidth = 40;
    this.characterHeight = 60;
    this.jumping = true;
    this.x_velocity = 0;
    this.y_velocity = 5;
    this.position = { x: startX, y: startY }
  }

  // animate(ctx) {
  //   this.moveCharacter();
  //   this.renderCharacter(ctx);
  // }

  renderCharacter(ctx) {
    const characterImage = new Image();
    characterImage.src = "./src/images/wizard/wizard/1_IDLE_000.png";
    ctx.drawImage(
      characterImage,
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
        this.x_velocity = -7;
        break;
      case 'right':
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

  update() {
    this.position.x += this.x_velocity;
    this.position.y += this.y_velocity;
    
    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x + this.characterWidth > this.gameWidth)
      this.position.x = this.gameWidth - this.characterWidth;
    
    if (this.position.y + this.characterHeight > this.gameHeight) 
      this.position.y = this.gameHeight - this.characterHeight;
    if (this.position.y < 0) this.position.y = 0;
    
  }
}