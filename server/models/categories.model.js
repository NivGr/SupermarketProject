const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  categoryName: String,
  products: [{type:Schema.Types.ObjectId, ref: 'Product'}]
});

module.exports = categorySchema
