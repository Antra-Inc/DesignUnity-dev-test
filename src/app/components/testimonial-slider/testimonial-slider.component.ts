import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-testimonial-slider',
  templateUrl: './testimonial-slider.component.html',
  styleUrls: ['./testimonial-slider.component.scss']
})

 
  export class TestimonialSliderComponent implements OnInit, AfterViewInit {
    @ViewChild('carousel', { static: false }) carousel!: ElementRef<HTMLUListElement>;
  
    cards = [
      {
        img: '../../../assets/img/testimonials/user.png',
        name: 'Balance Person 1',
        title: 'Sales Manager',
        stars: 5,
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        bgColor: '#756b86'
        
      },
      {
        img: '../../../assets/img/testimonials/user.png',
        name: 'Person 2',
        title: 'Sales Manager',
        stars: 4,
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        bgColor: '#7ea862'
      },
      {
        img: '../../../assets/img/testimonials/user.png',
        name: 'Balance Person dfdss 3',
        title: 'Sales Manager',
        stars: 3,
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        bgColor: '#9b7d75'
      },
      {
        img: '../../../assets/img/testimonials/user.png',
        name: 'Balance 4',
        title: 'Sales Manager',
        stars:4,
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        bgColor: '#a5a6aa'
      },
      
      {
        img: '../../../assets/img/testimonials/user.png',
        name: 'Balance Person 5',
        title: 'Sales Manager',
        stars: 5,
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        bgColor: '#67a47b'
      }
    ];
  
    isDragging = false;
    startX = 0;
    startScrollLeft = 0;
    firstCardWidth = 0;
  
    constructor(private renderer: Renderer2) {}
  
    ngOnInit() {}
  
    ngAfterViewInit() {
      this.initializeCarousel();
      this.carousel.nativeElement.addEventListener('scroll', this.setVisibleClasses.bind(this));
      this.setVisibleClasses();
    }
  
    initializeCarousel() {
      const cardElement = this.carousel.nativeElement.querySelector('.card') as HTMLElement;
      this.firstCardWidth = cardElement?.offsetWidth ?? 0;
      const cardPerView = Math.round(this.carousel.nativeElement.offsetWidth / this.firstCardWidth);
      const carouselChildren = Array.from(this.carousel.nativeElement.children);
  
      carouselChildren.slice(-cardPerView).reverse().forEach(card => {
        this.carousel.nativeElement.insertAdjacentHTML('afterbegin', (card as HTMLElement).outerHTML);
      });
  
      carouselChildren.slice(0, cardPerView).forEach(card => {
        this.carousel.nativeElement.insertAdjacentHTML('beforeend', (card as HTMLElement).outerHTML);
      });
  
      // this.carousel.nativeElement.addEventListener('mousedown', this.dragStart.bind(this));
      // this.carousel.nativeElement.addEventListener('mousemove', this.dragging.bind(this));
      // document.addEventListener('mouseup', this.dragStop.bind(this));
      // this.carousel.nativeElement.addEventListener('scroll', this.infiniteScroll.bind(this));
     
    }
  
    scroll(direction: 'left' | 'right') {
      this.carousel.nativeElement.scrollLeft += direction === 'left' ? -this.firstCardWidth : this.firstCardWidth;
      
    }
  
    dragStart(e: MouseEvent) {
      this.isDragging = true;
      this.carousel.nativeElement.classList.add('dragging');
      this.startX = e.pageX;
      this.startScrollLeft = this.carousel.nativeElement.scrollLeft;
      
    }
  
    dragging(e: MouseEvent) {
      if (!this.isDragging) return;
      this.carousel.nativeElement.scrollLeft = this.startScrollLeft - (e.pageX - this.startX);
      
    }
  
    dragStop() {
      this.isDragging = false;
      this.carousel.nativeElement.classList.remove('dragging');
    }
  
    infiniteScroll() {
      if (this.carousel.nativeElement.scrollLeft === 0) {
        this.carousel.nativeElement.classList.add('no-transition');
        this.carousel.nativeElement.scrollLeft = this.carousel.nativeElement.scrollWidth - (2 * this.carousel.nativeElement.offsetWidth);
        this.carousel.nativeElement.classList.remove('no-transition');
      } else if (Math.ceil(this.carousel.nativeElement.scrollLeft) === this.carousel.nativeElement.scrollWidth - this.carousel.nativeElement.offsetWidth) {
        this.carousel.nativeElement.classList.add('no-transition');
        this.carousel.nativeElement.scrollLeft = this.carousel.nativeElement.offsetWidth;
        this.carousel.nativeElement.classList.remove('no-transition');
      }
    }
  
    setVisibleClasses() {
      const cards = Array.from(this.carousel.nativeElement.querySelectorAll('.card')) as HTMLElement[];
      const carouselRect = this.carousel.nativeElement.getBoundingClientRect();
    
      // Clear all classes first
      cards.forEach(card => {
        card.classList.remove('prev', 'active', 'next');
      });
    
      // Identify and apply classes
      let activeIndex = -1;
      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const isVisible = (
          cardRect.left < carouselRect.right &&
          cardRect.right > carouselRect.left &&
          cardRect.top < carouselRect.bottom &&
          cardRect.bottom > carouselRect.top
        );
    
        if (isVisible) {
          activeIndex = index;
        }
      });
    
      if (activeIndex !== -1) {
        // Apply active class to the visible card
        cards[activeIndex].classList.add('active');
    
        // Apply prev class to the card before the active one
        if (activeIndex > 0) {
          cards[activeIndex - 1].classList.add('prev');
        }
    
        // Apply next class to the card after the active one
        if (activeIndex < cards.length - 1) {
          cards[activeIndex + 1].classList.add('next');
        }
      }
    }
    
  
   
  
  }
  