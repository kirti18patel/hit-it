import React, {useState, useEffect, useRef} from 'react';
import { BallControl } from './BallControl';
import data from "../../db";
import CheckWallCollision from '../../utils/CheckWallCollision';
import Paddle from './Paddle';
import Brick from './Brick';
import BrickCollisionWithBall from '../../utils/BrickCollisionWithBall';
import PaddleCollisionWithBall from './PaddleCollisionWithBall';
import PlayerRecord from './PlayerRecord';
import AllBricksBroken from '../../utils/AllBricksBroken';
import ResetGame from "../../utils/ResetGame";

const Board = () => {
    const canvas_Ref = useRef(null);

    let {ballProps, paddleProps, brickProps, player} = data;
    let bricksArr =[];
    useEffect(()=>{
        const createBall = () => {
            const cvs = canvas_Ref.current;
            const ctx = cvs.getContext('2d');
            ctx.clearRect(0, 0, cvs.width, cvs.height);
            let brickToDisplay = Brick(player.level, bricksArr, cvs, brickProps);
            if (brickToDisplay && brickToDisplay.length>0){
                bricksArr = brickToDisplay;
            }

            bricksArr.map((brick) => {
                return brick.draw(ctx);
            })

            // start ball movement based on its position
            BallControl(ctx, ballProps);
            // check if ball collide with ball and if yes then deflect it
            CheckWallCollision(ballProps, cvs, player);
            
            paddleProps.y = cvs.height - 50;
            // create paddle on canvas
            Paddle(ctx, cvs, paddleProps);

            let brick_collision;
            for (let i = 0; i < bricksArr.length; i++) {
                brick_collision = BrickCollisionWithBall(ballProps, bricksArr[i]);
                
                if (brick_collision.hit && !bricksArr[i].broke) {
                    if (brick_collision.axis === "X") {
                        ballProps.dx *= -1;
                        bricksArr[i].broke = true;
                    } else if (brick_collision.axis === "Y") {
                        ballProps.dy *= -1;
                        bricksArr[i].broke = true;
                    }
                    player.score += 10;
                }
            }

            PaddleCollisionWithBall(ballProps, paddleProps);

            PlayerRecord(ctx, player, cvs);

            AllBricksBroken(bricksArr, cvs, ballProps, player);

            if (player.lives === 0) {
                ctx.clearRect(0, 0, cvs.width, cvs.height);

                ctx.font = "3rem Arial";
                ctx.fillStyle = "white";                
                let gameOverWidth = ctx.measureText("OOOOPS! Game Over!" ).width;
                let restartWidth = ctx.measureText("Game will restart in 3 seconds" ).width;
                ctx.fillText(`OOOOPS! Game Over!`, (cvs.width/2) - (gameOverWidth / 2), cvs.height/2-50);
                ctx.fillText(`Game will restart in 3 seconds`, (cvs.width/2) - (restartWidth / 2), cvs.height/2 + 50);
        
                setTimeout(()=>{
                ResetGame(ballProps, cvs, paddleProps, player, brickProps, bricksArr);
                requestAnimationFrame(createBall);
                } , 3000);
                return;
            }

            requestAnimationFrame(createBall);
        };
        createBall();
    }, [])

    const handlePaddleMouse = event => {
        paddleProps.x = event.clientX-paddleProps.width/2;
    }

    const handlePaddleKey = event => {
        if(event.code === "ArrowRight"){
            paddleProps.x +=20;
        }
        else if(event.code === "ArrowLeft"){
            paddleProps.x -=20;
        }
    }

    return <canvas ref={canvas_Ref} 
    id="canvas" tabIndex="0"
    height={window.innerHeight} 
    width={window.innerWidth}
    onMouseMove={handlePaddleMouse} 
    onKeyDown={handlePaddleKey}></canvas>
}

export default Board;
