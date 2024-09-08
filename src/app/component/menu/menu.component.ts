import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { AppHeader } from '../header/header.component';
import { HttpService } from '../../services/httpService';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor,MatIconModule, RouterModule, MenubarModule, BadgeModule, AvatarModule, AvatarGroupModule, TabMenuModule, ButtonModule, NgIf, NgFor, AppHeader],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  items: any;
  activeItem: undefined;
  ngOnInit() {
    this.items = [
      { label: 'Products', icon: 'pi pi-list' },
      { label: 'Dashboard', icon: 'pi pi-home' },
      { label: 'Transactions', icon: 'pi pi-chart-line' },

      
    ];
    this.activeItem = this.items[0];
  }
  onActiveItemChange(event: any) {
    this.activeItem = event;
  }
  listUser: any[] = [];
  
  constructor(private product: HttpService) {

  }

  // // listUser: any[] = [];
  // ngOnInit(): void {
  //     this.getProd();
  // }

  // getProd() {
  //     this.product.getProd().subscribe((res: any) => {
         
  //         this.listUser = res.products;
  //     })
  // }
  
}