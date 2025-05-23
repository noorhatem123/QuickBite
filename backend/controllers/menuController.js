const Menu = require("../models/menu");

// GET all menu items
const getAllMenuItems = async (req, res) => {
  try {
    const items = await Menu.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST a new menu item
const createMenuItem = async (req, res) => {
  const item = new Menu({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    available: req.body.available,
  });

  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT (Update) an existing menu item
const updateMenuItem = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, category, available } = req.body;

  try {
    // Find the item by ID and update
    const updatedItem = await Menu.findByIdAndUpdate(
      id,
      { name, description, price, category, available },
      { new: true } // Returns the updated document
    );

    // If no item found with the given ID
    if (!updatedItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    // Send back the updated item
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE a menu item
const deleteMenuItem = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the item by ID and delete it
    const deletedItem = await Menu.findByIdAndDelete(id);

    // If no item found with the given ID
    if (!deletedItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    // Send success message
    res.json({ message: "Menu item deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllMenuItems,
  createMenuItem,
  updateMenuItem,   // Export the update function
  deleteMenuItem,   // Export the delete function
};
