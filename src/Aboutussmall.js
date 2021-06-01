import React from "react";
import FlyingSaly from "./FlyingSaly.svg";
import aboutsecond from "./aboutsecond.svg";
import CardDesign from "./CardDesign";
import Footer from "./Footer";
import abouttext from "./abouttext.svg";
import customercentric from "./customercentric.svg";
import integrity from "./integrity.svg";
import trustworthy from "./trustworthy.svg";
import goodteam from "./goodteam.svg";

import Grid from "@material-ui/core/Grid";
import "./Aboutus.css";
import CardDashboardGrid from "./CardDashboardGrid";
function Aboutussmall() {
  return (
    <div>
      <Grid container>
        <Grid item md={12} xs={12} sm={12} className="about-heading">
          <h>ABOUT US</h>
        </Grid>
        <Grid item xs={3} className="rr1">
          <img src={FlyingSaly} alt="" width="200vw" height="auto" />
        </Grid>
        <Grid item xs={9} className="rr2">
          <h>We, at ALPHARULE</h>
          <br />
          <h>We provide the wings your business needs.</h>
        </Grid>
      </Grid>
      <Grid container justify="center" className="Aboutussmall">
        <Grid item xs={6} sm={7} className="about_text">
          <p className="smallpara">
            We are the destination for your online journey of ideas and
            innovations.
          </p>

          <p className="smallpara">
            The one stop solution for all your online buisness needs. Whether
            you are just an individual dreaming of starting an online website or
            an established business creating an identity in the global market,
            we got you covered from the initial phases of designing and
            developing to your branding. Alpharule works on the motive of ideas
            getting real.
          </p>

          <p className="smallpara">
            Our goal is to stand as per the client’s expectations and provide
            them the best solutions for their requirements.
          </p>
        </Grid>
        <Grid item xs={6} className="rr3">
          <img src={aboutsecond} alt="" width="200vw" height="auto" />
        </Grid>
      </Grid>
      <Grid container justify="center" className="Aboutussmall">
        <Grid item xs={12} md={3} sm={5} className="Aboutussmall">
          <p className="whyussmall">WHY US?</p>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <Grid container spacing={1} justify="center">
            <Grid item xs={12} sm={6} md={3}>
              <CardDesign src={integrity} alt="1" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CardDesign src={customercentric} alt="2" />
            </Grid>
          </Grid>
          <Grid container spacing={10} justify="center">
            <Grid item xs={12} sm={6} md={3}>
              <CardDesign src={goodteam} alt="1" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CardDesign src={trustworthy} alt="2" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className="Aboutussmall">
        <Footer />
      </div>
    </div>
  );
}

export default Aboutussmall;
