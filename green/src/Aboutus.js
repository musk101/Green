import React from 'react';
import Dashboard from './Dashboard';
import about from './about.svg';
import aboutsecond from './aboutsecond.svg';
import Footer from './Footer';
import abouttext from './abouttext.svg';

function Aboutus() {
    return (
        <div>
<Dashboard dashimage={about} dashimage2={aboutsecond} display={false} seconddashimage={abouttext}/>
<Footer/>

 </div>
    )
}

export default Aboutus
