import React from "react";
import "./CardDesign.css";
import CardDesign from "./CardDesign";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import flutter from "./flutter.svg";
import php from "./php.svg";
import js from "./jsnew.svg";
import mysql from "./mysql.svg";
import react from "./react.svg";
import swift from "./swift.svg";
import nodejs from "./nodejs.svg";
import angular from "./angular.svg";
import python from "./python.svg";
import css from "./css.svg";
import html from "./html.svg";
import java from "./java.svg";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "10px",
    paddingRight: "10px",
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
        <Grid item xs={7} sm={6} md={3}>
          <CardDesign src={js} />
          <p className="cardname">Java Script</p>
        </Grid>
        <Grid item xs={7} sm={6} md={3}>
        <CardDesign src={swift}/>
        <p className="cardname">Swift</p>
        </Grid>
        <Grid item xs={7} sm={6} md={3}>
        <CardDesign src={python}/>
        <p className="cardname">Python</p>
        </Grid>
        </Grid>
        <Grid
        container
        spacing={10}
        className={classes.gridContainer}
        justify="center"
      >
        <Grid item xs={7} sm={6} md={3}>
        <CardDesign src={flutter}/>
        <p className="cardname">Flutter</p>
        </Grid>
        <Grid item xs={7} sm={6} md={3}>
        <CardDesign src={react}/>
        <p className="cardname">Integrity</p>
        </Grid>
        <Grid item xs={7} sm={6} md={3}>
        <CardDesign src={angular}/>
        <p className="cardname">Integrity</p>
        </Grid>
        </Grid>
        <Grid
        container
        spacing={10}
        className={classes.gridContainer}
        justify="center"
      >
        <Grid item xs={7} sm={6} md={3}>
        <CardDesign src={nodejs}/>
        <p className="cardname">Integrity</p>
        </Grid>
        <Grid item xs={7} sm={6} md={3}>
        <CardDesign src={mysql}/>
        <p className="cardname">Integrity</p>
        </Grid>
        <Grid item xs={7} sm={6} md={3}>
        <CardDesign src={php}/>
        <p className="cardname">Integrity</p>
        </Grid>
        </Grid>
        <Grid
        container
        spacing={10}
        className={classes.gridContainer}
        justify="center"
      >
        <Grid item xs={7} sm={6} md={3}>
        <CardDesign src={css}/>
        <p className="cardname">Integrity</p>
        </Grid>
        <Grid item xs={7} sm={6} md={3}>
        <CardDesign src={html}/>
        </Grid>
        <Grid item xs={7} sm={6} md={3}>
        <CardDesign src={java}/>
        <p className="cardname">Integrity</p>
        </Grid>
      </Grid>
      </>
      
    );
  }
