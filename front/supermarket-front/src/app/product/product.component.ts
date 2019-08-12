import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Array<any>;
  @Input() isAdmin: Boolean;
  @Output() sendProductUp1: EventEmitter<any> = new EventEmitter; //sending product to cart by user

  @Output() editProduct1: EventEmitter<any> = new EventEmitter; //sending product to edit screen by Admin

  closeResult: string;
  quantity: Number;

  private myService;
  constructor( service: BackendApiService) {
    this.myService = service;
    this.quantity = 1;
  }

  ngOnInit() {

  }

  sendProductToCart( productId, quantity ) {    
    const productObj = { productId, quantity }
    this.sendProductUp1.emit( productObj )
  }

  toggleSideBar( productId, productName, productPrice, productImgURL, isAddAction ) {
    const productObj = { productId, productName, productPrice, productImgURL, isAddAction };
    this.editProduct1.emit(productObj)
  }
}
