import React from 'react'
import './Dashboard.css'
import Nib from './Nib.svg'
import DesignText from './DesignText.svg'
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
      <Grid container>
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