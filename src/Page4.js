import React from "react";
import markettext from "./markettext.svg";
import two from "./two.svg";
import Marketplant from "./MarketPlant.svg";
import CardDesignHeading from "./CardDesignHeading";
import CardMarketGrid from "./CardMarketGrid";
import Dreamtext from "./Dreamtext";
import DesignPlant from "./DesignPlant";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import './Dreamtext.css';
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
      <DesignPlant textcolor="#97ed4c" imageplant={Marketplant}/>
      <Footer />
    </div>
  );
}

export default Page4;
