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
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>

              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>MADE WITH 🧡 IN India</small>
        </div>
      </section>
    </div>
  );
}

export default Footer; 