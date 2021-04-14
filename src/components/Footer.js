import React from 'react';
import { Link } from 'react-router-dom';
import "./CSS-files/Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
  return (
    <div className="footer-container">

      <div className="extra-links">
        <div className="extra-links-columns">
          <div className="extra-links-column">
          <div className="column-title">
                California Gold Rush Circuit
              </div>
            <div className="extra-link">
              Desert Classic Dancesport Championships
            </div>
            <div className="extra-link">
              International Grand Ball Dancesport Championships
              </div>
            <div className="extra-link">
              Embassy Ballroom Championships
            </div>
            <div className="extra-link">
              Autumn Dance Classic
            </div>
            <div className="extra-link">
              The Ball at San Francisco
            </div>
          </div>

            <div className="extra-links-column">
            <div className="column-title">
                Dance Vision Circuit
              </div>
              <div className="extra-link">
                Vegas Open Dance Challenge
              </div>
              <div className="extra-link">
                Baltimore Dancesport Challenge
              </div>
              <div className="extra-link">
                Las Vegas Lights Dance Challenge
              </div>
            </div>

            <div className="extra-links-column">
              <div className="column-title">
                NDCA
              </div>
              <div className="extra-link">
                Registration
              </div>
              <div className="extra-link">
                Calendar
              </div>
              <div className="extra-link">
                Events
              </div>
            </div>   
            <div className="extra-links-column">
              <div className="extra-link">
              <img src="https://www.ndca.org/images/ndca.svg" alt="" className="NDCA-logo"/>
              </div>
            </div>         
        </div>



        <div className="footer-social-media-container">
          <div className="footer-social-media-links">
            <div className="footer-social-media-link"> <FacebookIcon/> </div>
            <div className="footer-social-media-link"> <YouTubeIcon/> </div>
            <div className="footer-social-media-link"> <InstagramIcon/> </div>
            <div className="footer-social-media-link"> <TwitterIcon/> </div>
          </div>
          <div className="newsletter-container">
            <div className="invite">
              Click Here To Sign Up For Newsletter
            </div>
            <div className="sign-up-button"> <Link to="/sign-up"><button>Go</button></Link>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Footer;
