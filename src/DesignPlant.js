import React from "react";
import {Link} from 'react-router-dom';
import plant from "./Plant.svg";
import Grid from "@material-ui/core/Grid";
import "./DesignPlant.css";

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
  const imageplant= props.imageplant;
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
          <img className="plant" src={imageplant} alt="" />
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
        {/* <Grid item xs={6} sm={4} md={4} id="design-develop-buttons">
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
        </Grid> */}
      </Grid>
     
      
    </div>
  );
}

export default DesignPlant;
