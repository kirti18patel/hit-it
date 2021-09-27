import React, {useEffect, useRef} from 'react';
import { BallControl } from './BallControl';
import data from "../../db";
import CheckWallCollision from '../../utils/CheckWallCollision';
import Paddle from './Paddle';

const Board = () => {
    const canvas_Ref = useRef(null);

    useEffect(()=>{
        const createBall = () => {
            const cvs = canvas_Ref.current;
            const ctx = cvs.getContext('2d');
            ctx.clearRect(0, 0, cvs.width, cvs.height);

            let {ballProps, paddleProps} = data;
            // start ball movement based on its position
            BallControl(ctx, ballProps);
            // check if ball collide with ball and if yes deflect it
            CheckWallCollision(ballProps, cvs);
            // create paddle on canvas
            Paddle(ctx, cvs, paddleProps);
            requestAnimationFrame(createBall);
        };
        createBall();
    }, [])

    return <canvas ref={canvas_Ref} id="canvas" height={window.innerHeight} width={window.innerWidth}></canvas>
}

export default Board;
