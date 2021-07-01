import React from "react";
import Footer from "../Footer";
import DashboardDesign from "../DashboardDesign";
import CardDesignGrid from "../CardDesignGrid";
import CardDesignHeading from "../CardDesignHeading";
import DesignPlant from "../DesignPlant";
import Dreamtext from "../Dreamtext";
import RedPlant from "./assets/RedPlant.svg";
import {Link} from 'react-router-dom';
import DesignButton from "./assets/DesignButton.svg";
import DevelopButton from "./assets/DevelopButton.svg";
import BusinessButton from "./assets/BusinessButton.svg";
import Grid from "@material-ui/core/Grid";

function Page2() {
  return (
    <div>
      <DashboardDesign />
      <Dreamtext
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
        tex1="UI DESIGN"
        text2="UX DESIGN"
        text3="GRAPHICS DESIGN"
        text4="MATERIAL DESIGN"
        text5="LOGO DESIGN"
        text6="SOCIAL MEDIA CONTENTS"
        text7="ANIMATIONS"
        text22="MOCKUP DESIGN"
      />
      <CardDesignHeading />
      <CardDesignGrid />
      <DesignPlant textcolor="#1C8463" imageplant={RedPlant}/>
      <Grid
        container
       
        id="design-develop-buttons"
        style={{ paddingTop: "50px" }}
      >
        <Grid item xs={12} sm={4} md={12}
        >
          <div className="text-center other-services-text">Other Services</div>
          <div className="footer-buttons-div">
          <Link to="/develop"><img
            className="footer-btn mx-5"
            src={DevelopButton}
            alt=""     
          /></Link>
           <Link to="/market"><img
            className="footer-btn mx-5"
            src={BusinessButton}
            alt=""
            /></Link>
            </div>
        </Grid>
        </Grid>
      <Footer />
    </div>
  );
}

export default Page2;
