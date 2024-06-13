// Register.js

import React from 'react';

function Register() {
  return (
    <div className="sign-up-screen">
      <div className="s-lhs"></div>
      <div className="s-rhs">
        <img src="./asset/Frame 13 (1).png" alt="" />
        <h2>Create your Account</h2>
        <form action="" id="form">
          <label htmlFor="emailAddress">
            <input
              type="email"
              className="email"
              placeholder="Enter your email address"
            />
          </label>

          <label htmlFor="password">
            <input
              type="password"
              className="password"
              placeholder="Enter your password"
            />
          </label>

          <div className="bottom-cont">
            <button>Sign Up</button>
            <p className="bottom-text">
              Already have an account? <span> Log in</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
