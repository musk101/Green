import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import logo from './Logo.svg'
import xd from './adobe-xd 1.svg';
import figma from './figma-1 1.svg';
import ai from './illustrator.svg';
import id from './indesign.svg';
import ae from './ae.svg';
import photoshop from './Photoshop.svg';


const useStyles = makeStyles({
  root: {
    minWidth: 299,
    minHeight:299,
    borderRadius: 20,
    boxShadow: '0 3px 5px 2px rgba(241,236,236, 100)',
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",

  },
  pos: {
    marginBottom: 12
  }
});

export default function OutlinedCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined" style={{backgroundColor: "#EAF5DD" , marginBottom: "1rem"}}>
      <CardContent>
         <img src={xd} alt=""/>
      </CardContent>

    </Card>
  );
}
