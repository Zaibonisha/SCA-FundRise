const express = require('express');
const router = express.Router();
const Campaign = require('../models/campaignModel');

// POST /api/campaigns/create
router.post('/create', async (req, res) => {
  try {
    const {
      campaignTitle,
      campaignDesc,
      goal,
      category,
      location,
      coverImage // If included in request
    } = req.body;

    // Create a new Campaign object
    const newCampaign = new Campaign({
      campaignTitle,
      campaignDesc,
      goal,
      category,
      location,
      coverImage // Optional: Assign cover image if provided
    });

    // Save the new campaign to MongoDB
    const savedCampaign = await newCampaign.save();

    res.status(201).json(savedCampaign);
  } catch (error) {
    console.error('Error creating campaign:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
