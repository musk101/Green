import React from "react";
import "./CardDesign.css";
import CardDesign from "./CardDesign";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import googleanalytics from './googleanalytics.svg';
import digitalmarket from './digitalmarketing.svg';
import loudspeaker from './loudspeaker.svg';
import create from './create.svg';
import branddesign from './branddesign.svg';
import googleads from './googleads.svg';
import designpost from './designpost.svg';
import clienttalk from './clienttalk.svg';
import hubspot from './hubspot.svg';

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
          <CardDesign src={googleanalytics}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <CardDesign src={digitalmarket}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <CardDesign src={loudspeaker}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <CardDesign src={create}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <CardDesign src={branddesign}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <CardDesign src={googleads}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <CardDesign src={designpost}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <CardDesign src={clienttalk}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <CardDesign src={hubspot}/>
        </Grid>
      </Grid>
    );
  }
