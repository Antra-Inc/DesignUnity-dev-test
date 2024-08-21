import { Component } from '@angular/core';

@Component({
  selector: 'surface-slide',
  templateUrl: './surface-slide.component.html',
  styleUrls: ['./surface-slide.component.scss'],
})
export class SurfaceSlideComponent {
  activeColumn = 1;
  selectArea(data: number) {
    console.log('select', data);
    this.activeColumn = data;
  }
}
