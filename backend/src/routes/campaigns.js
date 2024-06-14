const { Router } = require('express');
const Campaign = require('../models/campaignModel');

const router = Router();

router.post('/create', async (req, res) => {
  try {
    const {
      title,
      description,
      goal, // Since goal is an object, destructure its properties
      category,
      location
    } = req.body;

    // Destructure goal properties
    const { currency, targetAmount, startDate, endDate } = goal;

    // Create a new Campaign object
    const newCampaign = new Campaign({
      title,
      description,
      goal: { // Assign goal as an object with its properties
        currency,
        targetAmount,
        startDate,
        endDate
      },
      category,
      location
    });

    // Check if coverImage exists in req.body before assigning
    if (req.body.coverImage) {
      newCampaign.coverImage = req.body.coverImage;
    }

    const savedCampaign = await newCampaign.save();
    res.status(201).json(savedCampaign);
  } catch (error) {
    console.error('Error creating campaign:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
