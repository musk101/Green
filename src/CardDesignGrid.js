import React from "react";
import "./CardDesign.css";
import CardDesign from "./CardDesign";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import xd from "./adobe-xd 1.svg";
import figma from "./figma-1 1.svg";
import ai from "./illustrator.svg";
import id from "./indesign.svg";
import ae from "./ae.svg";
import ps from "./Photoshop.svg";

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
      <Grid container spacing={1} className={classes.gridContainer}>
        <Grid item xs={6} sm={6} md={4}>
          <CardDesign src={xd} hovertext="Adobe XD"/>
        </Grid>
        <Grid item xs={6} sm={6} md={4}>
          <CardDesign src={figma} hovertext="Figma"/>
        </Grid>
        <Grid item xs={6} sm={6} md={4}>
          <CardDesign src={ai} hovertext="Adobe Illustrator" />
        </Grid>
        <Grid item xs={6} sm={6} md={4}>
          <CardDesign src={id} hovertext="In Design"/>
        </Grid>
        <Grid item xs={6} sm={6} md={4}>
          <CardDesign src={ae} hovertext="Adobe XD"/>
        </Grid>
        <Grid item xs={6} sm={6} md={4}>
          <CardDesign src={ps} hovertext="PhotoShop"/>
        </Grid>
      </Grid>
    </> //react elements must be enclosed in a fragment hencce this
  );
}
