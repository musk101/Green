import React from "react";
import Dashboard from "./Dashboard";
import about from "./about.svg";
import FlyingSaly from "./assets/FlyingSaly.svg";
import aboutsecond from "./assets/aboutsecond.svg";
import CardDesign from "./CardDesign";
import Footer from "./Footer";
import Aboutussmall from "./Aboutussmall";
import abouttext from "./abouttext.svg";
import customercentric from "./assets/customercentric.svg";
import integrity from "./assets/integrity.svg";
import trustworthy from "./assets/trustworthy.svg";
import goodteam from "./assets/goodteam.svg";

import Grid from "@material-ui/core/Grid";
import "./Aboutus.css";
import CardDashboardGrid from "./CardDashboardGrid";
function Aboutus() {
  return (
    <div>
      <div className="Aboutussmall">
        <Aboutussmall />
      </div>
      <Grid container className="Aboutus">
        <Grid item md={12} xs={12} sm={12} className="rr1">
          <h className="about-heading">ABOUT US</h>
        </Grid>
        <Grid item md={3} xs={6} sm={6} className="rr1">
          <img src={FlyingSaly} alt="" width="450vw" height="auto" />
        </Grid>
        <Grid item md={5} xs={6} className="rr2">
          <h>We, at ALPHARULE</h>
          <br />
          <h>We provide the wings your business needs.</h>
        </Grid>
        <Grid item md={4} xs={6} className="rr3">
          <img src={aboutsecond} alt="" width="400vw" height="auto" />
        </Grid>
      </Grid>
      <Grid container justify="center" className="Aboutus">
        <Grid item md={8} xs={8} sm={7} className="about_text">
          <p>
            We are the destination for your online journey of ideas and
            innovations.
          </p>

          <p>
            The one stop solution for all your online buisness needs. Whether
            you are just an individual dreaming of starting an online website or
            an established business creating an identity in the global market,
            we got you covered from the initial phases of designing and
            developing to your branding. Alpharule works on the motive of ideas
            getting real.
          </p>

          <p>
            Our goal is to stand as per the client’s expectations and provide
            them the best solutions for their requirements.
          </p>
        </Grid>
      </Grid>
      <Grid container className="Aboutus">
        <Grid item md={3} sm={5} className="whyus">
          <p>WHY US?</p>
        </Grid>
        <Grid item md={9}>
          <Grid container spacing={10} justify="center">
            <Grid item xs={12} sm={6} md={3}>
              <CardDesign src={integrity} alt="1" hovertext="integrity" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CardDesign
                src={customercentric}
                alt="2"
                hovertext="customer centric"
              />
            </Grid>
          </Grid>
          <Grid container spacing={10} justify="center">
            <Grid item xs={12} sm={6} md={3}>
              <CardDesign src={goodteam} alt="1" hovertext="goodteam" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CardDesign src={trustworthy} alt="2" hovertext="trust worthy" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className="Aboutus">
        <br />
        <Footer />
      </div>
    </div>
  );
}

export default Aboutus;
