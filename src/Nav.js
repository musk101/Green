import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Container } from "react-bootstrap";
import DesignButton from "./DesignButton.svg";
import DevelopButton from "./DevelopButton.svg";
import BusinessButton from "./BusinessButton.svg";
import Logo from "./Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function NavSection(){
const [backgroundBlurState, setBackgroundBlurState] = useState(false)
const [width, setWidth] = useState(1020);
console.log(width)
  

  useEffect(() => {
    window.addEventListener("load", () => setWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [] );
    
  const backgroundBlur = () => {
    setBackgroundBlurState(true)
  };

  const removeBackgroundBlur = () => {
    setBackgroundBlurState(false)
  };

    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-nav">
          
      <Container>
      <Link to="/"><span className="navbar-brand">
          <img src={Logo} alt="" />
        </span></Link>

        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={backgroundBlur}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse bg-nav justify-content-end"
          id="navbarCollapse"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <button
                className="navbar-toggler toogle-btn-li"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={removeBackgroundBlur}
              >
                <span className="cross">
                  {" "}
                  <FontAwesomeIcon icon={faTimes} size="lg" />
                </span>
              </button>
            </li>

            {width > 1000 ? (
              <>
                <Link to="/work"><li className="nav-item active">
                  <span className="nav-link">
                    Work
                  </span>
                </li></Link>
                <Link to="/services"><li className="nav-item">
                  <span className="nav-link" >
                    Services
                  </span>
                </li></Link>
                <Link to="/services"><li className="nav-item">
                  <span className="nav-link">
                    About
                  </span>
                </li></Link>
                <Link to="/letstalk"><li>
                  <span
                    className="nav-link text-center text-uppercase"
                    href="/letstalk"
                    id="lets_talk"
                  >
                    Let's Talk
                  </span>
                </li></Link>
              </>
            ) : (
              <>
                <span className="mt-5"></span>
                <h2 className="services-text mx-4">SERVICES</h2>
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    <img src={DesignButton} className="img-fluid" />
                  </a>
                </li>
                <li className="nav-item">
                  <span className="nav-link" href="#">
                    <img src={DevelopButton} className="img-fluid" />
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" href="#">
                    <img src={BusinessButton} className="img-fluid" />
                  </span>
                </li>
                <Link to="/work"><li className="nav-item  nav-sidebar-text">
                  <span className="mx-4" href="#">
                    WORK
                  </span>
                </li></Link>
                <Link to="/about"><li className="nav-item nav-sidebar-text mt-4">
                  <span className="mx-4" href="#">
                    ABOUT
                  </span>
                </li></Link>

                <li className="lets-talk-sidebar-div mt-4">
                  <span className="side-nav-email">contact@alpharule.in</span>
                  <span
                    className="nav-link text-center text-uppercase"
                    href="/letstalk"
                    id="lets_talk"
                  >
                    Let's Talk
                  </span>
                </li>
              </>
            )}
          </ul>
        </div>
            </Container>
            {backgroundBlurState === true ? (<div className="mobile-nav-overly" style={{display: "block"}}></div>) : ""}
      </nav>
      
  );
}
