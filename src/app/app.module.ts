import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login/login.service';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoreComponent } from './store/store.component';
import { ComponentProductsComponent } from './component-products/component-products.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProductsComponent,
    HomePageComponent,
    NavbarComponent,
    StoreComponent,
    ComponentProductsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    Ng2SmartTableModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'comp-products',
        component: ComponentProductsComponent
      },
      {
        path: 'register',
        component: SignupComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'store',
        component: StoreComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
