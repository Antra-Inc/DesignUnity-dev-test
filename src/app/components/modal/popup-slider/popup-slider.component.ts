import { Component } from '@angular/core';

@Component({
  selector: 'app-popup-slider',
  templateUrl: './popup-slider.component.html',
  styleUrls: ['./popup-slider.component.scss']
})
export class PopupSliderComponent {
  slides = [
    {
      url: '../../../../assets/img/studio/DSC00153.png',
      alt: 'Caption One'
    },
    {
      url: '../../../../assets/img/studio/DSC00262.png',
      alt: 'Caption Two'
    },
    {
      url: '../../../../assets/img/studio/DSC00356.png',
      alt: 'Caption Three'
    },
    {
      url: '../../../../assets/img/studio/DSC00447.png',
      alt: 'Caption Four'
    },
    {
      url: '../../../../assets/img/studio/DSC00602.png',
      alt: 'Caption Five'
    },
    {
      url: '../../../../assets/img/studio/DSC00605.png',
      alt: 'Caption Six'
    },
    {
      url: '../../../../assets/img/studio/DSC00618.png',
      alt: 'Caption Seven'
    },
    {
      url: '../../../../assets/img/studio/DSC00262.png',
      alt: 'Caption Two'
    },
    {
      url: '../../../../assets/img/studio/DSC00356.png',
      alt: 'Caption Three'
    },
    {
      url: '../../../../assets/img/studio/DSC00447.png',
      alt: 'Caption Four'
    },
    {
      url: '../../../../assets/img/studio/DSC00602.png',
      alt: 'Caption Five'
    },
    {
      url: '../../../../assets/img/studio/DSC00605.png',
      alt: 'Caption Six'
    },
    {
      url: '../../../../assets/img/studio/DSC00618.png',
      alt: 'Caption Seven'
    },
    {
      url: '../../../../assets/img/studio/DSC00262.png',
      alt: 'Caption Two'
    },
    {
      url: '../../../../assets/img/studio/DSC00356.png',
      alt: 'Caption Three'
    },
    {
      url: '../../../../assets/img/studio/DSC00447.png',
      alt: 'Caption Four'
    },
    {
      url: '../../../../assets/img/studio/DSC00602.png',
      alt: 'Caption Five'
    },
    {
      url: '../../../../assets/img/studio/DSC00605.png',
      alt: 'Caption Six'
    },
    {
      url: '../../../../assets/img/studio/DSC00618.png',
      alt: 'Caption Seven'
    }
  ];

  slideIndex = 1;

  plusSlides(n: number) {
    this.slideIndex += n;
    if (this.slideIndex > this.slides.length) {
      this.slideIndex = 1;
    } else if (this.slideIndex < 1) {
      this.slideIndex = this.slides.length;
    }
  }

  currentSlide(n: number) {
    this.slideIndex = n;
  }
}
