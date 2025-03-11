const mongoose = require("mongoose");

const itemScema = new mongoose.Schema({
    name: String,
    buyingPrice: Number,
    sellingPrice: Number,
    quantity: Number,
    ID: String,
    image: String,
    sold: { type: Boolean, default: false },
})

module.exports = mongoose.model('Item', itemScema);