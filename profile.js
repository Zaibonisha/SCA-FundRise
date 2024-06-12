import React from 'react';

const ProfilePage = () => {
    return (
        <div>
            <nav>
                <img src="assets/Group 8.png" alt="" />
                <input type="text" className="search-box" placeholder="Search" />
                <a href="#Donate">Campaigns</a>
                <button type="submit" className="btn">Create a Campaign</button>
                <img src="assets/Group 50.png" alt="" />
            </nav>
            <hr />
            <br />
            <div className="profile-container">
                <header>Profile</header>
                <div className="profile-details">
                    <span>Personal</span>
                    <span>Account</span>
                    <span>Payment</span>
                    <span>Notification</span>
                </div>
                <form action="#">
                    <div className="user">
                        <img src="assets/Frame 24.png" alt="" />
                        <button type="submit" className="user-btn">Edit Photo</button>
                    </div>
                    <div className="form first">
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
                                    <input type="text" placeholder="Enter your email" required />
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
                                    <input type="text" placeholder="Enter your State" required />
                                </div>
                            </div>
                            <button type="submit" className="save-btn">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProfilePage;
