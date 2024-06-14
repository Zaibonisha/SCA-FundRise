import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../assets/Group 8.png';
import userIcon from '../assets/Group 50.png';
import backButton from '../assets/back-button.png';
import campaignImage from '../assets/istockphoto.png';
import mastercardLogo from '../assets/Frame 17.png';
import visaLogo from '../assets/Frame 16.png';

const Payment = () => {
  return (
    <div>
      <nav>
        <img src={logo} alt="Logo" />
        <input type="text" className="search-box" placeholder="Search" />
        <a href="#Campaigns">Campaigns</a>
        <button type="submit" className="btn">Create a Campaign</button>
        <img src={userIcon} alt="User Icon" />
      </nav>
      <hr />
      <br />
      <div className="payment-container">
        <div className="payment-header">
          <img src={backButton} alt="Back Button" />
          <img src={campaignImage} alt="Campaign Image" />
          <h2>Help build a new school in Nakuru, Kenya</h2>
        </div>
        <div className="amount">
          <h3>Donation Amount</h3>
          <input type="text" placeholder="Donation Amount" required />
          <select title="currency" name="currency" id="currency">
            <option value="ZAR">ZAR</option>
            <option value="NGN">NGN</option>
            <option value="USD">USD</option>
          </select>
        </div>
        <div className="payment-details">
          <div className="first-row">
            <div className="owner">
              <h3>Owner</h3>
              <div className="input-payment">
                <input type="text" placeholder="Account Holder" required />
              </div>
            </div>
            <div className="cvv">
              <h3>CVV</h3>
              <div className="input-payment">
                <input type="text" placeholder="cvv number" required />
              </div>
            </div>
          </div>
          <div className="second-row">
            <div className="card-number">
              <h3>Card Number</h3>
              <div className="input-payment">
                <input type="text" placeholder="Card Number" required />
              </div>
            </div>
          </div>
          <div className="third-row">
            <div className="expiry-date">
              <h3>Expiry Date</h3>
              <div className="selection">
                <div className="date">
                  <select title="months" name="months" id="months">
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mar">Mar</option>
                    <option value="Apr">Apr</option>
                    <option value="May">May</option>
                    <option value="Jun">Jun</option>
                    <option value="Jul">Jul</option>
                    <option value="Aug">Aug</option>
                    <option value="Sep">Sep</option>
                    <option value="Oct">Oct</option>
                    <option value="Nov">Nov</option>
                    <option value="Dec">Dec</option>
                  </select>
                  <select title="years" name="years" id="years">
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                  </select>
                </div>
                <div className="cards">
                  <img src={mastercardLogo} alt="Mastercard Logo" />
                  <img src={visaLogo} alt="Visa Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <Link to="/paypal">Pay securely</Link>
      </div>
    </div>
  );
}

export default Payment;
