import React from 'react';
import './Footer.css';
import FooterSmall from './FooterSmall';

import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import footerImage from './FooterImage.svg';

function Footer() {

  return (
    <div>
        <div className="footersmall">
        <FooterSmall/>
        </div>
       
          <Grid container className="footer">
          <Grid item md={5} >
           
          <img src={footerImage} alt="" width="600px" height="350px" className="img-footer"/>
 
         </Grid>
          <Grid item md={2} className="new">
        
            <h2>EXPLORE</h2>
            <Link to='/'>ABOUT US</Link><br/>
            <Link to='/'>PROJECTS</Link><br/>
            <Link to='/'>COURIERS</Link><br/>
            <Link to='/'>BLOGS</Link>
            
        
          </Grid>
          <Grid item md={2} className="new" >
     
            <h2>SERVICES</h2>
            <Link to='/design'>DESIGN</Link><br/>
            <Link to='/develop'>DEVELOP</Link><br/>
            <Link to='/market'>BUSINESS</Link><br/>
   
          </Grid>
          </Grid>
      </div>
  )
}

export default Footer;
// style={{ display:"inline-block", marginLeft:"-70px", marginBottom:"-90px"}}