
export default class Spike {
  constructor(pos_x, pos_y, ctx, gameWidth, gameHeight,) {
    this.ctx = ctx;
    this.width = gameWidth / 25;
    this.height = gameHeight / 48;
    this.position = { x: pos_x, y: pos_y + this.height * 5/3.0}
    this.renderSpike();
  }

  renderSpike() {
    const spikeImage = new Image();
    spikeImage.src = "./src/images/tiles/spikes1.png";
    this.ctx.drawImage(
      spikeImage,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

}