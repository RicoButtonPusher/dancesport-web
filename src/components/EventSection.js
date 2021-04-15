import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import './CSS-files/EventSection.css';
import { Button } from '@material-ui/core';

function EventSection() {


  return (
    <div className="event-section-container">

      {/* <div className="title-container">
        <div className="title">
          <div className="comp-title">
            Dancesport Competition
          </div>
          <div className="comp-date">
            February 11, 2021
          </div>
          <div className="comp-location">
            Paris, Idaho
          </div>
        </div>
      </div> */}


      <div className="new-title-container">
        <div className="new-title">
          <div className="new-comp-date">
            FEB 11, 2021
          </div>
          <div className="new-comp-title">
            <text>DANCESPORT WEB</text>
          </div>
          <div className="new-social-links">
            <a href="https://www.facebook.com" className="new-social-link">
              <FacebookIcon fontSize="large"/>
            </a>
            <a href="https://www.instagram.com" className="new-social-link">
              <InstagramIcon fontSize="large"/>
            </a>
            <a href="https://www.youtube.com" className="new-social-link">
              <YouTubeIcon fontSize="large" />
            </a>
            <a href="https://www.twitter.com" className="new-social-link"><TwitterIcon fontSize="large" /></a></div>
          <div className="new-comp-location">San Jose, CA</div>
          <div className="news-container">
            <div className="news-links">
              <Link to="/news" className="news-link">
                News 
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="event-links-container">
        <div className="event-links">
          <Link to="/register" className="event-link">
            Register
          </Link>
          <Link to="/tickets" className="event-link">
            Tickets
          </Link>
          <Link to='/schedule' className="event-link">
            Schedule
          </Link>
        </div>
      </div>
      <div className="social-media-container">
        <div className="social-media-links">
          <a href="https://www.facebook.com" className="social-media-link-facebook">
            <FacebookIcon style={{ fontSize: 100 }} />
          </a>
          <a href="https://www.youtube.com" className="social-media-link-youtube">
            <YouTubeIcon style={{ fontSize: 100 }} />
          </a>
          <a href="https://www.instagram.com" className="social-media-link-instagram">
            <InstagramIcon style={{ fontSize: 100 }} />
          </a>
        </div>
      </div>

    </div>
  )
}

export default EventSection;
