const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: {
    type: Number,
    unique: true
  },
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  city: String,
  street: String,
  isAdmin: {
    type: Boolean,
    default: false
  }
});

module.exports = userSchema
