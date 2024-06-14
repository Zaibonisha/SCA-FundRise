import React, { useState } from 'react';
import axios from 'axios';

function Campaign() {
  const [campaignData, setCampaignData] = useState({
    campaignTitle: '',
    campaignDesc: '',
    currency: 'USD',
    targetAmount: '10000',
    startDate: '2024-06-15',
    endDate: '2024-07-15',
    category: 'Fundraising',
    coverImage: null,
    location: 'JHB, SA'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampaignData({ ...campaignData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCampaignData({ ...campaignData, coverImage: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', campaignData.campaignTitle);
      formData.append('description', campaignData.campaignDesc);
      formData.append('goal[currency]', campaignData.currency);
      formData.append('goal[targetAmount]', campaignData.targetAmount);
      formData.append('goal[startDate]', campaignData.startDate);
      formData.append('goal[endDate]', campaignData.endDate);
      formData.append('category', campaignData.category);
      formData.append('coverImage', campaignData.coverImage);
      formData.append('location', campaignData.location);

      const response = await axios.post('http://localhost:5000/api/campaigns/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Campaign created:', response.data);

      // Optionally, show a success message or redirect to another page
    } catch (error) {
      console.error('Error creating campaign:', error);
      // Handle error: show error message, log, etc.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Campaign Title:
        <input type="text" name="campaignTitle" value={campaignData.campaignTitle} onChange={handleChange} />
      </label>
      <label>
        Campaign Description:
        <input type="text" name="campaignDesc" value={campaignData.campaignDesc} onChange={handleChange} />
      </label>
      <label>
        Goal Currency:
        <input type="text" name="currency" value={campaignData.currency} onChange={handleChange} />
      </label>
      <label>
        Target Amount:
        <input type="text" name="targetAmount" value={campaignData.targetAmount} onChange={handleChange} />
      </label>
      <label>
        Start Date:
        <input type="date" name="startDate" value={campaignData.startDate} onChange={handleChange} />
      </label>
      <label>
        End Date:
        <input type="date" name="endDate" value={campaignData.endDate} onChange={handleChange} />
      </label>
      <label>
        Category:
        <input type="text" name="category" value={campaignData.category} onChange={handleChange} />
      </label>
      <label>
        Cover Image:
        <input type="file" name="coverImage" onChange={handleFileChange} />
      </label>
      <label>
        Location:
        <input type="text" name="location" value={campaignData.location} onChange={handleChange} />
      </label>
      <button type="submit">Create Campaign</button>
    </form>
  );
}

export default Campaign;
