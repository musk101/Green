import React from "react";
import markettext from "./markettext.svg";
import two from "./two.svg";
import {Link} from 'react-router-dom';
import DesignButton from "./DesignButton.svg";
import DevelopButton from "./DevelopButton.svg";
import BusinessButton from "./BusinessButton.svg";
import Marketplant from "./MarketPlant.svg";
import CardDesignHeading from "./CardDesignHeading";
import CardMarketGrid from "./CardMarketGrid";
import Dreamtext from "./Dreamtext";
import Grid from "@material-ui/core/Grid";
import DesignPlant from "./DesignPlant";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import './Dreamtext.css';
import red from './red.svg'
function Page4() {
  return (
    <div>
      <Dashboard dashimage={two} dashimage2={markettext} display={false} />
      <Dreamtext className="correct"
        text1link="/digital"
        text2link="/content"
        text6link="/consulting"
        text7link="/branding"
        text1="MARKETING"
        text2="CONTENT WRITING"
        text6="CONSULTING"
        text7="BRANDING"
      />
      <CardDesignHeading />
      <CardMarketGrid />
    
      <DesignPlant textcolor="#97ed4c" imageplant={Marketplant} DesignSmall={red}/>
      <Grid
        container
       
        id="design-develop-buttons"
        style={{ paddingTop: "50px" }}
      >
        <Grid item xs={12} sm={4} md={12}
        >
          <div className="text-center other-services-text">Other Services</div>
          <div className="footer-buttons-div">
          <Link to="/design"><img
            className="footer-btn mx-5"
            src={DesignButton}
            alt=""     
          /></Link>
           <Link to="/develpop"><img
            className="footer-btn mx-5"
            src={DevelopButton}
            alt=""
            /></Link>
            </div>
        </Grid>
        </Grid>
      <Footer />
    </div>
  );
}

export default Page4;
