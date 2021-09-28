import React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    label1: {
      color: "white",
      textShadow: "0px 2px 10px rgba(0,0,0,0.3)",
      fontSize:80
    },
    label2: {
        fontSize:40
    },
    link:{
        textDecoration: "none",
        fontSize:50,
        color: "black"
    },
    button:{
    }
  });

function Homepage() {
    const styles = useStyles();
    return (
        <>
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        
        <div className="homepage">
            <div className="start-card" >
                <Box component="div" className={styles.label1}>𝓗𝓲𝓽 𝓘𝓽</Box>
                <Box component="div" className={styles.label2}>Are you ready to play game?</Box>
                <TextField placeholder="Your name" style={{fontSize: 50}}/>

                <Link to={"/game"} className={styles.link}>
                    <Button style={{fontSize: 50}}> 
                            Start game
                    </Button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Homepage;
