const { Router } = require("express");
const userRouter = require("./userRouter");
const paymentsRoutes = require("./payments");
const subscriptionRoutes = require("./subscriptions");
const campaignRoutes = require("./campaigns"); // Import the campaigns router

const router = Router();

router.use("/users", userRouter); // Add the userRouter
router.use("/payments", paymentsRoutes);
router.use("/subscriptions", subscriptionRoutes);
router.use("/campaigns", campaignRoutes); // Add the campaigns router

module.exports = router;
