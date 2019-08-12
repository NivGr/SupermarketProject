const _ = require('lodash');
const mongoose = require('mongoose');
const fs = require('fs');

//product Schema
const productSchema = require('../models/products.model.js');
const Product = mongoose.model('Product', productSchema);

//Category Schem
const categorySchema = require('../models/categories.model.js');
const Category = mongoose.model('Category', categorySchema);

const cartProductSchema = require('../models/cartProducts.model.js');
const CartProduct = mongoose.model('CartProduct', cartProductSchema);

const productServices = {
  addProduct: req => {
    return new Promise(async (res, rej) => {
      try{
        const { productName, productPrice, productCategory } = JSON.parse(req.body.productDetails);
        let myCategory = await productServices.checkIfCategoryExists(productCategory);
        const newProduct = new Product({ productName, category: myCategory, price: productPrice, imgURL: req.files.picture.name });
        const productExistsStatus = await productServices.checkIfProductExists(req)
        if(productExistsStatus === 'no product found') {
          fs.writeFile('../front/supermarket-front/src/assets/' + req.files.picture.name, req.files.picture.data, err => {
            if(err) {
              return rej();
            }
          })
          newProduct.save(err => {
            if(err) {
              return rej();
            }
            Category.updateOne({categoryName: productCategory.toLowerCase()}, {$push: {products: newProduct}}, (err, data) => {
              if(err) {
                return rej();
              }
              return res();
            })
          })
        }
        else {
          return res('Product Already Exists');
        }
      } catch(err) {
          return rej();
      }
    })
  },
  checkIfCategoryExists: categoryName => {
    return new Promise(async (res, rej) => {
      try{
          await Category.find({categoryName: categoryName.toLowerCase()}, (err, data) => {
          if(data.length > 0) {
            return res(data[0]);
          }
          //create new category if doesnt exists yet
          const newCategory = productServices.addCategory(categoryName.toLowerCase());
          return res(newCategory);
        })
      } catch(err) {
        return rej()
      }
    })
  },
  addCategory: categoryName => {
    return new Promise(async(res, rej) => {
      try{
        const newCategory = new Category({ categoryName: categoryName.toLowerCase() });
        await newCategory.save(err => {
          if(err) {
            return rej();
          }
          return res(newCategory);
        })
      } catch(err) {
        return rej();
      }
    })
  },
  updateProduct: req => {
    return new Promise(async(res, rej) => {
      try{
        const { productId, productName, productPrice } = JSON.parse(req.body.productDetails);
        if(req.files) { //if new file is uploaded
          fs.writeFile('../front/supermarket-front/src/assets/' + req.files.picture.name, req.files.picture.data, err => {
            if(err) {
              return rej();
            }
          })
          Product.updateOne({ _id: productId }, { productName, price: productPrice, imgURL: req.files.picture.name }, (err, data) => {
            if(err) {
              return rej();
            }
            return res();
          })
        }
        else {
          Product.updateOne({ _id: productId }, { productName, productPrice }, (err, data) => {
            if(err) {              
              return rej();
            }
            return res();
          })
        }
      } catch(err) {
        return rej();
      }
    })
  },
  getAllCategories: () => {
    return new Promise(async(res, rej) => {
      try{
        Category.find({}, (err, data) => {
          if(err) {
            return rej();
          }
          return res(data)
        })
      } catch(err) {
        return rej();
      }
    })
  },
  getProductsByCategory: req => {
    return new Promise(async(res, rej) => {
      try{
        const { categoryName } = req.params;
        Category.find({ categoryName: categoryName.toLowerCase() }).populate('products')
        .exec((err, data) => {
          if(err) {
            return rej();
          }
          return res(data)
        })
      } catch(err) {
        return rej();
      }
    })
  },
  getallProducts: req => {
    return new Promise(async(res, rej) => {
      try{
        Product.find({}, (err, data) => {
          if(err) {
            return rej();
          }
          return res(data);
        })
      } catch(err) {
        return rej();
      }
    })
  },
  checkIfProductExists: req => {
    return new Promise(async(res, rej) => {
      try{
        const { productName } = JSON.parse(req.body.productDetails);
        await Product.find({productName: productName.toLowerCase()}, (err, data) => {
          if(data.length > 0) {
            return res(data[0]);
          }
          //create new category if doesnt exists yet
          return res('no product found');
        })
      } catch(err) {
        return rej(err)
      }
    })
  }
}


module.exports = {
  productServices
};
