import data from "../db";
export default function AllBricksBroken(bricksArr, cvs,  ballProps, player) {
  let {brickProps } = data;

  // check number of bricks broken
  let total = 0;
  for (let i = 0; i < bricksArr.length; i++) {
    if (bricksArr[i].broke === true) {
      total++;
    }
  }

  // if all bricks are broken, game level should increased by 1
  if (total === bricksArr.length) {
    player.level++;
    ballProps.y = 400;
    brickProps.y=70;
  }
}
