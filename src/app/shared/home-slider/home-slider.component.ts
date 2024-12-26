import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss'],
})
export class HomeSliderComponent implements OnInit {
  child = false;
  main = true;
  ngOnInit(): void {
    console.log('thumbnile', this.main, this.child);
  }
  images: { imagepath: string; bc: string; name?: string }[] = [
    {
      imagepath: '../../../assets/img/home-page/slide-1.jpg',
      bc: '#72bfbf',
      name: 'Solid Colours',
    },
    {
      imagepath: '../../../assets/img/home-page/slide-3.png',
      bc: '#d3cdde',
      name: 'Metallic ',
    },
    {
      imagepath: '../../../assets/img/home-page/slide-3.jpg',
      bc: '#a8a9aa',
      name: 'Minimal',
    },
    {
      imagepath: '../../../assets/img/home-page/slide-4.png',
      bc: '#D3C4C0',
      name: 'Wall & Ceiling',
    },
    {
      imagepath: '../../../assets/img/home-page/slide-5.jpg',
      bc: '#be8c63',
      name: 'Flooring',
    },
  ];
  images1: { imagepath: string; bc: string }[] = [
    { imagepath: '../../../assets/img/home-page/slide-2.png', bc: '#d3cdde' },
    { imagepath: '../../../assets/img/home-page/slide-3.jpg', bc: '#a8a9aa' },
    { imagepath: '../../../assets/img/home-page/slide-4.png', bc: '#D3C4C0' },
    { imagepath: '../../../assets/img/home-page/slide-5.jpg', bc: '#be8c63' },
    { imagepath: '../../../assets/img/home-page/slide-1.jpg', bc: '#72bfbf' },
  ];
  height = 0;
}
