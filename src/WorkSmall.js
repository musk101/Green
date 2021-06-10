import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import './WorkSmall.css'
import Testimony from "./Testimony";


const useStyles = makeStyles((theme) => ({
  root: {
  fontFamily:"Blinker",
    color:"white" ,

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

}));

export default function WorkSmall(props) {
  const worksmallimage=props.worksmallimage;
  const worksmalltext=props.worksmalltext;
  const cardcolor=props.cardcolor;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
  <>
    <Card className={classes.root} id="cardss" style={{backgroundColor:cardcolor}}>
      <CardHeader classes={{
          title: classes.root,
        }} 
        
        
        title="Shrimp and Chorizo Paella"
        // subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={worksmallimage}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="white" component="p" className={classes.root}
        >
         {worksmalltext}
          
        </Typography>
      </CardContent>
      </Card>
          
</>
  
  );
}