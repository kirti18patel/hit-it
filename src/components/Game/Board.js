import React, {useEffect, useRef} from 'react';
import { BallControl } from './BallControl';
import data from "../../db";
import CheckWallCollision from '../../utils/CheckWallCollision';
import Paddle from './Paddle';

const Board = () => {
    const canvas_Ref = useRef(null);

    let {ballProps, paddleProps} = data;
    useEffect(()=>{
        const createBall = () => {
            const cvs = canvas_Ref.current;
            const ctx = cvs.getContext('2d');
            ctx.clearRect(0, 0, cvs.width, cvs.height);
            
            // start ball movement based on its position
            BallControl(ctx, ballProps);
            // check if ball collide with ball and if yes then deflect it
            CheckWallCollision(ballProps, cvs);
            // create paddle on canvas
            Paddle(ctx, cvs, paddleProps);
            requestAnimationFrame(createBall);
        };
        createBall();
    }, [])

    const handlePaddleMouse = event => {
        paddleProps.x = event.clientX;
    }

    const handlePaddleKey = event => {
        if(event.code === "ArrowRight"){
            paddleProps.x +=20;
        }
        if(event.code === "ArrowLeft"){
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
