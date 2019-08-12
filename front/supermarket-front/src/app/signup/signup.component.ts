import { Component, OnInit, ViewChild } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  step1Display: Boolean = true; // decide the complete attr for the stepper - if carry on or not
  step2Display: Boolean = false;
  cities: Array<String>;
  userId: Number;
  email: String;
  password: String;
  passwordAuthentication: String;
  firstName: String;
  lastName: String;
  city: String;
  street: String;
  errors: Array<Object>;

  private myService;
  private router;
  constructor(service: BackendApiService, router: Router) {
    this.myService = service;
    this.router = router;
    this.cities = ['Jerusalem', 'Tel Aviv', 'Haifa', "Be'er Sheva", 'Ashkelon', 'Petah Tikva', 'Eilat', 'Ashdod', 'Netanya', 'Bat Yam'];
    this.userId = null;
    this.email = '';
    this.password = '';
    this.passwordAuthentication = '';
    this.firstName = '';
    this.lastName = '';
    this.city = '';
    this.street = '';
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

  validateSignup1(userId, email, password, passwordAuthentication) {
    this.userId = userId;
    this.password = password;
    this.passwordAuthentication = passwordAuthentication;
    this.email = email;
    this.myService.validateSignup1({userId: this.userId, email: this.email, password: this.password, passwordAuthentication: this.passwordAuthentication})
    .subscribe(
      data => {
        if(data === 'OK') {
          this.step1Display = !this.step1Display;
          this.step2Display = !this.step2Display;
          this.errors = [];
        } else {
          this.errors = JSON.parse(data).errorMsgs;
          return null;
        }
    })
  }

  goBack() {
    this.step1Display = !this.step1Display;
    this.step2Display = !this.step2Display;
  }

  signup(userId, firstName, lastName, email, password, city, street) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.street = street;
    this.city = city;
    this.myService.signup({userId: this.userId, firstName: this.firstName, lastName: this.lastName, email: this.email, password: this.password, passwordAuthentication: this.passwordAuthentication, city: this.city, street: this.street, isAdmin: 0})
    .subscribe(
      data => {
        console.log(data)
        if(data === 'OK') {
          this.router.navigate(['/main']);
          this.errors = [];
        } else {
          this.errors = JSON.parse(data).errorMsgs;
        }
      }
    )
  }
}
