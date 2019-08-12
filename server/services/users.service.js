const _ = require('lodash');
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const userSchema = require('./../models/users.model.js');
const User = mongoose.model('User', userSchema);

const userServices = {
  signup: req => {
    return new Promise((res, rej) => {
      //check if isAdmin is in body (only when Admin is true)
      let isAdmin;
      if(req.body.isAdmin) {
        isAdmin = req.body.isAdmin;
      }
      else {
        isAdmin = false;
      }
      const { userId, firstName, lastName, email, password, passwordAuthentication, city, street } = req.body;
      const newUser = new User({userId, firstName, lastName, email, password, city, street, isAdmin});
      // hash Password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          //set password to hash
          newUser.password = hash;
          //save User
          newUser.save(err => {
            if(err) {
              return rej(err);
            };
            return res();
          });
        });
      });
    });
  }
}


module.exports = {
  userServices
};
