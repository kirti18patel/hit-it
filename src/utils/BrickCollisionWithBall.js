export default function BrickCollisionWithBall(ballProps, brick) {
  var distX = Math.abs(ballProps.x - brick.x - brick.width / 2);
  var distY = Math.abs(ballProps.y - brick.y - brick.height / 2);

  // check collisions of brick with ball
  if (distX > brick.width / 2 + ballProps.radius) {
    return {
      hit: false,
    };
  }
  if (distY > brick.height / 2 + ballProps.radius) {
    return {
      hit: false,
    };
  }

  if (distX <= brick.width / 2) {
    return {
      hit: true,
      axis: "Y",
    };
  }
  if (distY <= brick.height / 2) {
    return {
      hit: true,
      axis: "X",
    };
  }

  // check corner collisions
  var dx = distX - brick.width / 2;
  var dy = distY - brick.height / 2;
  return {
    hit: dx * dx + dy * dy <= ballProps.radius * ballProps.radius,
    axis: "X",
  };
}
