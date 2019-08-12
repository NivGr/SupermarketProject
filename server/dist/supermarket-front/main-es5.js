(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"col-sm-12\">\r\n     <div class=\"card medium horizontal\">\r\n       <div class=\"card-stacked\">\r\n         <div class=\"header center\">\r\n           <span class=\"card-title\">About Us</span>\r\n         </div>\r\n         <div class=\"divider\"></div>\r\n         <div class=\"card-content\">\r\n           <p>\r\n             Hello, and welcome to our online store! <br/>\r\n             This online store was designed to make it easy for everyone to shop at their own ease, just a few clicks and your order could be on it's way to you! <br/> <br/>\r\n             My name is Niv Grinberg, and I built this site to be as simple, fast, asthetic, and helpul as possible.\r\n             <img src=\"./assets/niv.jpg\"/>\r\n           </p>\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet><router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/cart.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card cart large\">\n  <span class=\"card-title\">My Cart</span>\n  <div class=\"divider\"></div>\n    <div class=\"card-content\" *ngIf=\"cartProducts\">\n      <!-- <ul class=\"myProducts\" *ngFor = \"let cartProduct of cartProducts\">\n        <li><i class=\"material-icons\" (click) = \"deleteFromCart(cartProduct._id)\">delete_forever</i>{{cartProduct.product[0].productName}} | Quantity: {{cartProduct.quantity}} | Price: {{cartProduct.totalPrice}}</li>\n      </ul> -->\n      <table>\n        <thead>\n          <tr>\n            <th></th>\n            <th>Product</th>\n            <th>Quantity</th>\n            <th>Price</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor = \"let cartProduct of cartProducts\">\n            <td><i class=\"material-icons\" (click) = \"deleteFromCart(cartProduct._id)\">delete_forever</i></td>\n            <td>{{cartProduct.product[0].productName}}</td>\n            <td>{{cartProduct.quantity}}</td>\n            <td>{{cartProduct.totalPrice | currency:'ILS':'symbol'}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"card-action\">\n      <span><a class=\"clearAll left\" (click) = \"deleteAllProducts()\">Clear All Products </a></span>\n    </div>\n  <div class=\"divider\"></div>\n</div>\n<div class=\"card actions large\">\n  <div class=\"card-action\">\n    <span><a class=\"total left\">Total Price: {{totalPrice | currency:'ILS':'symbol'}} </a></span>\n    <span><a class=\"order right\" (click) = \"sendCartToOrder()\">Place Order</a></span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-sidebar/edit-sidebar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-sidebar/edit-sidebar.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card edit large\">\r\n  <span class=\"card-title\">Admin Product Screen</span>\r\n  <div class=\"divider\"></div>\r\n    <div class=\"card-content\">\r\n      <div class=\"input-field\">\r\n        <input id= \"productName\" type= \"text\" class= \"validate\" [(ngModel)] = \"productName\" required/>\r\n        <label for= \"productName\" class=\"active\">Name</label>\r\n      </div>\r\n      <div class=\"input-field\" *ngIf = \"isActionTypeAdd\">\r\n        <input id= \"productCategory\" type= \"text\" class= \"validate\" [(ngModel)] = \"productCategory\" required>\r\n        <label for= \"productCategory\" class=\"active\">Category</label>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <input id= \"productPrice\" type= \"number\" class= \"validate\" [(ngModel)] = \"productPrice\" required>\r\n        <label for= \"productPrice\" class=\"active\">Price</label>\r\n      </div>\r\n      <div class = \"file-field input-field\">\r\n        <div class = \"btn\">\r\n          <span>Browse</span>\r\n          <input type = \"file\" (change) = \"fileUpload( $event )\"/>\r\n        </div>\r\n        <div class = \"file-path-wrapper\">\r\n           <input class = \"file-path validate\" type = \"text\" placeholder = {{filePlaceHolder}}/>\r\n        </div>\r\n    </div>\r\n  <div class=\"divider\"></div>\r\n  <div class=\"card-action\">\r\n    <span *ngIf = \"!isActionTypeAdd\"><a class=\"order center\" (click) = \"editExistingProduct()\">Apply Changes</a></span>\r\n    <span *ngIf = \"isActionTypeAdd\"><a class=\"order center\" (click) = \"addNewProduct( productName, productPrice, productCategory )\">Add Product</a></span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/info/info.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/info/info.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\n     <div class=\"card medium horizontal\">\n       <div class=\"card-stacked\">\n         <div class=\"header center\">\n           <span class=\"card-title\">Some Info About Our Store</span>\n         </div>\n         <div class=\"divider\"></div>\n         <div class=\"card-content\">\n           <slideshow [height]=\"'40%'\" [minHeight]=\"'100px'\" [imageUrls]=\"productImgs\"></slideshow><br/>\n           We have {{ numberOfProducts }} products available in our store! <br/>\n           {{ numberOfOrders }} Orders have been submitted in our store.  <br/>\n           <div class=\"userInfo\" *ngIf = \"name && !isAdmin\">\n             <a id=\"notification\">Notification:</a>\n             <p class=\"openCart\" *ngIf = \"openCart\">\n               You have an open cart from {{ myCart.createDate.substring(0,10) }} <br/>\n               with {{ totalPrice | currency:'ILS':'symbol' }} worth of products.\n             </p>\n             <p class=\"closedCart\" *ngIf = \"closedCart\">\n               Your last purchase was on <br/>\n               {{ myCart.createDate.substring(0,10) }}\n             </p>\n             <p class=\"welcomeUser\" *ngIf = \"!openCart && !closedCart\">\n               Welcome {{ name }}!\n             </p>\n           </div>\n         </div>\n       </div>\n     </div>\n   </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\n   <div class=\"card medium horizontal\">\n     <div class=\"card-stacked\">\n       <div class=\"header center\">\n         <span class=\"card-title\">Login</span>\n       </div>\n       <div class=\"divider\"></div>\n       <div id=\"login\" class=\"card-content\" *ngIf = \"!isLoginSuccess\">\n         <div class=\"input-field\">\n           <input id= \"email\" type= \"text\" class= \"validate\" [(ngModel)] = \"email\" required/>\n           <label for= \"email\" class=\"active\">Email</label>\n         </div>\n         <div class=\"input-field\">\n           <input id= \"password\" type= \"password\" class= \"validate\" [(ngModel)] = \"password\" required>\n           <label for= \"password\" class=\"active\">Password</label>\n         </div>\n         <div class=\"errors\" *ngIf = \"showErr\">\n           Wrong password or Email!\n         </div>\n       </div>\n       <div id= \"goToShopping\" class=\"card-content\" *ngIf = \"isLoginSuccess\">\n         <a class=\"waves-effect waves-light btn-large hoverable\" (click) = \"goToShopping()\">{{ shoppingStatus }} Shopping!</a>\n       </div>\n       <div class=\"card-action\">\n         <a class= \"loginEvent left\" name=\"action\" (click)= \"loginUser(email, password)\">Login</a>\n         <a class= \"signup right\" name=\"action\" href=\"signup\">Signup</a>\n       </div>\n     </div>\n   </div>\n </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row topBar\">\n  <nav class= \"light-blue lighten-2 col-sm-12\">\n    <div class=\"nav-wrapper\">\n      <a class=\"left\">Welcome {{userFullName}}!</a>\n      <ul id=\"nav-mobile\" class=\"right\">\n        <li *ngIf=\"isAdmin\"><a class=\"addProduct\" (click) = \"addNewProduct()\">New Product</a></li>\n        <li><a class=\"logout\" (click) = \"userLogout()\">Logout</a></li>\n      </ul>\n    </div>\n  </nav>\n  </div>\n<div class=\"container-fluid\">\n  <div class=\"cartIcon\" *ngIf = \"!orderFinish && !isAdmin\">\n    <i class=\"fas fa-shopping-cart\" (mouseenter)= \"cartShow()\" *ngIf = \"!isAdmin\"></i>\n    <i class=\"filler\" *ngIf = \"isAdmin\"></i>\n  </div>\n  <div class=\"row\">\n      <div class=\"cart col-sm-3\" *ngIf=\"cartOpen && !orderFinish\">\n        <app-cart [myCart] = \"myCart\" [cartProducts] = \"cartProducts\" *ngIf = \"!isAdmin\" (sendCartProductUpToDelete) = \"deleteProductFromCart( $event )\"  (sendCartToOrderMain) = \"openOrderDiv( $event )\" (deleteAllCartProducts) = \"deleteAllProductsFromCart( $event )\"></app-cart>\n      </div>\n      <div class=\"edit col-sm-3\" *ngIf = \"openEditSideBar && !orderFinish\">\n        <app-edit-sidebar  (updateProductInList) = \"reloadProductList( $event )\"  [productId] = \"productId\" [productName] = \"productName\" [productPrice] = \"productPrice\" [productImgURL] = \"productImgURL\" [isActionTypeAdd] = \"isActionTypeAdd\"></app-edit-sidebar>\n      </div>\n      <div class={{categoriesClass}} *ngIf=\"myProducts && !orderFinish\">\n        <app-products (sendProductUp3) = \"addToCartFinal( $event )\"  (editProduct5) = \"editProductForSideBar( $event )\" [myProducts] = \"myProducts\" [isAdmin] = \"isAdmin\" [userFullName] = \"userFullName\"></app-products>\n      </div>\n    <div class=\"orderPhase col-sm-12\" *ngIf = \"orderFinish\">\n        <a (click)=\"goBackFromOrder()\">Go Back</a>\n        <app-order-details class=\"col-sm-12 col-push-sm-1\" *ngIf = \"cartProducts\" (disableOrderMenu) = \"hideOrderMenu( $event )\"  [myCart] = \"myCart\" [cartProducts] = \"cartProducts\"></app-order-details>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"categories\">\n  <nav class= \"light-blue lighten-2\">\n    <div class=\"nav-wrapper\">\n      <a class=\"brand-logo\">My Online Market</a>\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <li><a class=\"contact\">Contact Info: neevgr@gmail.com | +972-50-9024964</a></li>\n      </ul>\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/order-complete/order-complete.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/order-complete/order-complete.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"wrapper col-sm-12\">\n       <div class=\"card\">\n         <div class=\"card-stacked\">\n           <div class=\"header center\">\n             <span class=\"card-title\">Order Placed!</span>\n           </div>\n           <div class=\"divider\"></div>\n           <div class=\"card-content\" *ngIf = \"myCart\">\n               Congratualtions! Your Purchase has been approved, <br/>\n               You can either go back to the main menu and by pressing 'OK' or download your order details as PDF.<br/>\n               Here is your order:<br/>\n               <div id=\"orderSumm\" class=\"col-sm-6\">\n                 <p>{{userName}}'s order from {{myCart.createDate.substring(0, 10)}}: </p>\n                 <table id=\"orderTable\">\n                   <thead>\n                     <tr>\n                       <th>#</th>\n                       <th>Image</th>\n                       <th>Product</th>\n                       <th>Quantity</th>\n                       <th>Price</th>\n                     </tr>\n                   </thead>\n                   <tbody>\n                     <tr *ngFor=\"let orderProduct of myOrderProducts; let i = index\">\n                       <td class=\"col-sm-2\">{{i + 1}}</td>\n                       <td class=\"col-sm-2\"><img src= \"../pics/{{orderProduct.product[0].imgURL}}\"/></td>\n                       <td class=\"col-sm-2\">{{orderProduct.product[0].productName}}</td>\n                       <td class=\"col-sm-2\">{{orderProduct.quantity}}</td>\n                       <td class=\"col-sm-2\">{{orderProduct.totalPrice | currency:'ILS':'symbol'}}</td>\n                     </tr>\n                     <tr>Your Total is: {{totalPrice | currency:'ILS':'symbol'}}</tr>\n                   </tbody>\n                 </table>\n                 <p>Thank you for shopping at our store! Hope to see you again!</p>\n               </div>\n             <div class=\"card-action\">\n               <a class= \"loginEvent left\" name=\"action\" (click) = \"goToMain()\">OK</a>\n               <a class= \"loginEvent right\" name=\"action\" (click) = \"downloadPDF()\">Download Order PDF</a>\n             </div>\n           </div>\n         </div>\n       </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/order-details/order-details.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/order-details/order-details.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"orderProducts col-sm-5 col-sm-push-1\">\n       <div class=\"card large horizontal\">\n         <div class=\"card-stacked\">\n           <div class=\"header center\">\n             <span class=\"card-title\">My Order Products</span>\n           </div>\n           <div class=\"header right\">\n             <a class=\"backToShop left\" name=\"action\" (click) = \"backToShop()\">Back To Shop</a>\n             <input type=\"text\" class=\"form-control left\" placeholder=\"Search Product\" [(ngModel)] =\"searchTerm\" (ngModelChange)=\"searchEvent($event)\">\n           </div>\n           <div class=\"divider\"></div>\n           <div class=\"card-content\" id=\"orderSummary\">\n             <table>\n               <thead>\n                 <tr>\n                   <th>#</th>\n                   <th>Image</th>\n                   <th>Product</th>\n                   <th>Quantity</th>\n                   <th>Price</th>\n                 </tr>\n               </thead>\n               <tbody>\n                 <tr *ngFor=\"let cartProduct of cartProducts; let i = index\">\n                   <td>{{i + 1}}</td>\n                   <td><img src= \"../assets/{{cartProduct.product[0].imgURL}}\"/></td>\n                   <td [innerHTML] = \"cartProduct.product[0].productName | highlight: searchTerm\"></td>\n                   <td>{{cartProduct.quantity}}</td>\n                   <td>{{cartProduct.totalPrice | currency:'ILS':'symbol'}}</td>\n                 </tr>\n               </tbody>\n             </table>\n           </div>\n           <div class=\"card-action\">\n             <a class=\"subtotal left\" name=\"action\">Order Total: {{totalPrice | currency:'ILS':'symbol'}}</a>\n           </div>\n         </div>\n       </div>\n     </div>\n     <div class=\"orderDetails col-sm-5\">\n        <div class=\"card large horizontal\">\n          <div class=\"card-stacked\">\n            <div class=\"header center\">\n              <span class=\"card-title\">My Order</span>\n              <!-- <div class=\"divider\"></div>\n              <span class=\"card-title\">Shipping Details: </span> -->\n            </div>\n            <div class=\"divider\"></div>\n            <div class=\"card-content\">\n              <label for= \"city\" class=\"active\">City</label>\n              <div id=\"city\" class=\"city\">\n                <select class=\"browser-default custom-select\" [(ngModel)] = \"city\" (dblclick)=\"defaultCityEvent()\">\n                   <option *ngFor=\"let city of cities\">{{city}}</option>\n                </select>\n                <br/>\n              </div>\n              <div class=\"input-field\">\n                <input id= \"street\" type = \"text\" class= \"validate\" [(ngModel)] = \"street\" (dblclick)=\"defaultStreetEvent()\" required>\n                <label for= \"street\" class=\"active\">Street</label>\n              </div>\n              <div class=\"input-field\">\n                <input id= \"shippingDate\" type = \"date\" class= \"datepicker\" [(ngModel)] = \"shippingDate\" [min] = \"minDate\" required>\n                <label for= \"street\" class=\"active\">Shipping Date</label>\n                <!-- <span *ngIf = \"isError\" id=\"err\">{{ errors[0] }}</span> -->\n              </div>\n              <div class=\"divider\"></div>\n              <div class=\"paymentMethodDiv\">\n                <label for=\"paymentMethod\">Payment Method</label>\n                <select id=\"paymentMethod\" class=\"browser-default custom-select col-sm-4 right\" [(ngModel)] = \"cCardMethod\">\n                   <option selected>Visa</option>\n                   <option>AmericanExpress</option>\n                   <option>Mastercard</option>\n                </select>\n              </div>\n              <div class=\"payment\">\n                <div class=\"input-field\">\n                  <input id= \"creditCard\" type = \"text\" class= \"validate\" [(ngModel)] = \"creditCard\" required>\n                  <label for= \"creditCard\" class=\"active\">Credit Card Number</label>\n                </div>\n              </div>\n              <ul *ngFor = \"let error of errors\">\n                <li class=\"err\">{{ error }} </li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"card-action\">\n            <a class=\"submitOrder right\" name=\"action\" (click)= \"sendOrder()\">Place Order</a>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product-list/product-list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-list/product-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list col-sm-12\">\n  <div class=\"card extrasmall\">\n    <div class=\"card-content extrasmall\">\n      <ul class=\"products d-flex flex-wrap\">\n        <li class=\"products col-sm-3\" *ngFor=\"let product of products\"><app-product [product] = \"product\" (sendProductUp1) = \"addToCart1( $event )\" (editProduct1) = \"editProduct2( $event )\" [isAdmin] = \"isAdmin\"></app-product></li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/product.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/product.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"myProduct col-sm-12\">\n    <div class=\"card hoverable\">\n      <div class=\"card-image\">\n        <img src='./assets/{{product.imgURL}}'/>\n        <a *ngIf=\"isAdmin\" class=\"btn-floating halfway-fab waves-effect waves-light blue\" (click) = \"toggleSideBar( product._id, product.productName, product.price, product.imgURL, false )\"><i class=\"material-icons\">edit</i></a>\n        <a data-toggle=\"modal\" [attr.data-target]=\"'#quantityModal'+product.productName\" *ngIf=\"!isAdmin\" class=\"btn-floating halfway-fab waves-effect waves-light blue\"><i class=\"material-icons\">add</i></a>\n      </div>\n      <div class=\"card-content\">\n        <div class=\"card-title\">\n          {{product.productName}}\n        </div>\n        <!-- <div class=\"card-action\"> -->\n          <span><a class=\"total left\">Price: {{product.price | currency:'ILS':'symbol'}} </a></span>\n        <!-- </div> -->\n      </div>\n    </div>\n  </div>\n<!-- Modal -->\n<div class=\"modal fade\" [attr.id]=\"'quantityModal'+product.productName\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"quantityModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Product Quantity</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Please Enter Wanted Quantity</p>\n        <p>Dairy in gr, <br/>\n           Meat, Fruit, Vegetables in kg, <br/>\n           Other products in units.\n           <input type=\"number\" placeholder=\"quantity\" [(ngModel)] = \"quantity\"/>\n         </p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" aria-label=\"Close\" (click) = \"sendProductToCart( product._id , quantity )\" data-dismiss=\"modal\">Add Product</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--\n  <div class=\"productInput\"*ngIf=\"!isAdmin\">\n    <input type = \"number\" id=\"quantity\" class = \"quantityInput validate col s5\" [(ngModel)] = \"quantity\"/>\n  </div> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- <div class=\"container-fluid\"> -->\n  <!-- <div class=\"row\"> -->\n    <div class=\"categories col-sm-12\">\n      <nav class= \"white\">\n          <span class=\"searchBar form-group has-search col-sm-2 right\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search Product\" [(ngModel)] =\"searchTerm\" (ngModelChange)=\"searchEvent($event)\">\n          </span>\n          <div class=\"categoryList col-sm-10\">\n            <ul>\n              <li><a (click) = \"getProducts('all')\">All</a></li>\n              <li *ngFor=\"let category of categories\"><a (click)= \"getProducts(category.categoryName)\">{{category.categoryName}}</a></li>\n            </ul>\n          </div>\n      </nav>\n      <div class=\"productList\">\n        <app-product-list [products]= \"searchedProducts\" [isAdmin] = \"isAdmin\" (sendProductUp2) = \"addToCart2( $event )\" (editProduct3) = \"editProduct4( $event )\"></app-product-list>\n      </div>\n    </div>\n  <!-- </div> -->\n<!-- </div> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row justify-content-sm-center\">\n    <div class=\"signupForm col-sm-4 justify-content-sm-center\">\n      <a name=\"action\" href=\"welcome\">Back To Login Screen</a>\n      <div class=\"signupForm1 card large\" *ngIf=\"step1Display\">\n        <div class=\"signup-screen\">\n          <div class=\"space-bot text-center\">\n            <div class=\"divider\"></div>\n          </div>\n          <div class=\"card-stacked\">\n            <div class=\"header center\">\n              <span class=\"card-title\">Signup Step 1</span>\n            </div>\n            <div class=\"divider\"></div>\n              <div class=\"card-content\">\n                <div class=\"form-register\" method=\"post\" name=\"register\" novalidate>\n                  <div class=\"input-field col-sm-11 center\">\n                  <input id=\"email\" type=\"email\" class=\"validate\" [(ngModel)]=\"email\" required/>\n                  <label for=\"email\" class=\"active\">Email</label>\n                </div>\n                <div class=\"input-field col-sm-11\">\n                  <input id=\"id\" type=\"number\" class=\"validate\" [(ngModel)]='userId' required/>\n                  <label for=\"id\" class=\"active\">ID</label>\n                 </div>\n                 <div class=\"input-field col-sm-11\">\n                  <input id=\"password\" type=\"password\" name=\"password\" class=\"validate\" ng-minlength='6' [(ngModel)]= 'password' required>\n                  <label for=\"password\" class=\"active\">Password</label>\n                 </div>\n                 <div class=\"passwordAuth input-field col-sm-11\">\n                   <input id=\"passwordAuth\" type=\"password\" name=\"passwordAuth\" ng-minlength='6' class=\"validate\" [(ngModel)]= 'passwordAuthentication' required>\n                   <label for=\"password\" class=\"active\">Password Authentication</label>\n                 </div>\n                  <div class=\"space-top text-center\"></div>\n                 </div>\n               </div>\n             <div class=\"errors\">\n               <ul *ngFor = \"let error of errors\">\n                 <li class=\"err\">{{ error }} </li>\n               </ul>\n             </div>\n           </div>\n        </div>\n        <div class=\"card-action\">\n          <a name=\"action\" (click)= \"validateSignup1(userId, email, password, passwordAuthentication)\">Next</a>\n        </div>\n      </div>\n      <div class=\"signupForm2 card large\" *ngIf=\"step2Display\">\n        <div class=\"signup-screen\">\n          <div class=\"space-bot text-center\">\n            <div class=\"divider\"></div>\n          </div>\n          <div class=\"card-stacked\">\n            <div class=\"header center\">\n              <span class=\"card-title\">Signup Step 2</span>\n            </div>\n            <div class=\"divider\"></div>\n            <div class=\"card-content\">\n              <div class=\"form-register\" method=\"post\" name=\"register\" novalidate>\n                <div class=\"input-field col-sm-11 center\">\n                  <input id=\"firstName\" type=\"text\" class=\"validate\" name=\"firstName\" [(ngModel)]='firstName' required/>\n                  <label for=\"firstName\" class=\"active\">First Name</label>\n                </div>\n                <div class=\"input-field col-sm-11 center\">\n                  <input id=\"lastName\" type=\"text\" class=\"validate\" name=\"lastName\" [(ngModel)]='lastName' required/>\n                  <label for=\"lastName\" class=\"active\">Last Name</label>\n                </div>\n                <div class=\"input-field col-sm-11\">\n                  <input id=\"street\" type=\"text\" name=\"street\" class=\"validate\" [(ngModel)]='street' required>\n                  <label for=\"street\" class=\"active\">Street</label>\n                </div>\n                <div class=\"city\">\n                  <select class=\"browser-default custom-select\" [(ngModel)] = \"city\">\n                     <option selected>Select Your City</option>\n                     <option *ngFor=\"let city of cities\">{{city}}</option>\n                  </select>\n                </div>\n                <div class=\"space-top text-center\"></div>\n               </div>\n             <div>\n             <div class=\"errors\">\n               <ul *ngFor = \"let error of errors\">\n                 <li class=\"err\">{{ error }} </li>\n               </ul>\n             </div>\n           </div>\n        </div>\n        <div class=\"card-action\">\n          <a class=\"right\" name=\"action\" (click)= \"signup(userId, firstName, lastName, email, password, city, street)\">Next</a>\n          <a class=\"left\" name=\"action\" (click)= \"goBack()\">Back</a>\n        </div>\n      </div>\n    </div>\n    </div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row valign-wrapper\">\r\n    <div id=\"login\" class=\"welcome col-sm-4\">\r\n      <app-login (sendUserUp) = \"userCartInfo( $event )\"></app-login>\r\n    </div>\r\n    <div id= \"about\" class=\"welcome col-sm-4\">\r\n      <app-about></app-about>\r\n    </div>\r\n    <div id= \"info\" class=\"welcome col-sm-4\">\r\n      <app-info [numberOfProducts] = \"numberOfProducts\" [numberOfOrders] = \"numberOfOrders\" [productImgs] = \"productImgs\" [myCart] = \"myCart\" [name] = \"name\" [isAdmin] = \"isAdmin\" [openCart] = \"openCart\" [totalPrice] = \"totalPrice\" [closedCart] = \"closedCart\"></app-info>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  height: 200px;\r\n}\r\n\r\np {\r\n  font-size: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');\r\n\r\n* {\r\n  font-family: 'Righteous', cursive;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkVBQTZFOztBQUU3RTtFQUNFLGlDQUFpQztBQUNuQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SaWdodGVvdXMmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4qIHtcclxuICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'supermarket-front';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _edit_sidebar_edit_sidebar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./edit-sidebar/edit-sidebar.component */ "./src/app/edit-sidebar/edit-sidebar.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./order-details/order-details.component */ "./src/app/order-details/order-details.component.ts");
/* harmony import */ var _order_complete_order_complete_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./order-complete/order-complete.component */ "./src/app/order-complete/order-complete.component.ts");
/* harmony import */ var _highlight_search_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./highlight-search.pipe */ "./src/app/highlight-search.pipe.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__["WelcomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_15__["MainComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_17__["ProductsComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_18__["CartComponent"],
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_19__["ProductListComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_20__["ProductComponent"],
                _edit_sidebar_edit_sidebar_component__WEBPACK_IMPORTED_MODULE_21__["EditSidebarComponent"],
                _info_info_component__WEBPACK_IMPORTED_MODULE_22__["InfoComponent"],
                _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_23__["OrderDetailsComponent"],
                _order_complete_order_complete_component__WEBPACK_IMPORTED_MODULE_24__["OrderCompleteComponent"],
                _highlight_search_pipe__WEBPACK_IMPORTED_MODULE_25__["HighlightSearchPipe"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_8__["SlideshowModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([{ path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"] },
                    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__["WelcomeComponent"] },
                    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_15__["MainComponent"] },
                    { path: 'orderComplete', component: _order_complete_order_complete_component__WEBPACK_IMPORTED_MODULE_24__["OrderCompleteComponent"] }])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cart {\r\n  text-align: center;\r\n  height: 442px;\r\n  margin-top: 5px;\r\n  overflow: auto;\r\n  font-size: 10px;\r\n  padding: 1rem\r\n}\r\n\r\n.card-action {\r\n  height: 55px;\r\n}\r\n\r\n.card-content {\r\n  text-align: left;\r\n}\r\n\r\n.actions {\r\n  height:55px;\r\n}\r\n\r\n.order {\r\n  cursor: pointer;\r\n}\r\n\r\n.clearAll {\r\n    cursor: pointer;\r\n}\r\n\r\n.card-action {\r\n  font-size: 12px;\r\n}\r\n\r\n.material-icons {  \r\n  color: red;\r\n  cursor: pointer;\r\n}\r\n\r\n/* scrollable cart*/\r\n\r\ntbody {\r\n  display: block;\r\n  height: 250px;\r\n  overflow: auto;\r\n}\r\n\r\nthead, tbody tr {\r\n  display:table;\r\n  width:100%;\r\n  table-layout:fixed;\r\n}\r\n\r\nthead {\r\n  width: 100%\r\n}\r\n\r\ntable {\r\n  width:100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQSxtQkFBbUI7O0FBQ25CO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRTtBQUNGOztBQUNBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogNDQycHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBwYWRkaW5nOiAxcmVtXHJcbn1cclxuXHJcbi5jYXJkLWFjdGlvbiB7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uYWN0aW9ucyB7XHJcbiAgaGVpZ2h0OjU1cHg7XHJcbn1cclxuXHJcbi5vcmRlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2xlYXJBbGwge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZC1hY3Rpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLm1hdGVyaWFsLWljb25zIHsgIFxyXG4gIGNvbG9yOiByZWQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBzY3JvbGxhYmxlIGNhcnQqL1xyXG50Ym9keSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG50aGVhZCwgdGJvZHkgdHIge1xyXG4gIGRpc3BsYXk6dGFibGU7XHJcbiAgd2lkdGg6MTAwJTtcclxuICB0YWJsZS1sYXlvdXQ6Zml4ZWQ7XHJcbn1cclxudGhlYWQge1xyXG4gIHdpZHRoOiAxMDAlXHJcbn1cclxudGFibGUge1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/backend-api.service */ "./src/app/services/backend-api.service.ts");



var CartComponent = /** @class */ (function () {
    function CartComponent(service) {
        this.sendCartToOrderMain = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]; //sending product to cart by user
        this.sendCartProductUpToDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]; //sending cart product up by user for deleting
        this.deleteAllCartProducts = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.totalPrice = 0;
        this.myService = service;
        this.cartProducts = [];
    }
    CartComponent.prototype.ngOnInit = function () {
        this.getCartTotal();
    };
    CartComponent.prototype.getCartTotal = function () {
        var cartPrices = this.cartProducts.map(function (x) { return x.totalPrice; });
        for (var i = 0; i < cartPrices.length; i++) {
            this.totalPrice += parseInt(cartPrices[i]);
        }
    };
    CartComponent.prototype.sendCartToOrder = function () {
        this.sendCartToOrderMain.emit();
    };
    CartComponent.prototype.deleteFromCart = function (cartProductId) {
        this.sendCartProductUpToDelete.emit(cartProductId);
    };
    CartComponent.prototype.ngOnChanges = function (changes) {
        var cartProducts = changes.cartProducts;
        this.cartProducts = cartProducts.currentValue;
        // this.myService.getCategories();
        this.totalPrice = 0;
        this.getCartTotal();
    };
    CartComponent.prototype.deleteAllProducts = function () {
        this.deleteAllCartProducts.emit(this.myCart._id);
    };
    CartComponent.ctorParameters = function () { return [
        { type: _services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CartComponent.prototype, "cartProducts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CartComponent.prototype, "myCart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CartComponent.prototype, "sendCartToOrderMain", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CartComponent.prototype, "sendCartProductUpToDelete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CartComponent.prototype, "deleteAllCartProducts", void 0);
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/edit-sidebar/edit-sidebar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/edit-sidebar/edit-sidebar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  text-align: center;\r\n  height: 510px;\r\n  overflow: auto;\r\n  font-size: 10px;\r\n  padding: 1rem\r\n}\r\n\r\n.card-action {\r\n  font-size: 20px;\r\n}\r\n\r\na {\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1zaWRlYmFyL2VkaXQtc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtc2lkZWJhci9lZGl0LXNpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA1MTBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgcGFkZGluZzogMXJlbVxyXG59XHJcblxyXG4uY2FyZC1hY3Rpb24ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/edit-sidebar/edit-sidebar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-sidebar/edit-sidebar.component.ts ***!
  \********************************************************/
/*! exports provided: EditSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSidebarComponent", function() { return EditSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/backend-api.service */ "./src/app/services/backend-api.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var EditSidebarComponent = /** @class */ (function () {
    function EditSidebarComponent(service, toastr) {
        this.updateProductInList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.productImg = null;
        this.myService = service;
        this.toastr = toastr; // toasts
        this.filePlaceHolder = this.productImgURL || 'Upload File';
    }
    EditSidebarComponent.prototype.ngOnInit = function () {
    };
    EditSidebarComponent.prototype.fileUpload = function (e) {
        this.productImg = e.target.files[0];
    };
    EditSidebarComponent.prototype.editExistingProduct = function () {
        var _this = this;
        var data = new FormData();
        if (this.productImg !== null) {
            data.append('picture', this.productImg, this.productImg['name']);
        }
        var myProduct = { productId: this.productId, productName: this.productName, productPrice: this.productPrice };
        data.append('productDetails', JSON.stringify(myProduct));
        this.myService.editProduct(this.productId, data)
            .subscribe(function (data) {
            _this.updateProductInList.emit();
            return null;
        });
    };
    EditSidebarComponent.prototype.addNewProduct = function (productName, productPrice, productCategory) {
        var _this = this;
        var data = new FormData();
        console.log(this.productImg);
        if (this.productImg !== null && this.productImg !== undefined) {
            data.append('picture', this.productImg, this.productImg['name']);
        }
        var myProduct = { productName: productName, productPrice: productPrice, productCategory: productCategory };
        data.append('productDetails', JSON.stringify(myProduct));
        this.myService.addProduct(data)
            .subscribe(function (data) {
            if (data === 'OK') {
                _this.showSuccess();
                _this.productName = '';
                _this.productPrice = null;
                _this.productCategory = '';
                _this.productImg = null;
                _this.updateProductInList.emit();
            }
            else if (data === '"Product Already Exists"') {
                _this.showFailure('Product Already Exists');
            }
            else if (data === '"price is not over zero"') {
                _this.showFailure('Price Is Not Over Zero');
            }
            else {
                _this.showFailure('Something Went Wrong!');
            }
            return null;
        });
    };
    //toastr
    EditSidebarComponent.prototype.showSuccess = function () {
        this.toastr.success('Product Added!');
    };
    EditSidebarComponent.prototype.showFailure = function (msg) {
        this.toastr.error(msg);
    };
    EditSidebarComponent.ctorParameters = function () { return [
        { type: _services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EditSidebarComponent.prototype, "productId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EditSidebarComponent.prototype, "productName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], EditSidebarComponent.prototype, "productPrice", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EditSidebarComponent.prototype, "productImgURL", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], EditSidebarComponent.prototype, "isActionTypeAdd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], EditSidebarComponent.prototype, "updateProductInList", void 0);
    EditSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-sidebar',
            template: __webpack_require__(/*! raw-loader!./edit-sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-sidebar/edit-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./edit-sidebar.component.css */ "./src/app/edit-sidebar/edit-sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], EditSidebarComponent);
    return EditSidebarComponent;
}());



/***/ }),

/***/ "./src/app/highlight-search.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/highlight-search.pipe.ts ***!
  \******************************************/
/*! exports provided: HighlightSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightSearchPipe", function() { return HighlightSearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HighlightSearchPipe = /** @class */ (function () {
    function HighlightSearchPipe() {
    }
    HighlightSearchPipe.prototype.transform = function (value, args) {
        if (!args) {
            return value;
        }
        var re = new RegExp(args, 'gi'); //'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.
        console.log(value);
        return value.replace(re, "<mark> $& </mark>");
    };
    HighlightSearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'highlight'
        })
    ], HighlightSearchPipe);
    return HighlightSearchPipe;
}());



/***/ }),

/***/ "./src/app/info/info.component.css":
/*!*****************************************!*\
  !*** ./src/app/info/info.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "slideshow {\r\n  height: 100px;\r\n}\r\n\r\n#notification {\r\n  color: red;\r\n}\r\n\r\np {\r\n  font-size: 12px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzbGlkZXNob3cge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbiNub3RpZmljYXRpb24ge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/info/info.component.ts":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/backend-api.service */ "./src/app/services/backend-api.service.ts");



var InfoComponent = /** @class */ (function () {
    function InfoComponent(service) {
        this.myService = service;
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent.ctorParameters = function () { return [
        { type: _services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InfoComponent.prototype, "closedCart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InfoComponent.prototype, "openCart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InfoComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InfoComponent.prototype, "myCart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], InfoComponent.prototype, "numberOfProducts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], InfoComponent.prototype, "totalPrice", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InfoComponent.prototype, "isAdmin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], InfoComponent.prototype, "numberOfOrders", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], InfoComponent.prototype, "productImgs", void 0);
    InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! raw-loader!./info.component.html */ "./node_modules/raw-loader/index.js!./src/app/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.css */ "./src/app/info/info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"]])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginEvent {\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-large {\r\n  height: 60px;\r\n  margin-top: 40%;\r\n  margin-left: 6%;\r\n  background-color: lightblue;\r\n  color: white\r\n}\r\n\r\n.errors {\r\n  color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5FdmVudCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnRuLWxhcmdlIHtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgbWFyZ2luLXRvcDogNDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA2JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgY29sb3I6IHdoaXRlXHJcbn1cclxuXHJcbi5lcnJvcnMge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/backend-api.service */ "./src/app/services/backend-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(service, router, toastr) {
        this.showErr = false;
        this.sendUserUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.myService = service;
        this.router = router;
        this.toastr = toastr;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myService.checkUser()
            .subscribe(function (data) {
            if (JSON.parse(data).myUser !== undefined) {
                _this.router.navigate(['main']);
            }
        });
    };
    LoginComponent.prototype.getCart = function () {
        var _this = this;
        this.myService.getUserCart()
            .subscribe(function (data) {
            if (JSON.parse(data).userCart === null) {
                _this.shoppingStatus = 'Start';
            }
            else {
                _this.shoppingStatus = 'Resume';
            }
        });
    };
    LoginComponent.prototype.sendUser = function () {
        this.sendUserUp.emit();
    };
    LoginComponent.prototype.loginUser = function (email, password) {
        var _this = this;
        this.email = email;
        this.password = password;
        this.showErr = true;
        this.myService.loginUser(email, password)
            .subscribe(function (data) {
            if (data) {
                _this.isLoginSuccess = true;
                _this.showErr = false;
                _this.showSuccess('Loggin Succeeded');
                _this.getCart();
                _this.sendUser();
            }
            else {
                _this.isLoginSuccess = false;
                return null;
            }
        });
    };
    LoginComponent.prototype.goToShopping = function () {
        this.router.navigate(['main']);
    };
    //toastr
    LoginComponent.prototype.showSuccess = function (msg) {
        this.toastr.success(msg);
    };
    LoginComponent.prototype.showFailure = function (msg) {
        this.toastr.error(msg);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], LoginComponent.prototype, "sendUserUp", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n  height: 500px;\r\n}\r\n\r\ni {\r\n  font-size: 30px;\r\n}\r\n\r\n.cartIcon {\r\n  position: relative;\r\n  top: 10px;\r\n  left: 2%;\r\n  height: 40px;\r\n  color: teal;\r\n}\r\n\r\n.filler {\r\n  position: relative;\r\n  top: 5px;\r\n  left: 5px;\r\n  color: gray;\r\n  height: 40px;\r\n}\r\n\r\n.topBar {\r\n  vertical-align: middle;\r\n}\r\n\r\na {\r\n  margin-left: 2%;\r\n}\r\n\r\n.cartIcon {\r\n  cursor: pointer;\r\n}\r\n\r\n.container-fluid {\r\n  margin-left: 2%;\r\n}\r\n\r\n.cart {\r\n  margin-top: 2px;\r\n}\r\n\r\n.edit {\r\n  margin-top: 2px;\r\n}\r\n\r\n.addProduct {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbmkge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLmNhcnRJY29uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGxlZnQ6IDIlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBjb2xvcjogdGVhbDtcclxufVxyXG5cclxuXHJcbi5maWxsZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDVweDtcclxuICBsZWZ0OiA1cHg7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4udG9wQmFyIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5hIHtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuXHJcbi5jYXJ0SWNvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuXHJcbi5jYXJ0IHtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbi5lZGl0IHtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbi5hZGRQcm9kdWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/backend-api.service */ "./src/app/services/backend-api.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var MainComponent = /** @class */ (function () {
    function MainComponent(service, toastr, router) {
        this.cartOpen = false;
        this.orderFinish = false; // flag for showing the order div
        this.categoriesClass = 'categories col-sm-12'; //define class for grid in categroies
        this.myProducts = [];
        this.cartProducts = [];
        this.myService = service;
        this.toastr = toastr; // toasts
        this.router = router;
        this.openEditSideBar = false;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myService.checkUser()
            .subscribe(function (data) {
            if (JSON.parse(data).myUser !== undefined) {
                if (!JSON.parse(data).myUser.isAdmin) { //if user is not admin get his cart from db
                    _this.getCartData();
                }
                _this.isAdmin = JSON.parse(data).myUser.isAdmin;
                _this.userFullName = JSON.parse(data).myUser.firstName + ' ' + JSON.parse(data).myUser.lastName;
            }
            else {
                _this.router.navigate(['welcome']);
            }
        });
        this.getMyProducts();
    };
    MainComponent.prototype.ngOnChanges = function (changes) {
        var cartProducts = changes.cartProducts;
        if (cartProducts !== undefined) {
            console.log(cartProducts);
            this.cartProducts = cartProducts.currentValue; //
        }
    };
    MainComponent.prototype.cartShow = function () {
        this.cartOpen = !this.cartOpen;
        if (this.cartOpen) {
            this.categoriesClass = 'categories col-sm-9';
        }
        else {
            this.categoriesClass = 'categories col-sm-12';
        }
    };
    MainComponent.prototype.addToCartFinal = function (productToSend) {
        var _this = this;
        if (productToSend.quantity > 0) {
            this.myService.addToCart(productToSend)
                .subscribe(function (data) {
                _this.getCartData();
                _this.showSuccess('Product added to your cart!');
            });
        }
        else {
            this.showFailure();
        }
    };
    MainComponent.prototype.getCartData = function () {
        var _this = this;
        this.myService.getUserCart()
            .subscribe(function (data) {
            if (JSON.parse(data).userCart !== null) {
                _this.myCart = JSON.parse(data).userCart;
                _this.cartProducts = JSON.parse(data).userCart.cartproducts;
            }
            else {
                _this.myCart = [];
                _this.cartProducts = [];
                return null;
            }
        });
    };
    MainComponent.prototype.deleteProductFromCart = function (cartProductId) {
        var _this = this;
        this.myService.deleteCartProduct(cartProductId)
            .subscribe(function (data) {
            _this.getCartData();
        });
    };
    MainComponent.prototype.deleteAllProductsFromCart = function (cartId) {
        var _this = this;
        this.myService.clearCartProducts(cartId)
            .subscribe(function (data) {
            _this.showSuccess('Products Deleted Succefully');
        });
        this.getCartData();
    };
    //toastr
    MainComponent.prototype.showSuccess = function (msg) {
        this.toastr.success(msg);
    };
    MainComponent.prototype.showFailure = function () {
        this.toastr.error("Can't add 0 of the product", "Please select a valid quantity");
    };
    MainComponent.prototype.toggleSideBar = function () {
        this.openEditSideBar = !this.openEditSideBar; // open/close side bar
    };
    //open edit sidebar
    MainComponent.prototype.editProductForSideBar = function (productToEdit) {
        this.toggleSideBar();
        //initializing variables by product sent from grand-grandchild - product component
        this.productId = productToEdit.productId;
        this.productName = productToEdit.productName;
        this.productPrice = productToEdit.productPrice;
        this.productImgURL = productToEdit.productImgURL;
        this.isActionTypeAdd = productToEdit.isAddAction;
        if (this.openEditSideBar) {
            this.categoriesClass = 'categories col-sm-9';
        }
        else {
            this.categoriesClass = 'categories col col-sm-12';
        }
    };
    MainComponent.prototype.userLogout = function () {
        var _this = this;
        this.myService.logoutUser()
            .subscribe(function (data) {
            if (JSON.parse(data).status === 'success') {
                _this.router.navigate(['welcome']);
            }
        });
    };
    MainComponent.prototype.openOrderDiv = function () {
        this.orderFinish = true;
    };
    MainComponent.prototype.goBackFromOrder = function () {
        this.orderFinish = false;
    };
    MainComponent.prototype.hideOrderMenu = function () {
        this.orderFinish = false;
    };
    MainComponent.prototype.addNewProduct = function () {
        this.productId = null;
        this.productName = '';
        this.productPrice = null;
        this.productImgURL = '';
        this.isActionTypeAdd = true;
        this.toggleSideBar();
        if (this.openEditSideBar) {
            this.categoriesClass = 'categories col-sm-9';
        }
        else {
            this.categoriesClass = 'categories col col-sm-12';
        }
    };
    MainComponent.prototype.reloadProductList = function () {
        this.getMyProducts();
    };
    MainComponent.prototype.getMyProducts = function () {
        var _this = this;
        //get all products
        this.myService.getAllProducts()
            .subscribe(function (data) {
            _this.myProducts = JSON.parse(data).allProducts;
        });
    };
    MainComponent.ctorParameters = function () { return [
        { type: _services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".brand-logo {\r\n  margin-left: 2%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmFuZC1sb2dvIHtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/order-complete/order-complete.component.css":
/*!*************************************************************!*\
  !*** ./src/app/order-complete/order-complete.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginEvent {\r\n  cursor: pointer;\r\n}\r\n\r\nimg {\r\n  height: 45px;\r\n}\r\n\r\n.card-content {\r\n  overflow: auto;\r\n}\r\n\r\n.orderSumm {\r\n  background-color: #ffffff;\r\n}\r\n\r\n/*Creates table with scrollable tbody*/\r\n\r\n/*tbody {\r\n  display:block;\r\n  height:150px;\r\n  overflow:auto;\r\n}\r\nthead, tbody tr {\r\n  display:table;\r\n  /* width:100%; */\r\n\r\n/* table-layout:fixed;\r\n}*/\r\n\r\n/*thead {\r\n  width: 100%\r\n}\r\ntable {\r\n  width:100%;\r\n}\r\n\r\n.html2canvas-container {\r\n  width: 3000px !important; height: 3000px !important;\r\n}\r\n*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItY29tcGxldGUvb3JkZXItY29tcGxldGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLHNDQUFzQzs7QUFDdEM7Ozs7Ozs7a0JBT2tCOztBQUNoQjtFQUNBOztBQUNGOzs7Ozs7Ozs7O0NBVUMiLCJmaWxlIjoic3JjL2FwcC9vcmRlci1jb21wbGV0ZS9vcmRlci1jb21wbGV0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luRXZlbnQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4ub3JkZXJTdW1tIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4vKkNyZWF0ZXMgdGFibGUgd2l0aCBzY3JvbGxhYmxlIHRib2R5Ki9cclxuLyp0Ym9keSB7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBoZWlnaHQ6MTUwcHg7XHJcbiAgb3ZlcmZsb3c6YXV0bztcclxufVxyXG50aGVhZCwgdGJvZHkgdHIge1xyXG4gIGRpc3BsYXk6dGFibGU7XHJcbiAgLyogd2lkdGg6MTAwJTsgKi9cclxuICAvKiB0YWJsZS1sYXlvdXQ6Zml4ZWQ7XHJcbn0qL1xyXG4vKnRoZWFkIHtcclxuICB3aWR0aDogMTAwJVxyXG59XHJcbnRhYmxlIHtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4uaHRtbDJjYW52YXMtY29udGFpbmVyIHtcclxuICB3aWR0aDogMzAwMHB4ICFpbXBvcnRhbnQ7IGhlaWdodDogMzAwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuKi9cclxuIl19 */"

/***/ }),

/***/ "./src/app/order-complete/order-complete.component.ts":
/*!************************************************************!*\
  !*** ./src/app/order-complete/order-complete.component.ts ***!
  \************************************************************/
/*! exports provided: OrderCompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderCompleteComponent", function() { return OrderCompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_backend_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/backend-api.service */ "./src/app/services/backend-api.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_4__);





var OrderCompleteComponent = /** @class */ (function () {
    function OrderCompleteComponent(router, service) {
        this.totalPrice = 0;
        this.router = router;
        this.myService = service;
    }
    OrderCompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getOrder();
        this.myService.getUserClosedCart()
            .subscribe(function (data) {
            if (JSON.parse(data).userCart !== null) {
                _this.myOrderProducts = JSON.parse(data).userCart.cartproducts;
                _this.getCartTotal();
                _this.myCart = JSON.parse(data).userCart;
            }
            else {
                return null;
            }
        });
        this.myService.checkUser()
            .subscribe(function (data) {
            // if(JSON.parse(data).myUser === undefined) {
            if (Object.entries(data).length === 2) {
                _this.router.navigate(['welcome']);
            }
            else {
                _this.userId = JSON.parse(data).myUser._id;
                _this.userName = JSON.parse(data).myUser.firstName + ' ' + JSON.parse(data).myUser.lastName;
            }
        });
    };
    OrderCompleteComponent.prototype.getOrder = function () {
        var _this = this;
        this.myService.getUserOrder()
            .subscribe(function (data) {
            _this.myOrder = JSON.parse(data);
        });
    };
    OrderCompleteComponent.prototype.getCartTotal = function () {
        var cartPrices = this.myOrderProducts.map(function (x) { return x.totalPrice; });
        for (var i = 0; i < cartPrices.length; i++) {
            this.totalPrice += parseInt(cartPrices[i]);
        }
    };
    OrderCompleteComponent.prototype.goToMain = function () {
        this.router.navigate(['main']);
    };
    OrderCompleteComponent.prototype.downloadPDF = function () {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__();
        doc.setFontSize(22);
        doc.text("Order #" + this.myOrder._id, 105, 20, null, null, 'center');
        doc.setFontSize(16);
        doc.text("Date: " + (new Date(this.myOrder.orderDate)).toUTCString(), 10, 30);
        doc.text("For: " + this.userName, 10, 40);
        doc.text("To Address: " + this.myOrder.city + ", " + this.myOrder.street, 10, 50);
        var totalProductsQuantity = 0;
        var totalProductsSum = 0;
        for (var i = 0; i < this.myOrderProducts.length; i++) {
            totalProductsQuantity += parseInt(this.myOrderProducts.quantity);
            totalProductsSum += parseInt(this.myOrderProducts.totalPrice);
        }
        doc.text("Subtotal: " + totalProductsSum + " NIS for " + totalProductsQuantity + " Products", 10, 60);
        console.log(this.myOrder);
        doc.setLineWidth(0.1);
        doc.setDrawColor(0, 0, 0);
        // doc.setLineDash([2.5])
        doc.line(10, 80, 200, 80);
        for (var i = 0; i < this.myOrderProducts.length; i++) {
            console.log(this.myOrderProducts);
            doc.text(this.myOrderProducts[i].product[0].productName + " - " + this.myOrderProducts[i].quantity + " Units - " + this.myOrderProducts[i].totalPrice + " NIS", 10, 90 + (i + 1) * 10);
        }
        doc.save(this.userId + ".pdf");
    };
    OrderCompleteComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_backend_api_service__WEBPACK_IMPORTED_MODULE_3__["BackendApiService"] }
    ]; };
    OrderCompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-complete',
            template: __webpack_require__(/*! raw-loader!./order-complete.component.html */ "./node_modules/raw-loader/index.js!./src/app/order-complete/order-complete.component.html"),
            styles: [__webpack_require__(/*! ./order-complete.component.css */ "./src/app/order-complete/order-complete.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_backend_api_service__WEBPACK_IMPORTED_MODULE_3__["BackendApiService"]])
    ], OrderCompleteComponent);
    return OrderCompleteComponent;
}());



/***/ }),

/***/ "./src/app/order-details/order-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/order-details/order-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".orderProducts {\r\n  text-align: center;\r\n  height: 715px;\r\n  margin-top: 2px;\r\n  overflow: auto;\r\n  font-size: 10px;\r\n  padding: 1rem\r\n}\r\n\r\n.submitOrder {\r\n  cursor: pointer;\r\n}\r\n\r\nimg {\r\n  height: 45px;\r\n}\r\n\r\n.backToShop {\r\n  cursor: pointer;\r\n}\r\n\r\n/*Creates table with scrollable tbody*/\r\n\r\ntbody {\r\n  display: block;\r\n  height: 250px;\r\n  overflow: auto;\r\n}\r\n\r\nthead, tbody tr {\r\n  display:table;\r\n  width:100%;\r\n  table-layout:fixed;\r\n}\r\n\r\nthead {\r\n  width: 100%\r\n}\r\n\r\ntable {\r\n  width:100%;\r\n}\r\n\r\n.err {\r\n  color: red;\r\n}\r\n\r\n.orderDetails {\r\n  margin-top: 17px;\r\n}\r\n\r\nul {\r\n  display: inline;\r\n  color: red;\r\n}\r\n\r\nli {\r\n  font-size: 14px;\r\n  margin-top: -15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxzQ0FBc0M7O0FBQ3RDO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRTtBQUNGOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmRlclByb2R1Y3RzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA3MTVweDtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDFyZW1cclxufVxyXG5cclxuLnN1Ym1pdE9yZGVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG4uYmFja1RvU2hvcCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKkNyZWF0ZXMgdGFibGUgd2l0aCBzY3JvbGxhYmxlIHRib2R5Ki9cclxudGJvZHkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxudGhlYWQsIHRib2R5IHRyIHtcclxuICBkaXNwbGF5OnRhYmxlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgdGFibGUtbGF5b3V0OmZpeGVkO1xyXG59XHJcbnRoZWFkIHtcclxuICB3aWR0aDogMTAwJVxyXG59XHJcbnRhYmxlIHtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4uZXJyIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ub3JkZXJEZXRhaWxzIHtcclxuICBtYXJnaW4tdG9wOiAxN3B4O1xyXG59XHJcblxyXG51bCB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbmxpIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/order-details/order-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/order-details/order-details.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/backend-api.service */ "./src/app/services/backend-api.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var OrderDetailsComponent = /** @class */ (function () {
    function OrderDetailsComponent(service, toastr, router) {
        this.isError = false;
        this.minDate = new Date();
        this.disableOrderMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]; //sending request to main to falsift the orderOpen var
        this.cities = ['Jerusalem', 'Tel Aviv', 'Haifa', "Be'er Sheva", 'Ashkelon', 'Petah Tikva', 'Eilat', 'Ashdod', 'Netanya', 'Bat Yam'];
        this.totalPrice = 0;
        this.myService = service;
        this.router = router;
        this.toastr = toastr; // toasts
    }
    OrderDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCartTotal();
        this.myService.checkUser() //getting user city and street
            .subscribe(function (data) {
            // if(JSON.parse(data).myUser === undefined) {
            if (Object.entries(data).length === 2) {
                _this.router.navigate(['welcome']);
            }
            else {
                _this.userStreet = JSON.parse(data).myUser.street;
                _this.userCity = JSON.parse(data).myUser.city;
            }
        });
    };
    OrderDetailsComponent.prototype.sendOrder = function () {
        var _this = this;
        this.isError = false;
        this.errors = [];
        var orderObj = { cart: this.myCart, city: this.city, finalPrice: this.totalPrice, street: this.street, shipDate: this.shippingDate, creditCard: this.creditCard, cCardMethod: this.cCardMethod };
        this.myService.sendOrder(orderObj)
            .subscribe(function (data) {
            if (data === '"All Shipments Taken"') {
                _this.isError = true;
                _this.errors.push('All shipments taken, please select a different shipment date');
                return null;
            }
            else if (data === '"Order Done"') {
                _this.showSuccess('Order Complete!');
                _this.router.navigate(['orderComplete']);
            }
            else {
                _this.errors.push(JSON.parse(data).errorMsgs);
                _this.showFailure('Some Errors found with your order!');
                return null;
            }
        });
    };
    OrderDetailsComponent.prototype.searchEvent = function (newSearch) {
        this.searchTerm = newSearch;
    };
    OrderDetailsComponent.prototype.getCartTotal = function () {
        var cartPrices = this.cartProducts.map(function (x) { return x.totalPrice; });
        for (var i = 0; i < cartPrices.length; i++) {
            this.totalPrice += parseInt(cartPrices[i]);
        }
    };
    OrderDetailsComponent.prototype.backToShop = function () {
        this.disableOrderMenu.emit();
    };
    //toastr
    OrderDetailsComponent.prototype.showSuccess = function (msg) {
        this.toastr.success(msg);
    };
    OrderDetailsComponent.prototype.showFailure = function (msg) {
        this.toastr.error(msg);
    };
    OrderDetailsComponent.prototype.defaultCityEvent = function () {
        this.city = this.userCity;
    };
    OrderDetailsComponent.prototype.defaultStreetEvent = function () {
        this.street = this.userStreet;
    };
    OrderDetailsComponent.ctorParameters = function () { return [
        { type: _services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OrderDetailsComponent.prototype, "myCart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], OrderDetailsComponent.prototype, "cartProducts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], OrderDetailsComponent.prototype, "disableOrderMenu", void 0);
    OrderDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-details',
            template: __webpack_require__(/*! raw-loader!./order-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/order-details/order-details.component.html"),
            styles: [__webpack_require__(/*! ./order-details.component.css */ "./src/app/order-details/order-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
}());



/***/ }),

/***/ "./src/app/product-list/product-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-list/product-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list {\r\n  margin-top: 15px;\r\n}\r\n\r\n.card {\r\n  height: 450px;\r\n}\r\n\r\n.card-content {\r\n  overflow-y: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3Qge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IHtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductListComponent = /** @class */ (function () {
    function ProductListComponent() {
        this.sendProductUp2 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]; //send product to cart by user step2
        this.editProduct3 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]; //
    }
    ProductListComponent.prototype.ngOnInit = function () {
    };
    ProductListComponent.prototype.addToCart1 = function (productToSend) {
        this.sendProductUp2.emit(productToSend);
    };
    ProductListComponent.prototype.editProduct2 = function (productToEdit) {
        this.editProduct3.emit(productToEdit);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ProductListComponent.prototype, "products", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ProductListComponent.prototype, "isAdmin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ProductListComponent.prototype, "sendProductUp2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ProductListComponent.prototype, "editProduct3", void 0);
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product-list/product-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .card {\r\n  border-radius: 10%;\r\n} */\r\n\r\nimg {\r\n  height: 120px;\r\n}\r\n\r\n.myProduct {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.card-title {\r\n  font-size: 15px;\r\n}\r\n\r\n.total {\r\n  font-size: 12px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBRUg7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufSAqL1xyXG5cclxuaW1nIHtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4ubXlQcm9kdWN0IHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi50b3RhbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/backend-api.service */ "./src/app/services/backend-api.service.ts");



var ProductComponent = /** @class */ (function () {
    function ProductComponent(service) {
        this.sendProductUp1 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]; //sending product to cart by user
        this.editProduct1 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]; //sending product to edit screen by Admin
        this.myService = service;
        this.quantity = 1;
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.sendProductToCart = function (productId, quantity) {
        var productObj = { productId: productId, quantity: quantity };
        this.sendProductUp1.emit(productObj);
    };
    ProductComponent.prototype.toggleSideBar = function (productId, productName, productPrice, productImgURL, isAddAction) {
        var productObj = { productId: productId, productName: productName, productPrice: productPrice, productImgURL: productImgURL, isAddAction: isAddAction };
        this.editProduct1.emit(productObj);
    };
    ProductComponent.ctorParameters = function () { return [
        { type: _services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ProductComponent.prototype, "product", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ProductComponent.prototype, "isAdmin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ProductComponent.prototype, "sendProductUp1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ProductComponent.prototype, "editProduct1", void 0);
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n  color: black;\r\n}\r\n\r\nli {\r\n  color: black;\r\n}\r\n\r\ni {\r\n  color:black;\r\n  font-size: 20px;\r\n}\r\n\r\n.categories {\r\n  margin-top: 10px;\r\n}\r\n\r\nnav {\r\n  height: 45px;\r\n  line-height: 45px;\r\n}\r\n\r\n.productList {\r\n  text-align: left\r\n}\r\n\r\n.form-control {\r\n  height: 8px;\r\n  margin-top: -2px;\r\n  /* margin-top: 5px; */\r\n}\r\n\r\n.searchBar {\r\n  height: 8px;\r\n}\r\n\r\nnav {\r\n  overflow: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxubGkge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaSB7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uY2F0ZWdvcmllcyB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxubmF2IHtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0TGlzdCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdFxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBoZWlnaHQ6IDhweDtcclxuICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gIC8qIG1hcmdpbi10b3A6IDVweDsgKi9cclxufVxyXG5cclxuLnNlYXJjaEJhciB7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/backend-api.service */ "./src/app/services/backend-api.service.ts");



var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(service) {
        this.sendProductUp3 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]; // send product to cart by user
        this.editProduct5 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]; // send product to edit by Admin
        this.myService = service;
    }
    ProductsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var products = changes.myProducts;
        if (products !== undefined) {
            this.searchedProducts = products.currentValue; //
        }
        this.myService.getCategories()
            .subscribe(function (data) {
            _this.categories = JSON.parse(data).categories;
        });
        // const name: SimpleChange = changes.name;
        // console.log('prev value: ', name.previousValue);
        // console.log('got name: ', name.currentValue);
        // this._name = name.currentValue.toUpperCase();
    };
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myService.getCategories()
            .subscribe(function (data) {
            _this.categories = JSON.parse(data).categories;
        });
        this.searchedProducts = this.myProducts;
        // //get all products
        // this.myService.getAllProducts()
        // .subscribe(
        //   data => {
        //     this.myProducts = JSON.parse(data).allProducts;
        //     console.log(this.myProducts);
        //     console.log(this.searchedProducts);
        //     this.searchedProducts = this.myProducts
        //   }
        // );
    };
    ProductsComponent.prototype.searchEvent = function (newSearch) {
        var _this = this;
        this.searchTerm = newSearch;
        if (this.searchTerm.length > 0) {
            this.searchedProducts = this.myProducts.filter(function (p) { return p.productName.startsWith(_this.searchTerm); });
        }
        else {
            this.searchedProducts = this.myProducts;
        }
    };
    ProductsComponent.prototype.getProducts = function (categoryName) {
        var _this = this;
        if (categoryName !== 'all') {
            this.myService.productsByCategory(categoryName)
                .subscribe(function (data) {
                // this.myProducts = JSON.parse(data).productsByCategory[0].products;
                _this.searchedProducts = JSON.parse(data).productsByCategory[0].products;
            });
        }
        else {
            this.searchedProducts = this.myProducts;
        }
    };
    ProductsComponent.prototype.addToCart2 = function (productToSend) {
        this.sendProductUp3.emit(productToSend);
    };
    ProductsComponent.prototype.editProduct4 = function (productToEdit) {
        this.editProduct5.emit(productToEdit);
    };
    ProductsComponent.ctorParameters = function () { return [
        { type: _services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ProductsComponent.prototype, "isAdmin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProductsComponent.prototype, "userFullName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ProductsComponent.prototype, "myProducts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ProductsComponent.prototype, "sendProductUp3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ProductsComponent.prototype, "editProduct5", void 0);
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/services/backend-api.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/backend-api.service.ts ***!
  \*************************************************/
/*! exports provided: BackendApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendApiService", function() { return BackendApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BackendApiService = /** @class */ (function () {
    function BackendApiService(http) {
        this.http = http;
    }
    BackendApiService.prototype.validateSignup1 = function (signupForm1) {
        return this.http.post('http://localhost:4000/api/users/signup1', signupForm1, { responseType: 'text' });
    };
    BackendApiService.prototype.signup = function (signupFormFull) {
        return this.http.put('http://localhost:4000/api/users/signup2', signupFormFull, { responseType: 'text' });
    };
    BackendApiService.prototype.loginUser = function (email, password) {
        return this.http.post('http://localhost:4000/api/users/login', { email: email, password: password }, { responseType: 'text' });
    };
    BackendApiService.prototype.logoutUser = function () {
        return this.http.get('http://localhost:4000/api/users/logout', { responseType: 'text' });
    };
    BackendApiService.prototype.getCategories = function () {
        return this.http.get('http://localhost:4000/api/products/allCategories', { responseType: 'text' });
    };
    BackendApiService.prototype.productsByCategory = function (categoryName) {
        return this.http.get("http://localhost:4000/api/products/productsByCategory/" + categoryName, { responseType: 'text' });
    };
    BackendApiService.prototype.getAllProducts = function () {
        return this.http.get("http://localhost:4000/api/products/allProducts", { responseType: 'text' });
    };
    BackendApiService.prototype.checkUser = function () {
        return this.http.get('http://localhost:4000/api/users/checkUserExists', { responseType: 'text' });
    };
    BackendApiService.prototype.getUserCart = function () {
        return this.http.get('http://localhost:4000/api/orders/getUserCart', { responseType: 'text' });
    };
    BackendApiService.prototype.getUserClosedCart = function () {
        return this.http.get('http://localhost:4000/api/orders/getUserClosedCart', { responseType: 'text' });
    };
    BackendApiService.prototype.addToCart = function (_a) {
        var productId = _a.productId, quantity = _a.quantity;
        return this.http.put('http://localhost:4000/api/orders/addProductToCart', { productId: productId, quantity: quantity }, { responseType: 'text' });
    };
    BackendApiService.prototype.editProduct = function (productId, productData) {
        return this.http.patch('http://localhost:4000/api/products/updateProduct/' + productId, productData, { responseType: 'text' });
    };
    BackendApiService.prototype.addProduct = function (productData) {
        return this.http.put('http://localhost:4000/api/products/addProduct', productData, { responseType: 'text' });
    };
    BackendApiService.prototype.sendOrder = function (orderData) {
        return this.http.put('http://localhost:4000/api/orders/placeOrder', orderData, { responseType: 'text' });
    };
    BackendApiService.prototype.deleteCartProduct = function (cartProductId) {
        return this.http.delete('http://localhost:4000/api/orders/deleteCartProduct/' + cartProductId, { responseType: 'text' });
    };
    BackendApiService.prototype.getAllOrders = function () {
        return this.http.get('http://localhost:4000/api/orders/numberOfOrders', { responseType: 'text' });
    };
    BackendApiService.prototype.clearCartProducts = function (cartId) {
        return this.http.delete('http://localhost:4000/api/orders/deleteCart/' + cartId, { responseType: 'text' });
    };
    BackendApiService.prototype.getUserOrder = function () {
        return this.http.get('http://localhost:4000/api/orders/getUserOrder', { responseType: 'text' });
    };
    BackendApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    BackendApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BackendApiService);
    return BackendApiService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n  cursor: pointer;\r\n}\r\n\r\nlabel {\r\n  margin-left: 5px;\r\n}\r\n\r\n.err {\r\n  margin-left: 5px;\r\n}\r\n\r\nul {\r\n  display: inline;\r\n  color: red;\r\n}\r\n\r\n.signupForm {\r\n  margin-top: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uZXJyIHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG51bCB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5zaWdudXBGb3JtIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/backend-api.service */ "./src/app/services/backend-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SignupComponent = /** @class */ (function () {
    function SignupComponent(service, router) {
        this.step1Display = true; // decide the complete attr for the stepper - if carry on or not
        this.step2Display = false;
        this.myService = service;
        this.router = router;
        this.cities = ['Jerusalem', 'Tel Aviv', 'Haifa', "Be'er Sheva", 'Ashkelon', 'Petah Tikva', 'Eilat', 'Ashdod', 'Netanya', 'Bat Yam'];
        this.userId = null;
        this.email = '';
        this.password = '';
        this.passwordAuthentication = '';
        this.firstName = '';
        this.lastName = '';
        this.city = '';
        this.street = '';
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myService.checkUser()
            .subscribe(function (data) {
            if (JSON.parse(data).myUser !== undefined) {
                _this.router.navigate(['main']);
            }
        });
    };
    SignupComponent.prototype.validateSignup1 = function (userId, email, password, passwordAuthentication) {
        var _this = this;
        this.userId = userId;
        this.password = password;
        this.passwordAuthentication = passwordAuthentication;
        this.email = email;
        this.myService.validateSignup1({ userId: this.userId, email: this.email, password: this.password, passwordAuthentication: this.passwordAuthentication })
            .subscribe(function (data) {
            if (data === 'OK') {
                _this.step1Display = !_this.step1Display;
                _this.step2Display = !_this.step2Display;
                _this.errors = [];
            }
            else {
                _this.errors = JSON.parse(data).errorMsgs;
                return null;
            }
        });
    };
    SignupComponent.prototype.goBack = function () {
        this.step1Display = !this.step1Display;
        this.step2Display = !this.step2Display;
    };
    SignupComponent.prototype.signup = function (userId, firstName, lastName, email, password, city, street) {
        var _this = this;
        this.firstName = firstName;
        this.lastName = lastName;
        this.street = street;
        this.city = city;
        this.myService.signup({ userId: this.userId, firstName: this.firstName, lastName: this.lastName, email: this.email, password: this.password, passwordAuthentication: this.passwordAuthentication, city: this.city, street: this.street, isAdmin: 0 })
            .subscribe(function (data) {
            console.log(data);
            if (data === 'OK') {
                _this.router.navigate(['/main']);
                _this.errors = [];
            }
            else {
                _this.errors = JSON.parse(data).errorMsgs;
            }
        });
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\r\n  margin-top: 50px;\r\n}\r\n\r\n.welcome {\r\n  height: 400px;  \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi53ZWxjb21lIHtcclxuICBoZWlnaHQ6IDQwMHB4OyAgXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/backend-api.service */ "./src/app/services/backend-api.service.ts");



var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(service) {
        this.totalPrice = 0;
        this.openCart = false;
        this.closedCart = false;
        this.myService = service;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.getAllProducts();
        this.getOrderCount();
    };
    WelcomeComponent.prototype.getAllProducts = function () {
        var _this = this;
        this.myService.getAllProducts()
            .subscribe(function (data) {
            var numberOfProducts = JSON.parse(data).allProducts.length;
            var productImgs = JSON.parse(data).allProducts.map(function (p) { return '../assets/' + p.imgURL; });
            _this.numberOfProducts = numberOfProducts;
            _this.productImgs = productImgs;
        });
    };
    WelcomeComponent.prototype.getOrderCount = function () {
        var _this = this;
        this.myService.getAllOrders()
            .subscribe(function (data) {
            _this.numberOfOrders = data;
        });
    };
    WelcomeComponent.prototype.userCartInfo = function () {
        this.getOpenCartData();
        this.getUserName();
    };
    WelcomeComponent.prototype.getUserName = function () {
        var _this = this;
        this.myService.checkUser()
            .subscribe(function (data) {
            if (JSON.parse(data).myUser !== undefined) {
                _this.name = JSON.parse(data).myUser.firstName + ' ' + JSON.parse(data).myUser.lastName;
                _this.isAdmin = JSON.parse(data).myUser.isAdmin;
            }
        });
    };
    WelcomeComponent.prototype.getOpenCartData = function () {
        var _this = this;
        this.myService.getUserCart()
            .subscribe(function (data) {
            if (JSON.parse(data).userCart !== null) {
                _this.myCart = JSON.parse(data).userCart;
                _this.getCartTotal();
                _this.openCart = true;
                _this.closedCart = false;
            }
            else {
                _this.getClosedCartData();
                return null;
            }
        });
    };
    WelcomeComponent.prototype.getCartTotal = function () {
        var cartPrices = this.myCart.cartproducts.map(function (x) { return x.totalPrice; });
        for (var i = 0; i < cartPrices.length; i++) {
            this.totalPrice += parseInt(cartPrices[i]);
        }
    };
    WelcomeComponent.prototype.getClosedCartData = function () {
        var _this = this;
        this.myService.getUserClosedCart()
            .subscribe(function (data) {
            if (JSON.parse(data).userCart !== null) {
                _this.myCart = JSON.parse(data).userCart;
                console.log(_this.myCart);
                _this.closedCart = true;
                _this.openCart = false;
            }
            else {
                return null;
            }
        });
    };
    WelcomeComponent.ctorParameters = function () { return [
        { type: _services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"] }
    ]; };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_backend_api_service__WEBPACK_IMPORTED_MODULE_2__["BackendApiService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Programming\Projects\Supermarket\front\supermarket-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map