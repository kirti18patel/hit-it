export default function CheckWallCollision( ballProps,cvs ) {
    if(ballProps.y - ballProps.radius >= cvs.height || ballProps.y - ballProps.radius <= 0){
        ballProps.dy *= -1;
    }
    if(ballProps.x - ballProps.radius >= cvs.width || ballProps.x - ballProps.radius <= 0){
        ballProps.dx *= -1;
    }
  }