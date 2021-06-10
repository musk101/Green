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
  },
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
          <CardDesign src={js} hovertext="Java Script" />
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
          <CardDesign src={react}  hovertext="React JS"/>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardDesign src={angular}  hovertext="Angular"/>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardDesign src={nodejs}  hovertext="Node JS"/>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardDesign src={mysql}  hovertext="My SQL"/>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardDesign src={css}  hovertext="CSS" />
        </Grid>

        <Grid item xs={6} sm={6} md={3}>
          <CardDesign src={css}  hovertext="CSS" />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardDesign src={css}  hovertext="CSS" />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CardDesign src={css}  hovertext="CSS"/>
        </Grid>
      </Grid>
    </>
  );
}
