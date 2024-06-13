import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './style.css'; // Assuming you have a style.css file


function LandingPage() {
    return (
        <div>
            <nav>
                <input type="text" className="search-box" placeholder="Search" />
                <img src="assets/Group 8.png" alt="" />
                <ul>
                    <li><Link to="/campaigns">Campaigns</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
                <button type="submit" className="btn">Create a Campaign</button>
            </nav>

            <section>
                <h3>THE WORLD'S LEADING CROWDFUNDING PLATFORM</h3>
                <h1><strong>Together,</strong></h1>
                <h2>We can make a difference.</h2>

                <br /><br /><br />

                <div className="page-buttons">
                    <button type="submit" className="campaign-btn">Create a Campaign</button>
                    <button type="submit" className="explore-btn">Explore Campaigns</button>
                </div>
            </section>

            <h4>How it works</h4>
            <div className="how-it-works">
                <div>
                    <img src="assets/heart.png" alt="" />
                    <p>Make a donation to support a cause and change lives</p>
                </div>
                <div>
                    <img src="assets/edit.png" alt="" />
                    <p>Easily set up your fundraising campaign</p>
                </div>
                <div>
                    <img src="assets/people.png" alt="" />
                    <p>Reach out and spread the word through social media</p>
                </div>
                <div>
                    <img src="assets/money.png" alt="" />
                    <p>Collect funds securely and transparently</p>
                </div>
            </div>

            <div className="landing-page-container">
                <h4>Urgent Causes</h4>
                <div className="box-container">
                    <img src="assets/mask-group.png" alt="" />
                    <div className="urgent-cause">
                        <h3>Mutual Aid for 5 displaced families in Yemen</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris.</p>

                        <img src="assets/Group 43..png" alt="" />

                        <p>$0 raised of the $5,000 goal</p>

                        <button type="submit" className="btn">View Campaign</button>
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
                <img src="assets/Group 8.png" alt="" />
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Fundraise for</h4>
                            <ul>
                                <li><a href="#">Medical</a></li>
                                <li><a href="#">Emergency</a></li>
                                <li><a href="#">Memorial</a></li>
                                <li><a href="#">Education</a></li>
                                <li><a href="#">Nonprofit</a></li>
                                <li><a href="#">Crisis Relief</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Learn more</h4>
                            <ul>
                                <li><a href="#">How fundraise works</a></li>
                                <li><a href="#">Why fundraise</a></li>
                                <li><a href="#">Common questions</a></li>
                                <li><a href="#">Success stories</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Resources</h4>
                            <ul>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Help center</a></li>
                                <li><a href="#">Blogs</a></li>
                                <li><a href="#">Fundraise stories</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-socials">
                    <img src="assets/vector-facebook.png" alt="" />
                    <img src="assets/vector-linkedin.png" alt="" />
                    <img src="assets/vector-twitter.png" alt="" />
                    <img src="assets/vector-instagram.png" alt="" />
                </div>
                <div className="footer-details">
                    <img src="assets/vector.png" className="vector" alt="" />
                    <p>2024 FundRise</p>
                    <p>Terms</p>
                    <p>Privacy Notice</p>
                    <p>Legal</p>
                    <p>Accessibility Statement</p>
                    <img src="assets/google-play.png" alt="" />
                    <img src="assets/google-store.png" alt="" />
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;
