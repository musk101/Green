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
      <div className="container-lets-talk">
        <Grid container>
          <Grid item md={4} xs={12} className="text-convert text-center mt-5">
            <span>Let's Talk?</span>
            <br />
            <input
              label="Outlined"
              variant="outlined"
              placeholder="Name"
              style={{ backgroundColor: "#eaf5dd" }}
            />

            <input
              label="Outlined"
              variant="outlined"
              placeholder="E-mail"
              style={{ backgroundColor: "#eaf5dd" }}
            />
            <input
              label="Outlined"
              variant="outlined"
              placeholder="Phone Number"
              style={{ backgroundColor: "#eaf5dd" }}
            />

            <button className="btn btn-outline-danger btn-lg" type="submit">
              Send
            </button>
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
