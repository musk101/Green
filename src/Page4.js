import React from "react";
import markettext from "./markettext.svg";
import two from "./two.svg";
import CardDesignHeading from "./CardDesignHeading";
import CardMarketGrid from "./CardMarketGrid";
import Dreamtext from "./Dreamtext";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
function Page4() {
  return (
    <div>
      <Dashboard dashimage={two} dashimage2={markettext} display={false} />
      <Dreamtext
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
      <Footer />
    </div>
  );
}

export default Page4;
