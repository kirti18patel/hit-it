import React, {useState, useEffect, useRef} from 'react';
import data from "../../db";
import Paddle from './Paddle';
import Brick from './Brick';
import BallControl from './BallControl';
import PaddleCollisionWithBall from './PaddleCollisionWithBall';
import PlayerRecord from './PlayerRecord';
import CheckWallCollision from '../../utils/CheckWallCollision';
import BrickCollisionWithBall from '../../utils/BrickCollisionWithBall';
import AllBricksBroken from '../../utils/AllBricksBroken';
import ResetGame from "../../utils/ResetGame";

const Board = () => {
    // refrence of canvas
    const canvas_Ref = useRef(null);

    // destructuring of data
    let {ballProps, paddleProps, brickProps, player} = data;
    let bricksArr =[];

    // execute only once when page rendered
    useEffect(()=>{
        const createBall = () => {
            // start designing canvas for game
            const cvs = canvas_Ref.current;
            const ctx = cvs.getContext('2d');
            // clears canvas everytime request animation runs
            ctx.clearRect(0, 0, cvs.width, cvs.height);
            
            // set paddle 'y' position based on canvas height
            paddleProps.y = cvs.height - 50;

            // display bricks to canvas
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
            
            // create paddle on canvas
            Paddle(ctx, cvs, paddleProps);

            // check collision of each brick with ball
            let brick_collision;
            for (let i = 0; i < bricksArr.length; i++) {
                brick_collision = BrickCollisionWithBall(ballProps, bricksArr[i]);
                
                // 
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

            // check collision of paddle with ball
            PaddleCollisionWithBall(ballProps, paddleProps);

            // display player record
            PlayerRecord(ctx, player, cvs);

            // check if all bricks are broken or not
            AllBricksBroken(bricksArr, cvs, ballProps, player);

            // check if game is over based on lives
            if (player.lives === 0) {
                // clear canvas and show game over canvas
                ctx.clearRect(0, 0, cvs.width, cvs.height);
                ctx.font = "3rem Arial";
                ctx.fillStyle = "white";                
                let gameOverWidth = ctx.measureText("OOOOPS! Game Over!" ).width;
                let restartWidth = ctx.measureText("Game will restart in 3 seconds" ).width;
                ctx.fillText(`OOOOPS! Game Over!`, (cvs.width/2) - (gameOverWidth / 2), cvs.height/2-50);
                ctx.fillText(`Game will restart in 3 seconds`, (cvs.width/2) - (restartWidth / 2), cvs.height/2 + 50);
        
                // restart the game after 3seconds
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

    // event handlers onMouse and left/right arrow key onKeydown
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

    // return canvas with reference and event handlers
    return <canvas ref={canvas_Ref} 
    id="canvas" tabIndex="0"
    height={window.innerHeight} 
    width={window.innerWidth}
    onMouseMove={handlePaddleMouse} 
    onKeyDown={handlePaddleKey}></canvas>
}

export default Board;
