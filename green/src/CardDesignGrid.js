import React from "react";
import "./CardDesign.css";
import CardDesign from "./CardDesign";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
        spacing={2}
        className={classes.gridContainer}
        justify="center"
      >
        <Grid item xs={12} sm={6} md={4} >
          <CardDesign />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <CardDesign />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <CardDesign />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <CardDesign />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <CardDesign />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <CardDesign />
        </Grid>
      </Grid>
    );
  }
