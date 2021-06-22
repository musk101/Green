import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "./Work.css";
import WorkSmall from "./WorkSmall";
import Work1 from "./assets/Work1.svg";
import Work2 from "./assets/Work2.svg";
import Work3 from "./assets/Work3.svg";
import Testimony from "./Testimony";
import WorkSmall1 from "./WorkSmall1.svg";
import WorkSmall2 from "./WorkSmall2.svg";
import WorkSmall3 from "./WorkSmall3.svg";
import Client1 from "./assets/Client1.svg";
import Client2 from "./assets/Client2.svg";
import Client3 from "./assets/Client3.svg";
import ClientSmall1 from "./assets/ClientSmall1.svg";
import ClientSmall2 from "./assets/ClientSmall2.svg";
import ClientSmall3 from "./assets/ClientSmall3.svg";
import Footer from "./Footer";
import testimonysmall from "./testimonySmall.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));
function Work() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item md={12} xs={12} className="rrd">
          <h>WORK</h>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={12} xs={12} className="rr">
          <h>IDEAS GETTING REAL</h>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={12} xs={12} className="rr">
          <h>WE PROVIDE THE WINGS YOUR BUSINESS NEEDS.</h>
        </Grid>
      </Grid>
      <Grid container className="worksmall" spacing={3}>
        <Grid item md={12} className="rrd">
          <WorkSmall
          title="Reliable Melbourne Accountants"
            worksmallimage={WorkSmall1}
            worksmalltext="tag line of company "
            cardcolor="#ff5975"
          />
        </Grid>
        <Grid item md={12} className="rrd" style={{ paddingTop: "10vw" }}>
          <WorkSmall
          title="Completly Reliable Accountants"
            worksmallimage={WorkSmall2}
            worksmalltext="tag line of company "
            cardcolor="#ff5975"
          />
        </Grid>
        <Grid item md={12} className="rrd" style={{ paddingTop: "10vw" }}>
          <WorkSmall
            title="Reliable Melbourne Accountants"
            worksmallimage={WorkSmall3}
            worksmalltext="tag line of company "
            cardcolor="#ff5975"
          />
        </Grid>
      </Grid>
      <Grid container className="testimony2">
        <Grid item xs={12} md={12}>
          <Testimony Clientimage1={ClientSmall1}  Clientimage2={ClientSmall2}  Clientimage3={ClientSmall3} />
        </Grid>
      </Grid>

      <Grid container className="workLaptopView">
        <Grid item md={12}>
          <img src={Work1} alt="" className="work_img" />
        </Grid>
      </Grid>
      <Grid container className="workLaptopView">
        <Grid item md={12}>
          <img src={Work2} alt="" className="work_img" />
        </Grid>
      </Grid>
      <Grid container className="workLaptopView">
        <Grid item md={12}>
          <img src={Work3} alt="" className="work_img" />
        </Grid>
      </Grid>
      <Grid container className="testimony1">
        <Grid item md={12}>
          <Testimony Clientimage1={Client1} Clientimage2={Client2} Clientimage3={Client3}  />
        </Grid>
        
      </Grid>
      <Footer />
    </div>
  );
}

export default Work;
