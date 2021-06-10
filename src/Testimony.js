import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "infinite-react-carousel";
import Grid from "@material-ui/core/Grid";
import "./Testimony.css";

function Testimony(props) {
  const Clientimage1 = props.Clientimage1;
  const Clientimage2 = props.Clientimage2;
  const Clientimage3 = props.Clientimage3;

  return (
    <>
      <Grid container style={{ color: "#1c8463" }} className="imajtop">
        <Grid item xs={12} sm={12} md={12} className="whatsay">
          <h1>What Clients Says?</h1>
        </Grid>
      </Grid>
      <Slider dots Color={false} arrows={false} className="imajtopbox">
        <Grid container style={{ backgroundColor: "green" }}>
          <Grid item xs={false} sm={12} md={12}>
            <img className="imaj" src={Clientimage1} alt="" />
            {/* test */}
          </Grid>
        </Grid>
        <Grid container style={{ backgroundColor: "transparent" }}>
          <Grid item xs={12} sm={12} md={12}>
            <img className="imaj" src={Clientimage2} alt="" />
            {/* test */}
          </Grid>
        </Grid>
        <Grid container style={{ backgroundColor: "red" }}>
          <Grid item xs={12} sm={12} md={12}>
            <img className="imaj" src={Clientimage3} alt="" />
            {/* test */}
          </Grid>
        </Grid>
      </Slider>
    </>
  );
}

export default Testimony;
