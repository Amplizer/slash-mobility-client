import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ProductsComponent } from './products/products.component';
import { ProductBuyComponent } from './product-buy/product-buy.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProductsComponent,
    ProductBuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
