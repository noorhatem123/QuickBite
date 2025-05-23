const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Define the schema for the user model
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensure usernames are unique
    minlength: 3, // Minimum length for username
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Minimum length for password
  },
});

// Hash the password before saving the user document
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next(); // Skip hashing if password isn't modified
  }

  // Hash password using bcrypt with a salt rounds value
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare password entered with the stored hash
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Create the model based on the schema
const User = mongoose.model("User", userSchema);

module.exports = User;
