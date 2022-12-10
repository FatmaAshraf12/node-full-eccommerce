const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  imagePath: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  information: {
    type: {
      storageCapacity: Number,
      numberOfSIM: Number,
      cameraResolution: String,
    },
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
