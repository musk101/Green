import React from 'react'
import './Dashboard.css'
import Nib from './assets/Nib.svg'
import DesignText from './assets/DesignText.svg'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function Dashboard() {
    const classes = useStyles();
    return (
        <div>
      <Grid container className="reverse-items">
        <Grid item xs={12} sm={6} md={6} >
          <img className="saly" src={Nib} alt=""/>
        </Grid>
        
        <Grid item xs={12} sm={6} md={6}>
          <img className="text" src={DesignText} alt=""/>
        </Grid>
        </Grid>
       </div>
    )
}

export default Dashboard