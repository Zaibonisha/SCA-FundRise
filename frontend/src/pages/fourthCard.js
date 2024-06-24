import React from 'react';
import './cardstyles.css'; // Import the CSS file for styling
import cardImage4 from '../assets/istockphoto-1286810719-170667a 1.png';
import cardImage5 from '../assets/image 1.png';
import cardImage6 from '../assets/1000_F_421233116_UufVsfUphajpF2FwsNMT27IH2MQydJAx 2.png';
import cardImage7 from '../assets/cropped-photo-african-american-farm-600nw-2183118243 1.png'; 

const FourthCard = () => {
  return (
    <div className="fourth-card">
      <div className="fourth-card-row">
        <div className="fourth-card-item">
          <img
            src={cardImage4}
            alt="Image 4"
            className="fourth-card-image"
          />
          <div className="fourth-card-description">
            <p>Description for Image 4</p>
          </div>
        </div>
        <div className="fourth-card-item">
          <img
            src={cardImage6}
            alt="Image 6"
            className="fourth-card-image"
          />
          <div className="fourth-card-description">
            <p>Description for Image 6</p>
          </div>
        </div>
      </div>
      <div className="fourth-card-row">
        <div className="fourth-card-item">
          <img
            src={cardImage5}
            alt="Image 5"
            className="fourth-card-image"
          />
          <div className="fourth-card-description">
            <p>Description for Image 5</p>
          </div>
        </div>
        <div className="fourth-card-item">
          <img
            src={cardImage7}
            alt="Image 7"
            className="fourth-card-image"
          />
          <div className="fourth-card-description">
            <p>Description for Image 7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthCard;
