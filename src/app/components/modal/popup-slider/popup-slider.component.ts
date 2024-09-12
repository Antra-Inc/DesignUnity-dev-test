import { Component, ElementRef, ViewChild, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-popup-slider',
  templateUrl: './popup-slider.component.html',
  styleUrls: ['./popup-slider.component.scss']
})
export class PopupSliderComponent implements AfterViewInit {
  
  slideIndex = 1;
  @Input() currentSlides: any[] = [];

  
  @ViewChild('thumbnailRow', { static: false }) thumbnailRow!: ElementRef;

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
    const slidesLength = this.currentSlides.length;
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
