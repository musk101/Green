import React from 'react';
import Dashboard from './Dashboard';
import Footer from './Footer';
import Testimony from './Testimony';
import CardHeading from './CardHeading';
import CardsGrid from './CardsGrid';

function Page1() {
    return (
        <div>
            <Dashboard/>
     <Testimony/>
     <CardHeading/>
     <CardsGrid/>
     <Footer/>
        </div>
    )
}

export default Page1;
