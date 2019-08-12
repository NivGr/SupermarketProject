import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  cities: Array<any>;
  city: String;
  userCity: String;
  street: String;
  userStreet: String;
  shippingDate: Date;
  creditCard: String;
  cCardMethod: String;
  totalPrice: number;
  isError: Boolean = false;
  errors: Array<any>;

  minDate: Date = new Date();

  //search functionallity
  searchTerm: String;

  @Input() myCart: any;
  @Input() cartProducts: Array<any>;
  @Output() disableOrderMenu: EventEmitter<any> = new EventEmitter; //sending request to main to falsift the orderOpen var

  private router;
  private toastr;
  private myService;
  constructor( service: BackendApiService, toastr: ToastrService, router: Router ) {
    this.cities = ['Jerusalem', 'Tel Aviv', 'Haifa', "Be'er Sheva", 'Ashkelon', 'Petah Tikva', 'Eilat', 'Ashdod', 'Netanya', 'Bat Yam'];
    this.totalPrice = 0;
    this.myService = service;
    this.router = router;
    this.toastr = toastr; // toasts
  }

  ngOnInit() {
    this.getCartTotal();
    this.myService.checkUser() //getting user city and street
    .subscribe(
      data => {
        // if(JSON.parse(data).myUser === undefined) {
        if(Object.entries(data).length === 2) {
          this.router.navigate(['welcome']);
        }
        else {
          this.userStreet = JSON.parse(data).myUser.street;
          this.userCity = JSON.parse(data).myUser.city;
        }
      }
    );
  }

  sendOrder() {
    this.isError = false;
    this.errors = [];
    const orderObj = { cart: this.myCart, city: this.city, finalPrice: this.totalPrice, street: this.street, shipDate:  this.shippingDate, creditCard: this.creditCard, cCardMethod: this.cCardMethod }    
    this.myService.sendOrder( orderObj )
    .subscribe(
      data => {
        if( data === '"All Shipments Taken"') {
          this.isError = true;
          this.errors.push('All shipments taken, please select a different shipment date');
          return null;
        }
        else if(data === '"Order Done"') {
          this.showSuccess('Order Complete!')
          this.router.navigate(['orderComplete'])
        }
        else{
          this.errors.push(JSON.parse(data).errorMsgs);
          this.showFailure('Some Errors found with your order!')
          return null
        }
      }
    )
  }

  searchEvent( newSearch ) {
    this.searchTerm = newSearch;
  }

  getCartTotal() {
    let cartPrices = this.cartProducts.map(x => x.totalPrice);
    for(let i = 0; i < cartPrices.length; i++) {
      this.totalPrice += parseInt(cartPrices[i]);
    }
  }

  backToShop() {
    this.disableOrderMenu.emit();
  }

  //toastr
  showSuccess(msg) {
    this.toastr.success(msg);
  }
  showFailure(msg) {
    this.toastr.error(msg);
  }

  defaultCityEvent() {
    this.city = this.userCity;
  }

  defaultStreetEvent() {
    this.street = this.userStreet;
  }

}
