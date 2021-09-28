export default (ctx, cvs, paddleProps) => {
  // create new paddle object from paddle class
  class Paddle {
    constructor(x) {
      this.x = paddleProps.x;
      this.y = paddleProps.y;
      this.height = paddleProps.height;
      this.width = paddleProps.width;
      this.color = paddleProps.color;
    }
    move() {
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.fillStyle = this.color;
      ctx.lineWidth = 1;
      ctx.shadowBlur = 5;
      ctx.shadowColor =this.color;
      ctx.fill();
    }
  }

  let paddle = new Paddle();
  paddle.move();

  // if paddle 'x'  position is less than or equal to 0, set its value to 0
  if (paddleProps.x <= 0) {
    paddleProps.x = 0;
  } 
  // if paddle position is greater than canvas width, set its value to canvas width to make it inside canvas
  else if (paddleProps.x + paddleProps.width >= cvs.width) {
    paddleProps.x = cvs.width - paddleProps.width;
  }
};