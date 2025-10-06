import { Component } from '@angular/core';
import { Menu, MenuService } from '../services/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class MenuComponent {
  

  constructor(private menuService: MenuService){}

  menuItems?: Array<Menu>;

  menuStatus = 'closed';

  ngOnInit(){
    const menu = this.menuService.getItens();

    this.menuItems = menu;
    
  }

  menuClick(){
    this.menuStatus = (this.menuStatus === 'open' ? 'closed' : 'open')
  }

}
