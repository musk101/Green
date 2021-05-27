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

const useStyles = makeStyles((theme) => ({
  root: {
  fontFamily:"Blinker",
    color:"white" ,

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function WorkSmall(props) {
  const worksmallimage=props.worksmallimage;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
  
    <Card className={classes.root} id="cardss">
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
          This impressive paella is a perfect party dish and a
          
        </Typography>
      </CardContent>
      
    </Card>
  );
}