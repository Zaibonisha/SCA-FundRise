const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true }, // Add the first name field
  lastName: { type: String, required: true }, // Add the last name field
  email: { type: String, required: true, unique: true }, // Add the email field with unique constraint
  passwordHash: { type: String, required: true }, // Add the password field
});

const User = mongoose.model("User", userSchema);

module.exports = User;
