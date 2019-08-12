const _ = require('lodash');
const mongoose = require('mongoose');

//user Schema
const userSchema = require('../models/users.model.js');
const User = mongoose.model('User', userSchema);

//product Schema
const productSchema = require('../models/products.model.js');
const Product = mongoose.model('Product', productSchema);

//cart Product Schema
const cartProductSchema = require('../models/cartProducts.model.js');
const CartProduct = mongoose.model('CartProduct', cartProductSchema);

//cart Schema
const cartSchema = require('../models/carts.model.js');
const Cart = mongoose.model('Cart', cartSchema);

//order Schema
const orderSchema = require('../models/orders.model.js');
const Order = mongoose.model('Order', orderSchema);

const orderServices = {
  addProductToCart: req => {
    return new Promise(async(res, rej) => {
      try{
        const { productId, quantity } = req.body;
        const myProduct = await orderServices.findSpecificProduct(req);
        const totalPrice = myProduct.price * quantity; //calculate total price of the product schema object and quantity on req body
        //first we create a cart if one doesnt exists yet
        //find if exsists:
        let myCart = await orderServices.findCart(req);
        if(!myCart) {
          myCart = await orderServices.createCart(req);
        }
        //create new cartProduct if doesnt exist
        const newCartProduct = new CartProduct({ product: myProduct, quantity, totalPrice });
        newCartProduct.save(err => {
          if(err) {
            return rej();
          }
          Cart.find({ _id: myCart._id }, (err, data) => {
            return res();
          })
          Cart.findOneAndUpdate({ _id: myCart._id }, {$push: {cartproducts: newCartProduct}, isOrdered: false}, {useFindAndModify: false}, (err, data) => {
            if(err) {
              return rej();
            }
            return res();
          })
        })
      } catch(err) {
        return rej();
      }
    })
  },
  findSpecificProduct: req => {
    return new Promise(async(res, rej) => {
      try{
        const { productId } = req.body;
        Product.findOne({ _id: productId }, (err, data) => {
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
  createCart: req => {
    return new Promise(async(res, rej) => {
      try{
        const myUser = await orderServices.findUserForCart(req);
        if(myUser) {
          //create cart of user to push casrtproducts into
          const newCart = new Cart({ user: myUser });
          newCart.save(err => {
            if(err) {
              return rej();
            }
            return res(newCart);
          })
        }
      } catch(err) {
        return rej();
      }
    })
  },
  findUserForCart: req => {
    return new Promise(async(res, rej) => {
      try{
        User.find({_id: req.user._id}, (err, data) => {
          if(data.length > 0) {
            return res(data[0]);
          }
          return rej();
        })
      } catch(err) {
        return rej();
      }
    })
  },
  findCart: req => {
    return new Promise(async(res, rej) => {
      try{
        Cart.findOne({ user: req.user, isOrdered: false }).populate({
          path: 'cartproducts',
          model: 'CartProduct',
          populate: {
            path: 'product',
            model: 'Product'
          }
        }).exec((err, data) => {
          if(err) {
            return rej()
          }
          return res(data);
        })
      } catch(err) {
        return rej();
      }
    })
  },
  placeOrder: req => {
    return new Promise(async(res, rej) => {
      try{
        const { cart, city, finalPrice, street, shipDate, creditCard } = req.body;
        const { user } = req;
        const lastFourDigits = creditCard.substring(creditCard.length - 4);
        const myOrder = new Order({ user, cart, finalPrice, city, street, shipDate, lastFourDigits })
        const isTripleBook = await orderServices.checkTripleShippingDate(req);
        if( isTripleBook.length <= 3 ) {
          myOrder.save(err => {
            if(err) {
              return rej();
            }
            Cart.findOneAndUpdate({ _id: cart._id }, { isOrdered: true }, {useFindAndModify: false}, (err, data) => {
              if(err) {
                return rej();
              }
              return res('Cart Updated')
            })
          })
        }
        else {
          return res('All Shipments Taken')
        }
      } catch(err) {
        return rej();
      }
    })
  },
  deleteFromCart: req => {
    return new Promise(async(res, rej) => {
      try{
        const { cartProductId } = req.params;
        CartProduct.findOneAndRemove({ _id: cartProductId }, (err, data) => {
          if(err) {
          }
        })
        return res('Cart Product Removed!');
      } catch(err) {
        return rej();
      }
    })
  },
  getNumberOfOrders: req => {
    return new Promise(async(res, rej) => {
      try{
        Order.countDocuments({}, (err, data) => {
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
  findClosedCart: req => {
    return new Promise(async(res, rej) => {
      try{
        Cart.findOne({ user: req.user, isOrdered: true }).sort([['createDate', -1]]).populate({
          path: 'cartproducts',
          model: 'CartProduct',
          populate: {
            path: 'product',
            model: 'Product'
          }
        }).exec((err, data) => {
          if(err) {
            return rej()
          }
          return res(data);
        })
      } catch(err) {        
        return rej();
      }
    })
  },
  deleteAllFromCart: req => {
    return new Promise(async(res, rej) => {
      try{
        const { cartId } = req.params;
        Cart.findOneAndRemove({ _id: cartId }, (err, data) => {
          if(err) {
            return rej()
          }
        })
        return res('Cart Products Removed!');
      } catch(err) {
        return rej();
      }
    })
  },
  findUserLastOrder: req => {
    return new Promise(async(res, rej) => {
      try{
        Order.findOne({ user: req.user }).sort([['createDate', -1]]).exec((err, data) => {
          if(err) {
            return rej()
          }
          return res(data);
        })
      } catch(err) {
        return rej();
      }
    })
  },
  checkTripleShippingDate: req => {
    return new Promise(async(res, rej) => {
      try{
        Order.find({ shipDate: req.body.shipDate }, (err, data) => {
          if(err) {
            return rej();
          }
          return res(data)
        })
      } catch(err) {
        return rej();
      }
    })
  }
}


module.exports = {
  orderServices
};
