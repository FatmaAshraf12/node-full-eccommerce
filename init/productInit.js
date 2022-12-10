const Product = require("../models/Product");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/shopping-cart",
  {useNewUrlParser: true},
  (error) => {
    if (error) console.log("error");

    console.log("connectingss");
  }
);
const products = [
  new Product({
    imagePath: "/images/1.jpg",
    productName: "Phone 1",
    price: 1100,
    information: {
      storageCapacity: 70,
      numberOfSIM: 80,
      cameraResolution: "Resolution 1",
    },
  }),

  new Product({
    imagePath: "/images/1.jpg",
    productName: "Phone 2",
    price: 1200,
    information: {
      storageCapacity: 70,
      numberOfSIM: 80,
      cameraResolution: "Resolution 2",
    },
  }),
  new Product({
    imagePath: "/images/1.jpg",
    productName: "Phone 3",
    price: 1300,
    information: {
      storageCapacity: 70,
      numberOfSIM: 80,
      cameraResolution: "Resolution 3",
    },
  }),
  new Product({
    imagePath: "/images/1.jpg",
    productName: "Phone 4",
    price: 1400,
    information: {
      storageCapacity: 70,
      numberOfSIM: 80,
      cameraResolution: "Resolution 4",
    },
  }),
];

for (let i = 0; i < products.length; i++) {
  console.log(i);
  products[i].save((error, doc) => {
    if (error) console.log("error");
    else {
      if (i == products.length) mongoose.disconnect();
    }
  });
}
