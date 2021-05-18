import React from 'react'
import CardDesignHeading from './CardDesignHeading';
import CardDevelopGrid from './CardDevelopGrid';
import Dreamtext from './Dreamtext';
import Footer from './Footer';
import Dashboard from './Dashboard';
import pc from './pc.svg';
import developtext from './developtext.svg';

function Page3() {
    return (
        <div>
              <Dashboard dashimage={pc} dashimage2={developtext}/>
             <Dreamtext text1="WEB DEVELOPMENT" text2="ANDROID APPLICATION" text3="WEB APPLICATION" text4="iOS APPLICATION" text5="MAINTAINANCE & TESTING" text6="UI DEVELOPMENT" text7="API INTEGRATION"/>
             <CardDesignHeading/>
             <CardDevelopGrid/>
             <Footer/>
        </div>
    )
}

export default Page3
