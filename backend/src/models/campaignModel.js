const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  campaignTitle: { type: String, required: true },
  campaignDesc: { type: String, required: true },
  goal: {
    currency: { type: String, required: true },
    targetAmount: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
  category: { type: String, required: true },
  location: { type: String, required: true },
  coverImage: { type: String }, // Making coverImage optional by removing 'required: true'
}, {
  timestamps: true // Automatically add createdAt and updatedAt fields
});

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;
