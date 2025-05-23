const express = require('express');
const Feedback = require('../models/Feedback');
const router = express.Router();

// Create new feedback
router.post('/', async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    const saved = await feedback.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Failed to submit feedback', error: err });
  }
});

// Get all feedback
router.get('/', async (req, res) => {
  try {
    const allFeedback = await Feedback.find();
    res.status(200).json(allFeedback);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch feedback', error: err });
  }
});

module.exports = router;
