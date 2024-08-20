import { Component } from '@angular/core';

@Component({
  selector: 'app-studio-slider',
  templateUrl: './studio-slider.component.html',
  styleUrls: ['./studio-slider.component.scss']
})
export class StudioSliderComponent {
  cities = [
    { name: 'Hyderabad', image: 'assets/img/studio/Hyd-Exp.png', background: '#efb356' },
    { name: 'Delhi', image: 'assets/img/studio/Ban-Exp.png', background: '#24225d' },
    { name: 'Bangalore', image: 'assets/img/studio/Delhi-Exp.png', background: '#dc4f40' }
  ];

  activeIndex = 0;

  setActiveTab(index: number) {
    this.activeIndex = index;
  }
}
