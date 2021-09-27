import React, {useEffect, useRef} from 'react';
import { BallControl } from './BallControl';
import data from "../../db";

const Board = () => {
    const canvas_Ref = useRef(null);

    useEffect(()=>{
        const createBall = () => {
            const cvs = canvas_Ref.current;
            const ctx = cvs.getContext('2d');
            ctx.clearRect(0, 0, cvs.width, cvs.height);

            let {ballProps} = data;
            BallControl(ctx, ballProps);
            if(ballProps.y - ballProps.radius > cvs.height || ballProps.y - ballProps.radius < 0){
                ballProps.dy *= -1;
            }
            if(ballProps.x - ballProps.radius > cvs.width || ballProps.x - ballProps.radius < 0){
                ballProps.dx *= -1;
            }
            requestAnimationFrame(createBall);
        };
        createBall();
    }, [])

    return <canvas ref={canvas_Ref} id="canvas" height={window.innerHeight} width={window.innerWidth}></canvas>
}

export default Board;
