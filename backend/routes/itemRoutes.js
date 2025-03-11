const express = require("express");
const router = express.Router();
const { addItem, getItems, getSoldItems, sellItem } = require("../controllers/itemController");
const upload = require("../middlewares/multer");

router.post("/items", upload.single("image"), addItem);  // Add a new item
router.get("/items", getItems);  // Get unsold items
router.get("/sold-items", getSoldItems);  // Get sold items
router.put("/items/:id/sell", sellItem);  // Mark item as sold

module.exports = router;