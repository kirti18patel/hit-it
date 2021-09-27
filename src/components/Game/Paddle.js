export default (ctx, cvs, paddleProps) => {
    class Paddle {
      constructor(x) {
        this.x = x;
        this.y = cvs.height - 50;
        this.height = paddleProps.height;
        this.width = paddleProps.width;
        this.colors = paddleProps.colors;
      }
      move() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.colors[1];
        ctx.strokeStyle = this.colors[0];
        ctx.lineWidth = 1;
        ctx.fillStyle = this.colors[1];
        ctx.shadowBlur = 5;
        ctx.shadowColor =this.colors[1];
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.fill();
      }
    }
  
    let paddle = new Paddle(paddleProps.x);
    paddle.move();
    if (paddleProps.x <= 0) {
      paddleProps.x = 0;
    } else if (paddleProps.x + paddleProps.width >= cvs.width) {
      paddleProps.x = cvs.width - paddleProps.width;
    }
};