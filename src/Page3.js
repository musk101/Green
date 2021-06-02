import React from "react";
import CardDesignHeading from "./CardDesignHeading";
import CardDevelopGrid from "./CardDevelopGrid";
import Dreamtext from "./Dreamtext";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import DesignPlant from "./DesignPlant";
import pc from "./pc.svg";
import developtext from "./developtext.svg";

function Page3() {
  return (
    <div>
      <Dashboard dashimage={pc} dashimage2={developtext} />
      <Dreamtext
        Dream1="We convert the"
        Dream2="designgs
      into the codes as per your requirements."
        text1link="/webdev"
        text2link="/androidapp"
        text3link="/webapp"
        text4link="/iosapp"
        text5link="/maintainandtest"
        text6link="/uidev"
        text7link="/api"
        text1="WEB DEVELOPMENT"
        text2="ANDROID APPLICATION"
        text3="WEB APPLICATION"
        text4="iOS APPLICATION"
        text5="MAINTAINANCE & TESTING"
        text6="UI DEVELOPMENT"
        text7="API INTEGRATION"
      />
      <CardDesignHeading />
      <CardDevelopGrid />
      <DesignPlant textcolor="#34C25E" />
      <Footer />
    </div>
  );
}

export default Page3;
