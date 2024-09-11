import {Component } from '@angular/core';
import { MenuComponent } from './component/menu/menu.component';
import { HttpService } from './services/httpService';
import { ProductComponent } from './component/product/product.component';
import { AppHeader } from "./component/header/header.component";
import { HomepageComponent } from './component/homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponent, ProductComponent, AppHeader, HomepageComponent,  RouterModule, FormsModule],
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
