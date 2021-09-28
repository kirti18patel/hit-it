import data from "../db";
export default function AllBricksBroken(bricksArr, cvs,  ballProps, player) {
  let {brickProps } = data;

  let total = 0;
  for (let i = 0; i < bricksArr.length; i++) {
    if (bricksArr[i].broke === true) {
      total++;
    }
  }
  if (total === bricksArr.length) {
    player.level++;
    ballProps.y = cvs.height - 20;
    brickProps.y=70;
  }
}
