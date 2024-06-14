const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  goal: {
    currency: { type: String, required: true },
    targetAmount: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
  category: { type: String, required: true },
  coverImage: { type: String }, // Making coverImage optional by removing 'required: true'
  location: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const campaignModel = mongoose.model('Campaign', campaignSchema);

module.exports = campaignModel;
