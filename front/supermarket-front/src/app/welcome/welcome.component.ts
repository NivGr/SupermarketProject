import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  availableProducts: Array<any>;
  numberOfSubmittedOrders: Number;
  productImgs: Array<any>;
  numberOfProducts: Number;
  numberOfOrders: Number;
  isAdmin: Boolean;
  totalPrice: number = 0;
  openCart: Boolean = false;
  closedCart: Boolean = false;
  myCart: any;
  name: String;

  private myService;
  constructor(service: BackendApiService) {
    this.myService = service;
  }

  ngOnInit() {
    this.getAllProducts();
    this.getOrderCount();
  }

  getAllProducts() {
    this.myService.getAllProducts()
    .subscribe(
      data => {
        const numberOfProducts = JSON.parse(data).allProducts.length;
        const productImgs = JSON.parse(data).allProducts.map( p => '../assets/' + p.imgURL)
        this.numberOfProducts = numberOfProducts;
        this.productImgs = productImgs;
      })
  }

  getOrderCount() {
    this.myService.getAllOrders()
    .subscribe(
      data => {
        this.numberOfOrders = data;
      }
    )
  }

  userCartInfo() {
    this.getOpenCartData();
    this.getUserName();
  }

  getUserName() {
    this.myService.checkUser()
    .subscribe(
      data => {
        if(JSON.parse(data).myUser !== undefined) {
          this.name = JSON.parse(data).myUser.firstName + ' ' + JSON.parse(data).myUser.lastName;
          this.isAdmin = JSON.parse(data).myUser.isAdmin;
        }
      }
    )
  }


  getOpenCartData() {
    this.myService.getUserCart()
    .subscribe(
      data => {
        if(JSON.parse(data).userCart !== null) {
          this.myCart = JSON.parse(data).userCart;
          this.getCartTotal();
          this.openCart = true;
          this.closedCart = false;
        } else {
          this.getClosedCartData();
          return null
        }
    })
  }


  getCartTotal() {
    let cartPrices = this.myCart.cartproducts.map(x => x.totalPrice);
    for(let i = 0; i < cartPrices.length; i++) {
      this.totalPrice += parseInt(cartPrices[i]);
    }
  }


  getClosedCartData() {
    this.myService.getUserClosedCart()
    .subscribe(
      data => {
        if(JSON.parse(data).userCart !== null) {
          this.myCart = JSON.parse(data).userCart;
          console.log(this.myCart)
          this.closedCart = true;
          this.openCart = false;
        } else {
          return null
        }
    })
  }

}
