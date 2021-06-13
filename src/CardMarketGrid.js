import React from "react";
import "./CardDesign.css";
import CardDesign from "./CardDesign";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import googleanalytics from './googleanalytics.svg';
import digitalmarket from './digitalmarketing.svg';
import digim from './digim.svg';
import loudspeaker from './loudspeaker.svg';
import create from './create.svg';
import printing from './PrintingMedia.svg'
import googleads from './googleads.svg';
import designpost from './designpost.svg';
import clienttalk from './clienttalk.svg';
import hubspot from './hubspot.svg';
import brandd from  './BrandD.svg'
import startupc from './startupc.svg';


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
        id="card-set"
        justify="center"
      >
        <Grid item xs={6} sm={3} md={3}>
          <CardDesign src={googleanalytics} hovertext="Google Analytics"/>
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
        <CardDesign src={digim} hovertext="Digital Marketing"/>
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
        <CardDesign src={clienttalk} hovertext="Social Media"/>
        </Grid>
       
        <Grid item xs={6} sm={3} md={3}>
        <CardDesign src={create} hovertext="Creative Ideas"/>
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
        <CardDesign src={brandd} hovertext="Brand Designs"/>
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
        <CardDesign src={googleads} hovertext="Google Ads"/>
        </Grid>
       
        
        <Grid item xs={6} sm={3} md={3}>
        <CardDesign src={printing}  hovertext="Printing Media"/>
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
        <CardDesign src={startupc}  hovertext="Startup Consulting"/>
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
        <CardDesign src={hubspot} hovertext="Hub Spot"/>
        </Grid>
      </Grid>
      </>
    );
  }
