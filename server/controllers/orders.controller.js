const express = require('express');
const router = express.Router();
const _ = require('lodash');

const ordersService = require('../services/orders.service.js');
const ordersValidation = require('./../validations/orders.validation.js');

router.put('/addProductToCart', async(req, res) => {
  try{
    await ordersService.orderServices.addProductToCart(req);
    return res.sendStatus(200);
  } catch(err) {
    return res.sendStatus(400);
  }
})

router.get('/getUserCart', async(req, res) => {
  try{
    const userCart = await ordersService.orderServices.findCart(req);
    return res.status(200).json({ userCart: userCart });
  } catch(err) {
    return res.sendStatus(400);
  }
})

router.put('/placeOrder', ordersValidation.orderValidations.cityNotEmpty, ordersValidation.orderValidations.payMethodNotEmpty, ordersValidation.orderValidations.checkDateInFuture, ordersValidation.orderValidations.checkCreditCardRegEx, ordersValidation.orderValidations.checkErrors, async(req, res) => {
  try{
    const orderDetails = await ordersService.orderServices.placeOrder(req);
    if(orderDetails === 'All Shipments Taken') {
      return res.status(200).json('All Shipments Taken')
    }
    else{
      return res.status(200).json('Order Done')
    }
  } catch(err) {
    return res.status(400).json(err);
  }
})

router.delete('/deleteCartProduct/:cartProductId', async(req, res) => {
  try{
    const deleteStatus = await ordersService.orderServices.deleteFromCart(req);
    return res.sendStatus(200); //
  } catch(err) {
    return res.sendStatus(400);
  }
})

router.get('/numberoforders', async(req, res) => {
  try{
    const totalOrders = await ordersService.orderServices.getNumberOfOrders();
    return res.status(200).json(totalOrders);
  } catch(err) {
    return res.sendStatus(400);
  }
})

router.get('/getUserClosedCart', async(req, res) => {
  try{
    const userCart = await ordersService.orderServices.findClosedCart(req);
    return res.status(200).json({ userCart: userCart });
  } catch(err) {
    return res.sendStatus(400);
  }
})

router.delete('/deleteCart/:cartId', async(req, res) => {
  try{
    const deleteStatus = await ordersService.orderServices.deleteAllFromCart(req);
    return res.sendStatus(200);
  } catch(err) {
    return res.sendStatus(400);
  }
})

router.get('/getUserOrder', async(req, res) => {
  try{
    const userOrder = await ordersService.orderServices.findUserLastOrder(req);
    return res.status(200).json( userOrder )
  } catch(err) {    
    return res.sendStatus(400);
  }
})


module.exports = router;
