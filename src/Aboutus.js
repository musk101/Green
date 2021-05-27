import React from 'react';
import Dashboard from './Dashboard';
import about from './about.svg';
import FlyingSaly from './FlyingSaly.svg';
import aboutsecond from './aboutsecond.svg';
import Footer from './Footer';
import abouttext from './abouttext.svg';
import Grid from '@material-ui/core/Grid';
import './Aboutus.css';
function Aboutus() {
    return (
        <div>
        <Grid container>
           
        <Grid item md={3} xs={6} sm={6}  className="rr1">
          <img src={FlyingSaly} alt=""  width="450vw" height="auto"/>
        </Grid>
        <Grid item md={5} xs={6}  className="rr2">
          <h>We, at ALPHARULE</h><br/>
<h>We provide the wings your business needs.</h>
        </Grid>
        <Grid item md={4} xs={6}  className="rr3">
        <img src={aboutsecond} alt="" width="400vw" height="auto"/>
        </Grid>
        </Grid>
        <Grid container  justify="center">
           
        <Grid item md={8} xs={6} sm={7} className="about_text" >
            
         <p>We are the destination for your online journey of ideas and innovations.</p>

         <p>The one stop solution for all your online buisness needs. Whether you are just an individual dreaming of starting an online website or an established business creating an identity in the global market, we got you covered from 
the initial phases of designing and developing to your branding.
 Alpharule works on the motive of ideas getting real.</p>
 
<p>Our goal is to stand as per the client’s expectations
 and provide them the best solutions for their requirements.</p>
        </Grid>
        </Grid>
        <Grid container >
           
           <Grid item md={2} >
               
            <p>Why Us?</p>
           </Grid>
           </Grid>
        </div>
    )
}

export default Aboutus
