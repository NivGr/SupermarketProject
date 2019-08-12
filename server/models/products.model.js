const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  productName: String,
  category: [{type:Schema.Types.ObjectId, ref: 'Category'}],
  // categoryName: String,
  price: Number,
  imgURL: String
});

module.exports = productSchema
