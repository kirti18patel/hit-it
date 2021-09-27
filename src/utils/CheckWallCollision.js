export default function CheckWallCollision( ballProps,cvs, player ) {
    if(ballProps.y - ballProps.radius <= 0){
        ballProps.dy *= -1;
    }
    if(ballProps.x - ballProps.radius >= cvs.width || ballProps.x - ballProps.radius <= 0){
        ballProps.dx *= -1;
    }
    if(ballProps.y - ballProps.radius >= cvs.height){
        player.lives--;
        ballProps.dy *= -1;
    }
  }