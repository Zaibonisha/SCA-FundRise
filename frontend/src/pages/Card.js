import React from 'react';
import './style.css';
import newImage from '../assets/Group 43..png'; // Import the new image

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <br/>
      <h3>Funds raised</h3>
      <img src={newImage} alt="Funds Raised" /> {/* Add the new image here */}
    </div>
  );
};

export default Card;
