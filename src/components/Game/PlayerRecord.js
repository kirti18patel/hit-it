export default function PlayerRecord(ctx, player, cvs) {
  // display player's score
  ctx.font = "3rem Arial";
  ctx.fillStyle = "white";
  ctx.fillText(`${player.score}`, 50, 50);

  // display player lives left
  ctx.font = "2.5rem Arial";
  ctx.fillStyle = "red";
  let gap = 0;
  for (let i = 0; i < player.lives; i++) {
    ctx.fillText("❤️", cvs.width / 2 + gap - 100, 50);
    gap += 50;
  }

  // display level of the game
  ctx.font = "2.5rem Arial";
  ctx.fillStyle = "white";
  ctx.fillText(`Level: ${player.level}`, cvs.width -220, 50);
}
  