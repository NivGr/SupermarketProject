import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;
  isLoginSuccess: Boolean;
  shoppingStatus: String;
  showErr: Boolean = false;

  @Output() sendUserUp: EventEmitter<any> = new EventEmitter;

  private router;
  private toastr;
  private myService;
  constructor(service: BackendApiService, router: Router, toastr: ToastrService) {
    this.myService = service;
    this.router = router;
    this.toastr = toastr;
  }

  ngOnInit() {
    this.myService.checkUser()
    .subscribe(
      data => {
        if(JSON.parse(data).myUser !== undefined) {
          this.router.navigate(['main'])
        }
      }
    )
  }

  getCart() {
    this.myService.getUserCart()
    .subscribe(
      data => {
        if(JSON.parse(data).userCart === null) {
          this.shoppingStatus = 'Start';
        }
        else {
          this.shoppingStatus = 'Resume';
        }
      }
    )
  }

  sendUser() {
    this.sendUserUp.emit();
  }

  loginUser(email, password) {
    this.email = email;
    this.password = password;
    this.showErr = true;
    this.myService.loginUser(email, password)
    .subscribe(
      data => {
        if(data) {
          this.isLoginSuccess = true;
          this.showErr = false;
          this.showSuccess('Loggin Succeeded')
          this.getCart();
          this.sendUser();
        } else {
          this.isLoginSuccess = false;
          return null;
        }
    })
  }

  goToShopping() {
    this.router.navigate(['main']);
  }

  //toastr
  showSuccess(msg) {
    this.toastr.success(msg);
  }
  showFailure(msg) {
    this.toastr.error(msg);
  }

}
