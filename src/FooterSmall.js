import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import smalllogo from "./smallfooterlogo.svg";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: "black",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    fontWeight: 700,
    color: "#686868",
  },
}));

export default function FooterSmall() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12} justify="center">
          <img
            src={smalllogo}
            alt=""
            style={{ paddingLeft: "27%", paddingTop: "10%" }}
          />
        </Grid>
        <Grid item xs={8}>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ backgroundColor: "#f1ecec" }}
            >
              <Typography className={classes.heading}>EXPLORE</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#f1ecec" }}>
              <Typography>
                <div>
                  <Link to="/aboutus" className={classes.heading}>
                    ABOUT US
                  </Link>
                </div>
                <div>
                  <Link to="#" className={classes.heading}>
                    PROJECTS
                  </Link>
                </div>
                <div>
                  <Link to="#" className={classes.heading}>
                    COURIERS
                  </Link>
                </div>
                <div>
                  <Link to="#" className={classes.heading}>
                    BLOGS
                  </Link>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={8} className="rrd">
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ backgroundColor: "#f1ecec" }}
            >
              <Typography className={classes.heading}>SERVICES</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "#f1ecec" }}>
              <Typography>
                <div>
                  <Link to="/design" className={classes.heading}>
                    DESIGN
                  </Link>
                </div>
                <div>
                  <Link to="develop" className={classes.heading}>
                    DEVELOP
                  </Link>
                </div>
                <div>
                  <Link to="market" className={classes.heading}>
                    BUSINESS
                  </Link>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} style={{paddingLeft:"23vw"}}>
          <Typography>© copyright all rights reserved.</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ backgroundColor: "#c4c4c4", color: "#FFFFFF" }}
        >
          <Typography style={{ fontWeight: "600", paddingLeft: "25vw" }}>
            MADE WITH ❤️ IN INDIA{" "}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
