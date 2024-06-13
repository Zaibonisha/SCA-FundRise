const { Router } = require("express");
const UserController = require("../controllers/userController");

const userRouter = Router();
const userControllerInstance = new UserController();

userRouter.post("/", userControllerInstance.register.bind(userControllerInstance));
userRouter.post("/login", userControllerInstance.login.bind(userControllerInstance));
userRouter.get("/logout", userControllerInstance.logout.bind(userControllerInstance));
userRouter.get("/loggedIn", userControllerInstance.loggedIn.bind(userControllerInstance));

module.exports = userRouter;
