import React from "react";
import "./CardDesign.css";
import CardDesign from "./CardDesign";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import customercentric from './customercentric.svg';
import integrity from './integrity.svg';
import trustworthy from './trustworthy.svg';
import goodteam from './goodteam.svg';


const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  }
});

export default function CardsGrid() {
    const classes = useStyles();
    return (
      <Grid
        container
        spacing={10}
        className={classes.gridContainer}
        justify="center"
      >
        <Grid item xs={12} sm={6} md={3} >
          <CardDesign src={integrity} alt="1" className="tst" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <CardDesign src={customercentric}  alt="2"/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <CardDesign src={goodteam}  alt="3"/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <CardDesign src={trustworthy}  alt="4"/>
        </Grid>
      </Grid>
    );
  }
