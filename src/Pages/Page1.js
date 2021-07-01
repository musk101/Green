import React from "react";
import Dashboard from "../Dashboard";
import Footer from "../Footer";
import Testimony from "../Components/Testimony/Testimony";
import CardHeading from "../CardHeading";
import CardDashboardGrid from "../CardDashboardGrid";
import Saly from "./assets/Saly.svg";
import Text from "./assets/Text.svg";
// import Fourth from "./Fourth.svg";
import Fourth from "./assets/Fourth.svg";
import SecondDashboard from "./SecondDashboard.svg";
import Third from "./assets/Third.svg";
import Client1 from "./assets/Client1.svg";
import Client2 from "./assets/Client2.svg";
import Client3  from "./assets/Client3.svg";
import "./Work.css";


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
      <br />
      <Footer />
    </div>
  );
}

export default Page1;
