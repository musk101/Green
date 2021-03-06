import React from "react";
import Grid from "@material-ui/core/Grid";
// import helpyou from './helpyou.svg'
import { Link } from "react-router-dom";
import "./Dreamtext.css";
function Dreamtext(props) {
  const Dream1 = props.Dream1;
  const Dream2 = props.Dream2;
  const text1 = props.text1;
  const text2 = props.text2;
  const text22 = props.text22;
  const text3 = props.text3;
  const text4 = props.text4;
  const text5 = props.text5;
  const text6 = props.text6;
  const text7 = props.text7;
  const text1link = props.text1link;
  const text2link = props.text2link;
  const text22link = props.text22link;
  const text3link = props.text3link;
  const text4link = props.text4link;
  const text5link = props.text5link;
  const text6link = props.text6link;
  const text7link = props.text7link;

  return (
    <div>
      <Grid container>
        <Grid item md={12} xs={12} className="serve">
          <h>WHAT WE SERVE?</h>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={12} xs={12} className="text-convert">
          <h>{Dream1}</h>
        </Grid>
        <Grid item md={12} xs={12} className="text-convert2">
          <h>{Dream2}</h>
        </Grid>
      </Grid>
      <Grid container className="list-service">
        <Grid item xs={12} sm={4} md={4}>
          <div>
            <Link to={text1link} className="text_help">
              {text1}
            </Link>
          </div>
          <div>
            {" "}
            <Link to={text2link} className="text_help">
              {text2}
            </Link>
          </div>
          {props.text22 ? (
            <div>
              {" "}
              <Link to={text22link} className="text_help">
                {text22}
              </Link>
            </div>
          ) : null}
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          {props.text3 ? (
            <div>
              <Link to={text3link} className="text_help">
                {text3}
              </Link>
            </div>
          ) : null}
          {props.text4 ? (
            <div>
              <Link to={text4link} className="text_help">
                {text4}
              </Link>
            </div>
          ) : null}
          {props.text5 ? (
            <div>
              <Link to={text5link} className="text_help">
                {text5}
              </Link>
            </div>
          ) : null}
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <div>
            <Link to={text6link} className="text_help">
              {text6}
            </Link>
          </div>
          <div>
            <Link to={text7link} className="text_help">
              {text7}
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dreamtext;
