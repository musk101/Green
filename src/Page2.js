import React from 'react'
import Footer from './Footer';
import DashboardDesign from './DashboardDesign';
import CardDesignGrid from './CardDesignGrid';
import CardDesignHeading from './CardDesignHeading';
import DesignPlant from './DesignPlant';
import Dreamtext from './Dreamtext';

function Page2() {
    return (
        <div>
            <DashboardDesign/>
            <Dreamtext tex1="UI DESIGN" text2="UX DESIGN" text3="GRAPHICS DESIGN" text4="MATERIAL DESIGN" text5="LOGO DESIGN" text6="SOCIAL MEDIA CONTENTS" text7="ANIMATIONS" text22="MOCKUP DESIGN"/>
            <CardDesignHeading/>
            <CardDesignGrid/>
            <DesignPlant/>
            <Footer/>
        </div>
    )
}

export default Page2
