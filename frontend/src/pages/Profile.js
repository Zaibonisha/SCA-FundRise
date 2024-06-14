import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Group8 from '../assets/Group 8.png';
import Group50 from '../assets/Group 50.png';
import Frame24 from '../assets/Frame 24.png';
import LogOutBtn from '../components/auth/LogOutBtn';
import AuthContext from '../context/AuthContext';
import './style.css';

const Profile = () => {
  const { section } = useParams();
  const { loggedIn } = useContext(AuthContext);

  const renderSection = () => {
    switch (section) {
      case 'personal':
        return (
          <div className="details personal">
            <span className="title">Personal Information</span>
            <div className="fields">
              <div className="input-field">
                <label>First Name</label>
                <input type="text" placeholder="Enter your first name" required />
              </div>
              <div className="input-field">
                <label>Last Name</label>
                <input type="text" placeholder="Enter your last name" required />
              </div>
              <div className="input-field">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="input-field">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" required />
              </div>
              <div className="input-field">
                <label>Country</label>
                <input type="text" placeholder="Enter your country" required />
              </div>
              <div className="input-field">
                <label>State</label>
                <input type="text" placeholder="Enter your state" required />
              </div>
            </div>
            {/* Add form submission logic if needed */}
            {/* <button type="submit" className="save-btn">Save</button> */}
          </div>
        );
      case 'account':
        return <div>Account Information</div>;
      case 'payment':
        return <div>Payment Information</div>;
      case 'notification':
        return <div>Notification Settings</div>;
      default:
        return <div>Select a section to view details</div>;
    }
  };

  return (
    <div>
      <nav>
        <img src={Group8} alt="Logo" />
        <input type="text" className="search-box" placeholder="Search" />
        <Link to="/campaigns">Campaigns</Link>
        <button type="submit" className="btn">Create a Campaign</button>
        <img src={Group50} alt="User" />
        {loggedIn && <LogOutBtn />} {/* Render LogOutBtn only if loggedIn */}
      </nav>
      <hr />
      <br />
      <div className="profile-container">
        <header>Profile</header>
        <div className="profile-details">
          <Link to="/profile/personal"><span>Personal</span></Link>
          <Link to="/profile/account"><span>Account</span></Link>
          <Link to="/profile/payment"><span>Payment</span></Link>
          <Link to="/profile/notification"><span>Notification</span></Link>
        </div>
        <form>
          <div className="user">
            <img src={Frame24} alt="User" />
            <button type="button" className="user-btn">Edit Photo</button>
          </div>
          <div className="form first">
            {renderSection()}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
