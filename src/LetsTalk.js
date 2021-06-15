import React from "react";
import Grid from "@material-ui/core/Grid";
import Footer from './Footer'
import contact from './contact.svg'
// import TextField from '@material-ui/core/TextField';
// import helpyou from './helpyou.svg'
import "./Dreamtext.css";
function LetsTalk() {
  
  return (
    <>
<Grid container>
<Grid item md={6} xs={12} className="text-convert text-center mt-5">

<Grid item md={12} xs={12}>
<span>Let's Talk?</span>
</Grid>
            
<Grid item md={12} xs={12}>
<input  label="Outlined" variant="outlined" placeholder="Name" style={{backgroundColor:"#eaf5dd"}}/>
<input label="Outlined" variant="outlined" placeholder="E-mail" style={{backgroundColor:"#eaf5dd"}} />
<input label="Outlined" variant="outlined" placeholder="Phone Number" style={{backgroundColor:"#eaf5dd"}}/>
</Grid>
         
</Grid>
     
        <Grid item md={6} xs={12} >
          <img src={contact} className="img-fluid"/>
        </Grid>
       
      </Grid>
      <Footer/>
    </>
  );
}

export default LetsTalk;
