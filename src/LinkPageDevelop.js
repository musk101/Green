import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Dreamtext from "./Dreamtext";
import helpyou from "./helpyou.svg";
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
          <Grid container spacing={2} className={classes.gridContainer}>
            <Grid item xs={12} sm={7} md={6}>
              <p className="op">{props.linktext}</p>
            </Grid>
            <Grid item xs={null} sm={5} md={6} className="linkphototest">
              <img src={props.linkphoto} alt="" height="350px"
                width="600px"
                style={{ paddingLeft: "200px", marginTop: "-70px" }} />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            className={classes.gridContainer}
           
          >
            <Grid item xs={12} sm={4} md={12}>
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
          text1link="/webdev"
          text2link="/androidapp"
          text3link="/webapp"
          text4link="/iosapp"
          text5link="/maintainandtest"
          text6link="/uidev"
          text7link="/api"
          tex1="WEB DEVELOPMENT"
          text2="ANDROID APPLICATION"
          text3="WEB APPLICATION"
          text4="iOS APPLICATION"
          text5="MAINTAINANCE & TESTING"
          text6="UI DEVELOPMENT"
          text7="API  INTEGRATION"
        />
        <Footer />
      </>
    </div>
  );
}

export default LinkPage;
