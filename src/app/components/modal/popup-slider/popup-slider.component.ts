import { Component } from '@angular/core';

@Component({
  selector: 'app-popup-slider',
  templateUrl: './popup-slider.component.html',
  styleUrls: ['./popup-slider.component.scss']
})
export class PopupSliderComponent {
  slides = [
    {
      url: 'https://images.unsplash.com/photo-1505438157249-00e1b44ee34f?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=dfc554074f522ec42818a052152dac21g',
      alt: 'Caption One'
    },
    {
      url: 'https://images.unsplash.com/photo-1515870672913-a4c298575776?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=aa80486fd3343134706e785c034b339d',
      alt: 'Caption Two'
    },
    {
      url: 'https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=583c2bf56c8006e507e2a9905fc1e54c',
      alt: 'Caption Three'
    },
    {
      url: 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=69093505f999d8170e9a1aab3771c07e',
      alt: 'Caption Four'
    },
    {
      url: 'https://images.unsplash.com/photo-1485199433301-8b7102e86995?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=c7783fe3a697b1a2248450120435cbc3',
      alt: 'Caption Five'
    },
    {
      url: 'https://images.unsplash.com/photo-1505438157249-00e1b44ee34f?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=dfc554074f522ec42818a052152dac21g',
      alt: 'Caption Six'
    },
    {
      url: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=e26ec8c74dc99aff53a60741538cad5f',
      alt: 'Caption Seven'
    },
    {
      url: 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=69093505f999d8170e9a1aab3771c07e',
      alt: 'Caption Eight'
    },
    {
      url: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=e26ec8c74dc99aff53a60741538cad5f',
      alt: 'Caption Nine'
    },
    {
      url: 'https://images.unsplash.com/photo-1485199433301-8b7102e86995?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=c7783fe3a697b1a2248450120435cbc3',
      alt: 'Caption Ten'
    },
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
