import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-sidebar',
  templateUrl: './edit-sidebar.component.html',
  styleUrls: ['./edit-sidebar.component.css']
})
export class EditSidebarComponent implements OnInit {
  //product details to edit
  @Input() productId: String;
  @Input() productName: String;
  @Input() productPrice: Number;
  @Input() productImgURL: String;
  @Input() isActionTypeAdd: Boolean; // get false if edit event from product and true if add event

  @Output() updateProductInList: EventEmitter<any> = new EventEmitter

  addProductStatus: String;
  filePlaceHolder: String;

  productImg: File = null;

  productCategory: String;
  private toastr;
  private myService;
  constructor(service: BackendApiService, toastr: ToastrService) {
    this.myService = service;
    this.toastr = toastr; // toasts
    this.filePlaceHolder = this.productImgURL || 'Upload File'
  }

  ngOnInit() {
  }

  fileUpload( e ) { //add img to file upload
    this.productImg = <File> e.target.files[0];
  }

  editExistingProduct() {
    const data = new FormData();    
    if(this.productImg !== null) {
      data.append('picture', this.productImg, this.productImg['name']);
    }
    const myProduct = { productId: this.productId ,productName: this.productName, productPrice: this.productPrice };
    data.append('productDetails', JSON.stringify(myProduct))
    this.myService.editProduct( this.productId, data )
    .subscribe(
      data => {
        this.updateProductInList.emit();
        return null;
      }
    )
  }

  addNewProduct( productName, productPrice, productCategory ) {
    const data = new FormData();
    console.log(this.productImg)
    if(this.productImg !== null && this.productImg !==undefined ) {
      data.append('picture', this.productImg, this.productImg['name']);
    }
    const myProduct = { productName, productPrice, productCategory };
    data.append('productDetails', JSON.stringify(myProduct));
    this.myService.addProduct( data )
    .subscribe(
      data => {
        if (data === 'OK') {
          this.showSuccess();
          this.productName = '';
          this.productPrice = null;
          this.productCategory = '';
          this.productImg = null;
          this.updateProductInList.emit();
        }
        else if (data === '"Product Already Exists"') {
          this.showFailure('Product Already Exists');
        }
        else if (data === '"price is not over zero"') {
          this.showFailure('Price Is Not Over Zero')
        }
        else {
          this.showFailure('Something Went Wrong!');
        }
        return null;
      }
    )
  }

  //toastr
  showSuccess() {
    this.toastr.success('Product Added!');
  }
  showFailure(msg) {
    this.toastr.error(msg);
  }

}
