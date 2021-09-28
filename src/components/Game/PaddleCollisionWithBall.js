export default function PaddleCollisionWithBall(ballProps, paddleProps) {
    if (
      ballProps.x < paddleProps.x + paddleProps.width &&
      paddleProps.y < paddleProps.y + paddleProps.height &&
      ballProps.x > paddleProps.x &&
      ballProps.y + ballProps.radius > paddleProps.y - paddleProps.height / 2
    ) {
      // calculate collide point to calculate angle of reflection
      let collidePoint = ballProps.x - (paddleProps.x + paddleProps.width / 2);
      collidePoint = collidePoint / (paddleProps.width / 2);
  
      // calculate angle of reflection of all based on its rules
      let angle = (collidePoint * Math.PI) / 3;
      ballProps.dx = ballProps.speed * Math.sin(angle);
      ballProps.dy = -ballProps.speed * Math.cos(angle);
    }
  }
  