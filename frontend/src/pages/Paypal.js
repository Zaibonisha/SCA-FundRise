import React from 'react';
import './paypal.css';

const Paypal = () => {
  return (
    <div>
      <h1>PayPal Payment Page</h1>
      <form className="paypal-form">
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input type="text" id="amount" name="amount" placeholder="Enter amount" required />
        </div>
        <div className="form-group">
          <label htmlFor="currency">Currency</label>
          <select id="currency" name="currency" required>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <button type="submit" className="btn-pay">Pay with PayPal</button>
      </form>
    </div>
  );
}

export default Paypal;
