import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-popup-slider',
  templateUrl: './popup-slider.component.html',
  styleUrls: ['./popup-slider.component.scss']
})
export class PopupSliderComponent implements AfterViewInit {
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
    }
  ];

  slideIndex = 1;
  
  @ViewChild('thumbnailRow', { static: false }) thumbnailRow!: ElementRef;

  // plusSlides(n: number) {
  //   this.slideIndex += n;
  //   if (this.slideIndex > this.slides.length) {
  //     this.slideIndex = 1;
  //   } else if (this.slideIndex < 1) {
  //     this.slideIndex = this.slides.length;
  //   }
  // }

  // currentSlide(n: number) {
  //   this.slideIndex = n;
  // }



  ngAfterViewInit(): void {
    this.scrollActiveThumbnail(); // Ensure the first thumbnail is visible
  }

  // Next/Prev controls
  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  // Show the current slide
  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    const slidesLength = this.slides.length;
    if (n > slidesLength) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slidesLength; }

    // Scroll the thumbnail into view
    this.scrollActiveThumbnail();
  }

  // Scroll the active thumbnail into view
  scrollActiveThumbnail() {
    const thumbnailRow = this.thumbnailRow.nativeElement;
    const activeThumbnail = thumbnailRow.querySelectorAll('.slide-thumbnail')[this.slideIndex - 1];

    if (activeThumbnail) {
      const thumbnailRowWidth = thumbnailRow.offsetWidth;
      const activePosition = activeThumbnail.offsetLeft;
      const activeWidth = activeThumbnail.offsetWidth;

      // Check if the active thumbnail is out of view
      if (activePosition + activeWidth > thumbnailRow.scrollLeft + thumbnailRowWidth) {
        // Scroll to bring the active thumbnail into view on the right
        thumbnailRow.scrollTo({
          left: activePosition + activeWidth - thumbnailRowWidth,
          behavior: 'smooth'
        });
      } else if (activePosition < thumbnailRow.scrollLeft) {
        // Scroll to bring the active thumbnail into view on the left
        thumbnailRow.scrollTo({
          left: activePosition,
          behavior: 'smooth'
        });
      }
    }

  }


}
