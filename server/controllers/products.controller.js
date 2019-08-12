const express = require('express');
const router = express.Router();
const _ = require('lodash');

//login service + validation
const productsService = require('../services/products.service.js');
const productsValidation = require('./../validations/products.validation.js');

router.put('/addProduct', productsValidation.productValidations.checkPriceNumbericAboveZero, async(req, res) => {
  try{
    const productExistsStatus = await productsService.productServices.addProduct(req)
    if(productExistsStatus === 'Product Already Exists') {
      return res.json('Product Already Exists').status(400);
    }
    return res.sendStatus(200)
  } catch(err) {
    return res.sendStatus(400);
  }
})


router.patch('/updateProduct/:id', async(req, res) => {
  try{
    await productsService.productServices.updateProduct(req);
    return res.sendStatus(200);
  } catch(err) {
    return res.sendStatus(400);
  }
})

router.get('/allCategories', async(req, res) => {
  try{
    const categories = await productsService.productServices.getAllCategories();
    return res.json({ categories }).status(200)
  } catch(err) {
    return res.sendStatus(400);
  }
})

router.get('/productsByCategory/:categoryName', async(req, res) => {
  try{
    const productsByCategory = await productsService.productServices.getProductsByCategory(req);
    return res.json({ productsByCategory }).status(200);
  } catch(err) {
    return res.sendStatus(400);
  }
})

router.get('/allProducts', async(req, res) => {
  try{
    const allProducts = await productsService.productServices.getallProducts(req);
    return res.json({ allProducts }).status(200);
  } catch(err) {
    return res.sendStatus(400);
  }
})

module.exports = router;
