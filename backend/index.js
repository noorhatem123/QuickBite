const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const menuRoutes = require('./routes/menuRoutes');
const authRoutes = require('./routes/auth');
const restaurantRoutes = require("./routes/restaurantRoutes");


dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;


// Middleware
app.use(cors());
app.use(express.json());
app.use("/menu", menuRoutes);
app.use("/auth", authRoutes);  
app.use("/api/restaurants", restaurantRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);  // Log the MongoDB connection error
  });

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
