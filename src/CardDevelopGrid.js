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
    paddingLeft: "20px",
    paddingRight: "20px",
    width: "70%",
    marginLeft: "15%",
    '@media(minWidth: 770px)' : {
width: "90%"
    }
   
  }
});

export default function CardsGrid() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        spacing={1}
        className={classes.gridContainer}
        justify="center"
      >
        <Grid item xs={6} sm={6} md={3}>
          <CardDesign src={js} hovertext="JavaScript" />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardDesign src={swift}  hovertext="Swift"/>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardDesign src={python}  hovertext="Python"/>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardDesign src={flutter}  hovertext="Flutter" />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardDesign src={react}  hovertext="ReactJS"/>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardDesign src={angular}  hovertext="Angular"/>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardDesign src={nodejs}  hovertext="NodeJS"/>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardDesign src={mysql}  hovertext="MySQL"/>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardDesign src={php} hovertext="PHP"/>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardDesign src={css}  hovertext="CSS" />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardDesign src={html}  hovertext="HTML" />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardDesign src={java}  hovertext="JAVA"/>
        </Grid>
      </Grid>
    </>
  );
}
