import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SlideshowModule } from 'ng-simple-slideshow';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WavesModule, InputsModule, ButtonsModule } from 'angular-bootstrap-md'

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { EditSidebarComponent } from './edit-sidebar/edit-sidebar.component';
import { InfoComponent } from './info/info.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';
import { HighlightSearchPipe } from './highlight-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    WelcomeComponent,
    LoginComponent,
    AboutComponent,
    MainComponent,
    NavbarComponent,
    ProductsComponent,
    CartComponent,
    ProductListComponent,
    ProductComponent,
    EditSidebarComponent,
    InfoComponent,
    OrderDetailsComponent,
    OrderCompleteComponent,
    HighlightSearchPipe
  ],
  imports: [
    FormsModule,    
    NgbModule,
    SlideshowModule,
    ToastrModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([ { path:'signup', component: SignupComponent },
                           { path:'welcome', component: WelcomeComponent },
                           { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                           { path:'main', component: MainComponent },
                           { path:'orderComplete', component: OrderCompleteComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
