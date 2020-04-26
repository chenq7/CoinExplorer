
export default class Tile {
  constructor(pos_x, pos_y, ctx, gameWidth, gameHeight,){
    this.ctx = ctx;
    this.width = gameWidth / 25;
    this.height = gameHeight / 18;
    this.position = { x: pos_x, y: pos_y }
    this.renderTile();
  }

  renderTile() {
    const tileImage = new Image();
    tileImage.src = "./src/images/tiles/01.png";
    this.ctx.drawImage(
      tileImage,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

}