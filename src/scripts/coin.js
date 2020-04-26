
export default class Coin {
  constructor(pos_x, pos_y, ctx, gameWidth, gameHeight) {
    this.ctx = ctx;
    this.width = gameWidth / 25;
    this.height = gameHeight / 18;
    this.position = { x: pos_x, y: pos_y }
    this.renderCoin();
  }

  renderCoin() {
    const coinImage = new Image();
    coinImage.src = "./src/images/items/coin-gold.png";
    this.ctx.drawImage(
      coinImage,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

}