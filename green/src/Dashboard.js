import React from 'react'
import './Dashboard.css'
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

function Dashboard(props) {
  const dashimage=props.dashimage;
  const dashimage2=props.dashimage2;
  const seconddashimage=props.seconddashimage;
  const thirddashimage=props.thirddashimage;
  const fourthdashimage=props.fourthdashimage;

    const classes = useStyles();
    return (
        <div>
      <Grid container>
        <Grid item xs={12} sm={6} md={6} >
          <img className="saly" src={dashimage} alt=""/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <img className="text" src={dashimage2} alt=""/>
        </Grid>
        </Grid>
        <Grid container >
        <Grid item xs={12} sm={12} md={12} >
          <img className="second" src={seconddashimage} alt=""/>
        </Grid>
        </Grid>
        <Grid container >
        <Grid item xs={12} sm={12} md={12} >
          <img className="Third" src={thirddashimage} alt=""/>
        </Grid>
        </Grid>
        <Grid container >
        <Grid item xs={12} sm={12} md={12} >
          <img className="fourth" src={fourthdashimage} alt=""/>
        </Grid>
        </Grid>
  
       </div>
    )
}

export default Dashboard