import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cartProducts: Array<any>;
  @Input() myCart: any;
  @Output() sendCartToOrderMain: EventEmitter<any> = new EventEmitter; //sending product to cart by user
  @Output() sendCartProductUpToDelete: EventEmitter<any> = new EventEmitter; //sending cart product up by user for deleting
  @Output() deleteAllCartProducts: EventEmitter<any> = new EventEmitter;
  totalPrice: number = 0;

  private myService;
  constructor( service: BackendApiService ) {
    this.myService = service;
    this.cartProducts = [];
  }

  ngOnInit() {
    this.getCartTotal();
  }

  getCartTotal() {
    let cartPrices = this.cartProducts.map(x => x.totalPrice);
    for(let i = 0; i < cartPrices.length; i++) {
      this.totalPrice += parseInt(cartPrices[i]);
    }
  }

  sendCartToOrder() {
    this.sendCartToOrderMain.emit();
  }

  deleteFromCart( cartProductId ) {
    this.sendCartProductUpToDelete.emit( cartProductId )
  }


  ngOnChanges(changes: SimpleChanges) {
    const cartProducts: SimpleChange = changes.cartProducts;
    this.cartProducts = cartProducts.currentValue;
    // this.myService.getCategories();
    this.totalPrice = 0;
    this.getCartTotal()
  }

  deleteAllProducts() {
    this.deleteAllCartProducts.emit( this.myCart._id );
  }
}
