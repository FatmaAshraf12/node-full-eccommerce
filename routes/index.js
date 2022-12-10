var express = require("express");
var router = express.Router();
const Products = require("../models/Product");
/* GET home page. */
router.get("/", function (req, res, next) {
  Products.find({}, (error, doc) => {
    if (error) console.log("found error");

    console.log(doc);
  });
  res.render("index", {title: "shopping cart"});
});

module.exports = router;
