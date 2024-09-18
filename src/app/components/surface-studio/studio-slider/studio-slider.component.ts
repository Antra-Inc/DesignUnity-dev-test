import { Component } from '@angular/core';

@Component({
  selector: 'app-studio-slider',
  templateUrl: './studio-slider.component.html',
  styleUrls: ['./studio-slider.component.scss']
})
export class StudioSliderComponent {
  cities = [
    { name: 'Hyderabad', image: 'assets/img/studio/Hyd-Exp.png', background: '#efb356', icon:'assets/img/studio/hyd-icon.svg' },
    { name: 'Delhi', image: 'assets/img/studio/Ban-Exp.png', background: '#24225d', icon:'assets/img/studio/bang-icon.svg' },
    { name: 'Bangalore', image: 'assets/img/studio/Delhi-Exp.png', background: '#dc4f40', icon:'assets/img/studio/delhi-icon.svg' }
  ];

  activeIndex = 0;

  setActiveTab(index: number) {
    this.activeIndex = index;
  }
}
