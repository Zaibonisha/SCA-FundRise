import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import './style.css';
import './cardstyles.css';
import Group8 from '../assets/Group 8.png';
import joinedHands from '../assets/business-teamwork.png';
import cardImage1 from '../assets/mask-group.png';
import cardImage2 from '../assets/1000_F_421233116_UufVsfUphajpF2FwsNMT27IH2MQydJAx 2.png';
import cardImage3 from '../asset/Mask group (1).png'; // Corrected import

import LongCard from './longCard'; // Ensure component name and file name match
import Card from './Card';
import FourthCard from './fourthCard'; // Ensure component name and file name match
import VectorFacebook from '../assets/vector-facebook.png';
import VectorLinkedIn from '../assets/vector-linkedin.png';
import VectorTwitter from '../assets/vector-twitter.png';
import VectorInstagram from '../assets/vector-instagram.png';
import Vector from '../assets/vector.png';
import GooglePlay from '../assets/google-play.png';
import GoogleStore from '../assets/google-store.png';

const LandingPage = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-links">
          <Link className="nav-link" to="/campaign">Create Campaign</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="navbar-brand" to="/">
            <img src={Group8} alt="Logo" />
          </Link>
          <Link className="nav-link" to="/login">Login</Link>
          <Link className="nav-link" to="/register">Register</Link>
          <Link className="nav-link" to="/profile">Profile</Link>
          <Link className="nav-link" to="/payment">Payments</Link>
        </div>
      </nav>
      <div className="image-container">
        <div className="image-overlay-container">
          <img src={joinedHands} alt="Joined Hands" className="joined-hands-image" />
          <Typography variant="h1" component="h2" align="center" className="overlay-text">
            Together, We can make a difference
          </Typography>
        </div>
      </div>
      <div className="card-container">
        <Card 
          image={cardImage1}
          title="Disaster aid"
          description="Help us raise funds for disaster aid"
        />
        <Card
          image={cardImage2}
          title="Education"
          description="Donate towards the education of young Africans"
        />
      </div>
      <div className="long-card-container">
        <LongCard 
          image={cardImage3}  // Use the third card image
          title="Urgent cases"
          description="Support urgent case initiatives in affected regions"
        />
      </div>
      <div className="fourth-card-container">
        <FourthCard />
      </div>
      
      <footer className="footer">
        <img src={Group8} alt="Logo" />
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Fundraise for</h4>
              <ul>
                <li>
                  <Link to="#">Medical</Link>
                </li>
                <li>
                  <Link to="#">Emergency</Link>
                </li>
                <li>
                  <Link to="#">Memorial</Link>
                </li>
                <li>
                  <Link to="#">Education</Link>
                </li>
                <li>
                  <Link to="#">Nonprofit</Link>
                </li>
                <li>
                  <Link to="#">Crisis Relief</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Learn more</h4>
              <ul>
                <li>
                  <Link to="#">How fundraise works</Link>
                </li>
                <li>
                  <Link to="#">Why fundraise</Link>
                </li>
                <li>
                  <Link to="#">Common questions</Link>
                </li>
                <li>
                  <Link to="#">Success stories</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li>
                  <Link to="#">Contact us</Link>
                </li>
                <li>
                  <Link to="#">Help center</Link>
                </li>
                <li>
                  <Link to="#">Blogs</Link>
                </li>
                <li>
                  <Link to="#">Fundraise stories</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-socials">
          <img src={VectorFacebook} alt="Facebook" />
          <img src={VectorLinkedIn} alt="LinkedIn" />
          <img src={VectorTwitter} alt="Twitter" />
          <img src={VectorInstagram} alt="Instagram" />
        </div>
        <div className="footer-details">
          <img src={Vector} className="vector" alt="Vector" />
          <p>2024 FundRise</p>
          <p>Terms</p>
          <p>Privacy Notice</p>
          <p>Legal</p>
          <p>Accessibility Statement</p>
          <img src={GooglePlay} alt="Google Play" />
          <img src={GoogleStore} alt="Google Store" />
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
