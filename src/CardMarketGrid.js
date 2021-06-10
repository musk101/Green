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
    paddingLeft: "20px",
    paddingRight: "20px",
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
        <Grid item xs={6} sm={3} md={3}>
          <CardDesign src={googleanalytics} hovertext="Google Analytics"/>
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
        <CardDesign src={googleanalytics} hovertext="Google Analytics"/>
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
        <CardDesign src={clienttalk} hovertext="Social Media"/>
        </Grid>
       
        <Grid item xs={6} sm={3} md={3}>
        <CardDesign src={create} hovertext="Creative Ideas"/>
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
        <CardDesign src={clienttalk} hovertext="Brand Designs"/>
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
        <CardDesign src={googleads} hovertext="Google Ads"/>
        </Grid>
       
        
        <Grid item xs={6} sm={3} md={3}>
        <CardDesign src={clienttalk}/>
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
        <CardDesign src={clienttalk}/>
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
        <CardDesign src={hubspot} hovertext="Hub Spot"/>
        </Grid>
      </Grid>
      </>
    );
  }
