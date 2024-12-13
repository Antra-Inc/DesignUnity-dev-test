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
      imagepath: '../../../assets/img/home-page/slide-1.png',
      bc: '#A8A9AA',
      name: 'Solid Colours',
    },
    {
      imagepath: '../../../assets/img/home-page/slide-2.png',
      bc: '#678355',
      name: 'Metallic ',
    },
    {
      imagepath: '../../../assets/img/home-page/slide-3.png',
      bc: '#D3CDDE',
      name: 'Minimal',
    },
    {
      imagepath: '../../../assets/img/home-page/slide-4.png',
      bc: '#D3C4C0',
      name: 'Wall & Ceiling',
    },
    {
      imagepath: '../../../assets/img/flooring/banner.png',
      bc: '#97ABD8',
      name: 'Flooring',
    },
  ];
  images1: { imagepath: string; bc: string }[] = [
    { imagepath: '../../../assets/img/home-page/slide-2.png', bc: '#678355' },
    { imagepath: '../../../assets/img/home-page/slide-3.png', bc: '#D3CDDE' },
    { imagepath: '../../../assets/img/home-page/slide-4.png', bc: '#D3C4C0' },
    { imagepath: '../../../assets/img/flooring/banner.png', bc: '#97ABD8' },
    { imagepath: '../../../assets/img/home-page/slide-1.png', bc: '#A8A9AA' },
  ];
  height = 0;
}
