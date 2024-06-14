import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Import your CSS file

// Import your images here
import Group8 from '../assets/Group 8.png';
import Heart from '../assets/heart.png';
import Edit from '../assets/edit.png';
import People from '../assets/people.png';
import Money from '../assets/money.png';
import MaskGroup from '../assets/mask-group.png';
import Group43 from '../assets/Group 43..png';
import VectorFacebook from '../assets/vector-facebook.png';
import VectorLinkedIn from '../assets/vector-linkedin.png';
import VectorTwitter from '../assets/vector-twitter.png';
import VectorInstagram from '../assets/vector-instagram.png';
import Vector from '../assets/vector.png';
import GooglePlay from '../assets/google-play.png';
import GoogleStore from '../assets/google-store.png';
import joinedHands from '../assets/business-teamwork.png';

function LandingPage() {
  return (
    <div className="container">
      <nav className="navbar">
        <Link className="navbar-brand" to="/">
          <img src={Group8} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex align-items-center"> {/* Container for links */}
            <div className="mr-1"> {/* Increase margin between links */}
              <Link className="nav-link campaigns-link" to="/campaign">
                Create Campaign
              </Link>
            </div>
            <div className="mr-4"> {/* Increase margin between links */}
              <Link className="nav-link campaigns-link" to="/about">
                About
              </Link>
            </div>
            <div className="mr-4"> {/* Increase margin between links */}
              <Link className="nav-link campaigns-link" to="/login">
                Log In
              </Link>
            </div>
            <div> {/* No margin needed after the last link */}
              <Link className="nav-link campaigns-link" to="/register">
                Register
              </Link>
            </div>
            <div> {/* No margin needed after the last link */}
              <Link className="nav-link campaigns-link" to="/profile">
                Profile
              </Link>
            </div>
            <div> {/* No margin needed after the last link */}
              <Link className="nav-link campaigns-link" to="/payment">
                Payment
              </Link>
            </div>
            
          </div>

          <div className="ml-auto"> {/* Right-aligned content */}
            <div className="input-group">
              <input
                className="form-control search-box"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
              <button type="button" className="campaign-btn button-style">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="position-relative">
        <img src={joinedHands} alt="Kids" className="kids-image" />

        <div className="absolute-buttons">
          <button type="submit" className="campaign-btn button-style">
            Create a Campaign
          </button>
          <button type="submit" className="explore-btn button-style">
            Explore Campaigns
          </button>
        </div>
      </div>

      <section>
        <h3>THE WORLD'S LEADING CROWDFUNDING PLATFORM</h3>
        <h1>
          <strong>Together,</strong>
        </h1>
        <h2>We can make a difference.</h2>

        <br />
        <br />
        <br />

        <div className="page-buttons">
          <button type="submit" className="campaign-btn button-style">
            Create a Campaign
          </button>
          <button type="submit" className="explore-btn button-style">
            Explore Campaigns
          </button>
        </div>
      </section>

      <h4>How it works</h4>
      <div className="how-it-works">
        <div>
          <img src={Heart} alt="Heart" />
          <p>Make a donation to support a cause and change lives</p>
        </div>
        <div>
          <img src={Edit} alt="Edit" />
          <p>Easily set up your fundraising campaign</p>
        </div>
        <div>
          <img src={People} alt="People" />
          <p>Reach out and spread the word through social media</p>
        </div>
        <div>
          <img src={Money} alt="Money" />
          <p>Collect funds securely and transparently</p>
        </div>
      </div>

      <div className="landing-page-container">
        <h4>Urgent Causes</h4>
        <div className="box-container">
          <img src={MaskGroup} alt="Mask Group" />
          <div className="urgent-cause">
            <h3>Mutual Aid for 5 displaced families in Yemen</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>

            <img src={Group43} alt="Group 43" />

            <p>$0 raised of the $5,000 goal</p>

            <button type="submit" className="btn button-style">
              View Campaign
            </button>
          </div>
        </div>
      </div>

      <div className="testimonials-container">
        <h4>Hear from our community of donors and campaign creators</h4>
        <div className="testimonials">
          {/* Testimonials content */}
        </div>
      </div>

      <div className="sign-up-screen">
        {/* Sign-up form structure */}
      </div>

      <footer className="footer">
        <img src={Group8} alt="Logo" />
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Fundraise for</h4>
              <ul>
                <li>
                  <a href="#">Medical</a>
                </li>
                <li>
                  <a href="#">Emergency</a>
                </li>
                <li>
                  <a href="#">Memorial</a>
                </li>
                <li>
                  <a href="#">Education</a>
                </li>
                <li>
                  <a href="#">Nonprofit</a>
                </li>
                <li>
                  <a href="#">Crisis Relief</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Learn more</h4>
              <ul>
                <li>
                  <a href="#">How fundraise works</a>
                </li>
                <li>
                  <a href="#">Why fundraise</a>
                </li>
                <li>
                  <a href="#">Common questions</a>
                </li>
                <li>
                  <a href="#">Success stories</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Help center</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
                <li>
                  <a href="#">Fundraise stories</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-socials">
          <img src={VectorFacebook} alt="Facebook" />
          <img src={VectorLinkedIn} alt="LinkedIn" />
          <img src={VectorTwitter} alt="Twitter" />
          <img src={VectorInstagram} alt="Instagram" />
        </div>
        <div className="footer-details">
          <img src={Vector} className="vector" alt="Vector" />
          <p>2024 FundRise</p>
          <p>Terms</p>
          <p>Privacy Notice</p>
          <p>Legal</p>
          <p>Accessibility Statement</p>
          <img src={GooglePlay} alt="Google Play" />
          <img src={GoogleStore} alt="Google Store" />
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
