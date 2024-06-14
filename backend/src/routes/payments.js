const { Router } = require("express");
const User = require("../models/User");
const { attachPayPalPaymentMethod } = require("../utils/paypal");

const router = Router();

router.post("/methods/create", async (req, res) => {
  if (req.user) {
    const { email } = req.body;
    if (!email) return res.sendStatus(400);

    try {
      // Call the function to attach a PayPal payment method
      const paymentMethod = await attachPayPalPaymentMethod({ email });

      // Update the user with the new payment method
      const update = await User.findOneAndUpdate(
        { email: req.user.email },
        {
          $push: {
            paymentMethods: {
              type: 'PayPal',
              details: { email: paymentMethod.email_address },
              addedAt: new Date()
            }
          }
        },
        { new: true }
      );

      return res.status(200).send(update);
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  } else {
    return res.sendStatus(401);
  }
});

module.exports = router;
