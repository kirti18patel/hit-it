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

            BallControl(ctx, data.ballProps);
            requestAnimationFrame(createBall);
        };
        createBall();
    }, [])

    return <canvas ref={canvas_Ref} id="canvas" height={window.innerHeight} width={window.innerWidth}></canvas>
}

export default Board;
