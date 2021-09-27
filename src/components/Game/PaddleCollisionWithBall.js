export default function PaddleCollisionWithBall(ballProps, paddleProps) {
    if (
      ballProps.x < paddleProps.x + paddleProps.width &&
      paddleProps.y < paddleProps.y + paddleProps.height &&
      ballProps.x > paddleProps.x &&
      ballProps.y + ballProps.radius > paddleProps.y - paddleProps.height / 2
    ) {
      let collidePoint = ballProps.x - (paddleProps.x + paddleProps.width / 2);
  
      collidePoint = collidePoint / (paddleProps.width / 2);
  
      let angle = (collidePoint * Math.PI) / 3;
  
      ballProps.dx = ballProps.speed * Math.sin(angle);
      ballProps.dy = -ballProps.speed * Math.cos(angle);
    }
  }
  