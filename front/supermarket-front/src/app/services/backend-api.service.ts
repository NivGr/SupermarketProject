import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  private http;
  constructor(http: HttpClient) {
    this.http = http;
  }

  validateSignup1(signupForm1): Observable<any> { //contains only the 1st step of validation: userId, email, and password-including password Authentication
    return this.http.post('http://localhost:4000/api/users/signup1', signupForm1 , { responseType: 'text' });
  }

  signup(signupFormFull): Observable<any> {
  return this.http.put('http://localhost:4000/api/users/signup2', signupFormFull , { responseType: 'text' });
  }

  loginUser(email, password): Observable<any> {
    return this.http.post('http://localhost:4000/api/users/login', { email, password }, { responseType: 'text' });
  }

  logoutUser(): Observable<any> {
    return this.http.get('http://localhost:4000/api/users/logout', { responseType: 'text' });
  }

  getCategories(): Observable<any> {
    return this.http.get('http://localhost:4000/api/products/allCategories', { responseType: 'text' });
  }

  productsByCategory(categoryName): Observable<any> {
    return this.http.get(`http://localhost:4000/api/products/productsByCategory/${categoryName}`, { responseType: 'text' });
  }

  getAllProducts(): Observable<any> {
    return this.http.get(`http://localhost:4000/api/products/allProducts`, { responseType: 'text' });
  }

  checkUser(): Observable<any> {
    return this.http.get('http://localhost:4000/api/users/checkUserExists', { responseType: 'text' });
  }

  getUserCart(): Observable<any> {
    return this.http.get('http://localhost:4000/api/orders/getUserCart', { responseType: 'text' });
  }

  getUserClosedCart(): Observable<any> {
    return this.http.get('http://localhost:4000/api/orders/getUserClosedCart', { responseType: 'text' });
  }

  addToCart({ productId, quantity }) {
    return this.http.put('http://localhost:4000/api/orders/addProductToCart', { productId, quantity }, { responseType: 'text' });
  }

  editProduct( productId, productData ) {
    return this.http.patch('http://localhost:4000/api/products/updateProduct/' + productId, productData, { responseType: 'text' });
  }

  addProduct( productData ) {
    return this.http.put('http://localhost:4000/api/products/addProduct', productData, { responseType: 'text' });
  }

  sendOrder( orderData ) {
    return this.http.put('http://localhost:4000/api/orders/placeOrder', orderData, { responseType: 'text' });
  }

  deleteCartProduct( cartProductId ) {
    return this.http.delete('http://localhost:4000/api/orders/deleteCartProduct/' + cartProductId , { responseType: 'text' })
  }

  getAllOrders() {
    return this.http.get('http://localhost:4000/api/orders/numberOfOrders', { responseType: 'text' });
  }

  clearCartProducts( cartId ) {
    return this.http.delete('http://localhost:4000/api/orders/deleteCart/' + cartId, { responseType: 'text' });
  }

  getUserOrder(): Observable<any> {
    return this.http.get('http://localhost:4000/api/orders/getUserOrder', { responseType: 'text' });
  }

}
