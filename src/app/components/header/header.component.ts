import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  navbarMenu = document.getElementById("menu");
  burgerMenu = document.getElementById("burger");
  headerMenu = document.getElementById("header");
  
}
