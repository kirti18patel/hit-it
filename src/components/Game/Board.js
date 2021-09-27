import React, {useEffect, useRef} from 'react';
import { BallControl } from './BallControl';
import data from "../../db";
import CheckWallCollision from '../../utils/CheckWallCollision';
import Paddle from './Paddle';
import Brick from './Brick';
import BrickCollisionWithBall from '../../utils/BrickCollisionWithBall';
import PaddleCollisionWithBall from './PaddleCollisionWithBall';

const Board = () => {
    const canvas_Ref = useRef(null);

    let {ballProps, paddleProps, brickProps, player} = data;
    let bricksArr =[];
    useEffect(()=>{
        const createBall = () => {
            const cvs = canvas_Ref.current;
            const ctx = cvs.getContext('2d');
            ctx.clearRect(0, 0, cvs.width, cvs.height);
            let brickToDisplay = Brick(2, bricksArr, cvs, brickProps);
            if (brickToDisplay && brickToDisplay.length>0){
                bricksArr = brickToDisplay;
            }

            bricksArr.map((brick) => {
                return brick.draw(ctx);
            })

            // start ball movement based on its position
            BallControl(ctx, ballProps);
            // check if ball collide with ball and if yes then deflect it
            CheckWallCollision(ballProps, cvs);
            
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
