export default function CheckWallCollision( ballProps,cvs, player ) {
    // if ball's position is less than 0 or greater than canvas width, deflect it in different direction
    if(ballProps.y - ballProps.radius <= 0){
        ballProps.dy *= -1;
    }
    if(ballProps.x - ballProps.radius >= cvs.width || ballProps.x - ballProps.radius <= 0){
        ballProps.dx *= -1;
    }
    if(ballProps.y - ballProps.radius >= cvs.height){
        // if ball touch bottom, player's life should be decreased by 1
        player.lives--;
        ballProps.dy *= -1;
    }
  }