import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import './style.css';
import Group8 from '../assets/Group 8.png';
import joinedHands from '../assets/business-teamwork.png';
import cardImage1 from '../assets/mask-group.png';
import cardImage2 from '../assets/1000_F_421233116_UufVsfUphajpF2FwsNMT27IH2MQydJAx 2.png';
import cardImage3 from '../asset/Mask group (1).png'; // Import the third card image
import LongCard from './longCard'; // Import the LongCard component
import Card from './Card';

const LandingPage = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-links">
          <a href="/campaign">Create Campaign</a>
          <a href="/about">About</a>
          <Link className="navbar-brand" to="/">
            <img src={Group8} alt="Logo" />
          </Link>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
          <a href="/profile">Profile</a>
          <a href="/payment">Payments</a>
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
          title="Healthcare"
          description="Support healthcare initiatives in underserved regions"
        />
      </div>
    </>
  );
};

export default LandingPage;
