import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { ProductComponent } from './component/product/product.component';
import { AppHeader } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';

@NgModule({
  declarations: [

  ],
  imports: [
    AppComponent,
    BrowserModule,
    ProductComponent,
    MenuComponent,
    AppHeader,
    CartComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
