import React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Background from '../Background';

function Homepage() {
    return (
        <div className="homepage">
            <Background />
            <div className="start-card" >
                <Box component="div" sx={{ display: 'block' }}>HIT IT</Box>
                <Box component="div" sx={{ display: 'block' }}>Are you ready to play game?</Box>
                
                <Link to={"/game"}>
                    <Button variant="outlined"> 
                            Start game
                    </Button>
                </Link>
            </div>        
        </div>
    )
}

export default Homepage;
