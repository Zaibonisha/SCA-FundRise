import React from "react";

function LoginForm() {
  return (
    <div className="sign-up-screen">
      <div className="s-lhs"></div>
      <div className="s-rhs">
        <img src="./asset/Frame 13 (1).png" alt="" />
        <h2>Log In to your Account</h2>
        <form action="" id="form">
          <label htmlFor="emailAddress">
            <input
              type="email"
              className="email"
              placeholder="Enter your email address"
            />
          </label>
          <label htmlFor="Password">
            <input
              type="password"
              className="password"
              placeholder="Enter your password"
            />
          </label>
          <div className="bottom-cont">
            <button>Log in</button>
            <p className="bottom-text">
              Do not have an account? <span> Sign up</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
