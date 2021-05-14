import React from "react";
import "./Cards.css";
import Cards from "./Cards";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});

export default function CardsGrid() {
    const classes = useStyles();
    return (
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
      >
        <Grid item xs={12} sm={6} md={4}>
          <Cards />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Cards/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Cards />
        </Grid>
      </Grid>
    );
  }
  