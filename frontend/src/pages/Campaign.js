import React, { useState } from 'react';
import './campaign.css';
import campaignImage from '../asset/Mask group (1).png';
import axios from 'axios';

function Campaign() {
  const initialCampaignData = {
    campaignTitle: '',
    campaignDesc: '',
    goal: {
      currency: 'USD',
      targetAmount: '10000',
      startDate: '2024-06-15',
      endDate: '2024-07-15',
    },
    category: 'Fundraising',
    location: 'JHB, SA'
  };

  const [campaignData, setCampaignData] = useState({ ...initialCampaignData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('goal.')) {
      // Handle nested goal object fields
      const goalField = name.split('.')[1]; // Extract the field name after 'goal.'
      setCampaignData({
        ...campaignData,
        goal: {
          ...campaignData.goal,
          [goalField]: value
        }
      });
    } else {
      // Handle top-level fields
      setCampaignData({ ...campaignData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/campaigns/create', campaignData);
      console.log('Campaign created:', response.data);

      // Reset form fields to initial values after successful submission
      setCampaignData({ ...initialCampaignData });

      // Optionally, show a success message or redirect to another page
    } catch (error) {
      console.error('Error creating campaign:', error);
      // Handle error: show error message, log, etc.
    }
  };

  return (
    <div>
      <nav></nav>
      <div className="bottom-container">
        <div className="campaign-lhs">
          <h2>Let's Kickstart Your Fundraising Journey!</h2>
          <img src={campaignImage} alt="Campaign" />
        </div>

        <div className="campaign-rhs">
          <form id="form" onSubmit={handleSubmit}>
            <label htmlFor="campaignTitle">
              <p>Campaign Title</p>
              <input
                type="text"
                className="campaignTitle"
                name="campaignTitle"
                value={campaignData.campaignTitle}
                onChange={handleChange}
                placeholder="Enter your campaign title"
                required
              />
            </label>

            <label htmlFor="campaignDesc">
              <p>Campaign Description</p>
              <input
                type="text"
                className="campaignDesc"
                name="campaignDesc"
                value={campaignData.campaignDesc}
                onChange={handleChange}
                placeholder="Enter your campaign description"
                required
              />
            </label>

            <p>Goal</p>
            <div className="goal-fields">
              <label htmlFor="currency">
                <input
                  type="text"
                  className="currency"
                  name="goal.currency"
                  value={campaignData.goal.currency}
                  onChange={handleChange}
                  placeholder="Currency"
                  required
                />
              </label>

              <label htmlFor="targetAmount">
                <input
                  type="text"
                  className="targetAmount"
                  name="goal.targetAmount"
                  value={campaignData.goal.targetAmount}
                  onChange={handleChange}
                  placeholder="Target amount"
                  required
                />
              </label>

              <label htmlFor="startDate">
                <input
                  type="date"
                  className="startDate"
                  name="goal.startDate"
                  value={campaignData.goal.startDate}
                  onChange={handleChange}
                  placeholder="Enter your start date"
                  required
                />
              </label>

              <label htmlFor="endDate">
                <input
                  type="date"
                  className="endDate"
                  name="goal.endDate"
                  value={campaignData.goal.endDate}
                  onChange={handleChange}
                  placeholder="Enter your end date"
                  required
                />
              </label>
            </div>

            <label htmlFor="category">
              <p>Category</p>
              <input
                type="text"
                className="category"
                name="category"
                value={campaignData.category}
                onChange={handleChange}
                placeholder="Select category"
                required
              />
            </label>

            <label htmlFor="location">
              <p>Location</p>
              <input
                type="text"
                className="location"
                name="location"
                value={campaignData.location}
                onChange={handleChange}
                placeholder="Enter your location"
                required
              />
            </label>

            <div className="bottom-button">
              <button type="submit">Create Campaign</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Campaign;
