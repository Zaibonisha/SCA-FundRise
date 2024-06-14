const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema for payments
const paymentsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true
  },
  type: {
    type: String,
    enum: ['PayPal', 'Stripe', 'Other'], // Add other types as needed
    required: true
  },
  details: {
    email: {
      type: String,
      required: true
    },
    // You can add more details based on the payment method type
  },
  addedAt: {
    type: Date,
    default: Date.now
  }
});

// Create a model based on the schema
const Payments = mongoose.model('Payments', paymentsSchema);

module.exports = Payments;
