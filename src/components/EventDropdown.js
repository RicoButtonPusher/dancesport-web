import './CSS-files/EventDropdown.css';
import React, { useState, useEffect, Component } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { Link } from 'react-router-dom';
import PopUp from './PopUp';
import Contact from '../pages/Contact';



function EventDropdown() {

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click)
  };

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
    <div className="dropdown">
      Events
      <div class="dropdown-content">
      <div className="menu-container">
        <ul>
          <div className="menu-column">
            <div className="menu-column">
              <li> 
                <div className="menu-title"> Info </div> 
                  <a href="/about" className="event-menu-link"> About Organizers </a>
                  <a href="/photo" className="event-menu-link"> Photo </a>
                  <a href="/video" className="event-menu-link"> Video </a>
              </li>
            </div>
            <div className="menu-column">
              <li> 
                <div className="menu-title">Competition</div>
                <a href="/registration" className="event-menu-link"> Registration </a>
                <a href="/schedule" className="event-menu-link"> Schedule </a>
                <a href="/circuit" className="event-menu-link"> Circuit </a>
                <a href="/results" className="event-menu-link"> Last Year's Results </a>
              </li>
            </div>
            <div className="menu-column">
              <li> 
                <div className="menu-title"> Event Info </div> 
                <a href="/tickets" className="event-menu-link"> Tickets </a>
                <a href="/officials" className="event-menu-link"> Judges and Officials </a>
                <a href="/rulesandregulations" className="event-menu-link"> Rules and Regulations </a>
                <a href="/vendors" className="event-menu-link"> Vendors </a>
              </li>
              </div>
              <div className="menu-column">
                <li> 
                  <div className="menu-title"> Latest News </div> 
                  <a href="/news" className="event-menu-link"> News </a>
                </li>
              </div>
              <div className="menu-column">
                <li> 
                <div className="menu-title"> Contact </div> 
                <div className="popup-button">
                  <input
                    className="event-menu-link"
                    type="button"
                    value="Contact Us"
                    onClick={togglePopup}
                  />
                  {isOpen && <PopUp content={<><Contact/></>} handleClose={togglePopup}/>}
                </div>
              </li>
            </div>
          </div>
        </ul>
      </div>
      </div>
    </div> 
    </>
  )
}

export default EventDropdown








// ====================================================================
// ====================================================================
// ====================================================================
// ====================================================================


// in case i want to remove the showMenu function and have normal html 
            