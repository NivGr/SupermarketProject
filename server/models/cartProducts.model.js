const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartProductSchema = new Schema({
  product: [{ type:Schema.Types.ObjectId, ref: 'Product' }],
  quantity: Number,
  totalPrice: Number  
});

module.exports = cartProductSchema
