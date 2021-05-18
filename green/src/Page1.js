import React from 'react';
import Dashboard from './Dashboard';
import Footer from './Footer';
import Testimony from './Testimony';
import CardHeading from './CardHeading';
import CardsGrid from './CardsGrid';
import Saly from './Saly.svg'
import Text from './Text.svg'
import Fourth from './Fourth.svg';
import SecondDashboard from './SecondDashboard.svg';
import Third from './Third.svg';

function Page1() {
    return (
        <div>
            <Dashboard dashimage={Saly} dashimage2={Text} seconddashimage={SecondDashboard} thirddashimage={Third} fourthdashimage={Fourth} display={true}/> 
            {/* //display is to render props  */}
     <Testimony/>
     <CardHeading/>
     <CardsGrid/>
     <Footer/>
        </div>
    )
}

export default Page1;
