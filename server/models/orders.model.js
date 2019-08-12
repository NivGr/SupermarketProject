const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  user: [{type:Schema.Types.ObjectId, ref: 'User'}],
  cart: [{type:Schema.Types.ObjectId, ref: 'Cart'}],
  finalPrice: Number,
  city: String,
  street: String,
  shipDate: String,
  orderDate: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now
  },
  lastFourDigits: String
});

module.exports = orderSchema
