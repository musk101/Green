import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Container } from "react-bootstrap";
import DesignButton from "./DesignButton.svg";
import DevelopButton from "./DevelopButton.svg";
import BusinessButton from "./BusinessButton.svg";
import Logo from "./Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Grid from "@material-ui/core/Grid";


export default function NavSection()
{
  
const [backgroundBlurState, setBackgroundBlurState] = useState(false)
const [width, setWidth] = useState(1020);
const [servicesNav, SetServicesNav] = useState( false );
  

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

  const isServicesOpen = () =>
  {
    if ( servicesNav == false )
    {
      SetServicesNav(true)
    } else
    {
      SetServicesNav(false)
    }
  }
  
  const servicesMenuClose = () =>
  {
    SetServicesNav(false)
  } 

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-nav">
        <Container>
          <span className="navbar-brand">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </span>

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
                  <li className="nav-item active">
                    <Link to="/work">
                      <span className="nav-link">Work</span>
                    </Link>
                  </li>

                  <li className="nav-item">
                  
                    <span className="nav-link" onClick={isServicesOpen}>
                      Services
                      </span>
                      
                  </li>

                  <li className="nav-item">
                    <Link to="/about">
                      <span className="nav-link">About</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/letstalk">
                      <span
                        className="nav-link text-center text-uppercase"
                        id="lets_talk"
                      >
                        Let's Talk
                      </span>
                    </Link>
                  </li>
                </>
              )  : (
                <>
                  <span className="mt-5"></span>
                  <h2 className="services-text mx-4">SERVICES</h2>
                  <li className="nav-item active">
                    <span className="nav-link">
                      <Link to="/design">
                  <img src={DesignButton} className="img-fluid"
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                  aria-controls="navbarCollapse"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={removeBackgroundBlur}
                  />
                      </Link>
                    </span>
                  </li>
                  <li className="nav-item">
                      <Link to="/develop">
                        <span className="nav-link">
                          <img src={DevelopButton} className="img-fluid"
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                  aria-controls="navbarCollapse"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={removeBackgroundBlur}
                      />
                    </span></Link>
                  </li>
                    <li className="nav-item">
                    <Link to="/market">
                    <span className="nav-link">
                          <img src={BusinessButton} className="img-fluid"
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                  aria-controls="navbarCollapse"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={removeBackgroundBlur}
                      />
                        </span>
                        </Link>
                  </li>
                  <Link to="/work">
                    <li className="nav-item  nav-sidebar-text">
                      <span className="mx-4">
                        WORK
                      </span>
                    </li>
                  </Link>
                  <Link to="/about">
                    <li className="nav-item nav-sidebar-text mt-4">
                      <span className="mx-4">
                        ABOUT
                      </span>
                    </li>
                  </Link>

                  <li className="lets-talk-sidebar-div mt-4">
                    <span className="side-nav-email"><a href="mailto:contact@alpharule.in">contact@alpharule.in</a></span>
                      <Link to="/work"><span
                        className="nav-link text-center text-uppercase"
                        href="/letstalk"
                        id="lets_talk"
                      >
                        Let's Talk
                      </span></Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </Container>
        {backgroundBlurState === true ? (
          <div className="mobile-nav-overly" style={{ display: "block" }}></div>
        ) : (
          ""
        )}
      </nav>

      {/* services menu on desktop */}
      {servicesNav === true ? (
        <div className="nav-serices-menu">
          <Grid container className="reverse-items nav-services">
            <Link to="/market" />
            <Grid item sm={6} md={4}>
              <Link to="/market">
                <img
                  className="button1"
                  src={BusinessButton}
                  alt=""
                  onClick={servicesMenuClose}
                />
              </Link>
            </Grid>
            <Grid item sm={6} md={4}>
              <Link to="/design">
                <img
                  className="button1"
                  src={DesignButton}
                  alt=""
                  onClick={servicesMenuClose}
                />
              </Link>
            </Grid>
            <Grid item sm={6} md={4}>
              <Link to="/develop">
                <img
                  className="button1"
                  src={DevelopButton}
                  alt=""
                  onClick={servicesMenuClose}
                />
              </Link>
            </Grid>
          </Grid>
        </div>
      ) : (
        ""
      )}
    </>
  );
 
}
