
export default class Spike {
  constructor(pos_x, pos_y, ctx) {
    this.ctx = ctx;
    this.width = 40;
    this.height = 15;
    this.position = { x: pos_x, y: pos_y + 25}
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