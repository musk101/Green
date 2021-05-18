import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";


const useStyles = makeStyles({
  root: {
    minWidth: 299,
    minHeight:299,
    borderRadius: 20,
    boxShadow: '3px 3px 5px 2px rgba(0,0,0,0.2)',
    opacity: 0.7,
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

export default function OutlinedCard(props) {
  const image = props.src;
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined" style={{backgroundColor: "#EAF5DD" , marginBottom: "1rem"}}>
      <CardContent>
         <img src={image} alt="" height="197px" width="203px"/></CardContent>

    </Card>
  );
}
