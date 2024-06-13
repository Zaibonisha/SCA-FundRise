import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Frame13 from "../../asset/Frame 13 (1).png";
import "./style.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  const login = async (e) => {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      await axios.post("http://localhost:8000/api/users/login", loginData);
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="sign-up-screen">
      <div className="s-lhs">
        <img src={Frame13} alt="Frame 13" />
      </div>
      <div className="s-rhs">
        <h2>Log in to your account</h2>
        <form onSubmit={login}>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            className="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          {error && <p className="error-message">{error}</p>}
          <div className="bottom-cont">
            <button type="submit">Log in</button>
          </div>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
