import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import dashsmall1 from "./DashSmall1.svg";
import dashsmall2 from "./DashSmall2.svg";
import dashsmall3 from "./DashSmall3.svg";
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

function SmallDashboard() {
  const classes = useStyles();
  return (
    <div>
      <>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <img
              className="second"
              src={dashsmall1}
              alt=""
              style={{ paddingRight: "1rem" }}
            />
          </Grid>
        </Grid>
      </>
      <>
        {" "}
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <img
              className="Third"
              src={dashsmall2}
              alt=""
              style={{ paddingRight: "1rem" }}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <img
              className="fourth"
              src={dashsmall3}
              alt=""
              style={{ paddingRight: "1rem" }}
            />
          </Grid>
        </Grid>
      </>
    </div>
  );
}

export default SmallDashboard;
