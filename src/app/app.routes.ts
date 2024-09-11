import { Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { HomepageComponent } from './component/homepage/homepage.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'home', component: HomepageComponent },
    { path: 'cart', component: CartComponent }
];