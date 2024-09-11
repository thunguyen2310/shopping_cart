import {Component} from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { ProductComponent } from '../product/product.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-homepage',
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  imports: [MenuComponent, ProductComponent, RouterModule],
})
export class HomepageComponent {
}
