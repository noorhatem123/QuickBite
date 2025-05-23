const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");

router.post("/", async (req, res) => {
  try {
    const restaurant = new Restaurant(req.body);
    const saved = await restaurant.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router; // ✅ EXPORT the router itself (not a function)
