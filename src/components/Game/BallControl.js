export default function BallControl(ctx, ballProps) {
  // create and draw new ball object from Ball class
  let data = new Ball(ballProps.x, ballProps.y, ballProps.radius);
  data.draw(ctx);
  ballProps.x += ballProps.dx;
  ballProps.y += ballProps.dy;
}

class Ball {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(229,242,13,255)";
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.strokeWidth = 4;
    ctx.fill();
    ctx.stroke();
  }
}