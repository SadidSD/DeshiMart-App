const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "inventory_images", // Cloudinary folder name
    format: async (req, file) => "png", // Force PNG format
    public_id: (req, file) => file.originalname,
  },
});

const upload = multer({ storage });

module.exports = upload;
