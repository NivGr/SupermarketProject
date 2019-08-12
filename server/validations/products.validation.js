const _ = require('lodash');
const validator = require('validator');
const mongoose = require('mongoose');
const productSchema = require('../models/products.model.js');
const Product = mongoose.model('Product', productSchema);

const productValidations = {
  checkPriceNumbericAboveZero: (req, res, next) => {
    const { productPrice } = JSON.parse(req.body.productDetails);
    if(productPrice > 0.00) {
      return next();
    }
    return res.json('price is not over zero').status(400);
  }
}

module.exports = {
  productValidations
}
