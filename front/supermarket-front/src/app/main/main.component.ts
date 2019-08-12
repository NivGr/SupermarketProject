import { Component, OnInit, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  cartOpen: Boolean = false;
  orderFinish: Boolean = false; // flag for showing the order div
  categoriesClass: String = 'categories col-sm-12' //define class for grid in categroies
  myProducts: Array<any> = [];
  cartProducts: Array<any> = [];
  isAdmin: Boolean;
  openEditSideBar: Boolean;
  myCart: any;
  //product data for edit by Admin:
  productId: Number;
  productName: String;
  productPrice: Number;
  productImgURL: String;
  userFullName: String;
  isActionTypeAdd: Boolean;

  private myService;
  private toastr;
  private router;
  constructor( service: BackendApiService, toastr: ToastrService, router: Router) {
    this.myService = service;
    this.toastr = toastr; // toasts
    this.router = router;
    this.openEditSideBar = false;
  }

  ngOnInit() {
    this.myService.checkUser()
    .subscribe(
      data => {
        if(JSON.parse(data).myUser !== undefined) {
          if(!JSON.parse(data).myUser.isAdmin) { //if user is not admin get his cart from db
            this.getCartData();
          }
          this.isAdmin = JSON.parse(data).myUser.isAdmin;
          this.userFullName = JSON.parse(data).myUser.firstName + ' ' + JSON.parse(data).myUser.lastName;
        }
        else {
          this.router.navigate(['welcome'])
        }
      }
    );
    this.getMyProducts();
  }

  ngOnChanges(changes: SimpleChanges) {
    const cartProducts: SimpleChange = changes.cartProducts;
    if(cartProducts !== undefined) {
      console.log(cartProducts)
      this.cartProducts = cartProducts.currentValue; //
    }
  }

  cartShow() {
    this.cartOpen = !this.cartOpen;
    if(this.cartOpen) {
      this.categoriesClass = 'categories col-sm-9'
    }
    else {
      this.categoriesClass = 'categories col-sm-12'
    }
  }

  addToCartFinal( productToSend ) {
    if(productToSend.quantity > 0) {
      this.myService.addToCart( productToSend )
      .subscribe(
        data => {
            this.getCartData();
            this.showSuccess('Product added to your cart!');
        })
    }
    else {
      this.showFailure();
    }
  }

  getCartData() {
    this.myService.getUserCart()
    .subscribe(
      data => {
        if(JSON.parse(data).userCart !== null) {
          this.myCart = JSON.parse(data).userCart;
          this.cartProducts = JSON.parse(data).userCart.cartproducts;
        } else {
          this.myCart = [];
          this.cartProducts = [];
          return null
        }
    })
  }

  deleteProductFromCart( cartProductId ) {
    this.myService.deleteCartProduct( cartProductId )
    .subscribe(
      data => {
        this.getCartData();
      }
    )
  }

  deleteAllProductsFromCart( cartId ) {
    this.myService.clearCartProducts( cartId )
    .subscribe(
      data => {
        this.showSuccess('Products Deleted Succefully');
      }
    )
    this.getCartData();
  }

  //toastr
  showSuccess(msg) {
    this.toastr.success(msg);
  }
  showFailure() {
    this.toastr.error("Can't add 0 of the product", "Please select a valid quantity");
  }

  toggleSideBar() {
    this.openEditSideBar = !this.openEditSideBar; // open/close side bar
  }

  //open edit sidebar
  editProductForSideBar( productToEdit ) {
    this.toggleSideBar();
    //initializing variables by product sent from grand-grandchild - product component
    this.productId = productToEdit.productId;
    this.productName = productToEdit.productName;
    this.productPrice = productToEdit.productPrice;
    this.productImgURL = productToEdit.productImgURL;
    this.isActionTypeAdd = productToEdit.isAddAction;
    if(this.openEditSideBar) {
      this.categoriesClass = 'categories col-sm-9'
    }
    else {
      this.categoriesClass = 'categories col col-sm-12'
    }
  }

  userLogout() {
    this.myService.logoutUser()
    .subscribe(
      data => {
        if(JSON.parse(data).status === 'success') {
          this.router.navigate(['welcome'])
        }
      }
    );
  }

  openOrderDiv() {
    this.orderFinish = true;
  }

  goBackFromOrder() {
    this.orderFinish = false;
  }

  hideOrderMenu() {
    this.orderFinish = false;
  }

  addNewProduct() {
    this.productId = null;
    this.productName = '';
    this.productPrice = null;
    this.productImgURL = '';
    this.isActionTypeAdd = true;
    this.toggleSideBar();
    if(this.openEditSideBar) {
      this.categoriesClass = 'categories col-sm-9'
    }
    else {
      this.categoriesClass = 'categories col col-sm-12'
    }
  }

  reloadProductList() {
    this.getMyProducts();
  }

  getMyProducts() {
    //get all products
    this.myService.getAllProducts()
    .subscribe(
      data => {
        this.myProducts = JSON.parse(data).allProducts;
      }
    );
  }

}
