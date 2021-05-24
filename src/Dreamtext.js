import React from 'react'
import Grid from '@material-ui/core/Grid';
import helpyou from './helpyou.svg'
import { Link } from 'react-router-dom';
import './Dreamtext.css';
function Dreamtext(props) {
    const text1=props.text1;
    const text2=props.text2;
    const text22=props.text22;
    const text3=props.text3;
    const text4=props.text4;
    const text5=props.text5;
    const text6=props.text6;
    const text7=props.text7;
    const text1link=props.text1link;
    const text2link=props.text2link;
    const text22link=props.text22link;
    const text3link=props.text3link;
    const text4link=props.text4link;
    const text5link=props.text5link;
    const text6link=props.text6link;
    const text7link=props.text7link;
   
    return (
        <div>
            <Grid container>
        <Grid item xs={10} sm={11} md={11} >
            <div>
        <img src={helpyou} alt="" height="302px" width="900px" className="help"/>
        </div>
        </Grid>
        </Grid>
            <Grid container>
        <Grid item xs={12} sm={4} md={4} >
        <Link to={text1link} className="text_help">{text1}</Link>
          <Link to={text2link} className="text_help">{text2}</Link>
          <Link to={text22link} className="text_help">{text22}</Link>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
        <Link to={text3link} className="text_help">{text3}</Link>
        <Link to={text4link} className="text_help">{text4}</Link>
        <Link to={text5link} className="text_help">{text5}</Link>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
        <Link to={text6link} className="text_help">{text6}</Link>
        <Link to={text7link} className="text_help">{text7}</Link>
        </Grid>
        </Grid>
        </div>
    )
}

export default Dreamtext
