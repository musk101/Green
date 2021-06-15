import React from "react";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Testimony from "./Testimony";
import CardHeading from "./CardHeading";
import CardDashboardGrid from "./CardDashboardGrid";
import Saly from "./Saly.svg";
import Text from "./Text.svg";
import Fourth from "./Fourth.svg";
import SecondDashboard from "./SecondDashboard.svg";
import Third from "./Third.svg";
import Client1 from "./Client1.svg";
import Client2 from "./Client2.svg";
import Client3  from "./Client3.svg";


function Page1() {
  return (
    <div>
      <Dashboard
        className="saly1"
        dashimage={Saly}
        dashimage2={Text}
        seconddashimage={SecondDashboard}
        thirddashimage={Third}
        fourthdashimage={Fourth}
        display={true}
      />
      {/* //display is to render props  */}

      <Testimony
        Clientimage1={Client1}
        Clientimage2={Client2}
        Clientimage3={Client3}
      />
      <CardHeading />
      <CardDashboardGrid />
      <Footer />
    </div>
  );
}

export default Page1;
