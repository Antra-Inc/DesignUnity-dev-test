import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DropDownAnimation } from './drop-animation';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [DropDownAnimation],
})
export class HeaderComponent implements OnInit, OnChanges {
  screenSize!: number;
  open = false;
  isHamburguer = true;
  menuState: string = 'out';
  openSolutions = false;
  imgSrc = '';
  activeItem = '';
  submenuOpen = false; 
  activeSubMenu: string = '';

  ngOnInit(): void {
    console.log('window.innerWidth', window.innerWidth);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.screenSize = window.innerWidth;
    console.log('window.innerWidth', window.innerWidth);
  }
  onClick() {
    this.isHamburguer = !this.isHamburguer;
  }

  mouseEnter(data: any) {
    this.openSolutions = true;
  }
  selectMenu(data: any) {
    this.activeItem = data;
  }



// Toggle the main mobile menu
toggleMenu() {
  this.open = !this.open;
  // When closing the menu, also close any open submenus
  if (!this.open) {
    this.activeSubMenu = '';
  }
}

toggleSubMenu(menu: string) {
  //this.submenuOpen = !this.submenuOpen;
  this.activeSubMenu = this.activeSubMenu === menu ? '' : menu;
}

navigateAndClose() {
  this.open = false;
  this.activeSubMenu = '';

}

}
