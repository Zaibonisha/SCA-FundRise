import React from 'react';
import './cardstyles.css'; // Import the CSS file for styling

const LongCard = ({ image, title, description }) => {
  return (
    <div className="rectangle-card">
      <div className="rectangle-card-content">
        <img src={image} alt={title} className="rectangle-card-image" /> {/* Image on the left */}
        <div className="card-text">
          <h3>{title}</h3>
          <p>{description}</p>
          <button className="card-button">Donate now</button> {/* Button below description */}
        </div>
      </div>
    </div>
  );
};

export default LongCard;
