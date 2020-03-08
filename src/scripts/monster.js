
export class Monster {
  constructor(pos_x, pos_y, ctx, gameWidth, gameHeight){
    this.position = { x: pos_x, y: pos_y}
    this.ctx = ctx;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  setImage(leftImage, rightImage) {
    this.leftImage = new Image();
    this.leftImage.src = leftImage
    this.rightImage = new Image();
    this.rightImage.src = rightImage
    this.monster = this.leftImage;
  }

  renderMonster() {
    this.handleEdgeCollision();
    this.position.x -= this.speed;
    this.ctx.drawImage(
      this.monster,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  handleEdgeCollision() {
    if (this.position.x < 0) {
      this.position.x = 0;
      this.speed *= -1;
      this.monster = this.rightImage;
    }
    if (this.position.x + this.width > this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
      this.speed *= -1;
      this.monster = this.leftImage;
    }
  }
}


export class Snail extends Monster {
  constructor(pos_x, pos_y, ctx, gameWidth, gameHeight){
    super(pos_x, pos_y, ctx, gameWidth, gameHeight);
    this.speed = 1.5;
    this.width = 40;
    this.height = 40;
    let left = "./src/images/monsters/left-snail.png";
    let right = "./src/images/monsters/right-snail.png";
    this.setImage(left, right);
    this.renderMonster();
  }
}

export class Fairy extends Monster {
  constructor(pos_x, pos_y, ctx, gameWidth, gameHeight) {
    super(pos_x, pos_y, ctx, gameWidth, gameHeight);
    this.speed = 1.8;
    this.width = 36;
    this.height = 39;
    this.position.y = this.position.y - (this.height - 40);
    let left = "./src/images/monsters/left-fairy.png";
    let right = "./src/images/monsters/right-fairy.png";
    this.setImage(left, right);
    this.renderMonster();
  }
}

export class Pig extends Monster {
  constructor(pos_x, pos_y, ctx, gameWidth, gameHeight) {
    super(pos_x, pos_y, ctx, gameWidth, gameHeight);
    this.speed = 2.5;
    this.width = 60;
    this.height = 50;
    this.position.y = this.position.y - (this.height - 40);
    let left = "./src/images/monsters/left-pig.png";
    let right = "./src/images/monsters/right-pig.png";
    this.setImage(left, right);
    this.renderMonster();
  }
}