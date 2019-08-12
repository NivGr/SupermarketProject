const express = require('express');
const router = express.Router();
const _ = require('lodash');
const passport = require('passport');

//login service + validation
const usersService = require('../services/users.service.js');
const usersValidation = require('./../validations/users.validation.js');

router.post('/signup1',
                       usersValidation.userValidations.checkFieldsNotEmptyStep1,
                       usersValidation.userValidations.checkEmailFormat,
                       usersValidation.userValidations.checkEmailExists,
                       usersValidation.userValidations.checkUserIdExists,
                       usersValidation.userValidations.checkAllKeysPresent1,
                       usersValidation.userValidations.checkPasswordAuthentication,
                       usersValidation.userValidations.checkErrors, async(req, res) => {
  try{
    return res.sendStatus(200);
  }
  catch(err) {
    return res.sendStatus(400);
  }
})

router.put('/signup2', usersValidation.userValidations.checkAllFieldsNotEmpty,
                       usersValidation.userValidations.checkAllKeysPresent2,
                       usersValidation.userValidations.checkErrors, async(req, res) => {
  try{
    await usersService.userServices.signup(req);
    return res.sendStatus(200);
  }
  catch(err) {
    return res.sendStatus(401);
  }
})

router.post('/login', passport.authenticate('local'), async(req, res) => {
  try{
    return res.status(200).json({ user: req.user});
  }
  catch(err) {
    return res.json('Login failure').status(400);
  }
})

router.get('/checkUserExists', (req ,res) => {
    const myUser = req.user;
    return res.status(200).json({ myUser });
})

router.get('/logout', function(req, res) {
  req.logout();
  req.session.destroy(err => {
    if(err) {
      return res.json({ err })
    }
    res.json({ status: 'success' })
  });
});

module.exports = router;
