import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { MenuComponent } from './component/menu/menu.component';
import { ProductComponent } from './component/product/product.component';
import { AppHeader } from './component/header/header.component';

@NgModule({
  declarations: [

  ],
  imports: [
    AppComponent,
    BrowserModule,
    ProductComponent,
    MenuComponent,
    HomepageComponent,
    AppHeader
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
