import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Client from './Client.svg'
import Slider from 'infinite-react-carousel';
import Grid from '@material-ui/core/Grid'
import './Testimony.css';

function Testimony() {
    return (
        <Slider dots color="red">
    <Grid container style={{backgroundColor:"green"}}>
        <Grid item xs={false} sm={12} md={12} >
          <img className="imaj" src={Client} alt=""/>
          {/* test */}
        </Grid>
        </Grid>
        <Grid container style={{backgroundColor:"transparent"}}>
        <Grid item xs={12} sm={12} md={12} >
          <img className="imaj" src={Client} alt=""/>
          {/* test */}
        </Grid>
        </Grid>
        <Grid container style={{backgroundColor:"red"}}>
        <Grid item xs={12} sm={12} md={12} >
          <img className="imaj" src={Client} alt=""/>
          {/* test */}
        </Grid>
        </Grid>
  </Slider>
    )
}

export default Testimony
