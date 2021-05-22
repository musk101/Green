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
        <Link to='/tik' className="text_help">{text1}</Link>
          <p className="text_help">{text2}</p>
          <p className="text_help">{text22}</p>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
        <p className="text_help">{text3}</p>
        <p className="text_help">{text4}</p>
        <p className="text_help">{text5}</p>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
        <p className="text_help">{text6}</p>
        <p className="text_help">{text7}</p>
        </Grid>
        </Grid>
        </div>
    )
}

export default Dreamtext
