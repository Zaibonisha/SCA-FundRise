import React from 'react';
import './style.css'; // Import the CSS file for styling

const longCard = ({ image, title, description }) => {
  return (
    <div className="rectangle-card">
      <img src={image} alt={title} className="rectangle-card-image" />
      <div className="rectangle-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default longCard;
