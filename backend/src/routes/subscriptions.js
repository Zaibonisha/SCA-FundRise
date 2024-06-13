const { Router } = require("express");
const { createPayPalSubscription } = require("../utils/paypal");

const router = Router();

router.post("/create", async (req, res) => {
  const { priceId } = req.body;
  const response = await createPayPalSubscription({
    customer: req.user.customer.stripeId,
    payment: req.user.customer.defaultPaymentId,
    price: priceId,
  });
  res.send(response);
});

module.exports = router;