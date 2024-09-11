import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { HttpService } from '../../services/httpService';
import { Iprod } from '../../iprod';
import { iCart } from "../../iCart";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  imports: [CommonModule, MenuComponent, RouterModule, FormsModule],
})
export class CartComponent {
  products: iCart[] = [];
  constructor(public cartService: HttpService) {
    this.products = this.cartService.getItemsCart();
  }

  totalPrice() {
    let total: number = 0;
    this.products.forEach(element => {
      total = total + element.cost * element.order_quantity

    });
    return total;

  }

  removeProd(sp: iCart){
    this.cartService.removeToCart(sp);
  }

}
