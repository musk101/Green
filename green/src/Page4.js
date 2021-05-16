import React from 'react'
import markettext from './markettext.svg';
import two from './two.svg';
import CardDesignHeading from './CardDesignHeading';
import CardDevelopGrid from './CardDevelopGrid';
import Dreamtext from './Dreamtext';
import Footer from './Footer';
import Dashboard from './Dashboard';
function Page4() {
    return (
        <div>
            <Dashboard dashimage={two} dashimage2={markettext}/>
             <Dreamtext text1="WEB DEVELOPMENT" text2="ANDROID APPLICATION" text3="WEB APPLICATION" text4="iOS APPLICATION" text5="MAINTAINANCE & TESTING" text6="UI DEVELOPMENT" text7="API INTEGRATION"/>
             <CardDesignHeading/>
             <Footer/>
        </div>
    )
}

export default Page4
