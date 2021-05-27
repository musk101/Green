import React from 'react';
import Dashboard from './Dashboard';
import Footer from './Footer';
import Testimony from './Testimony';
import CardHeading from './CardHeading';
import CardDashboardGrid from './CardDashboardGrid';
import Saly from './Saly.svg'
import Text from './Text.svg'
import Fourth from './Fourth.svg';
import SecondDashboard from './SecondDashboard.svg';
import Third from './Third.svg';
import Client from './Client.svg';

function Page1() {
    return (
        <div>
            <Dashboard dashimage={Saly} dashimage2={Text} seconddashimage={SecondDashboard} thirddashimage={Third} fourthdashimage={Fourth} display={true}/>
            {/* //display is to render props  */}
     <Testimony/>
     <CardHeading/>
     <CardDashboardGrid/>
     <Testimony Clientimage={Client}/>
     <Footer/>
        </div>
    )
}

export default Page1;
