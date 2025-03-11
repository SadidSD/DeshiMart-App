const Item = require("../models/item");
const cloudinary = require("cloudinary").v2;



// Add a new item
const addItem = async (req, res) => {
  console.log("Request Body:", req.body);
  console.log("Uploaded File:", req.file); // Debugging file upload

  try {
    if (req.file) {
      // Upload to Cloudinary
      const uploadResponse = await cloudinary.uploader.upload(req.file.path, {
        folder: "inventory_items", // Organize images in Cloudinary
      });

      // Add Cloudinary URL to req.body before saving
      req.body.image = uploadResponse.secure_url;
    }

    const item = new Item(req.body); // Keep your existing schema
    await item.save();
    
    res.status(201).json(item);
  } catch (error) {
    console.error("Error saving item:", error);
    res.status(400).json({ message: error.message });
  }
};
// Get all items
const getItems = async (req, res) => {
  try {
    const items = await Item.find({ sold: false });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get sold items
const getSoldItems = async (req, res) => {
  try {
    const soldItems = await Item.find({ sold: true });
    res.json(soldItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mark item as sold
const sellItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, { sold: true }, { new: true });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addItem, getItems, getSoldItems, sellItem };
