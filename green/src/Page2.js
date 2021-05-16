import React from 'react'
import Footer from './Footer';
import DashboardDesign from './DashboardDesign';
import CardDesignGrid from './CardDesignGrid';
import CardDesignHeading from './CardDesignHeading';
import DesignPlant from './DesignPlant';

function Page2() {
    return (
        <div>
            <DashboardDesign/>
            <CardDesignHeading/>
            <CardDesignGrid/>
            <DesignPlant/>
            <Footer/>
        </div>
    )
}

export default Page2
