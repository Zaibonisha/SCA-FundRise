const { Router } = require("express");
const userRouter = require("./userRouter");
const paymentsRoutes = require("./payments");
const subscriptionRoutes = require("./subscriptions");

const router = Router();

router.use("/users", userRouter); // Add the userRouter
router.use("/payments", paymentsRoutes);
router.use("/subscriptions", subscriptionRoutes);

module.exports = router;
