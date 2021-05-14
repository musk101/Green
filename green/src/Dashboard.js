import React from 'react'
import './Dashboard.css'
import Saly from './Saly.svg'
import Text from './Text.svg'
import { makeStyles } from '@material-ui/core/styles';
import Third from './Third.svg';
import Grid from '@material-ui/core/Grid';
import Fourth from './Fourth.svg';
import SecondDashboard from './SecondDashboard.svg';
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
      
        <Grid item xs={12} sm={6} md={6} ><Grid container >
          <img className="saly" src={Saly} alt=""/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <img className="text" src={Text} alt=""/>
        </Grid>
        </Grid>
        <Grid container >
        <Grid item xs={12} sm={12} md={12} >
          <img className="second" src={SecondDashboard} alt=""/>
        </Grid>
        </Grid>
        <Grid container >
        <Grid item xs={12} sm={12} md={12} >
          <img className="Third" src={Third} alt=""/>
        </Grid>
        </Grid>
        <Grid container >
        <Grid item xs={12} sm={12} md={12} >
          <img className="fourth" src={Fourth} alt=""/>
        </Grid>
        </Grid>
       </div>
    )
}

export default Dashboard
