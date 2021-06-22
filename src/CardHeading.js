import React from 'react'
import WhyUs from './assets/WhyUs.svg'
import './Cards.css';

function CardHeading() {
    return (
        <div>
            <img src={WhyUs} alt="" className="whyus" style={{paddingLeft:"30vw"}}/>
        </div>
    )
}

export default CardHeading
