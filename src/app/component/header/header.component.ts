import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  host: {ngSkipHydration: 'true'},
  selector: 'app-header',
  standalone: true,
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './header.component.html',
  imports: [MenubarModule, RippleModule, ButtonModule, AvatarModule, InputTextModule],
})
export class AppHeader {
  // @Output() openAppMenu = new EventEmitter();
  // @Input() openMenu: boolean = false;
  // @Output() openMenuChange = new EventEmitter<boolean>();
  // @ContentChild('content') contentTemplate: TemplateRef<any> | undefined;
  // menuItems: MenuItem[] | undefined = [
  //   {
  //     icon: '',
  //     label: 'Event Management',
  //     route: '',
  //   }
  // ];
  // handleOpenMenu() {
  //   this.openMenu = !this.openMenu;
  //   this.openMenuChange.emit(this.openMenu);
  //   this.openAppMenu.emit();
  // }
}
