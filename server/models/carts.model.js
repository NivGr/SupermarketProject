const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema({
  user: [{type:Schema.Types.ObjectId, ref: 'User'}],
  createDate: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now
  },
  cartproducts: [{type:Schema.Types.ObjectId, ref: 'CartProduct'}],
  isOrdered: {
    type: Boolean,
    defult: false
  }
});

module.exports = cartSchema
