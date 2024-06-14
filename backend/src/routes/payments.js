const { Router } = require('express');
const User = require('../models/User'); // Assuming User model exists
const Payments = require('../models/paymentsModel'); // Assuming Payments model exists
const { attachPayPalPaymentMethod } = require('../utils/paypal');

const router = Router();

router.post('/methods/create', async (req, res) => {
  try {
    // Check if user is authenticated
    if (!req.user) {
      return res.sendStatus(401); // Unauthorized
    }

    // Validate email from request body
    const { email } = req.body;
    if (!email) {
      return res.sendStatus(400); // Bad Request
    }

    // Call the function to attach a PayPal payment method
    const paymentMethod = await attachPayPalPaymentMethod({ email });

    // Create a new payment record
    const newPayment = new Payments({
      user: req.user._id, // Assuming user ID is stored in req.user
      type: 'PayPal',
      details: {
        email: paymentMethod.email_address
      },
      addedAt: new Date()
    });

    // Save the payment record
    const savedPayment = await newPayment.save();

    // Update the user with the new payment method ID
    const updateUser = await User.findOneAndUpdate(
      { email: req.user.email },
      {
        $push: {
          paymentMethods: savedPayment._id // Assuming paymentMethods is an array of Payment IDs in User model
        }
      },
      { new: true }
    );

    return res.status(200).send(updateUser); // Send updated user document
  } catch (error) {
    console.error('Error creating payment method:', error);
    return res.sendStatus(500); // Server Error
  }
});

module.exports = router;
