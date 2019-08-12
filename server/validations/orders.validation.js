const _ = require('lodash');
const validator = require('validator');
const mongoose = require('mongoose');
const orderSchema = require('../models/orders.model.js');
const Order = mongoose.model('Order', orderSchema);

let errors = [];

const orderValidations = {
  checkDateInFuture: (req, res, next) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    if(req.body.shipDate > today) {
      return next();
    }
    errors.push('Shipment date cant be in the past');
    return next();
  },
  checkCreditCardRegEx: (req, res, next) => {
    let { creditCard } = req.body;
    let { cCardMethod } = req.body;
    let visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    let mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    let americanExpressRegEx = /^(?:3[47][0-9]{13})$/;
    let isValid = false;

    if (visaRegEx.test(creditCard) && cCardMethod === "Visa") {
      isValid = true;
    } else if(mastercardRegEx.test(creditCard) && cCardMethod === "Mastercard") {
      isValid = true;
    } else if(americanExpressRegEx.test(creditCard) && cCardMethod === "AmericanExpress") {
      isValid = true;
    }
    if(isValid) {
       // return true
       return next();
    } else {
       // return false
       errors.push('Invalid Credit Card Number');
       return next();
    }
  },
  cityNotEmpty: (req, res, next) => {
    if(_.hasIn(req.body, 'city')) {
      return next();
    }
    errors.push('No selected city');
    return next();
  },
  payMethodNotEmpty: (req, res, next) => {
    if(_.hasIn(req.body, 'cCardMethod')) {
      return next();
    }
    errors.push('No selected payment method');
    return next();
  },
  streetNotEmpty: (req, res, next) => {
    if(_.hasIn(req.body, 'street') && trim(req.body.street.length) > 0) {
      return next();
    }
    errors.push('No street given');
    return next();
  },
  checkErrors: (req, res, next) => {
    if(errors.length > 0) {
      res.json({errorMsgs: errors}).status(200);
      errors = []; //empty global var before running through validations again
      return;
    }
    return next();
  }
}


module.exports = {
  orderValidations
}
