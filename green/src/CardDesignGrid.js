import React from "react";
import "./CardDesign.css";
import CardDesign from "./CardDesign";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import xd from './adobe-xd 1.svg';
import figma from './figma-1 1.svg';
import ai from './illustrator.svg';
import id from './indesign.svg';
import ae from './ae.svg';
import ps from './Photoshop.svg';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  }
});

export default function CardsGrid() {
    const classes = useStyles();
    return (
      <>
      <Grid
        container
        spacing={10}
        className={classes.gridContainer}
        justify="center"
      >
        <Grid item xs={12} sm={6} md={3} >
          <CardDesign src={xd}/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <CardDesign src={figma}/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <CardDesign src={ai}/>
        </Grid>
        </Grid>
        <Grid
        container
        spacing={10}
        className={classes.gridContainer}
        justify="center"
      >
        <Grid item xs={12} sm={6} md={3}>
        <CardDesign src={id}/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <CardDesign src={ae}/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <CardDesign src={ps}/>
        </Grid>
      </Grid>
      </>   //react elements must be enclosed in a fragment hencce this
    );
  }
