import React from 'react'
import plant from './Plant.svg';
import Grid from '@material-ui/core/Grid';
import './DesignPlant.css';

function DesignPlant() {
    return (
        <div>
      <Grid container>
        <Grid item xs={10} sm={10} md={10} >
          <img className="plant" src={plant} alt=""/>
        </Grid>
        </Grid>
        </div>
    )
}

export default DesignPlant
