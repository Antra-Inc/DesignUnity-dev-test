import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent implements OnInit, AfterViewInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
   
  }
  selectedTab = 0;
  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }
  setActiveTab(index: number): void {
    this.selectedTab = index;
  }
}
