import React from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Dreamtext from './Dreamtext';
import Footer from './Footer';
import "./LinkPage.css";

const useStyles = makeStyles({
    gridContainer: {
      paddingLeft: "20px",
      paddingRight: "20px",
    }
  });

function LinkPage(props) {
    const linktext = props.linktext;
    const linkphoto=props.linkphoto;
    const secondlinktext=props.secondlinktext;
    const topHeading=props.topHeading;
    const secondHeading=props.secondHeading;

    const classes = useStyles();
    return (
        <div>
            <>
            <>
            <Grid container className="list-service">
        <Grid item xs={12} sm={4} md={4} >
          <p className="heading">{props.topHeading}</p>
          </Grid>
          </Grid>
      <Grid
        container
        spacing={2}
        className={classes.gridContainer}

      >
        <Grid item xs={12} sm={7} md={6}>
          <p className="op">{props.linktext}</p>
        </Grid>
        <Grid item sm={5} md={6}  className="linkphototest">
        <img src={props.linkphoto} alt="" height="300px" width="300px"/>
        </Grid>
        </Grid>
         <Grid
         container
         spacing={10}
         className={classes.gridContainer}
         
       >
          <Grid item xs={12} sm={4} md={4} >
          <p className="heading">{props.secondHeading}</p>
          </Grid>
        <Grid item xs={12} sm={12} md={12}>
        <p className="op2">{props.secondlinktext}</p>
        </Grid>
        </Grid>
         <Grid
         container
         spacing={10}
         className={classes.gridContainer}
         justify="center"
       >
      </Grid>
      </>
      <Dreamtext text1link="/ui" text2link="/ux" text3link="/mockupdesign" text4link="/graphicdesign" text5link="/mockupdesign" text6link="/logodesign" text7link="/content" text8link="/animations"  tex1="UI DESIGN" text2="UX DESIGN" text3="GRAPHICS DESIGN" text4="MATERIAL DESIGN" text5="LOGO DESIGN" text6="SOCIAL MEDIA CONTENTS" text7="ANIMATIONS" text22="MOCKUP DESIGN"/>
        <Footer/>
        </>
        </div>
    )
}

export default LinkPage
