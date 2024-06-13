import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Frame13 from '../../asset/Frame 13 (1).png';
import './style.css';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { getLoggedIn } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform form validation
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim()) {
      setError('All fields are required');
      return;
    }

    try {
      const registerData = {
        firstName,
        lastName,
        email,
        password
      };

      // Make POST request to register endpoint
      await axios.post("http://localhost:5000/api/users", registerData);

      // After successful registration, update logged in status
      await getLoggedIn();
      console.log('Registration successful');

      // Clear form fields and error state
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setError('');
    } catch (err) {
      // Handle registration errors
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        console.error("Registration failed:", err.message);
        setError("Registration failed. Please try again later.");
      }
    }
  };

  return (
    <div className="sign-up-screen">
      <div className="s-lhs"></div>
      <div className="s-rhs">
        <img src={Frame13} alt="Frame 13" />
        <h2>Create your Account</h2>
        <form id="form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">
            First Name:
            <input
              type="text"
              id="firstName"
              className="firstName"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
          <br />
          <label htmlFor="lastName">
            Last Name:
            <input
              type="text"
              id="lastName"
              className="lastName"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
          <br />
          <label htmlFor="emailAddress">
            Email Address:
            <input
              type="email"
              id="emailAddress"
              className="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          <label htmlFor="Password">
            Password:
            <input
              type="password"
              id="Password"
              className="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          {error && <p className="error-message">{error}</p>}
          <div className="bottom-cont">
            <button type="submit">Sign Up</button>
            <p className="bottom-text">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
