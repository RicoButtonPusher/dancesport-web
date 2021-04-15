import React, {useState} from 'react';
import "./CSS-files/Navbar.css";
import EventDropdown from './EventDropdown'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';




import PopUp from './PopUp';
import Contact from '../pages/Contact';




function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click)
  };

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }


  return (
    <div>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src="https://dvida.com/wp-content/uploads/2020/12/DVIDA2020_wht.png" alt="article-img" className="logo-photo"/>
        </Link>
        <div className="links-dates">
          <div className="social-links">
            <a href="https://www.facebook.com" className="social-link">
              <FacebookIcon fontSize="large"/>
            </a>
            <a href="https://www.instagram.com" className="social-link">
              <InstagramIcon fontSize="large"/>
            </a>
            <a href="https://www.youtube.com" className="social-link">
              <YouTubeIcon fontSize="large" />
            </a>
            <a href="https://www.twitter.com" className="social-link">
              <TwitterIcon fontSize="large" />
            </a>
          </div>
          <div className="dates">
            February 11, 2021
          </div>
        </div>
      </div>

      <div className="navbar">
        <div className="navbar-links">
          <div className="navbar-links-left">
            <Link to="/home" className="navbar-link-left">
              Home
            </Link>
            <div className="navbar-link-left dropdown">
              <EventDropdown/>
            </div>
            <Link to="/registration" className="navbar-link-left">
              Registration
            </Link>



            {/* mobile menu bar */}
            <Button className="menu-bar" onClick={handleClick}>
              {click ? <ClearIcon fontSize="large" className="icon"/> : <MenuIcon fontSize="large" className="icon"/>}
            </Button>
            {/* mobile menu bar line */}



          </div>
          <div className="popup-button">
            <input
              className="navbar-link-right"
              type="button"
              value="Contact Us"
              onClick={togglePopup}
            />
            {isOpen && <PopUp content={<><Contact/></>} handleClose={togglePopup}/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
