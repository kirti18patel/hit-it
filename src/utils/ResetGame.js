export default function ResetBall(ballProps, cvs, paddleProps, player, brickProps, bricksArr) {
  // reset the value of components as required
  ballProps.x = paddleProps.x;
  ballProps.y = paddleProps.y - 80;
  ballProps.dx = 6 * (Math.random() * 2 - 1);
  ballProps.dy = -6;
  ballProps.speed = 10;
                      
  player.lives = 5;
  player.level = 1;
  player.score = 0;

  bricksArr.length = 0;
  brickProps.y = 70;
}
  