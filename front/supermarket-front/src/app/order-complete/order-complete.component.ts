import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendApiService } from '../services/backend-api.service';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.css']
})
export class OrderCompleteComponent implements OnInit {
  myOrderProducts: any;
  userId: String;
  myCart: any;
  myOrder: any;
  userName: String;
  totalPrice: number = 0;

  private myService;
  private router;
  constructor( router: Router, service: BackendApiService ) {
    this.router = router;
    this.myService = service;
  }

  ngOnInit() {
    this.getOrder();
    this.myService.getUserClosedCart()
    .subscribe(
      data => {
        if(JSON.parse(data).userCart !== null) {
          this.myOrderProducts = JSON.parse(data).userCart.cartproducts;
          this.getCartTotal();
          this.myCart = JSON.parse(data).userCart;
        } else {
          return null
        }
    });
    this.myService.checkUser()
    .subscribe(
      data => {
        // if(JSON.parse(data).myUser === undefined) {
        if(Object.entries(data).length === 2) {
          this.router.navigate(['welcome']);
        }
        else {
          this.userId = JSON.parse(data).myUser._id;
          this.userName = JSON.parse(data).myUser.firstName + ' ' + JSON.parse(data).myUser.lastName;
        }
      }
    );
  }

  getOrder() {
    this.myService.getUserOrder()
    .subscribe(
      data => {
        this.myOrder = JSON.parse(data);
      }
    )
  }

  getCartTotal() {
    let cartPrices = this.myOrderProducts.map(x => x.totalPrice);
    for(let i = 0; i < cartPrices.length; i++) {
      this.totalPrice += parseInt(cartPrices[i]);
    }
  }

  goToMain() {
    this.router.navigate(['main']);
  }

  downloadPDF() {
    let doc = new jsPDF();
    doc.setFontSize(22);
    doc.text(`Order #${this.myOrder._id}`, 105, 20, null, null, 'center');
    doc.setFontSize(16);
    doc.text(`Date: ${(new Date(this.myOrder.orderDate)).toUTCString()}`, 10, 30);
    doc.text(`For: ${this.userName}`, 10, 40);
    doc.text(`To Address: ${this.myOrder.city}, ${this.myOrder.street}`, 10, 50);
    let totalProductsQuantity = 0;
    let totalProductsSum = 0;
    for(let i = 0; i < this.myOrderProducts.length; i++) {
      totalProductsQuantity += parseInt(this.myOrderProducts.quantity)
      totalProductsSum += parseInt(this.myOrderProducts.totalPrice)
    }
    doc.text(`Subtotal: ${totalProductsSum} NIS for ${totalProductsQuantity} Products`, 10, 60);
    console.log(this.myOrder)
    doc.setLineWidth(0.1)
    doc.setDrawColor(0, 0, 0);
    // doc.setLineDash([2.5])
    doc.line(10, 80, 200, 80);

    for(let i=0; i<this.myOrderProducts.length; i++) {
      console.log(this.myOrderProducts)
      doc.text(`${this.myOrderProducts[i].product[0].productName} - ${this.myOrderProducts[i].quantity} Units - ${this.myOrderProducts[i].totalPrice} NIS`, 10, 90+(i+1)*10);
    }
    doc.save( `${this.userId}.pdf`);
  }
}
