import React from 'react'
import WhyUs from './WhyUs.svg'
import './Cards.css';

function CardHeading() {
    return (
        <div>
            <img src={WhyUs} alt="" className="whyus"/>
        </div>
    )
}

export default CardHeading
