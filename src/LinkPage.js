import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Dreamtext from "./Dreamtext";
import Footer from "./Footer";
import "./LinkPage.css";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
});

function LinkPage(props) {
  const linktext = props.linktext;
  const linkphoto = props.linkphoto;
  const secondlinktext = props.secondlinktext;
  const topHeading = props.topHeading;
  const secondHeading = props.secondHeading;

  const classes = useStyles();
  return (
    <div>
      <>
        <>
          <Grid container className="list-service">
            <Grid item xs={12} sm={4} md={4}>
              <p className="heading">{props.topHeading}</p>
            </Grid>
          </Grid>
          <Grid container spacing={1} className={classes.gridContainer}>
            <Grid item xs={12} sm={7} md={6}>
              <p className="op">{props.linktext}</p>
            </Grid>
            <Grid item sm={5} md={6} className="linkphototest">
              <img
                src={props.linkphoto}
                alt=""
                height="350px"
                width="600px"
                style={{ paddingLeft: "200px", marginTop: "-70px" }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} className={classes.gridContainer}>
            <Grid item xs={12} sm={4} md={4}>
              <p className="heading2">{props.secondHeading}</p>
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
          ></Grid>
        </>
        <Dreamtext
          className="dream-text"
          Dream1="We help you to turn"
          Dream2="your ideas into your dream design."
          text1link="/ui"
          text2link="/ux"
          text22link="/mockupdesign"
          text3link="/graphicdesign"
          text4link="/mockupdesign"
          text5link="/logodesign"
          text6link="/content"
          text7link="/animations"
          text1="UI DESIGN"
          text2="UX DESIGN"
          text3="GRAPHICS DESIGN"
          text4="MATERIAL DESIGN"
          text5="LOGO DESIGN"
          text6="SOCIAL MEDIA CONTENTS"
          text7="ANIMATIONS"
          text22="MOCKUP DESIGN"
        />
        <Footer />
      </>
    </div>
  );
}

export default LinkPage;
