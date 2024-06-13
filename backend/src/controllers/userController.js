const { Router } = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const { createPayPalCustomer } = require("../utils/paypal"); // Import the function to create a PayPal customer
// const { validateUsername } = require("../middleware/auth");

class userController {
  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post("/", this.register.bind(this));
    this.router.post("/login", this.login.bind(this));
    this.router.get("/logout", this.logout.bind(this));
    this.router.get("/loggedIn", this.loggedIn.bind(this));
  }

  async register(req, res) {
    try {
      const { firstName, lastName, email, password } = req.body;

      // validation
      if (!firstName || !lastName || !email || !password)
        return res
          .status(400)
          .json({ errorMessage: "Please enter all required fields." });

      if (password.length < 6)
        return res.status(400).json({
          errorMessage: "Please enter a password of at least 6 characters.",
        });

      const existingUser = await User.findOne({ email });
      if (existingUser)
        return res.status(400).json({
          errorMessage: "An account with this email already exists.",
        });

      // hash the password
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);

      // create a PayPal customer
      // const paypalCustomer = await createPayPalCustomer({ email }); // Create a PayPal customer

      // save a new user account to the db
      const newUser = new User({
        firstName,
        lastName,
        email,
        passwordHash,
        // customer: paypalCustomer.id, // Assign the PayPal customer ID to the user's customer field
      });

      const savedUser = await newUser.save();

      // sign the token
      const token = jwt.sign(
        {
          user: savedUser._id,
        },
        process.env.JWT_SECRET
      );

      // send the token in a HTTP-only cookie
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        })
        .send();
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      // validate
      if (!email || !password)
        return res
          .status(400)
          .json({ errorMessage: "Please enter all required fields." });

      const existingUser = await User.findOne({ email });
      if (!existingUser)
        return res
          .status(401)
          .json({ errorMessage: "Wrong email or password." });

      const passwordCorrect = await bcrypt.compare(
        password,
        existingUser.passwordHash
      );
      if (!passwordCorrect)
        return res
          .status(401)
          .json({ errorMessage: "Wrong email or password." });

      // sign the token
      const token = jwt.sign(
        {
          user: existingUser._id,
        },
        process.env.JWT_SECRET
      );

      // send the token in a HTTP-only cookie
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        })
        .send();
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  }

  logout(req, res) {
    res
      .cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
        secure: true,
        sameSite: "none",
      })
      .send();
  }

  loggedIn(req, res) {
    try {
      const token = req.cookies.token;
      if (!token) return res.json(false);

      jwt.verify(token, process.env.JWT_SECRET);

      res.send(true);
    } catch (err) {
      res.json(false);
    }
  }
}

module.exports = userController;
