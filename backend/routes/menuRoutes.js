const express = require("express");
const router = express.Router();
const { getAllMenuItems, createMenuItem, updateMenuItem, deleteMenuItem } = require("../controllers/menuController");

// GET /menu - Get all menu items
router.get("/", getAllMenuItems);

// POST /menu - Create a new menu item
router.post("/", createMenuItem);

// PUT /menu/:id - Update a menu item
router.put("/:id", updateMenuItem);

// DELETE /menu/:id - Delete a menu item
router.delete("/:id", deleteMenuItem);

module.exports = router;
