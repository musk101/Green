import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./CardDesign.css";

const useStyles = makeStyles({
  root: {
    Width: 210,
    maxHeight: 264,
    borderRadius: 20,
    boxShadow: "3px 3px 5px 2px rgba(0,0,0,0.2)",
    // opacity: "0.9",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 30,
  },
});

export default function OutlinedCard(props) {
  const image = props.src;
  const hovertext = props.hovertext;
  const classes = useStyles();
  return (
    <Card
      className={classes.root}
      variant="outlined"
      style={{
        backgroundColor: "#EAF5DD",
        boxShadow: "none",
        border: "none",
        borderRadius: "0px",
        paddingTop: "2px",
        paddingBottom: "5px",
      }}
    >
      <CardContent>
        <div class="thumbnail">
          <div>{hovertext}</div>
          <img src={image} className="ok" alt="" height="50%" width="50%" />
        </div>
      </CardContent>
    </Card>
  );
}
