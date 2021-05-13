import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Client from './Client.svg'
import Slider from 'infinite-react-carousel';
import Grid from '@material-ui/core/Grid'

function Testimony() {
    return (
        <Slider dots>
    <Grid container style={{backgroundColor:"red"}}>
        <Grid item xs={12} sm={6} md={6} >
          <img className="img-responsive" src={Client} alt=""/>
          tst
        </Grid>
        </Grid>
        <Grid container style={{backgroundColor:"red"}}>
        <Grid item xs={6} sm={6} md={6} >
          {/* <img className="first_comment" src={Client} alt=""/> */}
          tst
        </Grid>
        </Grid>
        <Grid container style={{backgroundColor:"red"}}>
        <Grid item xs={12} sm={6} md={6} >
          {/* <img className="first_comment" src={Client} alt=""/> */}
          tst
        </Grid>
        </Grid>
  </Slider>
    )
}

export default Testimony
