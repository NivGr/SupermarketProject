import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categories: Array<String>;
  selectedCategory: String;

  @Input() isAdmin: Boolean;
  @Input() userFullName: String;
  @Input() myProducts: Array<any>;
  @Output() sendProductUp3: EventEmitter<any> = new EventEmitter; // send product to cart by user
  @Output() editProduct5: EventEmitter<any> = new EventEmitter; // send product to edit by Admin

  searchedProducts: Array<any>;
  searchTerm: String;

  private myService;
  constructor( service: BackendApiService ) {
    this.myService = service;
  }

  ngOnChanges(changes: SimpleChanges) {
    const products: SimpleChange = changes.myProducts;
    if(products !== undefined) {
      this.searchedProducts = products.currentValue; //
    }
    this.myService.getCategories()
    .subscribe(
      data => {
        this.categories = JSON.parse(data).categories;
      }
    );
    // const name: SimpleChange = changes.name;
    // console.log('prev value: ', name.previousValue);
    // console.log('got name: ', name.currentValue);
    // this._name = name.currentValue.toUpperCase();
  }

  ngOnInit() {
    this.myService.getCategories()
    .subscribe(
      data => {
        this.categories = JSON.parse(data).categories;
      }
    );
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
  }

  searchEvent( newSearch ) {
    this.searchTerm = newSearch;
    if (this.searchTerm.length > 0) {
      this.searchedProducts = this.myProducts.filter(p => p.productName.startsWith(this.searchTerm))
    }
    else {
      this.searchedProducts = this.myProducts;
    }
  }

  getProducts(categoryName) {
    if(categoryName !== 'all') {
      this.myService.productsByCategory(categoryName)
      .subscribe(
        data => {
          // this.myProducts = JSON.parse(data).productsByCategory[0].products;
          this.searchedProducts = JSON.parse(data).productsByCategory[0].products;
        }
      )
    }
    else {
      this.searchedProducts = this.myProducts;
    }
  }

  addToCart2( productToSend ) {
    this.sendProductUp3.emit( productToSend );
  }

  editProduct4( productToEdit ) {
    this.editProduct5.emit( productToEdit )
  }

}
