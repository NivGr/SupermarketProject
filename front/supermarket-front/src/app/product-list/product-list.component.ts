import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: Array<any>;
  @Input() isAdmin: Boolean;
  @Output() sendProductUp2: EventEmitter<any> = new EventEmitter; //send product to cart by user step2

  @Output() editProduct3: EventEmitter<any> = new EventEmitter; //

  constructor() {
  }

  ngOnInit() {
  }

  addToCart1( productToSend ) {
    this.sendProductUp2.emit( productToSend );
  }

  editProduct2( productToEdit ) {    
    this.editProduct3.emit( productToEdit );
  }

}
