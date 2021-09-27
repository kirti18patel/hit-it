import React, {useEffect, useRef} from 'react';

const Board = () => {
    let x=0;
    const canvas_Ref = useRef(null);

    useEffect(()=>{
        const createBall = () => {
            const cvs = canvas_Ref.current;
            const ctx = cvs.getContext('2d');
    
            ctx.clearRect(0, 0, cvs.width, cvs.height);
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.arc(x, 50, 20, 0, 2*Math.PI);
            ctx.strokeStyle = "blue";
            ctx.fill();
            x+=8;

            requestAnimationFrame(createBall);
        };
        createBall();
    }, [])

    return <canvas ref={canvas_Ref} id="canvas" height={window.innerHeight} width={window.innerWidth}></canvas>
}

export default Board;
