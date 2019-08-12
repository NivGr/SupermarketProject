const _ = require('lodash');
const validator = require('validator');
const mongoose = require('mongoose');
const userSchema = require('../models/users.model.js');
const User = mongoose.model('User', userSchema);

let errors = [];

const userValidations = {
  checkEmailFormat: (req, res, next) => {
    const { email } = req.body;
    if(email !== undefined) {
      if(validator.isEmail(email)) {
        return next();
      }
      errors.push('Invalid Email');
      return next();
    }
    // return res.status(400).json('Invalid Email Format');
  },
  checkAllFieldsNotEmpty: (req, res, next) => {
    if(_.isEmpty(req.body)) {
      errors.push( 'You didnt fill any field!' )
      return next();
    }
    else {
      if(_.every(_.map(_.omit(req.body,['userId', 'isAdmin']), field => !_.isEmpty(field))) && _.isNumber(JSON.parse(req.body.userId))) {
        return next();
      }
      errors.push('Some fields are Empty');
      return next();
      // return res.status(400).json('fields can not be empty!');
    }
  },
  checkFieldsNotEmptyStep1: (req, res, next) => {
    if(_.isEmpty(req.body)) {
      errors.push( 'You didnt fill any field!' )
      return next();
    }
    else {
      if(_.every(_.map(_.omit(req.body,['userId', 'isAdmin']), field => !_.isEmpty(field))) && _.isNumber(JSON.parse(req.body.userId))) {
        return next();
      }
      errors.push('Some fields are Empty');
      return next();
      // return res.status(400).json('fields can not be empty!');
    }
  },
  checkPasswordAuthentication: (req, res, next) => {
    const {password, passwordAuthentication } = req.body;
    if( password === passwordAuthentication) {
      return next();
    }
    errors.push('Password does not match!');
    return next();
    // return res.status(400).json('Password does not match');
  },
  checkEmailExists: (req, res, next) => {
    const { email } = req.body;
    User.findOne({email: email})
    .then(email => {
      if(!email){
          return next();
      }
      errors.push('Email already exists!');
      return next();
      // return res.status(400).json('Email already exists!')
    })
  },
  checkUserIdExists: (req, res, next) => {
    const { userId } = req.body;
    User.findOne({userId: userId})
    .then(userId => {
      if(!userId){
          return next();
      }
      errors.push('ID already exists');
      return next();
      // return res.status(400).json('ID already exists!')
    })
  },
  checkAllKeysPresent1: (req, res, next) => {
    if(_.isEqual(_.keys(req.body), ['userId', 'email', 'password', 'passwordAuthentication'])) {
      return next();
    }
    // errors.push('Some fields are missing in request body');
    // return next();
    return res.status(400).json('some fields are missing from request Body')
  },
  checkAllKeysPresent2: (req, res, next) => {
    if(req.body.isAdmin === 1) {
      if(_.isEqual(_.keys(req.body), ['userId', 'firstName', 'lastName', 'email', 'password', 'passwordAuthentication', 'isAdmin'])) {
        return next();
      }
      // errors.push('Some fields are missing in request body');
      // return next();      
      return res.status(400).json('some fields are missing for request Body')
    }
    else{
      if(_.isEqual(_.keys(req.body), ['userId', 'firstName', 'lastName', 'email', 'password', 'passwordAuthentication', 'city', 'street', 'isAdmin'])) {
        return next();
      }
      errors.push('Some fields are missing in request body');
      return next();
      // return res.status(400).json('some fields are missing!')
    }
  },
  checkErrors: (req, res, next) => {
    if(errors.length > 0) {
      res.json({errorMsgs: errors}).status(400);
      errors = []; //empty global var before running through validations again
      return;
    }
    return next();
  }
}


module.exports = {
  userValidations
}
