import React from "react";
import Grid from "@material-ui/core/Grid";
import Footer from './Footer';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import contact from './contact.svg'
// import TextField from '@material-ui/core/TextField';
// import helpyou from './helpyou.svg'
import "./Dreamtext.css";
function LetsTalk() {
  
  return (
    <>
      <div className="container-lets-talk">
        <Grid container>
          <Grid item md={4} xs={12} className="text-convert text-center mt-5">
            <span>Let's Talk?</span>
            <br />
            <input
              
              placeholder="Name"
              style={{ backgroundColor: "#eaf5dd" , border:"none", boxShadow: "0px 0px 5px" }}
            />

            <input
             
              placeholder="E-mail"
              style={{ backgroundColor: "#eaf5dd" , border:"none", boxShadow: "0px 0px 5px"}}
            />
            <input
             
              placeholder="+91-12345"
              style={{ backgroundColor: "#eaf5dd" , border:"none", boxShadow: "0px 0px 5px"}}
            />

            <button className="btn btn-outline-danger btn-lg">Send</button>
          </Grid>

          <Grid item md={8} xs={12}>
            <img src={contact} className="img-fluid lets-talk-img" />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
}

export default LetsTalk;
