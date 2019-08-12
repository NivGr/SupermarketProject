import { Component, OnInit, Input } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() closedCart: Boolean;
  @Input() openCart: Boolean;
  @Input() name: String;
  @Input() myCart: any;
  @Input() numberOfProducts: Number;
  @Input() totalPrice: Number;
  @Input() isAdmin: Boolean;
  @Input() numberOfOrders: Number;
  @Input() productImgs: Array<any>;

  private myService;
  constructor( service: BackendApiService ) {
    this.myService = service;
  }

  ngOnInit() {
  }
}
