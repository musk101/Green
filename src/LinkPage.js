import React from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Dreamtext from './Dreamtext';
import helpyou from './helpyou.svg'
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
            <Grid container>
        <Grid item xs={10} sm={11} md={11} >
            <div>
        <img src={helpyou} alt="" height="302px" width="900px" className="help"/>
        </div>
        </Grid>
        </Grid>
      <Grid
        container
        spacing={2}
        className={classes.gridContainer}
        justify="center"
      >
        <Grid item xs={9} sm={3} md={3} >
          <p>{props.linktext}</p>
        </Grid>
        <Grid item xs={9} sm={3} md={3}>
        <img src={props.linkphoto} alt=""/>
        </Grid>
        </Grid>
         <Grid
         container
         spacing={10}
         className={classes.gridContainer}
         justify="center"
       >
        <Grid item xs={9} sm={12} md={12}>
        <p>{props.secondlinktext}</p>
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
      <Dreamtext tex1="UI DESIGN" text2="UX DESIGN" text3="GRAPHICS DESIGN" text4="MATERIAL DESIGN" text5="LOGO DESIGN" text6="SOCIAL MEDIA CONTENTS" text7="ANIMATIONS" text22="MOCKUP DESIGN"/>
        </div>
    )
}

export default LinkPage
