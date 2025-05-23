const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String },
  category: { type: String },
  ownerId: { type: String }, // You can link this to the logged-in user
  logo: { type: String },    // optional: URL or base64
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
