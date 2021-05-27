import React from 'react'
import plant from './Plant.svg';
import Grid from '@material-ui/core/Grid';
import './DesignPlant.css';
import DesignButton from './DesignButton.svg';
import DevelopButton from './DevelopButton.svg';
import BusinessButton from './BusinessButton.svg';
import WorkSmall from './WorkSmall';
import { makeStyles } from "@material-ui/core/styles";
import DesignSmall from './DesignSmall.svg';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  }
});
function DesignPlant() {
  const classes = useStyles();
    return (
        <div>
          <Grid container className="worksmall" spacing={3}>
            <Grid item md={12} className="rrd">
            <WorkSmall worksmallimage={DesignSmall} worksmalltext="some text will come here very soon" cardcolor="#1c8463"/>
            </Grid>
            </Grid>
      <Grid container className="workLaptopView">
        <Grid item xs={10} sm={10} md={10} >
          <img className="plant" src={plant} alt=""/>
        </Grid>
        </Grid>
        <Grid container
        spacing={2}
        className={classes.gridContainer}
        justify="center">
        <Grid item xs={7} sm={7} md={4} >
          <img className="designbutton" src={DesignButton} alt="" height="200px" width="300px" />
        </Grid>
        <Grid item xs={7} sm={7} md={4} >
          <img className="developbutton" src={DevelopButton} alt="" height="200px" width="300px"/>
        </Grid>
        </Grid>
        </div>
    )
}

export default DesignPlant
