import React from "react";
import Grid from "@material-ui/core/Grid";
import Footer from './Footer'
import contact from './contact.svg'
import TextField from '@material-ui/core/TextField';
// import helpyou from './helpyou.svg'
import { Link } from "react-router-dom";
import "./Dreamtext.css";
function LetsTalk() {
  
  return (
    <div>
      <Grid container>
        <Grid item md={6} xs={12} className="text-convert">
            <Grid Container>
<Grid item md={12} xs={12}>
<h>Let's Talk?</h>
</Grid>
<Grid item md={12} xs={12}>
<TextField id="outlined-basic" label="Outlined" variant="outlined" style={{backgroundColor:"#eaf5dd"}}/>
</Grid>
<Grid item md={12} xs={12}>
<TextField id="outlined-basic" label="Outlined" variant="outlined" style={{backgroundColor:"#eaf5dd"}} />
</Grid>
<Grid item md={12} xs={12}>
<TextField id="outlined-basic" label="Outlined" variant="outlined" style={{backgroundColor:"#eaf5dd"}}/>
</Grid>
            </Grid>
         
        </Grid>
     
        <Grid item md={6} xs={12} >
          <img src={contact}/>
        </Grid>
       
      </Grid>
      <Footer/>
    </div>
  );
}

export default LetsTalk;
