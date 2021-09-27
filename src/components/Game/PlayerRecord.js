export default function PlayerRecord(ctx, player, cvs) {
    ctx.font = "oblique 2.5rem Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`Name: ${player.name}`, 50, 50);
  
    ctx.font = "2.5rem Arial";
    ctx.fillStyle = "red";
    let gap = 0;
    for (let i = 0; i < player.lives; i++) {
      ctx.fillText("❤️", cvs.width / 2 + gap - 70, 50);
      gap += 50;
    }
  
    ctx.font = "2.5rem Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`Score: ${player.score}`, cvs.width -220, 50);
  }
  