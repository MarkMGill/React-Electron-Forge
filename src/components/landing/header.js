import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUserCheck } from "react-icons/fa";
import "./header.css";
import { Button } from "./button"; 

function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }
  };

  useEffect (() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <Link to='/' className="header-logo" onClick={closeMobileMenu}>
            <img src="./collabicon.png" height="45px" width="45px" alt="icon" />Collaborate by FlipSetter
          </Link>
          <div className="menuicon" onClick={handleClick}>
            {click ? (<FaTimes />) : (<FaBars />)}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to='/search' className="nav-links" onClick={closeMobileMenu}>
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/messenger' className="nav-links" onClick={closeMobileMenu}>
                Messenger
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/whiteboard' className="nav-links" onClick={closeMobileMenu}>
                Whiteboard
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to='/tac' className="nav-links" onClick={closeMobileMenu}>
              Terms
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/privacy' className="nav-links" onClick={closeMobileMenu}>
              Privacy
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/partnerships' className="nav-links" onClick={closeMobileMenu}>
              Partnerships
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/faqs' className="nav-links" onClick={closeMobileMenu}>
              FAQs
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to='/register' className="nav-links" onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/login' className="nav-links" onClick={closeMobileMenu}>
                Log In
              </Link>
            </li>
          </ul>
      {/*  {button && <Button buttonStyle="btn--outline">New?<FaUserCheck /></Button>} */}
        </div>
      </div>
    </>
  )
}

export default Header;

// look at header.css to make sure everything is accounted for. 
// Commented out button, so [button] constant is assigned but not used