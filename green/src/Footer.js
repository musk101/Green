import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import footerImage from './FooterImage.svg';

function Footer() {
  return (
    <div className='footer-container'>
        
      <section className='footer-subscription'>
       
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
              <div style={{backgroundColor:"red"}}>
         <img className="image" src={footerImage} alt=""/>
          </div>
          </div>
          
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>EXPLORE</h2>
            <Link to='/'>ABOUT US</Link>
            <Link to='/'>PROJECTS</Link>
            <Link to='/'>COURIERS</Link>
            <Link to='/'>BLOGS</Link>
          </div>
          <div class='footer-link-items'>
            <h2>SERVICES</h2>
            <Link to='/'>DESIGN</Link>
            <Link to='/'>DEVELOP</Link>
            <Link to='/'>BUSINESS</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>

              <i class='fab fa-typo3' />
            </Link>
          </div >
          <div style={{backgroundColor:"red"}}>
          <small class='website-rights'>MADE WITH 🧡 IN India</small>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer; 