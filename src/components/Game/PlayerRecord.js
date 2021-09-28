export default function PlayerRecord(ctx, player, cvs) {
    ctx.font = "oblique 2.5rem Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`${player.name}`, 50, 50);
  
    ctx.font = "2.5rem Arial";
    ctx.fillStyle = "red";
    let gap = 0;
    for (let i = 0; i < player.lives; i++) {
      ctx.fillText("❤️", cvs.width / 3 + gap - 70, 50);
      gap += 50;
    }
  
    ctx.font = "3rem Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`${player.score}`, cvs.width*2 / 3, 50);

    ctx.font = "2.5rem Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`Level: ${player.level}`, cvs.width -220, 50);
  }
  