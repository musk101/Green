import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import smalllogo from './smallfooterlogo.svg'
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
 color:"black",

 
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
<img src={smalllogo} alt=""/>
            </Grid>
        <Grid item xs={8} >
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading} >EXPLORE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
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
        >
          <Typography className={classes.heading}>SERVICES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>
      <Grid item xs={8} >
      <Typography>© copyright all rights reserved.</Typography>
      </Grid>
      <Grid item xs={12} style={{backgroundColor:"#c4c4c4", color:"#FFFFFF"}}>
      <Typography style={{fontWeight:"400"}}>MADE WITH ❤️ IN INDIA </Typography>
      </Grid>
      </Grid>
    </div>
  );
}