import React from 'react';
import PlayerCard from './PlayerCard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const PlayerList = ({ players }) =>{
    const classes = useStyles();

        

    return(
        
        <div className = {classes.root}>
            <Grid container spacing={1}>
            {players.map(player => <Grid item xs={3}><PlayerCard player={player} /></Grid>)}
            </Grid>
        </div>
    );
}



export default PlayerList
