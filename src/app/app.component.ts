import {Component } from '@angular/core';
import { MenuComponent } from './component/menu/menu.component';
import { HttpService } from './services/httpService';

import { ProductComponent } from './component/product/product.component';
import { AppHeader } from "./component/header/header.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponent, ProductComponent, AppHeader],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // @ViewChild('drawerAppMenu') drawerAppMenu?: MatDrawer;
  // title = 'EventManagement';
  // openMenu = false;
  // isLoading = false;

  constructor(private httpService: HttpService) {

  }

  // ngOnInit() {
  //   this.httpService.loading$.subscribe(isLoading => {
  //     this.isLoading = isLoading;
  //   });
  // }

  // ngAfterViewInit(): void {

  // }
  
  // handleOpenAppMenu(){
  //   this.openMenu = !this.openMenu;
  //   if(this.drawerAppMenu) 
  //     this.drawerAppMenu.toggle();
  // }
}
