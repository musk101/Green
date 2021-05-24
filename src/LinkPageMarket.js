import React from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Dreamtext from './Dreamtext';
import helpyou from './helpyou.svg'
import Footer from './Footer';
import "./LinkPage.css";

const useStyles = makeStyles({
    gridContainer: {
      paddingLeft: "20px",
      paddingRight: "20px",
    }
  });

function LinkPage(props) {
    const linktext = props.linktext;
    const linkphoto=props.linkphoto;
    const secondlinktext=props.secondlinktext;
    const classes = useStyles();
    return (
        <div>
            <>
            <>
      <Grid
        container
        spacing={2}
        className={classes.gridContainer}
      
      >
        <Grid item xs={9} sm={7} md={6}>
          <p className="op">{props.linktext}</p>
        </Grid>
        <Grid item xs={null} sm={5} md={6}>
        <img src={props.linkphoto} alt="" height="300px" width="300px"/>
        </Grid>
        </Grid>
         <Grid
         container
         spacing={10}
         className={classes.gridContainer}
         justify="center"
       >
        <Grid item xs={9} sm={12} md={12}>
        <p className="op2">{props.secondlinktext}</p>
        </Grid>
        </Grid>
         <Grid
         container
         spacing={10}
         className={classes.gridContainer}
         justify="center"
       >
      </Grid>
      </>
      <Dreamtext text1link="/digitalmarket" text2link="content" tex1="DIGITAL MARKETING" text2="CONTENT WRITING" text6="CONSULTING" text7="BRANDING" />
        <Footer/>
        </>
        </div>
    )
}

export default LinkPage
