export default function Brick(level, bricksArr, cvs, brick) {
    brick.width = cvs.width / 5 - 5;
    let newbricks = [];
    if (!bricksArr) {
      return [];
    }
    
    if (bricksArr.length >= 5 * level) {
      return;
    }
  
    for (let i = 0; i < 5 * level; i++) {
      let newBrick = new SingleBrick(
        brick.x + brick.width,
        brick.y,
        brick.width,
        brick.height,
        brick.colors
      );
      newbricks.push(newBrick);
      brick.x += brick.width + 5;
      if (brick.x + brick.width >= cvs.width) {
        brick.x = 0.5;
        brick.y += brick.height + 5;
      }
    }
    return newbricks;
  }

  class SingleBrick {
    constructor(x, y, width, height, colors) {
      this.x = x - width;
      this.y = y;
      this.width = width;
      this.height = height;
      this.colors = colors;
      this.broke = false;
    }
    draw(ctx) {
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.fillStyle = this.broke ? this.colors[0] : this.colors[1];
      ctx.strokeStyle = this.broke ? this.colors[0] : "transparent";
      ctx.shadowBlur = 0;
      ctx.fill();
      ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
  }