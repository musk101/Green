import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SmallDashboard from "./SmallDashboard";
import BusinessButton from "./BusinessButton.svg";
import DesignButton from "./DesignButton.svg";
import { Link } from 'react-router-dom'
import DevelopButton from "./DevelopButton.svg"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Dashboard(props) {
  const dashimage = props.dashimage;
  const dashimage2 = props.dashimage2;
  const seconddashimage = props.seconddashimage;
  const thirddashimage = props.thirddashimage;
  const fourthdashimage = props.fourthdashimage;

  const classes = useStyles();
  return (
    <div>
      <Grid container className="reverse-items">
      <Link to="/market" />
      <Grid item sm={6} md={4}>
    
          <img className="button1" src={BusinessButton} alt=""/>
        </Grid>
        <Grid item sm={6} md={4}>
          <img className="button1" src={DesignButton} alt="" />
        </Grid>
        <Grid item sm={6} md={4}>
          <img className="button1" src={DevelopButton} alt="" />
        </Grid>
      </Grid>
      <Grid container className="reverse-items">
        <Grid item xs={12} sm={6} md={6}>
          <img className="saly" src={dashimage} alt="" />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <img className="text" src={dashimage2} alt="" />
        </Grid>
      </Grid>
      {props.seconddashimage ? (
        <div className="dashsmall">
          <SmallDashboard />
        </div>
      ) : null}
      {props.seconddashimage ? (
        <>
          <Grid container className="dashbig">
            <Grid item xs={12} sm={12} md={12}>
              <img className="second" src={seconddashimage} alt="" />
            </Grid>
          </Grid>
        </>
      ) : null}
      {props.display ? (
        <>
          {" "}
          <Grid container className="dashbig">
            <Grid item xs={12} sm={12} md={12}>
              <img className="Third" src={thirddashimage} alt="" />
            </Grid>
          </Grid>
          <Grid container className="dashbig">
            <Grid item xs={12} sm={12} md={12}>
              <img className="fourth" src={fourthdashimage} alt="" />
            </Grid>
          </Grid>
        </>
      ) : null}
    </div>
  );
}

export default Dashboard;
