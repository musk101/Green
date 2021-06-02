import React from "react";
import plant from "./Plant.svg";
import Grid from "@material-ui/core/Grid";
import "./DesignPlant.css";
import DesignButton from "./DesignButton.svg";
import DevelopButton from "./DevelopButton.svg";
import BusinessButton from "./BusinessButton.svg";
import WorkSmall from "./WorkSmall";
import { makeStyles } from "@material-ui/core/styles";
import DesignSmall from "./DesignSmall.svg";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
});
function DesignPlant(props) {
  const textcolor = props.textcolor;
  const classes = useStyles();
  return (
    <div>
      <Grid container className="worksmall" spacing={3}>
        <Grid item md={12} className="rrd">
          <WorkSmall
            worksmallimage={DesignSmall}
            worksmalltext="some text will come here very soon"
            cardcolor="#1c8463"
          />
        </Grid>
      </Grid>
      <Grid container className="workLaptopView">
        <Grid item xs={10} sm={10} md={10}>
          <img className="plant" src={plant} alt="" />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        className={classes.gridContainer}
        justify="center"
      ></Grid>
      <Grid
        container
        className="worksmall"
        id="design-develop-buttons"
        style={{ paddingTop: "5px" }}
      >
        <Grid item xs={6} sm={4} md={4} id="design-develop-buttons">
          <p
            style={{
              color: textcolor,
              fontWeight: "600",
              fontSize: "20px",
              paddingTop: "3rem",
            }}
          >
            Other Services
          </p>
        </Grid>
      </Grid>
      <Grid
        container
        className="worksmall"
        id="design-develop-buttons"
        style={{ paddingTop: "50px" }}
      >
        <Grid item xs={6} sm={4} md={4}>
          <img
            className="designbutton"
            src={DesignButton}
            alt=""
            height="auto"
            width="200rem"
          />
        </Grid>
      </Grid>
      <Grid
        container
        className="worksmall"
        id="design-develop-buttons"
        style={{ paddingTop: "5px" }}
      >
        <Grid item xs={6} sm={4} md={4} id="design-develop-buttons">
          <img
            className="developbutton"
            src={DevelopButton}
            alt=""
            height="auto"
            width="200rem"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default DesignPlant;
